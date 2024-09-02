"use client";

import { Box, Button, Divider, IconButton, InputBase, LinearProgress, Modal, Paper, Typography, Zoom } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import BotonExcel from "../../hooks/useExportoExcel";
import SearchIcon from "@mui/icons-material/Search";
import Banner from "@/app/components/banner/banner";
import { DataGrid } from "@mui/x-data-grid";
import { useRouter } from "next/navigation";
import Peticion from "@/conexion/peticion";
import useAuth from "@/app/hooks/useAuth";
import Link from "next/link";
import { conexion } from "../usuarios/page";
import { Global } from "@/conexion/conexion";

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
  {
    field: "FECHA_PEDIDO",
    headerName: "Fecha",
    width: 170,
    renderCell: (params) => fDate(params.value)
  },
  { field: "PEDIDO", headerName: "Pedido", width: 160 },
  { field: "ESTADO", headerName: "Estado", width: 70 },
  { field: "IMPRESO", headerName: "IMP", width: 70 },
  {
    field: "AUTORIZADONOM",
    headerName: "Autorizado",
    width: 200,
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

const pedidos = () => {
  const router = useRouter();
  const { setPedido } = useAuth();
  const [tabla, setTabla] = useState([]);
  const [open, setOpen] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [busqueda, setBusqueda] = useState([]);
  const [checked, setChecked] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);

  const pedidosMemo = useMemo(() => pedidos, [pedidos]);

  useEffect(() => {
    conseguirArticulos();
  }, []);
  
  const conseguirArticulos = async () => {
    try {
      const { datos } = await Peticion(Global.url + "pedidos/listar", "GET");
        if (datos) {
          setPedidos(datos);
          setTabla(datos);
          setCargando(false);
          
          setTimeout(() => {
              setChecked(true);
          }, 100);
        }
    } catch (error) {
          conexion()
    }
  };
  
  const handleChange = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    const resultadosBusqueda = tabla.filter((elemento) => {
      const valores = Object.values(elemento).map((value) =>
        value ? value.toString().toLowerCase() : ""
      );
      return valores.some((valor) => valor.includes(terminoBusqueda));
    });
    setPedidos(resultadosBusqueda);
  };

  const handleSelection = useCallback(
    (selectionModel) => {
      setSelectedRows(selectionModel);
      if (selectionModel.length > 0) {
        const resultadosFiltrados = tabla.filter((elemento) => {
          const PEDIDO = elemento.PEDIDO;
          if (PEDIDO) {
            const pedidoString = PEDIDO.toString();
            return pedidoString.includes(selectionModel[0]);
          }
          return false;
        });
        localStorage.setItem("pedidoTemp", JSON.stringify(resultadosFiltrados));
        setPedido(resultadosFiltrados);
        router.push("./pedidos/pedidosC");
      }
    },
    [pedidos]
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box marginBottom="50px">
        {" "}  <Banner /> {" "}
      </Box>

      <div className="container">
        {cargando === true ? (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
        ) : (
      <Box>
        <div style={{ height: "auto", width: "100%" }}>
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{
              display: "flex",
              justifyContent: "column",
              alignItems: "center",
              width: "auto",
              margin: 0,
              color: "#000",
            }}
          >
            PEDIDOS
          </Typography>

          <Box>
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "auto", margin: 1, }}>
              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
                <Button variant="outlined" sx={{ margin: "10px" }} onClick={handleOpen}>
                  {" "} Nuevo {" "}
                </Button>
                <BotonExcel datos={pedidos} />
              </Box>

              <Paper sx={{ p: "2px 4px", display: "flex", alignItems: "flex-rigth", width: 1100, margin: "10px", }}>
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

            <Zoom in={checked}>
              <Box sx={{ height: 950, width: "100%" }}>
              <DataGrid
                  rows={pedidosMemo}
                  columns={columns}
                  initialState={{
                      pagination: {
                          paginationModel: { page: 0, pageSize: 16 },
                      },
                  }}
                  pageSizeOptions={[5, 16]}
                  onRowSelectionModelChange={handleSelection}
                  rowSelectionModel={selectedRows}
                  getRowId={(row) => row.PEDIDO}
                  sx={{ backgroundColor: '#ffffff' }}
                />
              </Box>
            </Zoom>
          </div>

            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
              <Box sx={style}>
                <Box>
                  <Typography id="modal-modal-title" variant="h6" component="h2">
                    {" "} Seleccionar articulo {" "}
                  </Typography>

              <Divider sx={{ height: 4, m: 0.5, marginBottom: "" }} orientation="horizontal" />

              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "right", }}>
                <Link href="../pedidos">
                  <Button variant="filled" sx={{ margin: "2px", bgcolor: "#b6ff91" }}>
                    {" "} Agregear {" "}
                  </Button>
                </Link>
                
                <Button variant="filled" sx={{ margin: "2px", bgcolor: "#ffa28a" }} onClick={handleClose}>
                  {" "} Cerrar {" "}
                </Button>
              </Box>

              <Paper
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: 250,
                  boxShadow: 3,
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Buscar"
                  inputProps={{ "aria-label": "search google maps" }}
                  value={busqueda}
                  onChange={handleChange}
                />
                <IconButton
                  type="button"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
                <Divider
                  sx={{ height: 28, m: 0.5 }}
                  orientation="vertical"
                />
              </Paper>

                <Box sx={{ height: 200, width: "100%" }}>
                  <DataGrid
                    rows={pedidos}
                    columns={columns}
                    getRowId={(row) => row.PEDIDO}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 18 },
                      },
                    }}
                    pageSizeOptions={[5, 18]}
                    rowSelectionModel={selectedRows}
                    onRowSelectionModelChange={handleSelection}
                  />
                </Box>
              </Box>
            </Box>
          </Modal>
        </Box>
        )}
      </div>
    </>
  );
};

export default pedidos;