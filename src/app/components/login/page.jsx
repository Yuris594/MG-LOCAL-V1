'use client'

import { AppBar, Box, Button, Container, createTheme, CssBaseline, Slide, Snackbar, TextField, ThemeProvider, Toolbar, Typography, Zoom } from "@mui/material";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import MuiAlert from "@mui/material/Alert";
import { useState } from "react";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";

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
      {"Departamento de Sistemas © Version 0.1 - "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}


const Iniciar = async (usuario, clave) => {
  try {
    const response = await fetch(`/api/usuarios/listar/${usuario}/${clave}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (!response.ok || !data || !data.length === 0) {
      return { error: "Usuario o Clave incorrecta" }
    }

    return data
   
  } catch (error) {
    console.error("Error en la petición: ", error);
    return { error: "Error en la conexión" };
  }
};


export default function Login() {
  const router = useRouter();
  const { login, auth } = useAuth();
  const [saved, setSaved] = useState();
  const [clave, setClave] = useState("");
  const [open, setOpen] = useState(false);
  const [openE, setOpenE] = useState(false);
  const [error, setError] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [checked, setChecked] = useState(false);

  if ( checked === false) {
    setTimeout(() => {
      setChecked(true)
    }, 500)
  }
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultado = await Iniciar(usuario, clave);
      if (!resultado.error) {
        localStorage.setItem("usuarios", JSON.stringify(resultado));
        setOpen(true);
        setSaved(true);
        
        const tokens = resultado;
        login(tokens);
        router.push("../start");

      } else {
        setError(true);
        setOpenE(true);
        console.log("Error", resultado.error);
      }
  };

  const handleClose = (reason) => {
    if (reason === "clicaway") {
      return;
    }
    setOpen(false);
  };

  return (
      <>
        <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
          <Slide direction="down" in={checked} mountOnEnter unmountOnExit>
            <AppBar position="static" sx={{ bgcolor: "#262626", height: "80px" }}>
              <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", }}>
                <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, marginLeft: "10px" }}>
                  {" "}
                </Typography>
                <Button component={Link} href="/components/ingresos" sx={{ color: "white" }}
                  title="Control de entredas y salidas de los empleados">
                  <TransferWithinAStationIcon sx={{ fontSize: 40 }} />
                </Button>
              </Toolbar>
            </AppBar>
          </Slide>

          <CssBaseline />
            <ThemeProvider theme={theme}>
              <Container component="main" maxWidth="xs" sx={{ backgroundColor: "#ffffff", padding: 4, borderRadius: 2, boxShadow: "0px 5px 15px rgba(0,0,0,0.3)", marginTop: 8 }}>
                <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography variant="h6" noWrap component="div" sx={{ margin: 2 }} >
                      <Image
                        className="logo"
                        src="/logo_miguelgomez.png"
                        width="230"
                        height="200"
                        alt="Logo"
                        priority={true}
                      />
                    </Typography>
                      {saved == "saved" ? (
                        <HowToRegIcon sx={{ color: "green" }}></HowToRegIcon>
                      ) : (
                        ""
                      )}
                      {saved == "error" ? (
                        <HighlightOffIcon sx={{ color: "red" }}></HighlightOffIcon>
                      ) : (
                        ""
                      )}
                  
                  <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center", }}></Box>
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

                      <Typography component="h1" variant="h6"></Typography>

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

                      <Button type="submit" variant="contained" color="success"
                          sx={{ marginTop: 2, display: "flex", justifyContent: "center", alignItems: "center", minWidth: 380,}}>
                        Iniciar sesión
                      </Button>
                    </Box>
                  </Box>
                  

                    {/* Snackbar para mostrar mensajes */}
                    {open ? (
                      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} variant="outlined" severity="success" sx={{ width: "100%" }}>
                          Usuario identificado.
                        </Alert>
                      </Snackbar>
                    ) : ( "" )}

                    {openE ? ( 
                      <Snackbar open={openE} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} variant="outlined" severity="error" sx={{ width: "100%" }}>
                          El usuario o la contraseña son incorrectos.
                        </Alert>
                      </Snackbar>
                    ) : ( "" )}
              
              <Copyright sx={{ mt: 5, mb: 5 }} />
            </Container>
          </ThemeProvider>
        </Box>
      </>
  );
}

