"use client";

import { Autocomplete, Box, Divider, IconButton, TextField } from "@mui/material";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import NavBar from "@/app/components/navbar/nav";
import { useAuth } from "@/context/authContext";
import { useCallback, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Global } from "@/conexion";


const option = async () => {
  const response = await fetch(Global.url + "/banks/list", {
    method: "GET",
    headers: { "Content-Type" : "application/json" }
  });
  const data = await response.json();
  return data;
}


const columns = [
  { field: "CONSECUTIVO", headerName: "Recibo", width: 100 },
  { field: "NIT", headerName: "NIT", width: 150 },
  { field: "RazonSocial", headerName: "Razón Social", width: 400 },
  { field: "FECHA", headerName: "Fecha Recibo", width: 200 },
  { field: "TOTAL", headerName: "Total Recibo", width: 150 },
];


const ElaborarConsignacion = () => {
  const { auth } = useAuth();
  const [fecha, setFecha] = useState("");
  const [bancos, setBancos] = useState([]);
  const [pedido, setPedido] = useState([]);
  const [comentarios, setComentarios] = useState("");
  const [selectedBankId, setSelectedBankId] = useState(null);
  const [totalConsignacion, setTotalConsignacion] = useState(0);
  const [numeroConsignacion, setNumeroConsignacion] = useState("");

  
  useEffect(() => {
    const opciones = async () => {
      const datos = await option();
        try {
          if(datos) {
            setBancos(datos)
          }
        } catch (error) {
          console.log("Error al obtener los datos del banco", error);
        }
    };
    opciones();
  }, []);

  const formatearFecha = (fecha) => {
    const opcionesFecha = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const opcionesHora = { hour: '2-digit', minute: '2-digit', hour12: true };
    
    const fechaFormateada = new Intl.DateTimeFormat('en-US', opcionesFecha).format(fecha);
    const horaFormateada = new Intl.DateTimeFormat('en-US', opcionesHora).format(fecha);
    
    return `${fechaFormateada} - ${horaFormateada.toLowerCase()}`;
  };

  useEffect(() => {
    const obtenerFecha = () => {
      const fechaActual = new Date();
      const fechaFormateada = formatearFecha(fechaActual); 
      setFecha(fechaFormateada); 
    };
    obtenerFecha();
  }, []);


  useEffect(() => {
    const reciboPendiente = async () => {
      try {
        const response = await fetch(Global.url + `/receipts/consult/Consignment?`, {
          method: "GET",
          headers: { "Content-Type" : "application/json" }
        });
        if(!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }
        const datos = await response.json();
        if(Array.isArray(datos)) {
          const filtrar = datos.filter((item) =>  item.U1 === auth.UserFullName);
          setPedido(filtrar);
        } else {
          console.log("Formato de datos inesperado", datos);
        }
      } catch (error) {
        console.log("Error al obtener los datos de Pedidos Pendientes", error)
      }
    }
    reciboPendiente();
  }, []);


  const handleRowSelection = useCallback((valores) => {
    const total = valores.reduce((acc, id) => {
      const selectedRow = pedido.find((row) => row.CONSECUTIVO === id);
      if(selectedRow && selectedRow.TOTAL) {
        let valor = selectedRow.TOTAL.toString().replace(/[$,]/g, "");
        valor = parseFloat(valor) || 0;
        return acc + valor; 
      }
      return acc;
    }, 0);

    const totalFormateado = `$${Number(total.toFixed(2)).toLocaleString()}`;
    setTotalConsignacion(totalFormateado);
  }, [pedido]);

  const crearConsignacion = async () => {
    const detalles = {
      IDBank:  selectedBankId,
      ConsignmentNumber: numeroConsignacion,
      IDUser: auth.IDSaler,
      Date: fecha,
      Ammount: totalConsignacion,
      Comentarios: comentarios
    };
    console.log("Detalles de la Consignacion", detalles);

    try {
      const response = await fetch(Global.url + '/consignments/add', {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(detalles),
      });
      const datos = await response.json();
      if (datos) {
        Swal.fire({
          icon: "success",
          title: "Consignación Creada!",
          text: "La Consignación fue Creada Correctamente."
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...!",
          text: "Ocurrio un error al crear la consignación."
        });
      }
    } catch (error) {
      console.error("Error al crear la consignación", error);
      Swal.fire({
        icon: "error",
        title: "Error de Red",
        text: "No se pudo crear la consiganción debido a un Problema de Red."
      });
    }
  }
  

  return (
    <>
      <NavBar /> 
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "auto" }}>
          <h2><strong>ELABORAR CONSIGNACIÓN</strong></h2>
          <IconButton onClick={crearConsignacion}>
            <LocalAtmIcon sx={{ fontSize: 55 }} color="primary" />
          </IconButton>
        </Box>
        <Divider />
        <Box sx={{ display: "flex", flexDirection: "column", width: "auto", margin: 4 }}>          
          <Box sx={{ display: "flex", flexDirection: "row", mb: 2,  }}>
            <strong>Banco: </strong>
            <Autocomplete 
              id="size-small-outlined"
              sx={{ width: 550, height: 40, ml: 2, mr: 2  }}
              size="small"  
              disablePortal
              options={bancos}
              getOptionLabel={(option) => option.BankName || ""}
              aria-required
              onChange={(event, newValue) => {setSelectedBankId(newValue ? newValue.ID : null)}}
              renderInput={(params) => <TextField {...params} label="Seleccione el Banco" />}
            />
            <strong>Numero de Consignación: </strong>
            <TextField 
              value={numeroConsignacion}
              onChange={(e) => setNumeroConsignacion(e.target.value)}
              id="outlined-basic"
              multiline
              size="small"  
              variant="outlined"
              sx={{ width: 300, height: 40, ml: 2 }}
            />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row", mb: 1, }}>
            <strong>Comentarios: </strong>
            <TextField 
              value={comentarios}
              onChange={(e) => setComentarios(e.target.value)}
              id="outlined-basic"
              multiline
              size="small"  
              variant="outlined"
              sx={{ width: 600, height: 40, ml: 2  }}
            />
          </Box>
        </Box>

        <Box sx={{ height: 280, width: "98%", margin: 2 }}>
          <DataGrid 
            rows={pedido}
            columns={columns}
            getRowId={(row) => row.CONSECUTIVO}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
            density="compact"
            onRowSelectionModelChange={(selectionModel) => handleRowSelection(selectionModel)}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 5
                }
              }
            }}
            />
        </Box>
        <Box sx={{ display: "flex", margin: 2 }}>
          <strong>Total Consignación: </strong>
          <TextField
            value={totalConsignacion}
            multiline
            variant="outlined"  
            fullWidth
            size="small"  
            sx={{ width: 250, height: 40, ml: 2 }}  
          />
        </Box>
    </> 
  )
}

export default ElaborarConsignacion;




