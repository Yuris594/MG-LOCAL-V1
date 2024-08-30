"use client";

import { Box, Button, IconButton, InputBase, LinearProgress, Modal, Paper, Typography, Zoom, } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useCallback, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Banner from "@/app/components/banner/banner";
import { DataGrid } from "@mui/x-data-grid";
import Actualizar from "./actualizar/page";
import Registro from "./registrar/page";
import Peticion from "@/conexion/peticion";
import UsuarioActualizar from "./actualizar/page";
import Swal from "sweetalert2";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  height: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
};

export function conexion() {
  Swal.fire({
    title: "No existe conexion",
    text: "Verifique la conexion con la empresa o no tiene internet",
    icon: "warning",
    button: "Axepatar",
  });
}

const columns = [
  { field: "PER_Nom", headerName: "Nombre", width: 200, editable: true },
  { field: "PER_Usuario", headerName: "Usuario", width: 150, editable: true },
  { field: "PER_Clave", headerName: "Contraseña", width: 150, editable: true },
  {
    field: "IdDiv",
    headerName: "ID División",
    type: "number",
    width: 120,
    editable: true,
  },
  {
    field: "PERAUTOPED",
    headerName: "Auto Pedidos",
    type: "number",
    width: 130,
    editable: true,
  },
  {
    field: "CODVEND",
    headerName: "Código Vendedor",
    width: 150,
    editable: true,
  },
  { field: "PREFIJO", headerName: "Prefijo", width: 120, editable: true },
  {
    field: "CONSECUTIVOPED",
    headerName: "Consecutivo Pedidos",
    type: "number",
    width: 180,
    editable: true,
  },
];

function Usuarios() {
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [usuario, setUsuario] = useState();
  const [openA, setOpenA] = useState(false);
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState([]);
  const [checked, setChecked] = useState(false);
  const [cargando, setCargando] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const [tablaUsuario, setTablaUsuario] = useState([]);

  const handleCloseA = () => {
    setUsuario([]);
    setOpenA(false);
  };

  useEffect(() => {
    fetchUsuarios();
    setChecked(true);
  }, []);

  const fetchUsuarios = async () => {
    try {
      const { datos } = await Peticion("/api/usuarios/listar", "GET");
        if (datos) {
          setCargando(false);
          setUsuarios(datos);
          setTablaUsuario(datos);
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
    const resultadosBusqueda = tablaUsuario.filter((elemento) => {
      const valores = Object.values(elemento).map((value) =>
        value ? value.toString().toLowerCase() : ""
      );
      return valores.some((valor) => valor.includes(terminoBusqueda));
    });
    setUsuarios(resultadosBusqueda);
  };

  const limpiarBusqueda = () => {
    setBusqueda();
    fetchUsuarios();
  };

  const handleSelection = useCallback(
    (selectionModel) => {
      setSelectedRows(selectionModel);
      if (selectionModel.length > 0) {
        const resultadosFiltrados = tablaUsuario.filter((elemento) => {
          const ID = elemento.ID;
          if (ID) {
            const IdString = ID.toString();
            return IdString.includes(selectionModel[0]);
          }
          return false;
        });
        setUsuario(resultadosFiltrados);
        setOpenA(true);
      }
    },
    [usuarios]
  );

  return (
    <>
      <Box marginBottom="40px">
        {" "} <Banner /> {" "}
      </Box>
        {cargando === true ? (
          <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box>
          ) : (
          <Zoom in={checked}>
            <Box style={{ height: "auto", width: "100%" }}>
              <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={styles}>
                  <Registro />
                </Box>
              </Modal>

              <Modal open={openA} onClose={handleCloseA} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={styles}>
                  <UsuarioActualizar usuario={usuarios} />
                </Box>
              </Modal>

              <Typography variant="h5" component="h1" gutterBottom
                  sx={{ display: "flex", justifyContent: "column", alignItems: "center", width: "auto", color: "#000000", }}>
                USUARIOS
              </Typography>

            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "auto", margin: 1, }}>
              <Button variant="outlined" onClick={handleOpen} sx={{ margin: "10px" }} color="primary">
                Nuevo Usuario
              </Button>

              <Paper sx={{ p: "2px 4px", display: "flex", alignItems: "flex-rigth", width: 1100, margin: "10px", }}>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Buscar..."
                  inputProps={{ "aria-label": "search google maps" }}
                  autoFocus
                  value={busqueda}
                  onChange={handleChange}
                />

                {busqueda.length == 0 ? (
                  <IconButton title="buscar" sx={{ p: "10px" }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                ) : (
                  <IconButton title="buscar" sx={{ p: "10px" }} aria-label="buscar" onClick={limpiarBusqueda}>
                    <HighlightOffIcon />
                  </IconButton>
                )}
              </Paper>
            </Box>

            <Box sx={{ height: 950, width: "100%",  }}>
              <DataGrid
                rows={usuarios}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 16 },
                  },
                }}
                pageSizeOptions={[5, 16]}
                onRowSelectionModelChange={handleSelection}
                rowSelectionModel={selectedRows}
                getRowId={(row) => row.IdPer}
                sx={{
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "#70aca2",
                  },
                  color: "#000",
                }}
              />
            </Box>
          </Box>
        </Zoom>
      )}
    </>
  );
}

export default Usuarios;
