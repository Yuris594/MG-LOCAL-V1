'use client';

import { AppBar, Box, Button, Container, createTheme, CssBaseline, Paper, Snackbar, 
        TextField, ThemeProvider, Toolbar, Typography, useMediaQuery } from "@mui/material";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import MuiAlert from "@mui/material/Alert";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { Global } from "@/conexion";


const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow: "0px, 3px, 5px rgba(0,0,0,0.2)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          boxShadow: "0px 3px 5px rgba(0,0,0,0.2)",
          transition: "0.3s",
          "&:hover": {
            boxShadow: "0px 5px 10px rgba(0,0,0,0.4)",
            backgroundColor: "#388e3c",
          },
        },
      },
    },
  },
});

const Alert = React.forwardRef(function Alert(props, ref) {
  return (
    <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  );
});

export function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Departamento de Sistemas © Version 0.2 - "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Iniciar = async (usuario, clave) => {
  const response = await fetch(`/api/usuarios/listar/${usuario}/${clave}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    if (response.status === 404) {
      return { error: { detail: "Credenciales incorrectas" } };
    } else {
      return { error: { detail: "Error desconocido" } };
    }
  }
  return response.json();
};

function Login() {
  const theme = useTheme();
  const router = useRouter();
  const { login, auth } = useAuth();
  const [clave, setClave] = useState('');
  const [open, setOpen] = useState(false);
  const [openE, setOpenE] = useState(false);
  const [error, setError] = useState(false);
  const [usuario, setUsuario] = useState('');
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resultado = await Iniciar(usuario, clave);
        if (resultado.error) {
          setError(true);
          setOpenE(true);
        } else {
          setOpen(true);
          const tokens = resultado;
          login(tokens);
          router.push("../start");
        }
    } catch (error) {
          setError(true);
          setOpenE(true);
          console.log("Error en la pagina Iniciar Sesión", error)
    }
  };


  const handleClose = (reason) => {
    if (reason === "clicaway") {
      return;
    }
    setOpen(false);
    setOpenE(false);
  };

  return (
      <>
        <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
          <AppBar position="static" sx={{ bgcolor: "#262626", height: "70px" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", }}>
              <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}></Typography>
              <Button component={Link} href="./components/ingresos" sx={{ color: "white" }}
                title="Control de entredas y salidas de los empleados">
                <TransferWithinAStationIcon sx={{ fontSize: 40 }} />
              </Button>
            </Toolbar>
          </AppBar>

          <CssBaseline />
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh", backgroundColor: "#f4f4f4" }}>
              <Paper component="main" elevation={3} sx={{ width: "380px", padding: "20px", borderRadius: "15px", display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "white", boxShadow: 3 }}>
                <Box sx={{ textAlign: "center", marginBottom: "20px", width: { xs: "100px", sm: "200px", md: "300px" }, height: "auto" }}>
                  <img src="/logo_miguelgomez.png" alt="LOGO" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
                </Box>
                
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
                  <TextField
                    error={error}
                    id="usuario"
                    label="Usuario"
                    margin="normal"
                    fullWidth
                    name="PER_Usuario"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                  />

                  <TextField
                    error={error}
                    margin="normal"
                    required
                    fullWidth
                    type="password"
                    name="PER_Clave"
                    id="contraseña"
                    label="Contraseña"
                    value={clave}
                    onChange={(e) => setClave(e.target.value)}
                  />

                  <Button type="submit" fullWidth  sx={{ mt: 2, backgroundColor: "#11eb6c", color: "white", "$:hover": { backgroundColor: "#35eb11" } }}>
                    Iniciar sesión
                  </Button>
                </Box>
              <Copyright sx={{ mt: 3, mb: 1 }} />
            </Paper>
          </Box>
        </Box>

        {open ? (
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} variant="outlined" severity="success" sx={{ width: "100%" }}>
              {`¡Hola, ${auth.PER_Nom}! Tu sesión ha comenzado.`}
            </Alert>
          </Snackbar>
        ) : ( "" )}

        {openE ? ( 
          <Snackbar open={openE} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} variant="outlined" severity="error" sx={{ width: "100%" }}>
              {'No se pudo iniciar sesión. Verifica tus credenciales.'}
            </Alert>
          </Snackbar>
        ) : ( "" )}
    </>
  );
}

export default Login;

