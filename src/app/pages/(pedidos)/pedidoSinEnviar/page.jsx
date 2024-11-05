"use client";

import { Box, IconButton, InputBase, Modal } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import NavBar from "@/app/components/navbar/nav";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import DatosPedido from "./datosPedido/page";
import { useAuth } from "@/context/authContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%", 
  maxHeight: "90vh",  
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflow: "auto",  
  p: 4,
}; 

const PedidoSinEnviar = () => {
  const [open, setOpen] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const { clienteV, setPedidosV } = useAuth();
  const [busqueda, setBusqueda] = useState([]);
  const [tablaPedido, setTablaPedido] = useState([]);
  const [seleccionarPedido, setSeleccionarPedido] = useState(null);

  const handleOpen = (pedido) => {
    setSeleccionarPedido(pedido); 
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSeleccionarPedido(null);
  };

  useEffect(() => {
    const pedidosGuardados = JSON.parse(localStorage.getItem("pedidos")) || [];
    const pedidosFiltrados = pedidosGuardados.filter(pedido => pedido.NitC === clienteV.NIT);
    const pedidosConFechaFormateada = pedidosGuardados.map(pedido => ({
      ...pedido,
      fechaFormateada: formatearFecha(pedido.Fecha)
    }));
    setPedidos(pedidosConFechaFormateada); 
    setPedidosV(pedidosConFechaFormateada); 
    setTablaPedido(pedidosConFechaFormateada);
  }, [setPedidosV, clienteV.NIT]);

  const formatearFecha = (fecha) => {
    const fechaActual = new Date(fecha);
    const dias = fechaActual.getDate().toString().padStart(2, '0');
    const mes = (fechaActual.getMonth() + 1).toString().padStart(2, '0');
    const anio = fechaActual.getFullYear();
    return `${mes}/${dias}/${anio}`;
  };

  const columns = [
    { field: "PKId", headerName: "No", width: 80 },
    { field: "fechaFormateada", headerName: "Fecha", width: 150 },
    { field: 'NitC', headerName: 'NIT', width: 150 },
    { field: "nombreC", headerName: "Nombre o Razon Social", width: 400 },
    { field: "actions", headerName: "", width: 70, 
      renderCell: (params) => (
        <IconButton
          onClick={() => handleDelete(params.row)}
          aria-label="cancel"
          color="error"
          sx={{ fontSize: 40 }}
        >
          <CancelIcon />
        </IconButton>
      ),
    }
  ];

  const handleDelete = (row) => {
    const pedidosFiltrados = pedidos.filter((pedido) => pedido.PKId !== row.PKId);
    localStorage.setItem("pedidos", JSON.stringify(pedidosFiltrados));
    setPedidos(pedidosFiltrados);
    setPedidosV(pedidosFiltrados);
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
    console.log(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    const resultadoBusqueda = tablaPedido.filter((elemento) => {
      const valores = Object.values(elemento).map((value) => 
        value ? value.toString().toLowerCase() : ""
      );
      return valores.some((valor) => valor.includes(terminoBusqueda.toLowerCase()));
    });
    setPedidos(resultadoBusqueda);
  };

  return (
    <>
      <NavBar />
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "auto", margin: 1 }}>
        <h2><strong>PEDIDOS SIN ENVIAR</strong></h2>
        <InputBase 
          sx={{ 
            ml: 1, 
            flex: 1, 
            justifyContent: "flex-end", 
            maxWidth: "400px", 
            border: "2px solid black", 
            height: "40px", 
            borderRadius: "4px", 
            p: 1, 
            mb: 1 
          }} 
          value={busqueda}
          onChange={handleChange}
          placeholder="Buscar..." 
        />
      </Box>

      <Box sx={{ height: "auto", width: "auto", margin: 2 }}>
        <DataGrid
          rows={pedidos}
          columns={columns}
          getRowId={(row) => row.PKId}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          onRowDoubleClick={(params) => handleOpen(params.row)} 
        />
      </Box>

      <Modal 
        open={open} 
        onClose={handleClose} 
        aria-labelledby="modal-modal-title" 
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <DatosPedido pedido={seleccionarPedido} handleClose={handleClose} /> 
        </Box>
      </Modal>
    </>
  );
};

export default PedidoSinEnviar;



