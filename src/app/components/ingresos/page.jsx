"use client";

import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  CssBaseline,
  Paper,
  Slide,
  TextField,
  Toolbar,
  Typography,
  Zoom,
} from "@mui/material";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import { useEffect, useRef, useState } from "react";
import WifiIcon from "@mui/icons-material/Wifi";
import { useForm } from "@/app/hooks/useForm";
import Swal from "sweetalert2";
import Image from "next/image";
import Link from "next/link";
import Peticion from "@/conexion/peticion";
import { Global } from "@/conexion/conexion";

const entrada = () => {
  Swal.fire({
    title: "¡Hora de ENTRADA registrada",
    icon: "success",
    button: "Aceptar",
  });
};
const salida = () => {
  Swal.fire({
    title: "¡Hora de SALIDA registrada",
    icon: "success",
    button: "Aceptar",
  });
};

const servidor = () => {
  Swal.fire({
    title: "¡Por favor verifica la conexion o actualiza la pagina",
    icon: "warning",
    buttons: {
      confirm: "Aceptar",
    },
  });
};
const conexion = () => {
  Swal.fire({
    title: "No existe conexion",
    text: "Verifique la conexion con la empresa o no tiene internet",
    icon: "warning",
    button: "Aceptar",
  });
};
const espera = () => {
  Swal.fire({
    title: "¡Espere un momento porfavor,estamos procesando",
    text: "Si esta muy lento,cancele el proceso y verifique su conexion",
    icon: "warning",
    button: "cancelar",
  });
};
const noExiste = () => {
  Swal.fire({
    title: "CEDULA no existe!",
    icon: "error",
    button: "Aceptar",
  });
};

const Ingresos = () => {
  const inputRef = useRef(null);
  const [checked, setChecked] = useState(false);
  //const [online, setOnline] = useState(navigator.onLine);
  const { form, setForm, changed } = useForm({ cedula: "" });

 /* useEffect(() => {
    setOnline(navigator.onLine);

    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);*/

  useEffect(() => {
    const timeout = setTimeout(() => {
      setChecked(true);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      inputRef.current.focus();
    }, 100);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const ingreso = async (e) => {
    e.preventDefault();

    const cedula = form.CEDULA;

    if (!form.CEDULA) {
      console.info("Por favor, completa todos los campos");
      return;
    }

   /* if (!online) {
      conexion();
      return;
    }*/

    try {
      espera();
      const { datos } = await Peticion("/api/control_entradas/documento/" + cedula, "POST");

      if (datos) {
        if (res.ok) {
          if (datos.respuesta === "0") {
            setForm({ CEDULA: "" });
            entrada();
          } else if (datos.respuesta === "1") {
            setForm({ CEDULA: "" });
            salida();
          } else if (datos.respuesta === "3") {
            setForm({ CEDULA: "" });
            noExiste();
          }
        } else {
          setForm({ CEDULA: "" });
          servidor();
        }
      } else {
        conexion();
      }
    } catch (error) {
      console.log("Error");
    }
  };

  const handleClick = (event) => {
    const nuevoValor = event.currentTarget.value;
    setForm((prevForm) => ({
      ...prevForm,
      CEDULA: prevForm.CEDULA + nuevoValor,
    }));
  };

  const handleDelete = () => {
    setForm((prevForm) => ({
      ...prevForm,
      CEDULA: prevForm.CEDULA.slice(0, -1),
    }));
  };

  return (
    <Box className="login-content">
      <Box sx={{ height: 180 }}>
        <Slide direction="down" in={checked} mountOnEnter unmountOnExit>
          <AppBar position="static" sx={{ bgcolor: "#262626", height: "80px" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", }}>
              <Button component={Link} href="/" sx={{ color: "white" }}>
                <KeyboardReturnIcon sx={{ fontSize: 60, paddingTop: 1 }} />
              </Button>
            </Toolbar>
          </AppBar>
        </Slide>
        
        <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center", }}>
          <Zoom in={checked}>
            <Paper className="" component="main">
              <CssBaseline />
              <Box sx={{ padding: 2 }}>
               {/* {online ? (
                  <WifiIcon sx={{ color: "green" }} />
                ) : (
                  <WifiOffIcon sx={{ color: "red" }} />
                )}*/}

                <Typography variant="h6" noWrap component="div" sx={{ margin: "5px", display: "flex", flexDirection: "column", alignItems: "center", }}>
                  <Image
                    src="/logo_miguelgomez-bglight.png"
                    width="120"
                    height="80"
                    alt="imagenmg"
                    priority={true}
                  />
                </Typography>

                <Zoom in={checked} style={{ transitionDelay: checked ? "700ms" : "0ms" }}>
                  <Box component="form" onSubmit={ingreso} noValidate sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="CEDULA"
                      name="CEDULA"
                      placeholder="Digite su cédula"
                      autoComplete="CEDULA"
                      value={form.CEDULA}
                      onChange={changed}
                      inputRef={inputRef}
                      sx={{ zoom: 2.5 }}
                    />

                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", }}>
                      <Button type="submit" variant="contained" color="success" sx={{ width: 600, height: 100, margin: 1, fontSize: 30, }}>
                        Enviar
                      </Button>
                    </Box>

                    <Box sx={{ zoom: 4.1 }}>
                      <ButtonGroup orientation="vertical" aria-label="vertical outlined button group" variant="text" sx={{ margin: "2px", width: "30%", height: "100%" }}>
                        <Button variant="outlined" sx={{ height: "100%" }} value={1} onClick={handleClick}>
                          1
                        </Button>
                        <Button variant="outlined" sx={{ height: "100%" }} value={4} onClick={handleClick}>
                          4
                        </Button>
                        <Button variant="outlined" sx={{ height: "100%" }} value={7} onClick={handleClick}>
                          7
                        </Button>
                      </ButtonGroup>

                      <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="text" sx={{ margin: "2px", width: "30%", height: "100%" }}>
                        <Button variant="outlined" sx={{ height: "100%" }} value={2} onClick={handleClick}>
                          2
                        </Button>
                        <Button variant="outlined" sx={{ height: "100%" }} value={5} onClick={handleClick}>
                          5
                        </Button>
                        <Button variant="outlined" sx={{ height: "100%" }} value={8} onClick={handleClick}>
                          8
                        </Button>
                        <Button variant="outlined" sx={{ height: "100%" }} value={0} onClick={handleClick}>
                          0
                        </Button>
                      </ButtonGroup>

                      <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="text"
                            sx={{ margin: "2px", width: "30%", height: "100%" }}>
                        <Button variant="outlined" sx={{ height: "100%" }} value={3} onClick={handleClick}>
                          3
                        </Button>
                        <Button variant="outlined" sx={{ height: "100%" }} value={6} onClick={handleClick}>
                          6
                        </Button>
                        <Button variant="outlined" sx={{ height: "100%" }} value={9} onClick={handleClick}>
                          9
                        </Button>
                        <Button variant="outlined" sx={{ height: "100%", bgcolor: "#ff615b", color: "black", }} onClick={handleDelete}>
                          X
                        </Button>
                      </ButtonGroup>
                    </Box>
                  </Box>
                </Zoom>
              </Box>
            </Paper>
          </Zoom>
        </Box>
      </Box>
    </Box>
  );
};

export default Ingresos;