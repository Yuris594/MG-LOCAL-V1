"use client";

import { Box, TextField, Checkbox, FormControlLabel, Button, MenuItem, Divider } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import NavBar from '@/app/components/navbar/nav';
import { useAuth } from '@/context/authContext';
import { useRouter } from 'next/navigation';
import Grid from "@mui/material/Grid2";
import { Global } from '@/conexion';
import { useState } from 'react';
import Swal from 'sweetalert2';
import dayjs from 'dayjs';


const RealizarRutero = () => {
  const router = useRouter()
  const { clienteV, auth } = useAuth();
  const [hora, setHora] = useState(null);
  const [fecha, setFecha] = useState(null);
  const [cobro, setCobro] = useState(false);
  const [gestion, setGestion] = useState('');
  const [pedido, setPedido] = useState(false);
  const [Comentario, setComentario] = useState('');


  const pedidoValue = pedido ? "Si" : "No";
  const cobroValue = cobro ? "Si" : "No";

  const handleSave = async () => {
    const ruteroData = {
      FKNitCliente: clienteV.NIT || '',           
      FKUsuario: auth.UserFullName || 'USUARIOS', 
      CODVENDEDOR: auth.IDSaler, 
      Tipo: gestion,  
      Comentario,
      Realiza_pedido: pedidoValue,   
      Cobro: cobroValue,
      Hora: hora ? hora.format("HH:mm:ss") : null, 
      Agenda: fecha ? fecha.format("MM/DD/YYYY") : "0-0-0", 
      Zona: clienteV.CityName, 
    };

    console.log("Datos enviados al bakend", ruteroData);
    
    try {
      const response = await fetch(Global.url + '/gestioncartera/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ruteroData)
      });

      const responseData = await response.json();
      if (response.ok) {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Rutero Creado Correctamente",
            showConfirmButton: false,
            timer: 2500,
        });
        router.push("../gestionCartera");
        
        } else {
        console.error("Response not ok", responseData);
        Swal.fire({
            icon: "error",
            title: "Error",
            text: responseData.text || "No se pudo guardar el rutero. Intente de nuevo.",
        });
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "La solicitud está tardando demasiado. Intente nuevamente más tarde.",
        });
        } else {
        console.error('Error details:', error);
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Ocurrió un error en la conexión. Intente de nuevo.",
        });
      }
    }
  };
  

  return (
    <>
      <NavBar />
      <Box sx={{ width: 600, heigth: 380, margin: '0 auto', padding: 2, border: "2px solid #000", p: 2, mt: 4 }}>
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "left" }}>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <strong>Nit: </strong>{clienteV.NIT} 
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <strong>Razón Social: </strong>{clienteV.RazonSocial} 
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <strong>Usuario: </strong>{auth.UserFullName}
          </Box>
        </Box>
        <Divider />
        <Box sx={{ maxWidth: 650, height: 370, margin: '0 auto', padding: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid size={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['TimePicker']}>
                  <TimePicker 
                    label="Hora"
                    fullWidth
                    value={hora}
                    onChange={(newValue) => setHora(newValue)}
                    minTime={dayjs().hour(7).minute(0)} 
                    maxTime={dayjs().hour(20).minute(0)}
                    slotProps={{ textField: { variant: "outlined", fullWidth: true, sx:{ width: 100 } } }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>
            <Grid size={6}>
              <TextField
                label="Tipo de Gestión"
                select
                fullWidth
                value={gestion}
                onChange={(e) => setGestion(e.target.value)}
                sx={{  width: 250, margin: 1 }}>
                <MenuItem value="Telefonica">Telefónica</MenuItem>
                <MenuItem value="Presencial">Presencial</MenuItem>
              </TextField>
            </Grid>
          </Grid>
          <Grid container spacing={2} alignItems="center">
            <Grid size={3}>
              <FormControlLabel
                control={<Checkbox checked={pedido} onChange={(e) => setPedido(e.target.checked)} />}
                label="¿Hizo pedido?"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid size={3}>
              <FormControlLabel
                control={<Checkbox checked={cobro} onChange={(e) => setCobro(e.target.checked)} />}
                label="¿Cobró?"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid size={6}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Agendar"
                  value={fecha}
                  onChange={(newValue) => setFecha(newValue)}
                  slotProps={{ textField: { variant: "outlined", fullWidth: true, sx:{ width: 250 } }  }}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <TextField
            label="Comentarios"
            multiline
            rows={3}
            fullWidth
            value={Comentario}
            onChange={(e) => setComentario(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="success" onClick={handleSave}>
            Guardar
          </Button>
        </Box>    
      </Box>
    </>
  )
}

export default RealizarRutero;

