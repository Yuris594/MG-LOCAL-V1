"use client";

import { Box, Button, IconButton, InputBase, LinearProgress, Modal, Paper, Typography } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Banner from "@/app/components/banner/banner";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Registro from "./registrar/page";
import UsuarioActualizar from "./actualizar/page";
import Swal from "sweetalert2";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";

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
    button: "Aceptar",
  });
}

const columns = [
  { field: "PER_Nom", headerName: "Nombre", width: 200, editable: true },
  { field: "PER_Usuario", headerName: "Usuario", width: 150, editable: true },
  { field: "PER_Clave", headerName: "Contraseña", width: 150, editable: true },
  { field: "IdDiv", headerName: "ID División", type: "number", width: 120, editable: true },
  { field: "PERAUTOPED", headerName: "Auto Pedidos", type: "number", width: 130, editable: true },
  { field: "CODVEND", headerName: "Código Vendedor", width: 150, editable: true },
  { field: "PREFIJO", headerName: "Prefijo", width: 120, editable: true },
  { field: "CONSECUTIVOPED", headerName: "Consecutivo Pedidos", type: "number", width: 180, editable: true },
];


const obtenerUsuario = async () => {
  const response = await fetch('/api/usuarios/listar', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};



function Usuarios() {
  const router = useRouter();
  const { auth } = useAuth();
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [openA, setOpenA] = useState(false);
  const [usuario, setUsuario] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [busqueda, setBusqueda] = useState([]);
  const [authLoading, setAuthLoading] = useState();
  const [tablaUsuario, setTablaUsuario] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    conseguirUsuarios();
  }, []);

  const handleCloseA = () => {
    setUsuario([]);
    setOpenA(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const conseguirUsuarios = async () => {
    const datos = await obtenerUsuario();
    try {
      if (datos)
        setCargando(false);
        setUsuarios(datos);
        setTablaUsuario(datos);
    } catch (error) {
        console.log(error)
    }
  }

  const filtrar = (terminoBusqueda) => {
    const resultadosBusqueda = tablaUsuario.filter((elemento) => {
      const valores = Object.values(elemento).map((value) =>
        value ? value.toString().toLowerCase() : ""
      );
      return valores.some((valor) => valor.includes(terminoBusqueda));
    });
    setUsuarios(resultadosBusqueda);
  };

  const handleSelection = useCallback((selectionModel) => {
      setSelectedRows(selectionModel);
      if (selectionModel.length > 0) {
        const resultadosFiltrados = tablaUsuario.filter((elemento) => {
          const IdPer = elemento.IdPer;
          if (IdPer) {
            const IdString = IdPer.toString();
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

  useEffect(() => {
    if (auth !== undefined) {
      setAuthLoading(false);
        if (!auth || auth.IdDiv !== 8) {
          router.push('/start');
          }
        }
      }, [auth, router]);
  
    if (authLoading) {
      return (
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      );
    }
  
    if (!auth || auth.IdDiv !== 8) {
      return null;
    }

  return (
    <>
      <Box>{" "}<Banner />{" "} </Box>
        <Box className="container">
          {cargando === true ? (
            <Box sx={{ width: "100%" }}>
              <LinearProgress />
            </Box>
          ):(
          <Box style={{ height: "auto", width: "100%" }}>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description">
              <Box sx={styles}>
                <Registro />
              </Box>
            </Modal>

            <Modal
              open={openA}
              onClose={handleCloseA}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description">
              <Box sx={styles}>
                <UsuarioActualizar usuario={usuario} />
              </Box>
            </Modal>

            <Typography variant="h5" sx={{
              display: "flex",
              justifyContent: "column",
              alignItems: "center",
              width: "auto",
              color: "#000000",
              margin: 0 }}>
                USUARIOS
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "auto", margin: 1 }}>
            <Button variant="outlined" onClick={handleOpen} sx={{ margin: "10px" }} color="primary">
              Nuevo Usuario
            </Button>

            <Paper elevation={3} sx={{ p: "2px 4px", display: "flex", alignItems: "flex-rigth", width: 1100, margin: "10px" }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Buscar..."
                inputProps={{ "aria-label": "search google maps" }}
                autoFocus
                value={busqueda}
                onChange={handleChange}
              />
              <IconButton title="buscar" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>

          <Box sx={{ height: 765, width: "100%" }}>
            <DataGrid
              rows={usuarios}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 12 },
                },
              }}
              pageSizeOptions={[12]}
              getRowId={(row) => row.IdPer}
              onRowSelectionModelChange={handleSelection}
              rowSelectionModel={selectedRows}
              slots={{ toolbar: GridToolbar }}
              sx={{
                "& .MuiDataGrid-columnHeaderTitle": {
                  fontWeight: "bold",
                },
              }}
            />
          </Box>
        </Box>
       )}
      </Box>
    </>
  );
}

export default Usuarios;
