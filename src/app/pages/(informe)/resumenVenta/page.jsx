"use client";

import { Global } from "@/conexion";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/authContext";
import NavBar from "@/app/components/navbar/nav";
import { Box, Divider, InputBase } from "@mui/material";


const columns = [
  { field: 'TIPO', headerName: 'DESCRIPCIÓN', width: 200, headerClassName: 'header-bold' },
  { field: 'VENTA', headerName: 'VENTA REAL', width: 150, 
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, align: "right", headerClassName: 'header-bold'
  },
  { field: 'CUOTA', headerName: 'CUOTA', width: 150, 
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, align: "right", headerClassName: 'header-bold'
  },
  { field: 'CUM', headerName: 'CUM', width: 100, cellClassName: 'total-cell', 
    valueFormatter: (value) => {
      return value !== null && value !== undefined ? `${Number(value).toFixed(1)}%` : '0%';
    }, align: "right", headerClassName: 'header-bold'
  },
  { field: 'PORFACTURAR', headerName: 'POR FACTURAR', width: 170, 
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, align: "right", headerClassName: 'header-bold'
  },
  { field: 'VENTAEST', headerName: 'VENTA ESTIMADA', width: 190, 
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, align: "right", headerClassName: 'header-bold'
  },
  { field: 'CUMEST', headerName: 'CUM EST', width: 100, cellClassName: 'total-cell', 
    valueFormatter: (value) => {
      return value !== null && value !== undefined ? `${Number(value).toFixed(1)}%` : '0%';
    }, align: "right", headerClassName: 'header-bold'
  },
  { field: 'NOTAS', headerName: 'OTROS', width: 100, headerClassName: 'header-bold' },
];

const GestionCartera = () => {
  const { auth } = useAuth();
  const [resumen, setResumen] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [tablaResumen, setTablaResumen] = useState([]);
  
  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const response = await fetch(Global.url + `/informes/ventas/${auth.IDSaler}`, {
          method: "GET",
          headers: { "Content-Type" : "application/json" }
        });

        if (!response.ok) {
          throw new Error(`Error en la solicitud: ${response.status}`);
        }

        const datos = await response.json();
        datos.sort((a, b) => a.TIPO.localeCompare(b.TIPO));

        setResumen(datos);
        setTablaResumen(datos);
      } catch (error) {
        console.log("Error al obtener datos", error)
      }
    };
    obtenerDatos();
  }, []);


  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    const resultadoBusqueda = tablaResumen.filter((elemento) => {
      const valores = Object.values(elemento).map((value) => 
        value ? value.toString().toLowerCase() : ""
      );
      return valores.some((valor) => valor.includes(terminoBusqueda.toLowerCase()));
    });
    setResumen(resultadoBusqueda);
  };


  return (
    <>
      <NavBar />
        <Box sx={{ margin: 5 }}>
          <Box sx={{ display: "flex", flexDirection: "row",  justifyContent: "space-between", alignItems: "center" }}>
            <h2><strong>RESUMEN VENTA ACTUAL</strong></h2>
            <InputBase sx={{ ml: 1, flex: 1, justifyContent: "flex-end", maxWidth: "400px", border: "2px solid black", 
            height: "40px", borderRadius: "4px", p: 1, mb: 1 }}
            type="text"
            value={busqueda}
            onChange={handleChange} 
            placeholder="Buscar..."
            />
          </Box>
          <Divider />
          <Box sx={{ height: "auto", width: 'auto', margin: 2 }}>
            <DataGrid 
              rows={resumen}
              columns={columns}
              getRowId={(row) => row.TIPO}
              initialState={{
                  pagination: {
                      paginationModel: { page: 0, pageSize: 12 }
                  }
              }}
              pageSizeOptions={[12]}
            />
          </Box>
      </Box>
    </>
  );
}

export default GestionCartera;

