"use client";

import { Box, Button, Divider, TextField } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { initDB } from "@/app/components/base/db";

const Articulos = ({ handleClose, onAgregarArticulo }) => {
  const [producto, setProducto] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cantidades, setCantidades] = useState({});
  const [tablaProducto, setTablaProducto] = useState([]);

  useEffect(() => {
    const conseguirProducto = async () => {
      try {
        const db = await initDB(); 
        const articulosGuardados = await db.getAll('articles'); 

        if (articulosGuardados.length > 0) {
          setProducto(articulosGuardados);
          setTablaProducto(articulosGuardados);
          console.log("Datos cargados desde la base de datos");
        } else {
          console.log("No se encontraron artículos en la base de datos.");
        }
      } catch (error) {
        console.log("Error al obtener los productos:", error);
      }
    };
    conseguirProducto();
  }, []);

  const handleCantidadChange = (PKcodigo, value) => {
    setCantidades({
      ...cantidades,
      [PKcodigo]: value,
    });
  };

  const handleProcessRowUpdate = (newRow) => {
    const updatedRows = producto.map((prod) => 
      prod.PKcodigo === newRow.PKcodigo ? { ...prod, ...newRow } : prod
    );
    setProducto(updatedRows);
    setTablaProducto(updatedRows);
    return newRow;
  };

  const agregarArticulo = () => {
    const articulosSeleccionados = producto.filter((prod) => cantidades[prod.PKcodigo]);
    onAgregarArticulo(
      articulosSeleccionados.map((art) => ({
        ...art,
        cantped: cantidades[art.PKcodigo], 
      }))
    );
    handleClose();
  };

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
      return valores.some((valor) =>
        valor.includes(terminoBusqueda.toLowerCase())
      );
    });
    setProducto(resultadoBusqueda);
  };

  const columns = [
    { field: "PKcodigo", headerName: "Cod", width: 100 },
    { field: "Nombre", headerName: "Referencia", width: 150 },
    { field: "Unidad_Empaque", headerName: "Emp", width: 80 },
    { field: "Precio", headerName: "Precio", width: 90, editable: true },
    { field: "Iva", headerName: "Iva", width: 80 },
    { field: "Descuento", headerName: "Des", width: 90, editable: true },
    { field: "cantped", headerName: "Cant", width: 100,
      renderCell: (params) => (
        <TextField
          size="small"
          value={cantidades[params.id] || ""}
          onChange={(e) => handleCantidadChange(params.id, e.target.value)}
          sx={{ width: "80px", height: "25px" }}
        />
      ),
    },
    { field: "Precio_Neto", headerName: "Neto", width: 80 },
    { field: "Disp", headerName: "Disp", width: 80 },
  ];

  return (
    <>
      <div style={{ height: "70%", width: "100%", backgroundColor: "#ffffff" }}>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "auto", margin: 0 }}>
          <h2><strong>SELECCIONAR ARTICULO</strong></h2>
          <Box>
            <Button variant="outlined" color="success" sx={{ margin: 1 }} onClick={agregarArticulo}>
              Agregar
            </Button>
            <Button variant="contained" color="error" onClick={handleClose}>
              Cerrar
            </Button>
          </Box>
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
          sx={{ width: "30%", height: "10%", margin: 1 }}
        />

        <Box sx={{ width: "auto", height: "auto", margin: 2 }}>
          <DataGrid
            density="compact"
            rows={producto}
            columns={columns}
            getRowId={(row) => row.PKcodigo}
            processRowUpdate={handleProcessRowUpdate} 
            initialState={{
              pagination: {
                paginationModel: { pageSize: 20 },
              },
            }}
            pageSizeOptions={[20]}
          />
        </Box>
      </div>
    </>
  );
};

export default Articulos;

//Debo agregar el precio total al array de los articulos