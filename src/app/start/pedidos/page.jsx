"use client";

import { Box, Button, IconButton, InputBase, LinearProgress, Modal, Paper, Typography, Zoom } from "@mui/material";
import { useCallback,  useEffect,  useState } from "react";
import { useAuth } from "@/context/authContext";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import BotonExcel from "../../hooks/useExportoExcel";
import SearchIcon from "@mui/icons-material/Search";
import Banner from "@/app/components/banner/banner";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  width: 800,
  height: 450,
  boxShadow: 24,
  p: 4,
};

const fDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString('es-ES', options);
}

const columns = [
  { field: "FECHA_PEDIDO", headerName: "Fecha", width: 170,
    renderCell: (params) => fDate(params.value)
  },
  { field: "PEDIDO", headerName: "Pedido", width: 160 },
  { field: "ESTADO", headerName: "Estado", width: 70 },
  { field: "IMPRESO", headerName: "IMP", width: 70 },
  { field: "AUTORIZADONOM", headerName: "Autorizado", width: 200,
    renderCell: (params) => {
      const AUTORIZADONOM = params.row.AUTORIZADONOM;
      const cellStyle = {
        color:
          AUTORIZADONOM === "APROBADO"
            ? "#00FC00"
            : AUTORIZADONOM === "RETENIDO"
            ? "#FF1507"
            : "#000000",
        backgroundColor: "transparent",
      };
      return <Typography style={cellStyle}>{AUTORIZADONOM}</Typography>;
    },
  },
  { field: "U_COMPESPECIAL", headerName: "Esp", width: 190 },
  { field: "VENDEDOR", headerName: "Vend", width: 100 },
  { field: "COMENTARIO_CXC", headerName: "AUT.sistema", width: 200 },
  { field: "TOTAL_A_FACTURAR", headerName: "A FACT", width: 120 },
  { field: "NOMBRE_RAZON", headerName: "Cliente", width: 400 },
  { field: "U_EDITADOPOR", headerName: "Usuario MG", width: 100 },
  { field: "DEPTO", headerName: "Departamento", width: 130 },
  { field: "CIUDAD", headerName: "Ciudad", width: 200 },
];

const Pedidos = ({ pedidos: initialPedidos }) => {
  const router = useRouter();
  const { setPedido } = useAuth();
  const [busqueda, setBusqueda] = useState([]);
  const [pedidos, setPedidos] = useState(initialPedidos)
  const [selectedRows, setSelectedRows] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setPedidos(initialPedidos);
    setCargando(false);
  }, [initialPedidos])

  const handleChange = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    const resultadosBusqueda = pedidos.filter((elemento) => {
      const valores = Object.values(elemento).map((value) =>
        value ? value.toString().toLowerCase() : ""
      );
      return valores.some((valor) => valor.includes(terminoBusqueda));
    });
    setPedido(resultadosBusqueda);
  };

  const handleSelection = useCallback((selectionModel) => {
      setSelectedRows(selectionModel);
      if (selectionModel.length > 0) {
        const resultadosFiltrados = pedidos.filter((elemento) => {
          const PEDIDO = elemento.PEDIDO;
          if (PEDIDO) {
            const pedidoString = PEDIDO.toString();
            return pedidoString.includes(selectionModel[0]);
          }
          return false;
        });
        localStorage.setItem("pedidoTemp", JSON.stringify(resultadosFiltrados));
        setPedido(resultadosFiltrados);
        router.push("/start/pedidos/pedidosC");
      }
    },
    [pedidos]
  );

  return (
    <>
      <Box> {" "} <Banner /> {" "} </Box>

      <div className="container">
        {cargando === true ? (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        ) : (  
      <Box>
        <div style={{ height: "auto", width: "100%" }}>
          <Typography variant="h5" component="h1" gutterBottom
            sx={{
              display: "flex",
              justifyContent: "column",
              alignItems: "center",
              width: "auto",
              margin: 0,
              color: "#000", }}>
            PEDIDOS
          </Typography>

          <Box>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "auto", margin: 1, }}>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
                <Button variant="outlined" sx={{ margin: "10px" }}> {" "} Nuevo {" "} </Button>
                <BotonExcel datos={pedidos} />
              </Box>

              <Paper elevation={3} sx={{ p: "2px 4px", display: "flex", alignItems: "flex-rigth", width: 1100, margin: "10px", }}>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Buscar..."
                  inputProps={{ "aria-label": "search google maps" }}
                  autoFocus
                  name="PER_Usuario"
                  value={busqueda}
                  onChange={handleChange}
                />

                <IconButton title="buscar" sx={{ p: "10px" }} aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Box>
          </Box>

              <Box sx={{ height: 999, width: "100%" }}>
              <DataGrid
                  rows={pedidos}
                  columns={columns}
                  initialState={{
                      pagination: {
                          paginationModel: { page: 0, pageSize: 16 },
                      },
                  }}
                  pageSizeOptions={[5, 16]}
                  onRowSelectionModelChange={handleSelection}
                  slots={{ toolbar: GridToolbar }}
                  rowSelectionModel={selectedRows}
                  getRowId={(row) => row.PEDIDO}
                  sx={{ backgroundColor: '#ffffff' }}
                />
              </Box>
          </div>

        </Box>
          )}
      </div>
    </>
  );
};

export default Pedidos;