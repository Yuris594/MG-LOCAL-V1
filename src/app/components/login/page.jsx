"use client";

import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  Slide,
  Snackbar,
  TextField,
  Toolbar,
  Typography,
  Zoom,
} from "@mui/material";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import { useForm } from "@/app/hooks/useForm";
import { useRouter } from "next/navigation";
import MuiAlert from "@mui/material/Alert";
import useAuth from "@/app/hooks/useAuth";
import { useState } from "react";
import Image from "next/image";
import * as React from "react";
import Link from "next/link";
import Peticion from "@/conexion/peticion";
import { Global } from "@/conexion/conexion";

const Alert = React.forwardRef(function Alert(props, ref) {
  return (
    <MuiAlert
      elevation={6}
      ref={ref}
      variant="filled"
      {...props}
    />
  );
});

export function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Departamento de Sistemas "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login() {
  const router = useRouter();
  const { setAuth } = useAuth();
  const [open, setOpen] = useState();
  const [openE, setOPenE] = useState();
  const [saved, setSaved] = useState();
  const { form, changed } = useForm({});
  const [checked, setChecked] = useState(false);



  if (checked == false) {
    setTimeout(() => {
      //Establece un temporizador de milisegundos - Callback
      setChecked(true);
    }, 500);
  }

  const Iniciar = async (e) => {
    e.preventDefault();
    const usuario = form.PER_Usuario;
    const clave = form.PER_Clave;

    if (!form.PER_Usuario || !form.PER_Clave) {
      console.info("Por favor, completa todos los campos");
      return;
    }
    try {
      const { datos } = await Peticion(`/api/usuarios/listar/${usuario}/${clave}`,"GET" );
      console.log("Usuario recibido: ", datos);
      if (datos) {
        console.log("Usuario existe y las credenciales son correctas");
        localStorage.setItem("usuarios", JSON.stringify(datos));
        setSaved("saved");
        setOPenE(false);
        setOpen(true);

        setTimeout(() => {
          setAuth(datos);
          window.location.reload();
        }, 1000);
        router.push("../../start");
      } else {
        setOPenE(true);
        setSaved("error");
        console.log("Usuario no existe");
      }
    } catch (error) {
      console.error("Error en la peticipon: ", error);
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
      {open ? (
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            variant="outlined"
            severity="success"
            sx={{ width: "100%" }}
          >
            Usuario identificado.
          </Alert>
        </Snackbar>
      ) : (
        ""
      )}
      {openE ? (
        <Snackbar
          open={openE}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            variant="outlined"
            severity="error"
            sx={{ width: "100%" }}
          >
            El usuario o la contraseña son incorrectos.
          </Alert>
        </Snackbar>
      ) : (
        ""
      )}

      <Box sx={{ height: 180 }}>
        <Slide
          direction="down"
          in={checked}
          mountOnEnter
          unmountOnExit
        >
          <AppBar
            position="static"
            sx={{ bgcolor: "#262626", height: "80px" }}
          >
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, marginLeft: "10px" }}
              >
                {" "}
              </Typography>
              <Button
                component={Link}
                href="/components/ingresos"
                sx={{ color: "white" }}
                title="Control de entredas y salidas de los empleados"
              >
                <TransferWithinAStationIcon sx={{ fontSize: 40 }} />
              </Button>
            </Toolbar>
          </AppBar>
        </Slide>

        <Box sx={{ zoom: 1.2 }}>
          <Zoom in={checked}>
            <Container
              className="login"
              component="main"
              maxWidth="xs"
            >
              <CssBaseline />
              <Box
                sx={{
                  marginTop: 8,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  height: "auto",
                }}
              >
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{ margin: 2 }}
                >
                  <Image
                    className="logo"
                    src="/img/logo_miguelgomez.png"
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

                <Zoom
                  in={checked}
                  style={{ transitionDelay: checked ? "700ms" : "0ms" }}
                >
                  <Box
                    component="form"
                    onSubmit={Iniciar}
                    noValidate
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <TextField
                      error={saved == "error"}
                      id="usuario"
                      label="Usuario"
                      margin="normal"
                      fullWidth
                      name="PER_Usuario"
                      value={form.PER_Usuario || ""}
                      onChange={changed}
                    />

                    <Typography
                      component="h1"
                      variant="h6"
                    ></Typography>

                    <TextField
                      error={saved == "error"}
                      margin="normal"
                      required
                      fullWidth
                      type="password"
                      name="PER_Clave"
                      id="contraseña"
                      label="Contraseña"
                      value={form.PER_Clave || ""}
                      onChange={changed}
                    />

                    <Button
                      type="submit"
                      variant="contained"
                      color="success"
                      sx={{
                        marginTop: 2,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        minWidth: 398,
                      }}
                    >
                      Iniciar sesión
                    </Button>
                  </Box>
                </Zoom>
              </Box>
              <Copyright sx={{ mt: 5, mb: 5 }} />
            </Container>
          </Zoom>
        </Box>
      </Box>
    </>
  );
}
