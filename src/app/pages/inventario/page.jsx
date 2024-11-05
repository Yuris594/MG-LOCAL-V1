"use client";

import { Box, Divider, TextField } from "@mui/material";
import { initDB } from "@/app/components/base/db";
import NavBar from "@/app/components/navbar/nav";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Global } from "@/conexion";


const Articulos = () => {
  const [producto, setProducto] = useState([]);
  const [busqueda, setBusqueda] = useState([]);
  const [tablaProducto, setTablaProducto] = useState([]);


  useEffect(() => {
    const conseguirProducto = async () => {
      try {
        const db = await initDB();
        const productosGuardados = await db.getAll("articles");
    
        let productosApi;
        try {
          const response = await fetch(Global.url + "/articles/articles/inventario", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          });
    
          if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.status}`);
          }
    
          const data = await response.json();
          productosApi = data.data;
    
          const datosCambiaron = JSON.stringify(productosGuardados) !== JSON.stringify(productosApi);
    
          if (datosCambiaron) {
            setProducto(productosApi);
            setTablaProducto(productosApi);
    
            console.log("Datos actualizados en IndexedDB y cargados desde la API");
          } 
        } catch (error) {
          console.log("Datos obtenidos desde IndexedDB");
          productosApi = productosGuardados;
        }
        setProducto(productosApi);
        setTablaProducto(productosApi);
      } catch (error) {
        console.log("Error al obtener los productos", error);
      }
    };
    conseguirProducto();
  }, []);

  
  const columns = [
    { field: 'PKcodigo', headerName: 'COD', width: 100, headerClassName: 'header-bold' },
    { field: 'Nombre', headerName: 'REFERENCIA', width: 400, headerClassName: 'header-bold' },
    { field: 'Sublinea', headerName: 'SUBLINEA', width: 200, headerClassName: 'header-bold' },
    { field: 'Unidad_Empaque', headerName: 'EMP', width: 80, headerClassName: 'header-bold' },
    { field: 'Precio', headerName: 'PRECIO', width: 90, headerClassName: 'header-bold' },
    { field: 'Iva', headerName: 'IVA', width: 80, headerClassName: 'header-bold' },
    { field: 'Descuento', headerName: 'DES', width: 90, headerClassName: 'header-bold' },
    { field: 'Precio_Neto', headerName: 'NETO', width: 80, headerClassName: 'header-bold' },
    { field: 'Disp', headerName: 'DISP', width: 80, headerClassName: 'header-bold' },
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    const resultadoBusqueda = tablaProducto.filter((elemento) => {
      const valores = Object.values(elemento).map((value) => 
        value ? value.toString().toLowerCase() : ""
      );
      return valores.some((valor) => valor.includes(terminoBusqueda.toLowerCase()));
    });
    setProducto(resultadoBusqueda);
  };


  return (
    <>
      <NavBar />    
      <div style={{ height: "70%", width: "100%", backgroundColor: "#ffffff" }}>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "auto", margin: 2 }}>
          <h2><strong>LISTADO DE ARTICULO</strong></h2>
        </Box>
        <Divider />
        <TextField 
          id="outlined-basic"
          label="Digite Codigo o Referencia para Buscar"
          multiline
          rows={1}
          variant="outlined"
          value={busqueda}
          onChange={handleChange}
          sx={{ width: "95%", height: "10%", margin: 2}}
        />

        <Box sx={{ width: "auto", height: 1190, margin: 2  }}>
          <DataGrid 
            rows={producto}
            columns={columns}
            getRowId={(row) => row.PKcodigo}
            initialState={{
              pagination: {
                paginationModel: { pageSize: 20 }
              }
            }}
            pageSizeOptions={[20]}
          />
        </Box>
      </div>
    </>
  )
}

export default Articulos;



