"use client";

import { Box, Button, Divider, Modal, TextField, Typography, useMediaQuery } from "@mui/material";
import Articulos from "@/app/pages/client/pedidos/articulo/page";
import CancelIcon from "@mui/icons-material/Cancel";
import { useAuth } from "@/context/authContext";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { IconButton } from '@mui/material';
import Grid from "@mui/material/Grid2"; 
import { Global } from "@/conexion";
import Swal from "sweetalert2";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%", 
  maxHeight: "90vh",  
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  overflow: "auto",  
  p: 4,
  zIndex: 1300
};

const DatosPedido = ({ pedido, handleClose }) => {
  const { auth } = useAuth();
  const [nit, setNit] = useState("");
  const [notas, setNotas] = useState("");
  const [total, setTotal] = useState("");
  const [fecha, setFecha] = useState("");
  const [open, setOpen] = useState(false);
  const [nombre, setNombre] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const [documento, setDocumento] = useState("");
  const [itemDelete, setItemDelete] = useState("");
  const [openDelete, setOPenDelete] = useState("");
  const [articulosSeleccionados, setArticulosSeleccionados] = useState([]);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const handleOpen = () => setOpen(true);
  const handleCloseA = () => setOpen(false);


  useEffect(() => {
    if (pedido) { 
      const pedidosGuardados = JSON.parse(localStorage.getItem("pedidos")) || [];
      const pedidoSeleccionado = pedidosGuardados.find(p => p.PKId === pedido.PKId); 
      if (pedidoSeleccionado) {
        setArticulosSeleccionados(pedidoSeleccionado.articulos);
        setTotal(pedidoSeleccionado.total);
        calcularTotales(pedidoSeleccionado.articulos);
        setFecha(formatFecha(pedidoSeleccionado.Fecha));
        setNombre(pedidoSeleccionado.nombreC);
        setNit(pedidoSeleccionado.NitC);
        setNotas(pedidoSeleccionado.Notas);
        setDocumento(pedidoSeleccionado.Documento1);
      }
    }
  }, [pedido]); 

  const formatFecha = (fechaIso) => {
    const fechaActual = new Date(fechaIso);
      const dias = fechaActual.getDate();
      const mes = fechaActual.toLocaleString("es-CO", { month: "short" });
      const mesCapitalizado = mes.charAt(0).toUpperCase() + mes.slice(1);
      const anio = fechaActual.getFullYear();
      
      return `${mesCapitalizado} ${dias}, ${anio}`;
  }

  const columns = [
    { field: 'PKcodigo', headerName: 'Codigo', width: 100 },
    { field: 'Nombre', headerName: 'Referencia', width: 320 },
    { field: 'Unidad_Empaque', headerName: 'Und', width: 80 },
    { field: 'Precio', headerName: 'Precio', width: 100,
      valueFormatter: (value) => {
        const precioRedondeado = Number(value).toFixed(0);
        return `$${parseFloat(precioRedondeado).toLocaleString("es-ES")}`;
      }
    },
    { field: 'Iva', headerName: 'Iva', width: 80 },
    { field: 'Descuento', headerName: 'Desc', width: 80 },
    { field: 'cantped', headerName: 'Cant', width: 80 },
    { field: 'Total', headerName: 'Total', width: 90, 
      valueFormatter: (value) => {
        const precioRedondeado = Number(value).toFixed(0);
        return `$${parseFloat(precioRedondeado).toLocaleString("es-ES")}`;
      },
    },
    { field: 'actions', headerName: '', width: 70, 
      renderCell: (params) => (
        <IconButton
          onClick={() => handleDelete(params.row)}
          aria-label="cancel"
          color="error"
          sx={{ fontSize: 40 }}
        >
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
      confirmButtonText: "Aceptar",
      customClass: {
        popup: "swal-popup-zindex"
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedArticulos = articulosSeleccionados.filter((art) => art.PKcodigo !== row.PKcodigo);
        setArticulosSeleccionados(updatedArticulos);
        calcularTotales(updatedArticulos);
      }
    });
  };

  const calcularTotales = (articulos) => {
    let total = 0;
    let subTotal = 0;
    articulos.forEach((art) => {
      const cantidad = parseFloat(art.cantped) || 0;
      const precio = parseFloat(art.Precio) || 0;
      const descuento = (parseFloat(art.Descuento) || 0) / 100;
      const iva = (parseFloat(art.Iva) || 0) / 100;

      const totalArt = cantidad * precio;
      const totalDescuento = totalArt * descuento;
      const totalIva = (totalArt - totalDescuento) * iva;

      total += totalArt - totalDescuento + totalIva;
      subTotal += totalArt - totalDescuento;
    });
    setTotal(total.toFixed(0));
    setSubTotal(subTotal.toFixed(0));
  };


  const agregarArticulo = (nuevosArticulos) => {
    const articulosConTotal = nuevosArticulos.map((art) => {
      const precioConIva = art.Precio * (1 + art.Iva / 100);
      const total = precioConIva * art.cantped;
      return {
        ...art,
        Total: total.toFixed(0),
      };
    });

    const articulosActualizados = [...articulosSeleccionados, ...articulosConTotal];
    setArticulosSeleccionados(articulosActualizados);
    calcularTotales(articulosActualizados);
  };


  const GuardarCambios = () => {
    const pedidosGuardados = JSON.parse(localStorage.getItem("pedidos")) || [];
    const pedidoIndex = pedidosGuardados.findIndex(p => p.PKId === pedido.PKId);

    if (pedidoIndex !== -1) {
      const updatedPedido = {
        ...pedidosGuardados[pedidoIndex],
        articulos: articulosSeleccionados,
        total,
        subTotal,
        notas,
        documento,
      };

      pedidosGuardados[pedidoIndex] = updatedPedido; 
      localStorage.setItem("pedidos", JSON.stringify(pedidosGuardados)); 

      handleClose(); 

      Swal.fire({
        position: 'top-end',
        title: 'Éxito',
        text: 'Los cambios se han guardado correctamente.',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000
      });
    } else {
      Swal.fire({
        title: 'Error',
        text: 'No se encontró el pedido a actualizar.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
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
        RazonSocial: clienteV.RazonSocial,
        Fecha: fechas,
        Documento1: documento,
        NUMPED,
        Numero_Factura: "" ,
        Fecha_Factura: "" ,
      };
      console.log(pedido);

      const encabezadoResponse = await fetch(Global.url + '/pedidos/', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pedido),
      });
  
      if(!encabezadoResponse.ok) throw new Error("Error al crear el encabezado del pedido");

      const detallePedido = articulosSeleccionados.map(art => ({
        FKId_clientes: clienteV.NIT,
        RazonSocial: clienteV.RazonSocial,
        Nombre: art.Nombre,
        FKcodigo_articles: art.PKcodigo,
        Cantidad: art.cantped,
        Precio: art.Total,
        Descuento: art.Descuento,
        Iva: art.Iva,
        BODEGA: art.BODEGA,
        FKNUMPED: NUMPED,
        Notas: notas,
        Documento1: documento,
        Fecha: fechas,
      }));
      console.log(detallePedido);

      const detalleResponse = await fetch(Global.url + `/pedidos/${NUMPED}`, {
        method: "POST",
        headers: { "Content-Type" : "application/json" },
        body: JSON.stringify(detallePedido),
      });
      if(!detalleResponse.ok) throw new Error("Error al crear el detalle del pedido");

      Swal.fire({
        title: "Pedido Creado!",
        text: "El Pedido ha sido Creado Correctamente.",
        icon: "success",
        showConfirmButton: false,
        timer: 3000,
      });
    } catch (err) {
      console.error("Error:", err);
      Swal.fire({
        title: "Oops...!",
        text: "Hubo un Problema al Enviar el Pedido.",
        icon: "error",
      });
    }
  };


  return (
    <>
      <Grid container spacing={2} direction={isSmallScreen ? "column" : "row"} alignItems="center" justifyContent="space-between">
        <h3><strong>DIGITAR PEDIDO</strong></h3>
        <Grid size={{ xs: 12, sm: 6 }} sx={{ padding: 2 }}>
          <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", justifyContent: "center", alignItems: "center" }}>
            <Button onClick={handleOpen} variant="contained" sx={{ margin: 1, backgroundColor:"#4eeacb", color: "white" }}>Articulos</Button>
            <Button onClick={enviarPedido} variant="contained" sx={{ margin: 1, backgroundColor:"#25ba25", color: "white" }}>Enviar</Button>
            <Button onClick={GuardarCambios} variant="contained" sx={{ margin: 1, backgroundColor:"#d92020", color: "white" }}>Guardar y Cerrar</Button>
          </Box>
        </Grid>
      </Grid>

      <Divider />

      <Grid size={{ xs: 12, sm: 6 }} sx={{ marginRigth: 4, padding: 2 }}>
        <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", justifyContent: "center", alignItems: "center" }}>
          <Typography sx={{ color:"#1947ee", fontWeight: "bold" }} variant="subtitle2" gutterBottom>{fecha}</Typography>
          <Typography sx={{ color:"#1947ee", fontWeight: "bold"  }} variant="subtitle2" gutterBottom>{nombre}</Typography>
          <Typography sx={{ color:"#1947ee", fontWeight: "bold"  }} variant="subtitle2" gutterBottom>{nit}</Typography>
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
            defaultValue={notas}
            sx={{ width: 200 }}
          />
        
          <TextField 
            id="standard-multiline-flexible"
            label="Documento"
            multiline
            maxRows={2}
            variant="outlined"
            defaultValue={documento}
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
          />
        </Box>
      </Grid>

      <Modal open={open} onClose={handleCloseA}>
        <Box sx={style}>
          <Articulos handleClose={handleCloseA} onAgregarArticulo={agregarArticulo}  />
        </Box>
      </Modal>
    </>
  );
};

export default DatosPedido;