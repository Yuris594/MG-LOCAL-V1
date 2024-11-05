"use client";

import { Alert, Box, Button, Divider, IconButton, Modal, Snackbar, Stack, TextField, Typography } from "@mui/material";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ReceiptIcon from "@mui/icons-material/Receipt";
import CancelIcon  from "@mui/icons-material/Cancel";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import NavBar from "@/app/components/navbar/nav";
import { useAuth } from "@/context/authContext";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { initDB } from "@/app/components/base/db"; 
import { Global } from "@/conexion";
import Grid from "@mui/material/Grid2";
import Link from "next/link";

const CarteraCliente = () => {
  const { auth } = useAuth();
  const [open, setOpen] = useState(false);
  const [openE, setOpenE] = useState(false);
  const [openA, setOpenA] = useState(false);
  const [openB, setOpenB] = useState(false);
  const [cartera, setCartera] = useState([]);
  const [clientes, setClientes] = useState([]); 
  const [busqueda, setBusqueda] = useState("");
  const [tablaCartera, setTablaCartera] = useState([]);
  const [clienteSeleccionado, setClienteSeleccionado] = useState([]);
  const [correo, setCorreo] = useState(clienteSeleccionado ? clienteSeleccionado.Email : "");

  const handleOpenE = () => {
    setOpenE(true);
  };

  const handleCloseE = () => {
    setOpenE(false);
  }

  const handleOpen = (clienteTabla) => {
    const clienteCompleto = clientes.find((c) => c.NIT === clienteTabla.Cliente); 
  
    if (clienteCompleto) {
      setClienteSeleccionado(clienteCompleto);
      setCorreo(clienteCompleto.Email); 
      setOpen(true);
    }
  };


  const handleClose = () => {
    setClienteSeleccionado(null); 
    setOpen(false);
  };


  useEffect(() => {
    const conseguirCartera = async () => {
      try {
        const db = await initDB(); 
        const datosGuardados = await db.getAll('cartera'); 

        if (datosGuardados.length > 0) {
          setCartera(datosGuardados);
          setTablaCartera(datosGuardados);
          console.log("Datos cargados desde IndexedDB");
        } else {
          const response = await fetch(Global.url + `/carterasellers/${auth.IDSaler}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          });
  
          if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
          }
  
          const data = await response.json();
          setCartera(data.cxc);
          setTablaCartera(data.cxc);
          
          for (const item of data.cxc) {
            await db.put('cartera', item, item.Documento); 
          }
          console.log("Datos guardados en IndexedDB");
          console.log("Datos cargados desde la API");
        }
      } catch (error) {
        console.log("Error al obtener los productos", error);
      }
    };
    conseguirCartera();
  }, []);

  const columns = [
    { field: 'Cliente', headerName: 'Nit', width: 150 },
    { field: 'RazonSocial', headerName: 'Razon Social', width: 350 },
    { field: 'Documento', headerName: 'Documento', width: 150 },
    { field: 'TipoDocumento', headerName: 'Tipo', width: 80 },
    { field: 'Monto', headerName: 'Monto', width: 150 },
    { field: 'FechaDocumento', headerName: 'Fecha Documento', width: 150 },
    { field: 'FechaVencimiento', headerName: 'Fecha Vencimiento', width: 150 },
    { field: 'Plazo', headerName: 'Plazo (días)', width: 90 },
    { field: 'DiasVencimiento', headerName: 'Días Vencidos', width: 100 },
    { field: 'Saldo', headerName: 'Saldo', width: 150 },
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    const resultadoBusqueda = tablaCartera.filter((elemento) => {
      const valores = Object.values(elemento).map((value) => 
        value ? value.toString().toLowerCase() : ""
      );
      return valores.some((valor) => valor.includes(terminoBusqueda.toLowerCase()));
    });
    setCartera(resultadoBusqueda);
  };

  useEffect(() => {
    const conseguirDatos = async () => {
      try {
        const db = await initDB(); 
        const clientesGuardados = await db.getAll('customers'); 
  
        if (clientesGuardados.length > 0) {
          setClientes(clientesGuardados); 
          console.log("Datos cargados desde la base de datos");
        } else {
          console.log("No se encontraron artículos en la base de datos.");
        }
      } catch (error) {
        console.log("Error al obtener los clientes:", error);
      }
    };
    conseguirDatos();
  }, [])


  const actualizarCorreo = async () => {
    const editarCorreo = {
      NIT: clienteSeleccionado.NIT,
      Email: clienteSeleccionado.Email,
      PutEmail: correo, 
    };

    console.log("Enviando correo actualizado: ", editarCorreo);

    try {
      setOpenB(true);
      handleCloseE(); 
    } catch (error) {
      setOpenA(true);
      console.error("Error al actualizar el correo:", error);
    }
  };

  const handleCloseA = (reason) => {
    if (reason === "clicaway") {
      return;
    }
    setOpenB(false);
    setOpenA(false);
  }

  return (
    <>
      <NavBar />    
      <div style={{ height: "70%", width: "100%", backgroundColor: "#ffffff" }}>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "auto", margin: 2 }}>
          <h2><strong>CARTERA CLIENTES</strong></h2>
          <TextField 
            id="outlined-basic"
            label="Buscar..."
            variant="outlined"
            value={busqueda}
            onChange={handleChange}
            sx={{ width: "50%", margin: 2 }}
          />
        </Box>
        <Divider />

        <Box sx={{ width: "auto", height: 1170, margin: 2 }}>
          <DataGrid 
            rows={cartera}
            columns={columns}
            getRowId={(row) => row.Documento}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 20 }
              }
            }}
            pageSizeOptions={[20]}
            onRowClick={(params) => handleOpen(params.row)}
          />
        </Box>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">

      <Box sx={{ p: 4, backgroundColor: 'white', borderRadius: '8px', maxWidth: '750px', width: "90%", height: "90vh", overflowY: "auto", margin: 'auto', mt: 4, p:2 }}>
        {clienteSeleccionado && ( 
          <>
            <h3><strong style={{ fontSize: 20, color: "#1be0e7" }}>
              {clienteSeleccionado.RazonSocial}
            </strong></h3>
            <Divider />
            <Grid container rowSpacing={1.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ p: 1 }}>
              <Grid size={3}>
                <strong>NIT</strong>
                <Typography sx={{ mb: 1.5, display: "flex" }}>
                  {clienteSeleccionado.NIT}
                </Typography>
              </Grid>
              <Grid size={2}>
                <strong>Cupo</strong>
                <Typography sx={{ mb: 1.5, display: "flex" }}>
                  {clienteSeleccionado.CupoCreditoCliente}
                </Typography>
              </Grid>
              <Grid size={2}>
                <strong>Debe</strong>
                <Typography sx={{ mb: 1.5, display: "flex", color: "#f01212" }}>
                  {clienteSeleccionado.TotalCartera}
                </Typography>
              </Grid>
              
              <Grid size={2}>
                <strong>Teléfono</strong>
                <Typography sx={{ mb: 1.5, display: "flex"}}>
                {clienteSeleccionado.Telefono}
                </Typography>
              </Grid>
              <Grid size={2}>
                <strong>Celular</strong>
                <Typography sx={{ mb: 1.5, display: "flex" }}>
                {clienteSeleccionado.Celular}
                </Typography>
              </Grid>
              <Grid size={2}>
                <strong>Fax</strong>
                <Typography sx={{ mb: 1.5, display: "flex" }}>
                {clienteSeleccionado.Fax}
                </Typography>
              </Grid>
              <Grid size={6}>
                <strong>Dirección</strong>
                <Typography sx={{ mb: 1.5, display: "flex" }}>
                {clienteSeleccionado.Direccion}
                </Typography>
              </Grid>
              <Grid size={4}>
                <strong>Ciudad</strong>
                <Typography sx={{ mb: 1.5, display: "flex" }}>
                {clienteSeleccionado.CityName}
                </Typography>
              </Grid>
              <Grid size={3}>
                <strong>Departamento</strong>
                <Typography sx={{ mb: 1.5, display: "flex" }}>
                {clienteSeleccionado.DepartmentName}
                </Typography>
              </Grid>
              <Grid size={6}>
                <strong>Email</strong>
                <Typography sx={{ mb: 1.5, display: "flex" }}>
                {clienteSeleccionado.Email}
                </Typography>
              </Grid>
            </Grid>
            <TextField
              id="outlined-basic"
              multiline
              rows={3}
              defaultValue={clienteSeleccionado.Comentarios}
              variant="outlined"
              sx={{ width: "100%", border: "2px solid #1be0e7", }}
            />
          </>
        )}

        <Divider sx={{ margin: 2 }}  />
          <Stack direction="row" spacing={2} sx={{ flexWrap: "wrap", justifyContent: "center", p: 2 }}>
            <Button variant="outlined" startIcon={<AssignmentIcon />} sx={{ color: "#29e5ad", margin: "2px" }} component={Link} href="./client/pedidos">Pedidos</Button>
            <Button variant="outlined" startIcon={<DirectionsRunIcon />} sx={{ color: "#e52990", margin: "2px" }} component={Link} href="./client/rutero">Realizar Rutero</Button>
            <Button variant="outlined" startIcon={<EmailIcon />} color="success" onClick={handleOpenE}>Actualizar Correo</Button>
            <Button variant="outlined" startIcon={<ReceiptIcon />} color="secondary" component={Link} href="./client/recibo">Ver Recibos</Button>
            <Button variant="outlined" startIcon={<ReceiptLongIcon />} sx={{ color: "#2948e5", margin: "2px" }} LinkComponent={Link} href="./client/crearRecibo">Realizar Recibo</Button>
            <Button variant="contained" startIcon={<CloseIcon />} color="error" onClick={handleClose}>Cerrar</Button>
          </Stack>
        </Box>
      </Modal>


      <Modal
        open={openE}
        onClose={handleCloseE}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" >
        <Box sx={{ p: 4, backgroundColor: 'white', borderRadius: '8px', maxWidth: '500px', margin: 'auto', mt: 4 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Actualizar Correo Electrónico
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h5" sx={{ p: 2 }}>
            {clienteSeleccionado && clienteSeleccionado.RazonSocial}
          </Typography>
          <Divider />
          <Typography>EMAIL: </Typography>
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            fullWidth
            margin="normal"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <Divider />
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <IconButton color="success" onClick={actualizarCorreo}>
              <CheckCircleIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton color="error" onClick={handleCloseE}>
              <CancelIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Box>
        </Box>
      </Modal>


      {/* Alertas Para Mostrar Si el Correo Se Actualizo Correctamente o No */}
      {openB ? (
      <Snackbar open={openB} autoHideDuration={6000} onClose={handleCloseA}>
        <Alert onClose={handleCloseA} severity="success" sx={{ width: "100%" }}>
          Correo actualizado con éxito
        </Alert>
      </Snackbar>
      ) : ("")}

      {openA ? (
      <Snackbar open={openA} autoHideDuration={6000} onClose={handleCloseA}>
        <Alert onClose={handleCloseA} severity="error" sx={{ width: "100%" }}>
          Hubo un error al actualizar el correo
        </Alert>
      </Snackbar>
      ): ("")}

    </>
  );
}

export default CarteraCliente;
