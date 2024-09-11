'use client'


import { Alert, Box, Button, Container, CssBaseline, Grid, Snackbar, TextField, Typography } from "@mui/material";
import { useState } from "react";

  const Registro = () => {
  const [form, setForm] = useState({});
  const [open, setOpen] = useState(false);
  const [openE, setOpenE] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const register = async (e) => {
    e.preventDefault();
      if (!form.PER_Nom || !form.IdDiv){
        setOpenE(true);
        return;
      }
      const response =  await fetch("/api/usuarios/nuevo", {
        method: "POST",
        body: JSON.stringify(form), 
        headers: { "Content-Type": "application/json" }
      });
          if (response.ok) {
            setOpen(true)
            console.log("Salida exitosa");
            window.location.reload();
          } else {
            setOpenE(true);
            console.error("Error al enviar la solicitud: ", response.statusText);
          }
    }

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
    setOpenE(false);
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
          <CssBaseline />
            {open ?  
                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                  <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                    Registro Exitoso
                  </Alert>
              </Snackbar>
            : "" }
      
            {openE ?  
                <Snackbar open={openE} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
                  <Alert onClose={handleClose} severity="error"  sx={{ width: '100%' }}>
                    Registro denegado
                  </Alert>
              </Snackbar>
            : "" }

          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 2, }}>
            <Typography component="h1" variant="h5">
                Registro de usuario
            </Typography>

              <Box component="form" noValidate onSubmit={register} sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                      <TextField
                        autoComplete="given-name"
                        name="PER_Nom"
                        required
                        fullWidth
                        id="PER_Nom"
                        label="Nombre"
                        autoFocus
                        value={form.PER_Nom || ''}
                        onChange={handleChange}
                      />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        id="Usuario"
                        label="Usuario"
                        name="PER_Usuario"
                        autoComplete="family-name"
                        value={form.PER_Usuario || ''}
                        onChange={handleChange}
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="Clave"
                        label="Clave"
                        type="password"
                        name="PER_Clave"
                        autoComplete="email"
                        value={form.PER_Clave || ''}
                        onChange={handleChange}
                      />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <TextField
                        required
                        fullWidth
                        name="IdDiv"
                        label="IdDiv"
                        type="number"
                        id="IdDiv"
                        autoComplete="new-password"
                        value={form.IdDiv || ''}
                        onChange={handleChange}
                      />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        id="PERAUTOPED"
                        label="PERAUTOPED"
                        type="number"
                        name="PERAUTOPED"
                        autoComplete="email"
                        value={form.PERAUTOPED || ''}
                        onChange={handleChange}
                      />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        id="CODVEND"
                        label="CODVEND"
                        name="CODVEND"
                        autoComplete="email"
                        value={form.CODVEND || ''}
                        onChange={handleChange}
                      />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        id="PREFIJO"
                        label="PREFIJO"
                        name="PREFIJO"
                        autoComplete="email"
                        value={form.PREFIJO || ''}
                        onChange={handleChange}
                      />
                  </Grid>
                  <Grid item xs={12} sm={4}>
                      <TextField
                        fullWidth
                        id="CONSECUTIVOPED"
                        label="CONSECUTIVOPED"
                        type="number"
                        name="CONSECUTIVOPED"
                        autoComplete="email"
                        value={form.CONSECUTIVOPED || ''}
                        onChange={handleChange}
                      />
                  </Grid>
                </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  registrar
              </Button>
            </Box>
          </Box>
        </Container>
    </>
  )
}

export default Registro;

