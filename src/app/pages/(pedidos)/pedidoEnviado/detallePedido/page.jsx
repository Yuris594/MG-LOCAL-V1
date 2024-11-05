"use client";

import { Box, Button, Divider } from "@mui/material";
import NavBar from "@/app/components/navbar/nav";
import Grid from "@mui/material/Grid2";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Global } from "@/conexion";
import FacturaV from "@/app/hooks/useFacturaV";
import { useAuth } from "@/context/authContext";


const columns = [
  { field: "FKcodigo_articles", headerName: "Codigo", width: 150, },
  { field: "Nombre", headerName: "Referencia", width: 400 },
  { field: "Cantidad", headerName: "Cantidad", width: 100 },
  { field: "Precio", headerName: "Precio", width: 150,  
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }
  },
  { field: "Descuento", headerName: "Descuento", width: 150 },
  { field: "Iva", headerName: "Iva", width: 150 },
  { field: "Total", headerName: "Total", width: 150, cellClassName: 'total-cell', 
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }
  },
];

const obtenerDatos = async(clienteD) => {
    const response = await fetch(Global.url + `/pedidos/Pedidos_Enviados/${clienteD.NUMPED}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" }
    });
    if (!response.ok) {
      if (response.status === 400) {
        console.log("No hay articulos para este cliente");
        return [];
      }
    }
    return response.json();
};


const DetallePedido = () => {
  const router = useRouter();
  const { auth } = useAuth();
  const [fecha, setFecha] = useState("");
  const [articulos, setArticulos] = useState([]);
  const [clienteD, setClienteD] = useState(null);
  const [total, setTotal] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const { generarPDF } = FacturaV(clienteD, auth, articulos, total, subTotal);
 
  useEffect(() => {
    if (clienteD) {
      adquirirProductos(clienteD.NUMPED)
    }
  }, [clienteD]);

  useEffect(() => {
    const datosPedido = localStorage.getItem("detallePedido");
    if (datosPedido) {
      setClienteD(JSON.parse(datosPedido)[0]); 
    }
  }, []);

  useEffect(() => {
    if (clienteD?.Fecha) {
      const obtenerFechaActual = () => {
        const fechaPedido = new Date(clienteD.Fecha); 
        const dias = fechaPedido.getDate();
        const mes = fechaPedido.toLocaleString("es-CO", { month: "short" });
        const mesCapitalizado = mes.charAt(0).toUpperCase() + mes.slice(1);
        const anio = fechaPedido.getFullYear();
        
        const fechaFormateada = `${mesCapitalizado} ${dias}, ${anio}`;
        setFecha(fechaFormateada);
      };
      obtenerFechaActual();
    }
  }, [clienteD]);

  const adquirirProductos = async () => {
    try {
      const datos = await obtenerDatos(clienteD);
      if (datos) {
        setArticulos(datos);
      }
      console.log(datos)
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    if (articulos.length > 0) {
    
      const nuevoSubTotal = articulos.reduce((acumulador, articulo) => {
        const precioUnitario = parseFloat(articulo.Precio);
        const cantidad = parseFloat(articulo.Cantidad);
        const descuento = parseFloat(articulo.Descuento) / 100; 
        const precioConDescuento = precioUnitario * cantidad * (1 - descuento);
        return acumulador + precioConDescuento;
      }, 0);
     
      const nuevoTotal = articulos.reduce((acumulador, articulo) => {
        const precioFinal = parseFloat(articulo.Total)
        return acumulador + precioFinal 
      }, 0);

      const subTotalFormateado = Number(nuevoSubTotal.toFixed(0)).toLocaleString();
      const totalFormateado = Number(nuevoTotal.toFixed(0)).toLocaleString();  
      setSubTotal(subTotalFormateado); 
      setTotal(totalFormateado);     
    }
  }, [articulos]);


  const cerrar = () => {
    localStorage.removeItem("detallePedido");
    router.push("/pages/pedidoEnviado");
  };

  return (
    <>
      <NavBar />
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "auto", margin: 2 }}>
        <Grid container rowSpacing={2} columnSpacing={70}>
          <Grid item xs={12} sm={6} md={2}>
            <strong>MIGUEL GÓMEZ Y COMPAÑÍA S.A.S</strong>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <strong>Nombre Vendedor: </strong>{auth.UserFullName}
          </Grid>
        </Grid>
        <Box sx={{ margin: 2 }}>
          <Button onClick={generarPDF} color="success">Generar PDF</Button>
          <Button onClick={cerrar} color="error">Cerrar</Button>
        </Box>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", margin: 2 }}>
        <Grid container rowSpacing={2} columnSpacing={14}>
          <Grid item xs={12} sm={6} md={2}>
            <strong>No. Pedido: </strong>{clienteD?.NUMPED || ""}
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <strong>Fecha Pedido: </strong>{fecha || ""}
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <strong>Nit: </strong>{clienteD?.FKId_clientes || ""}
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <strong>R. Social: </strong>{clienteD?.RazonSocial || ""}
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <strong>Fecha Factura: </strong>{clienteD?.Fecha_Factura || ""}
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <strong>SubTotal: </strong><span style={{ color: "red" }}>${subTotal}</span>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <strong>Total: </strong><span style={{ color: "red" }}>${total}</span>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <strong>Documento1: </strong>{clienteD?.Documento1 || ""}
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <strong>Notas: </strong>{clienteD?.Notas || ""}
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ height: "auto", width: 'auto', margin: 2 }}>
        <DataGrid 
          rows={articulos}
          columns={columns}
          getRowId={(row) => row.FKcodigo_articles}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 }
            }
          }}
          pageSizeOptions={[10]}
          sx={{ color: "#000", bgcolor: "#fff" }}
        />
      </Box>
    </>
  );
};

export default DetallePedido;

