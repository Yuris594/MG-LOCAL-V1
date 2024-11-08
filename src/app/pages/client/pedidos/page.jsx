"use client";

import { Box, Button, Divider, Modal, TextField, Typography, useMediaQuery } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import NavBar from "@/app/components/navbar/nav";
import { useAuth } from "@/context/authContext";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { IconButton } from '@mui/material';
import Articulos from "./articulo/page";
import Grid from "@mui/material/Grid2";
import { Global } from "@/conexion";
import Swal from "sweetalert2";
import Link from "next/link";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxHeight: "90vh",  
  maxWidth: "80vw",
  overflowY: "auto",
  overflowX: "hidden",
  padding: "16px",
  bgcolor: "#fff",
  border: "2px solid #000",
  boxShadow: 24, 
};


const CrearPedido = () => {
  const router  = useRouter();
  const { auth, clienteV } = useAuth();
  const [fecha, setFecha] = useState("");
  const [total, setTotal] = useState("");
  const [notas, setNotas] = useState("");
  const [open, setOpen] = useState(false);
  const [fechas, setFechas] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const [documento, setDocumento] = useState("");
  const [articulosSeleccionados, setArticulosSeleccionados] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");


  const columns = [
    { field: 'PKcodigo', headerName: 'Codigo', width: 150 },
    { field: 'Nombre', headerName: 'Referencia', width: 350 },
    { field: 'Unidad_Empaque', headerName: 'Und Empaque', width: 100 },
    { field: 'Precio', headerName: 'Precio', width: 100,
      valueFormatter: (value) => {
        const precioRedondeado = Number(value).toFixed(0);
        return `${parseFloat(precioRedondeado).toLocaleString()}`;
      }
    },
    { field: 'Iva', headerName: 'Iva', width: 90 },
    { field: 'Descuento', headerName: 'Desc', width: 90 },
    { field: 'cantped', headerName: 'Cant', width: 90 },
    { field: 'Total', headerName: 'Total', width: 100, 
      valueFormatter: (value) => {
        const precioRedondeado = Number(value).toFixed(0);
        return `${parseFloat(precioRedondeado).toLocaleString("es-ES")}`;
      }, cellClassName: 'total-cell', 
    },
    { field: 'actions', headerName: '', width: 70, 
      renderCell: (params) => (
        <IconButton onClick={() => handleDelete(params.row)} aria-label="cancel" color="error" sx={{ fontSize: 40 }}>
          <CancelIcon />
        </IconButton>
      ),
    },
  ];
  
  const handleDelete = (row) => {
    Swal.fire({
      title: "¿Seguro que desea eliminar el articulo?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Aceptar"
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedArticulos = articulosSeleccionados.filter((art) => art.PKcodigo !== row.PKcodigo);
        setArticulosSeleccionados(updatedArticulos);
        calcularTotales(updatedArticulos);
        Swal.fire("Eliminado", "El artículo ha sido eliminado", "success");
      }
    });
  };

  const agregarArticulo = (nuevosArticulos) => {
    const articulosConTotal = nuevosArticulos.map((art) => {
      const precioUnitario = art.Precio * (1 + art.Iva / 100);
      const cantidad = parseFloat(art.cantped);
      const descuento = parseFloat(art.Descuento) / 100; 
      const total = precioUnitario * cantidad * (1 - descuento);
      return {
        ...art,
        Total: total.toFixed(0),
      };
    });
    const articulosActualizados = [...articulosSeleccionados, ...articulosConTotal];
    setArticulosSeleccionados(articulosActualizados);
    calcularTotales(articulosActualizados);
  };

  const calcularTotales = (articulos) => {
    const nuevoSubtotal = articulos.reduce((acumulador, art) => {
      return acumulador + parseFloat(art.Precio) * art.cantped;
    }, 0);

    const nuevoTotal = articulos.reduce((acumulador, art) => {
      return acumulador + parseFloat(art.Total);
    }, 0);

    const subTotalFormateado = Number(nuevoSubtotal.toFixed(0)).toLocaleString();
    const totalFormateado = Number(nuevoTotal.toFixed(0)).toLocaleString();
    setSubTotal(subTotalFormateado);
    setTotal(totalFormateado);
    
  };

  const guardarPedido = () => {
    const pedidosGuardados = JSON.parse(localStorage.getItem("pedidos")) || [];
    
    let ultimoId = 0;
    if (pedidosGuardados.length > 0) {
      ultimoId = Math.max(...pedidosGuardados.map(pedido => pedido.PKId));
    }
    const nuevoId = ultimoId + 1;

    const pedido = {
      PKId: nuevoId,
      Fecha: fechas,
      nombreC: clienteV.RazonSocial,
      NitC: clienteV.NIT,
      total,
      NombreV: auth.UserFullName,
      FKID_sellers: auth.IDSaler,
      Notas: notas,
      NUMPED: "",
      Documento1: documento, 
      pkid: nuevoId,
      FKId_clientes: clienteV.NIT,
      articulos: articulosSeleccionados,
    };

    pedidosGuardados.push(pedido);
    localStorage.setItem("pedidos", JSON.stringify(pedidosGuardados));
  
    router.push("../../pages/pedidoSinEnviar");

    Swal.fire({
      title: "Pedido guardado",
      text: "El pedido ha sido guardado correctamente.",
      icon: "success",
      showConfirmButton: false,
      timer: 3000
    });
  };

  const obtenerConse = async () => {
    try {
      const response = await fetch(Global.url + `/pedidos/${auth.IDSaler}`, {
        method: "GET",
        headers: { "Content-Type" : "application/json" },
      });
      
      if (!response.ok) {
        throw new Error(`Error al obtener el consecutivo: ${response.status} ${response.statusText}`);
      }

      const datos = await response.json();
      if (!datos[0].consecutivo || !datos[0].Prefijo) {
        throw new Error("Los campos 'consecutivo' o 'Prefijo' no se encontraron en la respuesta.");
      }

      return datos[0];
    } catch (error) {
      console.error("Error al obtener el consecutivo:", error);
      throw error;
    }
  };


  const enviarPedido = async () => {
    try {
      const datosConse = await obtenerConse();
      const conseActualizado = datosConse.consecutivo + 1;
      const NUMPED = `${datosConse.Prefijo}${conseActualizado}`; 
    
      const pedido = {
        FKID_sellers: auth.IDSaler,
        Notas: notas,
        FKId_clientes: clienteV.NIT,
        Fecha: fechas,
        NUMPED,
        Documento1: documento,
      };
      console.log(pedido);
    
      const encabezadoResponse = await fetch(Global.url + '/pedidos/', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pedido),
      });
  
      if(!encabezadoResponse.ok) {
        const errorResponse = await encabezadoResponse.json();
        console.error("Error al crear el pedido", errorResponse);
        throw new Error("Error al crear el encabezado del pedido");
      } 

      const detallePedido = articulosSeleccionados.map(art => ({
        FKcodigo_articles: art.PKcodigo,
        Cantidad: art.cantped,
        Precio: art.Total,
        Descuento: art.Descuento,
        Iva: art.Iva,
        Total: art.Total,
        FKNUMPED: NUMPED,
        BODEGA: art.BODEGA
      }));
      console.log(detallePedido);

      const detalleResponse = await fetch(Global.url + `/pedidos/${NUMPED}`, {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(detallePedido),
      });
      
      if(!detalleResponse.ok) {
        const errorResponse = await detalleResponse();
        console.error("Error al crear el detalle de pedido", errorResponse);
        throw new Error("Error al crear el detalle del pedido");
        
      } 

      if(encabezadoResponse && detalleResponse) {
        Swal.fire({
          title: "Pedido Creado!",
          text: "El Pedido ha sido Creado Correctamente.",
          icon: "success",
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        console.log("Error al crear el pedido")
      }
    } catch (err) {
      console.error("Error:", err);
      Swal.fire({
        title: "Oops...!",
        text: "Hubo un Problema al Enviar el Pedido.",
        icon: "error",
      });
    }
  };



  useEffect(() => {
    const obtenerFecha = () => {
      const fechaActual = new Date().toISOString();
      setFechas(fechaActual);
    };
    obtenerFecha();
  }, []);
  
  useEffect(() => {
    const obtenerFechaActual = () => {
      const fechaActual = new Date();
      const dias = fechaActual.getDate();
      const mes = fechaActual.toLocaleString("es-CO", { month: "short" });
      const mesCapitalizado = mes.charAt(0).toUpperCase() + mes.slice(1);
      const anio = fechaActual.getFullYear();
      
      const fechaFormateada = `${mesCapitalizado} ${dias}, ${anio}`;
      setFecha(fechaFormateada);
    };
    obtenerFechaActual();
  }, []);

  
  return (
    <>
      <NavBar />
        <Grid container spacing={2} direction={isSmallScreen ? "column" : "row"} alignItems="center" justifyContent="space-between">
          <h2><strong>DIGITAR PEDIDO</strong></h2>
          <Grid size={{ xs: 12, sm: 6 }} sx={{ padding: 2 }}>
            <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", justifyContent: "center", alignItems: "center" }}>
              <Button onClick={handleOpen} variant="contained" sx={{ margin: 1, backgroundColor:"#4eeacb", color: "white" }}>Articulos</Button>
              <Button onClick={guardarPedido} variant="contained" sx={{ margin: 1, backgroundColor: '#8334f0', color: 'white' }}>Guardar</Button>
              <Button onClick={enviarPedido} variant="contained" sx={{ margin: 1 }} color="success">Enviar</Button>
              <Button variant="contained" sx={{ ml: 1, mr: 2 }} color="error" LinkComponent={Link} href="../client">Cerrar</Button>
            </Box>
          </Grid>
        </Grid>

        <Divider />

        <Grid size={{ xs: 12, sm: 6 }} sx={{ marginRigth: 4, padding: 2 }}>
          <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", justifyContent: "center", alignItems: "center" }}>
            <Typography sx={{ color:"#1947ee", fontWeight: "bold", marginRigth: 4 }} variant="subtitle2" gutterBottom>{fecha}</Typography>
            <Typography sx={{ color:"#1947ee", fontWeight: "bold", marginRigth: 4 }} variant="subtitle2" gutterBottom>{clienteV.RazonSocial}</Typography>
            <Typography sx={{ color:"#1947ee", fontWeight: "bold"  }} variant="subtitle2" gutterBottom>{clienteV.NIT}</Typography>
          </Box>
        </Grid>

        <Grid size={{ xs: 12, sm: 6 }} sx={{ padding: 2 }}>
          <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", justifyContent: "center", alignItems: "center", gap: 2, width: isSmallScreen ? "100%" : "auto" }}>
            <TextField
              id="standard-multiline-flexible"
              label="Ingresar Notas"
              multiline
              maxRows={8}
              variant="outlined"
              value={notas} 
              onChange={(e) => setNotas(e.target.value)}
              sx={{ width: 200 }}
            />
            <TextField 
              id="standard-multiline-flexible"
              label="Documento"
              multiline
              maxRows={2}
              variant="outlined"
              value={documento}
              onChange={(e) => setDocumento(e.target.value)}
              sx={{ width: 200 }}
            />

            <Typography variant="body1">
              SubTotal: <span style={{ color: "red" }}>${subTotal}</span>
            </Typography>
            <Typography variant="body1">
              Total: <span style={{ color: "red" }}>${total}</span>
            </Typography>
          </Box>
        </Grid>

        <Grid size={12} sx={{ flexGrow: 1, marginBottom: 2 }}>
          <Box sx={{ width: "100%", heigth: isSmallScreen ? 500 : 750 }}>
            <DataGrid 
              rows={articulosSeleccionados} 
              columns={columns}
              getRowId={(row) => row.PKcodigo}
              rowHeight={40}
              pageSizeOptions={[10]} 
              initialState={{ 
                pagination: { 
                  paginationModel: { 
                    pageSize: 10 
                  }
                } 
              }}
              sx={{ bgColor: "#ffffff" }} 
            />
          </Box>
        </Grid>

        <Modal 
          open={open} 
          onClose={handleClose} 
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <Articulos handleClose={handleClose} onAgregarArticulo={agregarArticulo} />
          </Box>
        </Modal>
    </>
  );
};

export default CrearPedido;



