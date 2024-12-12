"use client";

import Link from "next/link";
import Swal from "sweetalert2";
import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from "react";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
const WifiIcon = dynamic(() => import("@mui/icons-material/Wifi"), {ssr:false});
const WifiOffIcon = dynamic(() => import("@mui/icons-material/WifiOff"), {ssr:false});
import { AppBar, Box, Button, ButtonGroup, CssBaseline, Paper, TextField, Toolbar } from "@mui/material";
import { Conexion } from "@/conexion";



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
    const response = await fetch(Conexion.url + `/control_entradas/documento/${cedula}`, {
      method: "POST",
      body: JSON.stringify(cedula), 
      headers: { "Content-Type": "application/json" }
    });
    if (!response.ok) {
      throw new Error("Error en la respuesta del servidor");
    }
    return response.json();
  } catch(error) {
    console.error("Error al realizar la peticion", error);
    return null;
  }
}

const Ingresos = () => {
  const inputRef = useRef(null);
  const [cedula, setCedula] = useState('');
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
          servidor();
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
    <>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <AppBar position="static" sx={{ bgcolor: "#262626", height: "80px" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%", }}>
            <Button component={Link} href="/" sx={{ color: "white" }}>
              <KeyboardReturnIcon sx={{ fontSize: 60, paddingTop: 1 }} />
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      
      <CssBaseline />
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", mt: 5 }}>     
          <Box sx={{  display: "flex", height: "530px", boxShadow: 3, borderRadius: "15px", backgroundColor: "white"  }}>
              <Paper className="" component="main">
                <Box sx={{ padding: 2 }}>
                  {online ? (
                    <WifiIcon sx={{ color: "green" }} />
                  ) : (
                    <WifiOffIcon sx={{ color: "red" }} />
                  )}

                  <Box sx={{ textAlign: "center", marginBottom: "20px", width: { xs: "100px", sm: "200px", md: "300px" }, height: "auto" }}>
                    <img src="/logo_miguelgomez-bglight.png" alt="imagenMG" style={{ width: "100%", height: "auto", objectFit: "contain" }}  />
                  </Box>
      
                  <Box component="form" onSubmit={ingreso} noValidate sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", padding: "20px" }}>
                    <TextField
                      margin="normal"
                      required
                      fullWidth
                      id="CEDULA"
                      name="CEDULA"
                      placeholder="Digite su cédula"
                      value={cedula}
                      onChange={(e) => setCedula(e.target.value)}
                      inputRef={inputRef}
                    />

                    <Button type="submit" fullWidth sx={{ mt: 2, backgroundColor: "#11eb6c", color: "white", "$:hover": { backgroundColor: "#35eb11" } }}>
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
          </Box>
        </Box> 
    </>
  );
};

export default Ingresos;

