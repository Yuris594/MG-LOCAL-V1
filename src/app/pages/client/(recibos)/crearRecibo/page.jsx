"use client";

import { Box, Checkbox, Divider, FormControlLabel, IconButton, TextField, Typography, useMediaQuery } from "@mui/material";
import CheckCircleIcon  from "@mui/icons-material/CheckCircle";
import CancelIcon  from "@mui/icons-material/Cancel";
import NavBar from "@/app/components/navbar/nav";
import { useAuth } from "@/context/authContext";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Global } from "@/conexion";
import Swal from "sweetalert2";
import Link from "next/link";


const adquirirDatos = async (recibo) => {
  const response = await fetch(Global.url + `/gestioncartera/cartera/${recibo.nit}`, {
    method: "GET",
    headers: { "Content-Type" : "application/json" }
  });
  const data = await response.json();
  return data;
};


const RealizarRecibo = () => {
  const { auth, clienteV } = useAuth();
  const [total, setTotal] = useState("");
  const [fecha, setFecha] = useState("");
  const [recibo, setRecibo] = useState([]);
  const [abonar, setAbonar] = useState({});
  const [boton, setBoton] = useState(false);
  const [recibos, setRecibos] = useState("");
  const [cheques, setCheques] = useState("");
  const [comentarios, setComentarios] = useState("");
  const isSmallScreen = useMediaQuery("(max-width: 600px)")

  useEffect(() => {
    const obtenerFecha = () => {
      const fechaActual = new Date().toISOString();
      setFecha(fechaActual);
    };
    obtenerFecha();
  }, []);
  

  const handleCheckbox = (e) => {
    if (e.target.name === "Cheque") {
      setCheques("Si");
    } else {
      setCheques("No")
    }
    verificar();
  };

  useEffect(() => {
    const obtenerDatos = async () => {
      if (clienteV && clienteV.NIT) {
        const data = await adquirirDatos({ nit: clienteV.NIT });
        const datos = data.data;
        if (datos && datos.length > 0) {
          setRecibo(datos);
          console.log("Datos obtenidos correctamente");
        }
      } else {
        console.log("Error al obtener los datos");
      }
    };
    obtenerDatos(); 
  }, [clienteV]);


  const fDate = (dateString) => {
    const options = {
      year: "numeric",
      day: "numeric",
      month: "numeric",
    };
    return new Date(dateString).toLocaleDateString("es-ES", options);
  };

  const handleAbonar = (Documento, value) => {
    const newRecibo = recibo.map((item) => {
      if (item.Documento === Documento) {
        let saldoLimpio = parseFloat(item.Saldo.replace(/[$,]/g, "")) || 0;
        if(saldoLimpio <= 0) {
          Swal.fire({
            icon: "error",
            title: "Error, Llamar a Cartera!",
            text: "Esta factura esta pendiente por asentar."
          });

          return item;
        } else {
          return { ...item, valorAPagar: parseFloat(value) || 0 }
        }
      }

      return item;
    });
    
    setRecibo(newRecibo);
    setAbonar({
      ...abonar,
      [Documento]: value
    });
    calcularTotal(newRecibo); 
  };
  
  const handleCheckboxChange = (event, row) => {
    const isChecked = event.target.checked;
    const updatedRecibo = recibo.map((item) => 
      item.Documento === row.Documento
      ? { 
        ...item, 
        selected: isChecked, 
        valorAPagar: isChecked ? item.Saldo : 0, 
        inputDisabled: isChecked
      }
      : item
    );
    setRecibo(updatedRecibo);
    calcularTotal(updatedRecibo);
  };
  

  const columns = [
    { field: 'Documento', headerName: 'Documento', width: 150 },
    { field: 'TipoDocumento', headerName: 'Tipo', width: 150 },
    { field: 'Monto', headerName: 'Monto', width: 150 },
    { field: 'FechaDocumento', headerName: 'Fecha Documento', width: 150, 
      renderCell: (params) => fDate(params.value),
    },
    { field: 'FechaVencimiento', headerName: 'Fecha Vencimiento', width: 150 },
    { field: 'Plazo', headerName: 'Plazo (Días)', width: 150 },
    { field: 'DiasVencimiento', headerName: 'Días Vencidos', width: 150 },
    { field: 'Saldo', headerName: 'Saldo', width: 150 },
    { field: "boton", headerName: "", width: 70, 
      renderCell: (params) => (
        <Checkbox
          checked={params.row.selected || false}
          onChange={(event) => handleCheckboxChange(event, params.row)}
        />
      ),
    },
    { field: "cuadro", headerName: "", width: 150, 
      renderCell: (params) => (
        <TextField
          size="small"
          value={params.row.inputDisabled ? "" : abonar[params.row.Documento] || ""}
          onChange={(e) => handleAbonar(params.row.Documento, e.target.value)}
          disabled={params.row.inputDisabled}
          sx={{ width: "120px" }}
        />
      ),
    },
    { field: 'pago', headerName: 'Valor a Pagar', width: 150, 
      renderCell: (params) => (
        <TextField
          size="small"
          value={`${params.row.valorAPagar !== undefined && params.row.valorAPagar !== null ? params.row.valorAPagar : 0}`} 
          sx={{ width: "120px" }}
          InputProps={{
            readOnly: true, 
          }}
        />
      ),
    },
    { field: 'StateName', headerName: 'Estado', width: 150, cellClassName: 'total-cell' } 
  ];


  const calcularTotal = (valores) => {
    const total = valores.reduce((acumulador, item) => {
      let valor = item.valorAPagar ? item.valorAPagar.toString().replace(/[$,]/g, "") : "0";
      valor = parseFloat(valor) || 0;
      return acumulador + valor;
    }, 0);

    const totalFormateado = `$${Number(total.toFixed(2)).toLocaleString()}`;
    setTotal(totalFormateado);
    verificar();
  };


  const crearRecibo = async () => {
    const datosRecibo = {
      FECHA: fecha,
      NIT: clienteV.NIT,
      RazonSocial: clienteV.RazonSocial,
      TOTAL: total.replace(/[$]/g, '').replace(/[,]/g, ''),
      IDUser1: auth.IDSaler,
      ReciboFisico: recibos,
      Comentarios: comentarios,
      HasChecks: cheques,
    };
    console.log(datosRecibo);

    try {
      const response = await fetch(Global.url + '/receipts/saveCustomersReceipts', {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(datosRecibo)
      });
      const datos = await response.json();

      if (datos) {
        Swal.fire({
          icon: "success",
          title: "Recibo Creado!",
          text: "El Recibo fue Creado Correctamente."
        });
      } else {
        console.log("Error al crear el recibo", response.statusText);
      }
    } catch (error) {
      console.log("Error de conexion", error);
      Swal.fire({
        icon: "error",
        title: "Error de Conexión",
        text: "No se pudo crear el recibo."
      });
    }
  };


  const verificar = () => {
    const totalValido = total && total.trim() !== "";
    const chequeSeleccionado = cheques === "Si";

    const opcionesSeleccionadas = 
    document.querySelector('input[name="Efectivo"]:checked') ||
    document.querySelector('input[name="Cheque"]:checked') ||
    document.querySelector('input[name="Consignación"]:checked');

    setBoton(totalValido && opcionesSeleccionadas !== null);
  };

  useEffect(() => {
    verificar();
  }, [total, cheques]);


  return (
    <>
      <NavBar />
      <Box sx={{ padding: 2 }}>
        <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Grid size={{ xs: 12, sm: 6 }}>
            <h4><strong>Nit: {clienteV.NIT} </strong></h4>
            <h4><strong>Razón Social: {clienteV.RazonSocial} </strong></h4>
            <h4><strong>Email: {clienteV.Email} </strong></h4>
          </Grid>

          <Grid size={{ xs: 12, sm: "auto" }} container justifyContent={isSmallScreen ? "center" : "flex-end"}>
            <IconButton onClick={crearRecibo} color="success" disabled={!boton}>
              <CheckCircleIcon sx={{ fontSize: 40 }} />
            </IconButton>
            <IconButton color="error" LinkComponent={Link} href="../client">
              <CancelIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Grid>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Grid container spacing={2} sx={{ flexDirection: isSmallScreen ? "column" : "row" }}>
            <TextField 
              id="outlined-basic"
              label="Escribir Comentario"
              multiline
              variant="outlined"
              size="small"  
              value={comentarios}
              onChange={(e) => setComentarios(e.target.value)}
              fullWidth
            />

            <Grid size={{ xs: 12, md: 6 }}>
              <TextField 
                id="standard-multiline-flexible"
                label="Digite Recibo"
                multiline
                fullWidth
                size="small"
                variant="outlined"
                value={recibos}
                onChange={(e) => setRecibos(e.target.value)}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <TextField 
                id="standard-multiline-flexible"
                label="Total"
                multiline
                size="small"
                fullWidth
                variant="outlined"
                value={total} 
                sx={{ bgcolor: "#fff", color: "#ff0000" }}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 3 }} container spacing={1} sx={{ flexDirection: isSmallScreen ? "column" : "row" }}>
              <Grid size={{ xs: 4 }}>
                <FormControlLabel control={<Checkbox name="Efectivo" onChange={handleCheckbox} />} label="Efectivo" />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <FormControlLabel control={<Checkbox name="Cheque" onChange={handleCheckbox} />} label="Cheque" />
              </Grid>
              <Grid size={{ xs: 4 }}>
                <FormControlLabel control={<Checkbox name="Consignación" onChange={handleCheckbox} />} label="Consignación" />
              </Grid>
            </Grid>
          </Grid>
        </Box>

        <Grid size={12} sx={{ flexGrow: 1, marginBottom: 2 }}>
          <Box sx={{ width: "100%", heigth: isSmallScreen ? 300 : 400 }}>
            <DataGrid 
              rows={recibo}  
              columns={columns}
              getRowId={(row) => row.Documento}
              initialState={{
                pagination: {
                  paginationModel: { pageSize: 5 }
                }
              }}
              pageSizeOptions={[5]}
            />
          </Box>
        </Grid>
      </Box>
    </>
  )  
}

export default RealizarRecibo;