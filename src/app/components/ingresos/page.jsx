"use client";

import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Container,
  createTheme,
  CssBaseline,
  Paper,
  Slide,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
  Zoom,
} from "@mui/material";
import Link from "next/link";
import Swal from "sweetalert2";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from "react";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
const WifiIcon = dynamic(() => import("@mui/icons-material/Wifi"), {ssr:false});
const WifiOffIcon = dynamic(() => import("@mui/icons-material/WifiOff"), {ssr:false});


const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
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

const entrada = () => {
  Swal.fire({
    title: "¡Hora de ENTRADA registrada",
    icon: "success",
    confirmButtonText: "Aceptar",
  });
};
const salida = () => {
  Swal.fire({
    title: "¡Hora de SALIDA registrada",
    icon: "success",
    confirmButtonText: "Aceptar",
  });
};

const servidor = () => {
  Swal.fire({
    title: "¡Por favor verifica la conexion o actualiza la pagina",
    icon: "warning",
    confirmButtonText: "Aceptar"
  });
};
const conexion = () => {
  Swal.fire({
    title: "No existe conexion",
    text: "Verifique la conexion con la empresa o no tiene internet",
    icon: "warning",
    confirmButtonText: "Aceptar",
  });
};
const espera = () => {
  Swal.fire({
    title: "¡Espere un momento porfavor,estamos procesando",
    text: "Si esta muy lento,cancele el proceso y verifique su conexion",
    icon: "warning",
    confirmButtonText: "cancelar",
  });
};
const noExiste = () => {
  Swal.fire({
    title: "CEDULA no existe!",
    icon: "error",
    confirmButtonText: "Aceptar",
  });
};

const registro = async (cedula) => {
  try {
    const response = await fetch(`/api/control_entradas/documento/${cedula}`, {
      method: "POST",
      body: JSON.stringify({ cedula }), 
      headers: { "Content-Type": "application/json" }
    });
    if (!response.ok) throw new Error("Error en la respuesta del servidor");
    
    return response.json();
  } catch(error) {
    console.error("Error al realizar la peticion", error);
    return null;
  }
}

const Ingresos = () => {
  const inputRef = useRef(null);
  const [cedula, setCedula] = useState('');
  const [checked, setChecked] = useState(false);
  const [online, setOnline] = useState(navigator.onLine);



  useEffect(() => {
    setOnline(navigator.onLine);

    const handleOnline = () => setOnline(true);
    const handleOffline = () => setOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

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

  if (!cedula) {
    console.info("Por favor, completa todos los campos");
    return;
  }

  if (!online) {
    conexion();
    return;
  }

  try {
    espera();
    const datos = await registro(cedula);
    console.log("Datos recibidos:", datos);

    if (datos && typeof datos.respuesta !== 'undefined') {
      switch (datos.respuesta) {
        case "0":
          setCedula('');
          entrada();
          break;
        case "1":
          setCedula('');
          salida();
          break;
        case "3":
          setCedula('');
          noExiste();
          break;
        default:
          console.warn("Respuesta inesperada:", datos.respuesta);
      }
    } else {
      console.error("Datos no recibidos o respuesta indefinida");
      conexion();
    }
  } catch (error) {
    console.log("Error al procesar la solicitud:", error);
  }
};


  const handleClick = (event) => {
    const nuevoValor = event.currentTarget.value;
    setCedula((prevCedula) => prevCedula + nuevoValor);
  };

  const handleDelete = () => {
    setCedula((prevCedula) => prevCedula.slice(0, -1));
  };

  return (
      <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
        <Slide direction="down" in={checked} mountOnEnter unmountOnExit>
          <AppBar position="static" sx={{ bgcolor: "#262626", height: "80px" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", }}>
              <Button component={Link} href="/" sx={{ color: "white" }}>
                <KeyboardReturnIcon sx={{ fontSize: 60, paddingTop: 1 }} />
              </Button>
            </Toolbar>
          </AppBar>
        </Slide>
       
        <CssBaseline />
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="sm" 
              sx={{ backgroundColor: "#ffffff", padding: 5, marginTop: 8, fontSize: "1.5rem" }}>     
                <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", }}>
                  <Zoom in={checked}>
                    <Paper className="" component="main">
                      <Box sx={{ padding: 2 }}>
                        {online ? (
                          <WifiIcon sx={{ color: "green" }} />
                        ) : (
                          <WifiOffIcon sx={{ color: "red" }} />
                        )}

                        <Typography variant="h6" noWrap component="div" sx={{ mb: 2, display: "flex", justifyContent: "center", }}>
                          <Image
                            src="/logo_miguelgomez-bglight.png"
                            width="120"
                            height="80"
                            alt="imagenmg"
                            priority={true}
                          />
                        </Typography>

                      
                          <Box component="form" onSubmit={ingreso} noValidate sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                            <TextField
                              margin="normal"
                              required
                              fullWidth
                              id="CEDULA"
                              name="CEDULA"
                              placeholder="Digite su cédula"
                              autoComplete="CEDULA"
                              value={cedula}
                              onChange={(e) => setCedula(e.target.value)}
                              inputRef={inputRef}
                              sx={{ width: "100%", mb: 2, fontSize: "2rem", padding: 2, height: "60px", boxSizing: "border-box" }}
                            />

                            <Button type="submit" variant="contained" color="success" sx={{ width: "88%", mb: 2, padding: 2, height: "50px", }}>
                              Enviar
                            </Button>
                          </Box>

                        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", width: "100%" }}>
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

                          <ButtonGroup orientation="vertical" aria-label="vertical contained button group" variant="text" sx={{ margin: "2px", width: "30%", height: "100%" }}>
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
                    </Paper>
                  </Zoom>
                </Box>
              </Container> 
            </ThemeProvider> 
        </Box>
  );
};

export default Ingresos;


//Cambiar navigator.OnLine por WebSockets para recibir el estado del navegador 
//Permite crear aplicacion en tiempo real, permite hacer una tranferencia de datos asincrona vilateral
//Mandar la actualizacion de pedidos por medio de webSocket

/*
"use client";

import {
  AppBar,
  Box,
  Button,
  ButtonGroup,
  Container,
  createTheme,
  CssBaseline,
  Paper,
  Slide,
  TextField,
  ThemeProvider,
  Toolbar,
  Typography,
  Zoom,
} from "@mui/material";
import Link from "next/link";
import Swal from "sweetalert2";
import Image from "next/image";
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from "react";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
const WifiIcon = dynamic(() => import("@mui/icons-material/Wifi"), { ssr: false });
const WifiOffIcon = dynamic(() => import("@mui/icons-material/WifiOff"), { ssr: false });

const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: "5px",
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

const Ingresos = () => {
  const inputRef = useRef(null);
  const [cedula, setCedula] = useState('');
  const [checked, setChecked] = useState(false);
  const [online, setOnline] = useState(false);
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket(`ws:/api/control_entradas/documento/${cedula}`); 
  
    socket.onopen = () => {
      console.log("Conexión WebSocket abierta");
      setOnline(true);
    };

    socket.onclose = () => {
      console.log("Conexión WebSocket cerrada");
      setOnline(false);
    };

    socket.onerror = (error) => {
      console.error("Error en WebSocket:", error);
      setOnline(false);
    };

    setWs(socket);

    return () => {
      socket.close();
    };
  }, []);

  const ingreso = async (e) => {
    e.preventDefault();

    if (!cedula) {
      console.info("Por favor, completa todos los campos");
      return;
    }

    if (!online) {
      Swal.fire({
        title: "No existe conexión",
        text: "Verifique la conexión con la empresa o no tiene internet",
        icon: "warning",
        confirmButtonText: "Aceptar",
      });
      return;
    }

    try {
      // Lógica de registro
      // ...

    } catch (error) {
      console.log("Error al procesar la solicitud:", error);
    }
  };

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Slide direction="down" in={checked} mountOnEnter unmountOnExit>
        <AppBar position="static" sx={{ bgcolor: "#262626", height: "80px" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", }}>
            <Button component={Link} href="/" sx={{ color: "white" }}>
              <KeyboardReturnIcon sx={{ fontSize: 60, paddingTop: 1 }} />
            </Button>
          </Toolbar>
        </AppBar>
      </Slide>

      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="sm" sx={{ backgroundColor: "#ffffff", padding: 5, marginTop: 8, fontSize: "1.5rem" }}>
          <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", }}>
            <Zoom in={checked}>
              <Paper component="main">
                <Box sx={{ padding: 2 }}>
                  {online ? (
                    <WifiIcon sx={{ color: "green" }} />
                  ) : (
                    <WifiOffIcon sx={{ color: "red" }} />
                  )}

                  <Typography variant="h6" noWrap component="div" sx={{ mb: 2, display: "flex", justifyContent: "center", }}>
                    <Image
                      src="/logo_miguelgomez-bglight.png"
                      width="120"
                      height="80"
                      alt="imagenmg"
                      priority={true}
                    />
                  </Typography>

                  <Box component="form" onSubmit={ingreso} noValidate sx={{ display: "flex", flexDirection: "column", alignItems: "center", }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="CEDULA"
                      name="CEDULA"
                      placeholder="Digite su cédula"
                      autoComplete="CEDULA"
                      value={cedula}
                      onChange={(e) => setCedula(e.target.value)}
                      inputRef={inputRef}
                      sx={{ width: "100%", mb: 2, fontSize: "2rem", padding: 2, height: "60px", boxSizing: "border-box" }}
                    />

                    <Button type="submit" variant="contained" color="success" sx={{ width: "88%", mb: 2, padding: 2, height: "50px", }}>
                      Enviar
                    </Button>
                  </Box>

                  {/* Resto de tu código para botones numéricos... 
                </Box>
              </Paper>
            </Zoom>
          </Box>
        </Container>
      </ThemeProvider>
    </Box>
  );
};

export default Ingresos;*/