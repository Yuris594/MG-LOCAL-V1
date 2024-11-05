"use client";

import { Autocomplete, Box, Button, Divider, IconButton, Modal, Paper, styled, Table, 
        TableBody, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import CheckCircleOutlineIcon  from "@mui/icons-material/CheckCircleOutline";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon  from "@mui/icons-material/Cancel";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import NavBar from "@/app/components/navbar/nav";
import EditIcon from "@mui/icons-material/Edit";
import { useAuth } from "@/context/authContext";
import { DataGrid } from "@mui/x-data-grid";
import Swal from "sweetalert2";
import { Global } from "@/conexion";
import Grid from "@mui/material/Grid2";
import { useEffect, useState } from "react";
import { DateRangePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));


const columns = [
  { field: 'CONSECUTIVO', headerName: 'Recibo', width: 100 },
  { field: 'NIT', headerName: 'Nit', width: 140 },
  { field: 'RazonSocial', headerName: 'Razon Social', width: 390 },
  { field: 'FECHA', headerName: 'Fecha Recibo', width: 170 },
  { field: 'TOTAL', headerName: 'Total Recibo', width: 100 },
  { field: 'StateName', headerName: 'Estado', width: 100 },
  { field: 'IsConsigned', headerName: 'Consignado', width: 90 },
  { field: '..', headerName: 'Consignado Por', width: 150 },
  { field: 'HasChecks', headerName: 'Cheques', width: 100 },
];


const options = [
  {label: "Fecha"},
  {label: "NIT"},
  {label: "Numero de recibo"},
  {label: "Razón Social"},
  {label: "Documento"},
  {label: "Todos"}
];

const ConsultarRecibo = () => {
  const { auth } = useAuth();
  const [nit, setNit] = useState(null);
  const [open, setOpen] = useState(false);
  const [recibo, setRecibo] = useState([]);
  const [openE, setOpenE] = useState(false);
  const [openC, setOpenC] = useState(false);
  const [criterio, setCriterio] = useState("");
  const [verCheque, setVerCheque] = useState([]);
  const [documento, setDocumento] = useState([]);
  const [consecutivo, setConsecutivo] = useState(null);
  const [valorBusqueda, setValorBusqueda] = useState("");
  const [rangoFechas, setRangoFechas] = useState([null, null]);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
  const [numero, setNumero] = useState(clienteSeleccionado?.ReciboFisico);


  const handleOpen = async (cliente) => {
    setClienteSeleccionado(cliente); 
    setConsecutivo(cliente.CONSECUTIVO);
    setNit(cliente.NIT);
    setNumero(cliente.ReciboFisico);
    setOpen(true);
      try {
        const response = await fetch(Global.url + `/receipts/receiptdetail/${cliente.CONSECUTIVO}?action=Consult`, {
          method: "GET",
          headers: { "Content-Type" : "application/json" }
        });
        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const datos = await response.json();
        setDocumento(datos.receipts);
      } catch (error) {
        console.log("Error al obtener los datos del recibo", error)
      }

      if(cliente.HasChecks === "Si") {
        try {
          const response = await fetch(Global.url + `/receipts/receiptdetail/${cliente.CONSECUTIVO}?ProfileName=Administrador&action=Gettle&checks=Si`, {
            method: "GET", 
            headers: { "Content-Type" : "application/json" },
          });
      
          const datos = await response.json();
          setVerCheque(datos.checks);
          console.log(datos.checks);
        } catch (error) {
          console.log("Error al obtener los datos del cheque", error);
        }
      } else {
        setVerCheque([]);
      }
  };

  const handleClose = () => {
    setClienteSeleccionado(null);
    setOpen(false);
  };

  const filtrar = (terminoBusqueda) => {
    setValorBusqueda(terminoBusqueda); 
  };

  const handleOpenC = () => {
    setOpenC(true);
  };

  const handleCloseC = () => {
    setOpenC(false);
  };

 
  useEffect(() => {
    const realizarBusqueda = async () => {
      try {
        let response;
        if (criterio === "Fecha" && rangoFechas[0] && rangoFechas[1]) {
          const fechainicio = rangoFechas[0].format("MM-DD-YYYY");
          const fechafin = rangoFechas[1].format("MM-DD-YYYY");
          response = await fetch(Global.url + `/receipts/consult/Fecha?ID=${auth.IDSaler}&fechainicio=${fechainicio}&fechafin=${fechafin}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          });
        } else if (criterio && valorBusqueda) {
          response = await fetch(Global.url + `/receipts/consult/${criterio}?&ID=${auth.IDSaler}&data=${valorBusqueda}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" }
          });
        }
        const datos = await response.json();
        setRecibo(datos);
      } catch (error) {
        console.error("Error al realizar la búsqueda", error);
      }
    };
    realizarBusqueda();
  }, [criterio, valorBusqueda, rangoFechas, auth.IDSaler]);


  const enviarCorreo = async () => {
    if(!consecutivo || !nit) {
      Swal.fire({
        icon: "warning",
        title: "Datos Faltantes",
        text: "Por favor, asegurate de que el Número del Recibo y el Nit estén definidos."
      });
      return;
    }
    try {
      const response = await fetch(Global.url + `/receipts/sendmail/`, {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify({ consecutivo, nit })
      });
      if (response.ok) {
        const datos = await response.json(); 

        handleClose();

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Email Enviado con Exito!.",
          text: `${datos.text}`,
          showConfirmButton: false,
          timer: 2500
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error al Enviar el Email!.",
        });
      }
    } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error de Red",
          text: "No se pudo Enviar el Correo debido a un Problema de Red."
      });
    }
  };

  const handleOpenE = () => {
    setOpenE(true);
  };

  const handleCloseE = () => {
    setOpenE(false);
  };

  const actualizarNumero= async () => {
    if (!numero) {
      Swal.fire({
        icon: "warning",
        title: "Falta El Número de Recibo",
        text: "Por favor, Ingresa el Nuevo Número de Recibo"
      });
      return;
    }
    const actualRecibo = {
      NumeroRecibo: clienteSeleccionado.ReciboFisico,
      NuevoRecibo: numero
    };

    console.log(actualRecibo);
    try {
      const response = await fetch(Global.url + `/receipts/edit/${consecutivo}`, {
        method: "PUT",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(actualRecibo),
      });
      const datos = await response.json();
      
      handleCloseE();

      if (datos) {
        Swal.fire({
          icon: "success",
          title: "Número Actualizado",
          text: "El Número de Recibo fue Actualizado Correctamente."
        });

      } else {
        throw new Error("Failed to update");
      }
    } catch (error) {
      console.error("Error al actualizar el número:", error);
      Swal.fire({
        icon: "error",
        title: "Error de Actualización",
        text: "No se pudo actualizar el número de recibo."
      });
    }
  };


  return (
    <>
      <NavBar />    
      <div style={{ height: "70%", width: "100%", backgroundColor: "#ffffff" }}>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "auto", margin: 2 }}>
          <Box>
            <h2><strong>CONSULTAR RECIBO</strong></h2>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "60%", margin: 2 }}>
            <strong>Consulta Por: </strong>
            <Autocomplete 
              id="size-small-outlined"
              size="small"
              sx={{ width: 200, height: 40 }}
              disablePortal
              options={options}
              onChange={(event, newValue) => setCriterio(newValue.label)} 
              renderInput={(params) => <TextField {...params} label="Seleccione el Criterio" />}
            />
            {criterio !== "Fecha" ? ( 
            <TextField 
              id="outlined-basic"
              label="Buscar..."
              size="small"
              multiline
              variant="outlined"
              value={valorBusqueda}
              onChange={(e) => setValorBusqueda(e.target.value)}
              sx={{ width: 200, height: 40 }}
            />
            ) : ( 
            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "50%" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker 
                  startText="Inicio"
                  endText="Fin"
                  value={rangoFechas}
                  onChange={(newValue) => setRangoFechas(newValue)}
                  renderInput={(startProps, endProps) => (
                    <>
                      <TextField {...startProps} size="small" sx={{ marginRight: 0, height: 40 }} />
                      <TextField {...endProps} size="small" />
                    </>
                  )}
                />
              </LocalizationProvider>
            </Box>
            )}
            <IconButton onClick={() => filtrar(valorBusqueda)} > 
              <ZoomInIcon sx={{ fontSize: 45 }} color="success" />
            </IconButton>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ width: "auto", height: "auto", margin: 2  }}>
          <DataGrid 
            rows={recibo}
            columns={columns}
            getRowId={(row) => row.ID}
            pageSizeOptions={[20]}
            onRowClick={(params) => handleOpen(params.row)}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 20 }
              }
            }}
          />
        </Box>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
            <Box sx={{ p: 4, backgroundColor: 'white', borderRadius: '8px', maxWidth: '850px', width: "90%", height: "90vh", overflowY: "auto", margin: 'auto', mt: 4, p:2 }}>
              <>
              <strong>DETALLE DE RECIBO</strong>
              <Divider />
              {clienteSeleccionado && (
                <Grid container rowSpacing={1.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ p: 1 }}>
                  <Grid size={3}>
                    <strong>Recibo: </strong>{clienteSeleccionado.CONSECUTIVO}
                  </Grid>
                  <Grid size={4}>
                    <strong>Fecha: </strong>{clienteSeleccionado.FECHA}
                  </Grid>
                  <Grid size={4}>
                    <strong>Nit: </strong>{clienteSeleccionado.NIT}
                  </Grid>
                  <Grid size={9}>
                    <strong>Razón Social: </strong>{clienteSeleccionado.RazonSocial}
                  </Grid>
                  <Grid size={6}>
                    <strong>Registrado Por: </strong>{clienteSeleccionado.U1}
                  </Grid>
                  <Grid size={6}>
                    <strong>Asentado Por: </strong>{clienteSeleccionado.U2}
                  </Grid>
                  <Grid size={4}>
                    <strong>Estado: </strong>{clienteSeleccionado.StateName}
                  </Grid>
                  <Grid size={4}>
                    <strong>Recibo Fisico: </strong>{clienteSeleccionado.ReciboFisico}
                  </Grid>
                  <Grid size={4}>
                    <strong>Recibo SoftLand: </strong>{clienteSeleccionado.ReciboSoftland}
                  </Grid>
                </Grid>
              )}
              {clienteSeleccionado && (
                <TextField
                  id="outlined-basic"
                  multiline
                  size="small"
                  defaultValue={clienteSeleccionado.Comentarios}
                  variant="outlined"
                  label="Comentarios"
                  sx={{ width: "100%", mb: 2 }}
                />
              )}
            </>
            <TableContainer component={Paper}>
              <Table sx={{ width: "100%", maxHeight: "6ovh", overflowY: "auto" }} size="small" aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Documento</StyledTableCell>
                    <StyledTableCell>Valor Cancelado</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {Array.isArray(documento) && documento.map((index) => (
                  <TableRow key={index.NumeroDocumento}>
                    <TableCell>{index.NumeroDocumento}</TableCell>
                    <TableCell>{index.ValorCancelado}</TableCell>
                  </TableRow>
                ))}
                  <TableRow>
                    <TableCell align="right"><strong>TOTAL</strong></TableCell>
                    <TableCell align="right"><strong>{clienteSeleccionado?.TOTAL}</strong></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
              {clienteSeleccionado?.HasChecks === "Si" && (
                <IconButton onClick={handleOpenC}><MonetizationOnIcon sx={{ fontSize: 40, color: "#f31919" }} /></IconButton>
              )}
              <IconButton onClick={enviarCorreo}><MailOutlineIcon sx={{ fontSize: 40 }} color="primary" /></IconButton>
              <IconButton onClick={handleOpenE}><EditIcon sx={{ fontSize: 40 }} color="secondary" /></IconButton>
              <IconButton onClick={handleClose}><CheckCircleOutlineIcon sx={{ fontSize: 40 }} color="success" /></IconButton>
            </Box>
          </Box>
        </Modal>

        <Modal
          open={openC}
          onClose={handleCloseC}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={{ p: 4, backgroundColor: 'white', borderRadius: '8px', maxWidth: '650px', height: "auto", margin: 'auto', mt: 4, p:2 }}>
            <>
              <strong>RELACIÓN DE CHEQUES</strong>
              <Divider />
                {Array.isArray(verCheque) && verCheque.map((cheque, index) => (
                  <Grid container rowSpacing={1.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ p: 1 }} key={index}>
                    <Grid size={6}>
                      <strong>Banco: </strong>{cheque.bank}
                    </Grid>
                    <Grid size={6}>
                      <strong>Número de Cheque: </strong>{cheque.checkNumber}
                    </Grid>
                    <Grid size={6}>
                      <strong>Fecha: </strong>{cheque.checkDate}
                    </Grid>
                    <Grid size={6}>
                      <strong>Valor: </strong>{cheque.value}
                    </Grid>
                  </Grid>
                ))}
                <Divider />
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Button onClick={handleCloseC} color="success">Cerrar</Button>
                </Box>
            </>
          </Box>
        </Modal>

        <Modal
          open={openE}
          onClose={handleCloseE}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={{ p: 4, backgroundColor: 'white', borderRadius: '8px', maxWidth: '500px', margin: 'auto', mt: 4 }}>
            <strong>Editar Recibo Fisico</strong>
            <Divider />
            <Typography>Número de Recibo: </Typography>
            <TextField
              variant="outlined"
              fullWidth
              margin="normal"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
            />
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
              <IconButton color="success" onClick={actualizarNumero}>
                <CheckCircleIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <IconButton color="error" onClick={handleCloseE}>
                <CancelIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Box>
          </Box>
        </Modal>
      </div>
    </>
  )
}

export default ConsultarRecibo;


