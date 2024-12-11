'use client';

import { AppBar, Box, Button, Container, createTheme, CssBaseline, Snackbar, 
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

export default function Login() {
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
        <Box sx={{ height: "90vh", display: "flex", flexDirection: "column" }}>
          <AppBar position="static" sx={{ bgcolor: "#262626", height: "70px" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", }}>
              <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}></Typography>
              <Button component={Link} href="" sx={{ color: "white" }}
                title="Control de entredas y salidas de los empleados">
                <TransferWithinAStationIcon sx={{ fontSize: 40 }} />
              </Button>
            </Toolbar>
          </AppBar>

          <CssBaseline />
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth={isSmallScreen ? "sm" : "xs"} sx={{ backgroundColor: "#ffffff", padding: 4, borderRadius: 2, boxShadow: "0px 5px 15px rgba(0,0,0,0.3)", marginTop: isSmallScreen ? 3 : 6, mb: 2 }}>
              <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", height: 350 }}>
                <Image
                  className="logo"
                  src="/logo_miguelgomez.png"
                  width={isSmallScreen ? 200 : 250}
                  height={isSmallScreen ? 120 : 150}
                  alt="Logo"
                  priority={true}
                />
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
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

                  <Button type="submit" variant="contained" color="success" sx={{ marginTop: 2, display: "flex", justifyContent: "center", alignItems: "center", minWidth: isSmallScreen ? "100%" : 380 }}>
                    Iniciar sesión
                  </Button>
                </Box>
              </Box>
              <Copyright sx={{ mt: 3, mb: 1 }} />
            </Container>
          </ThemeProvider>
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




