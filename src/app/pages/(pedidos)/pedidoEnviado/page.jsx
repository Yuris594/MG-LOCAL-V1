"use client";

import { Box, InputBase, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import NavBar from "@/app/components/navbar/nav";
import { useAuth } from "@/context/authContext";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import { Global } from "@/conexion";


const fDate = (dateString) => {
  const options = { 
    month: "short", 
    year: "numeric", 
    day: "numeric" 
  };
  return new Date(dateString).toLocaleDateString("es-ES", options);
};

const columns = [
  { field: "Fecha", headerName: "Fecha", width: 150, headerClassName: 'header-bold',
    renderCell: (params) => fDate(params.value) 
  },
  { field: "FKId_clientes", headerName: "Nit", width: 150, headerClassName: 'header-bold' },
  { field: "RazonSocial", headerName: "Nombre o Razon Social", width: 500, headerClassName: 'header-bold' },
  { field: "NUMPED", headerName: "Numero Pedido", width: 180, headerClassName: 'header-bold' },
  { field: "ESTADO", headerName: "Estado", width: 150, headerClassName: 'header-bold' },
];


const PedidoEnviado = () => {
  const router = useRouter();
  const { auth, setClienteV } = useAuth();
  const [pedido, setPedido] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true); 
  const [tablaPedido, setTablaPedido] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);


  const conseguirDatos = async () => {
    const response = await fetch(Global.url + `/pedidos/PEDIDOS/${auth.IDSaler}`, {
      method: "GET",
      headers: { "Content-Type" : "application/json" }
    });
    const data = await response.json(); 
    return data;
  }


  const handleChange = (e) => {
    const terminoBusqueda = e.target.value;
    setBusqueda(terminoBusqueda);
    filtrar(terminoBusqueda);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const datos = await conseguirDatos();
        if (Array && Array.isArray(datos)) {
          setPedido(datos);
          setTablaPedido(datos);
          setCargando(false);
        } else {
          console.error('La estructura de los datos no es la esperada.');
        }
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);
  
  const filtrar = (terminoBusqueda) => {
    const resultadoBusqueda = tablaPedido.filter((elemento) => {
      const valores = Object.values(elemento).map((value) => value?.toString().toLowerCase() || "");
      return valores.some((valor) => valor.includes(terminoBusqueda.toLowerCase()));
    });
    setPedido(resultadoBusqueda);
  };

  const handleSelection = useCallback((selectionModel) => {
    setSelectedRows(selectionModel);
    if (selectionModel.length > 0) {
      const resultadosFiltrados = tablaPedido.filter((elemento) => {
        const PKId = elemento.PKId;
        if (PKId) {
          const pedidoString = PKId.toString();
          return pedidoString.includes(selectionModel[0]);
        }
        return false;
      });
        localStorage.setItem("detallePedido", JSON.stringify(resultadosFiltrados));
        setClienteV(resultadosFiltrados);
        router.push("./pedidoEnviado/detallePedido");
    }
  }, [pedido]);



  return (
    <>
      <NavBar />
      {cargando === true ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
          <CircularProgress sx={{ color: "#000" }} />
        </Box>
      ) : (
      <Box>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "auto", margin: 1 }}>
          <h2 style={{ display: "flex", justifyContent: "column", alignItems: "center", width: "auto", margin: 1, p: 2 }}>
            PEDIDOS ENVIADOS
          </h2>
          <InputBase
            sx={{ ml: 1, flex: 1, justifyContent: "flex-end", maxWidth: "400px", border: "2px solid black", height: "40px", borderRadius: "4px", p: 1, mb: 1 }}
            type="text"
            value={busqueda}
            onChange={handleChange}
            placeholder="Buscar..."
          />
        </Box>
        <Box sx={{ height: "auto", width: "auto", margin: 2 }}> 
          <DataGrid
            rows={pedido}
            columns={columns}
            getRowId={(row) => row.PKId}
            initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
            pageSizeOptions={[10, 20]}
            onRowSelectionModelChange={handleSelection}
            rowSelectionModel={selectedRows}
          />
        </Box>
      </Box>
      )}
    </>
  );
}

export default PedidoEnviado;


