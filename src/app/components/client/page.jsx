"use client";

import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

const columns = [
  { field: "NIT", headerName: "NIT", width: 170 },
  { field: "RazonSocial", headerName: "NOMBRE", width: 500 },
  { field: "Direccion", headerName: "DIRECCIÓN", width: 300 },
  { field: "Telefono", headerName: "TELEFONO", width: 190 },
  { field: "PER_Nom", headerName: "VENDEDOR", width: 200 },
  { field: "TotalCartera", headerName: "CARTERA", type: "number", width: 120,
    valueFormatter: (params) => {
      const TotalCartera = params.value; 
      const precioRedondeado = Number(TotalCartera).toFixed(0); 
      return `${parseFloat(precioRedondeado).toLocaleString()}`; 
    }, align: 'right'
  }
];

  const conseguirCliente = async () => {
    const response = await fetch("http://192.168.1.3:3000/api/customers/Customers", {
      method: "GET",
      headers: { "Content-Type" : "application/json" }
    });
    const data = await response.json()
    return data;
  }

const Customers = () => {
  const [clientes, setClientes] = useState([]);
  const [tablaCliente, setTablaCliente] = useState([]);

  useEffect(() => {
    obtenerClientes();
  })

  const obtenerClientes = async () => {
    const datos = await conseguirCliente();
    try {
      setClientes(datos);
      setTablaCliente(datos);
    } catch (error) {
      console.log(error)
    }
  }

  

  return (
    <>
      <Box sx={{ height: 780, width: "100%" }}>
        <DataGrid
          rows={clientes}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 12 },
            },
          }}
          pageSizeOptions={[12]}
          
          getRowId={(row) => row.NIT}
          slots={{ toolbar: GridToolbar }}
          sx={{ backgroundColor: "#ffffff" }}
        />
      </Box>
    </>
  )
}

export default Customers
