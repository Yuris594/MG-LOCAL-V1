'use client'

import { AppBar, Box, Button, Container, CssBaseline, Slide, Snackbar, TextField, Toolbar, Typography, Zoom } from "@mui/material";
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


const Alert = React.forwardRef(function Alert(props, ref) {
  return (
    <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
  );
});

export function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Departamento de Sistemas "}
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
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resultado = await Iniciar(usuario, clave);

      if (!resultado.error) {
        localStorage.setItem("usuarios", JSON.stringify(resultado));
          const tokens = resultado;
          login(tokens);

        setOpen(true);
        setSaved(true);
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
      <Box sx={{ height: 180 }}>

        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
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

        <Box sx={{ zoom: 1.2 }}>
          <Zoom in={true}>
            <Container className="login" component="main" maxWidth="xs">
              <CssBaseline />
                <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center", height: "auto", }}>

                  <Typography variant="h6" noWrap component="div" sx={{ margin: 2 }} >
                    <Image
                      className="logo"
                      src="/logo_miguelgomez.png"
                      width="230"
                      height="230"
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
                

                  <Box component="form" noValidate onSubmit={handleSubmit}
                    sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                    
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

                    <Button type="submit" variant="contained" color="success"
                        sx={{ marginTop: 2, display: "flex", justifyContent: "center", alignItems: "center", minWidth: 398,}}>
                      Iniciar sesión
                    </Button>
                  </Box>

                   {/* Snackbar para mostrar mensajes */}
                    {open ? (
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                      <Alert onClose={handleClose} variant="outlined" severity="success" sx={{ width: "100%" }}>
                        Usuario identificado.
                      </Alert>
                    </Snackbar>
                  ) : ( "" )}

                  {openE ? ( <Snackbar open={openE} autoHideDuration={6000} onClose={handleClose}>
                      <Alert onClose={handleClose} variant="outlined" severity="error" sx={{ width: "100%" }}>
                        El usuario o la contraseña son incorrectos.
                      </Alert>
                    </Snackbar>
                  ) : ( "" )}
              
                </Box>
              <Copyright sx={{ mt: 5, mb: 5 }} />
            </Container>
          </Zoom>
        </Box>
      </Box>
    </>
  );
}
