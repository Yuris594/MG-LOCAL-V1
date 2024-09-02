"use client";

import { Alert, Box, Button, Container, CssBaseline, Grid, Snackbar, TextField, Typography, } from "@mui/material";
import { useForm } from "@/app/hooks/useForm";
import { useEffect, useState } from "react"
import { Global } from "@/conexion/conexion";

const UsuarioActualizar = ({usuario}) => {
  const [open, setOpen] = useState(false);
  const [openE, setOpenE] = useState(false);
  const { form, setForm, changed } = useForm();

  useEffect(() => {
    if (usuario && usuario.length > 0) {
      setForm({
        IdPer: usuario[0].IdPer,
        PER_Nom: usuario[0].PER_Nom || "",
        PER_Usuario: usuario[0].PER_Usuario || "",
        PER_Clave: usuario[0].PER_Clave || "",
        IdDiv: usuario[0].IdDiv || "",
        PERAUTOPED: usuario[0].PERAUTOPED || "",
        CODVEND: usuario[0].CODVEND || "",
        PREFIJO: usuario[0].PREFIJO || "",
        CONSECUTIVOPED: usuario[0].CONSECUTIVOPED || "",
      });
    }
  }, [usuario]);

  console.log(form);

  const actualizar = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/usuarios/actualizar/", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });
        if (response.ok) {
          setOpen(true);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else {
          console.log("Error", response.statusText);
          setOpenE(true);
        }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      setOpenE(true);
    }
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
    setOpenE(false);
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: 2, }}>
          <Typography component="h1" variant="h5">
            Actualizacion de usuario
          </Typography>
          <Box component="form" onSubmit={actualizar} noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="PER_Nom"
                  label="PER_Nom"
                  name="PER_Nom"
                  autoFocus
                  value={form.PER_Nom || ""}
                  onChange={changed}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="PER_Usuario"
                  label="PER_Usuario"
                  name="PER_Usuario"
                  value={form.PER_Usuario || ""}
                  onChange={changed}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="PER_Clave"
                  label="PER_Clave"
                  type="password"
                  name="PER_Clave"
                  value={form.PER_Clave || ""}
                  onChange={changed}
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
                  value={form.IdDiv || ""}
                  onChange={changed}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="PERAUTOPED"
                  label="PERAUTOPED"
                  type="number"
                  name="PERAUTOPED"
                  value={form.PERAUTOPED || ""}
                  onChange={changed}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  id="CODVEND"
                  label="CODVEND"
                  name="CODVEND"
                  value={form.CODVEND || ""}
                  onChange={changed}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  id="PREFIJO"
                  label="PREFIJO"
                  name="PREFIJO"
                  value={form.PREFIJO || ""}
                  onChange={changed}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  fullWidth
                  id="CONSECUTIVOPED"
                  label="CONSECUTIVOPED"
                  type="number"
                  name="CONSECUTIVOPED"
                  value={form.CONSECUTIVOPED || ""}
                  onChange={changed}
                />
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Actualizar
              </Button>
            </Grid>
          </Box>
          {open && (
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
              <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
                Actualizacion Exitosa
              </Alert>
            </Snackbar>
          )}
          {openE && (
            <Snackbar open={openE} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: "top", horizontal: "center" }}>
              <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
                Actualizacion Denegada
              </Alert>
            </Snackbar>
          )}
        </Box>
      </Container>
    </>
  );
};

export default UsuarioActualizar;
