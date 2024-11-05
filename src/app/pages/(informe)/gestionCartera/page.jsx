"use client";

import NavBar from "@/app/components/navbar/nav";
import { Global } from "@/conexion";
import { useAuth } from "@/context/authContext";
import { Box, Modal, TextField, InputBase, } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";


const GestionCartera = () => {
  const { auth } = useAuth();
  const [open, setOpen] = useState(false);
  const [rutero, setRutero] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [tablaVentas, setTablaVentas] = useState([]);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null); 

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch(Global.url + `/gestioncartera/${auth.IDSaler}`, {
          method: "GET",
          headers: { "Content-Type" : "application/json" }
        });

        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const datos = await response.json();
        console.log(datos.data);
        setRutero(datos.data);
        setClienteSeleccionado(datos.data);
        setTablaVentas(datos.data);
      } catch (error) {
        console.log("Error al obtener datos", error)
      }
    };
    obtenerDatos();
  }, []);

  const handleOpen = (cliente) => {
    setClienteSeleccionado(cliente); 
    setOpen(true);
    console.log(cliente);
  };

  const handleClose = () => {
    setClienteSeleccionado(null);
    setOpen(false);
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    const resultadoBusqueda = tablaVentas.filter((elemento) => {
      const valores = Object.values(elemento).map((value) => 
        value ? value.toString().toLowerCase() : ""
      );
      return valores.some((valor) => valor.includes(terminoBusqueda.toLowerCase()));
    });
    setRutero(resultadoBusqueda);
  };

  const columns = [
    { field: 'Fecha_realizacion', headerName: 'FECHA', width: 200, headerClassName: 'header-bold' },
    { field: 'Hora', headerName: 'HORA', width: 150, headerClassName: 'header-bold' },
    { field: 'FKNitCliente', headerName: 'NIT', width: 150, headerClassName: 'header-bold' },
    { field: 'RazonSocial', headerName: 'NOMBRE', width: 500, headerClassName: 'header-bold' },
    { field: 'Agenda', headerName: 'AGENDADOS', width: 150, headerClassName: 'header-bold' },
  ];
  
  return (
    <>
      <NavBar />
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "auto", margin: 1 }}>
        <h2><strong>RUTERO Y GESTIÓN DE CARTERA</strong></h2>
        <InputBase sx={{ ml: 1, flex: 1, justifyContent: "flex-end", maxWidth: "400px", border: "2px solid black", 
          height: "40px", borderRadius: "4px", p: 1, mb: 1 }}
          type="text" 
          value={busqueda}
          onChange={handleChange}
          placeholder="Buscar..."
        />
      </Box>
      <Box sx={{ height: "auto", width: 'auto', margin: 2 }}>
        <DataGrid 
          rows={rutero}
          columns={columns}
          getRowId={(row) => row.PKid}
          initialState={{
              pagination: {
                  paginationModel: { page: 0, pageSize: 12 }
              }
          }}
          pageSizeOptions={[12]}
          onRowClick={(params) => handleOpen(params.row)} 
        />
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={{ p: 4, backgroundColor: 'white', borderRadius: '8px', maxWidth: '650px', height: "300px", margin: 'auto', mt: 4, p:2 }}>
          <>
            {clienteSeleccionado && (
              <Grid container rowSpacing={1.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ p: 1 }}>
                <Grid size={12}>
                  <strong>Razón Social: </strong>{clienteSeleccionado.RazonSocial}
                </Grid>
                <Grid size={6}>
                  <strong>Realizada Por: </strong>{clienteSeleccionado.FKUsuario}
                </Grid>
                <Grid size={6}>
                  <strong>Tipo Gestión: </strong>{clienteSeleccionado.Tipo}
                </Grid>
                <Grid size={6}>
                  <strong>¿Realiza Pedido? </strong>{clienteSeleccionado.Realiza_pedido}
                </Grid>
                <Grid size={6}>
                  <strong>¿Cobró? </strong>{clienteSeleccionado.Cobro}
                </Grid>
              </Grid>
            )}
            {clienteSeleccionado && (
              <TextField
                id="outlined-basic"
                multiline
                rows={3}
                defaultValue={clienteSeleccionado.Comentario}
                variant="outlined"
                sx={{ width: "100%", border: "2px solid #1be0e7" }}
              />
            )}
          </>
        </Box>
      </Modal>
    </>
  );
}

export default GestionCartera;
