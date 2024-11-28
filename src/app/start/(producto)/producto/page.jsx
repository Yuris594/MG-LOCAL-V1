"use client";

import Box from "@mui/material/Box";
import { Conexion } from "@/conexion";
import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useCallback, useRef, useEffect, useState, } from "react";
import { Backdrop, Button, CircularProgress, useMediaQuery } from "@mui/material";


const obtenerProductos = async (bodegaSeleccionada) => {
  const response = await fetch(`/api/productos/listar/${bodegaSeleccionada.BODEGA}`, {
    method: "GET",
    headers: {
      "Content-Type" : "application/json"
    }
  });
  return response.json()
  
};


const obtenerBodegas = async () => {
  const response = await fetch('/api/productos/bodegas', {
    method: "GET",
    headers: { "Content-Type" : "application/json" }
  });
  return response.json()
};


function Producto({ handleCloseB, onAgregarArticulo }) {
  const inputRef = useRef();
  const [open, setOpen] = useState(false);
  const [bodegas, setBodegas] = useState([]);
  const [busqueda, setBusqueda] = useState([]);
  const [articulo, setArticulo] = useState("");
  const [productos, setProductos] = useState([]);
  const [cantidades, setCantidades] = useState({});
  const [selectedRows, setSelectedRows] = useState([]);
  const [tablaProducto, setTablaProducto] = useState([]);
  const [bodegaSeleccionada, setBodegaSeleccionada] = useState();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  
  useEffect(() => {
    const conseguirBodegas = async () => {
      const datos = await obtenerBodegas()
      try {
        if (datos)
        setBodegas(datos);
      } catch (error) {
        conexion()
      }
    };
    conseguirBodegas();
  }, []);


  useEffect(() => {
    if (bodegaSeleccionada) {
      inputRef.current.focus();
      conseguirProductos();
    }
  }, [bodegaSeleccionada]);


  const handleBodega = (event, newValue) => {
    if (newValue) {
      setBodegaSeleccionada(null);
      setBodegaSeleccionada(newValue);
      conseguirProductos(newValue);
    }
  };
  
  const conseguirProductos = async () => {
    if (bodegaSeleccionada) {
      setOpen(true);
    const datos = await obtenerProductos(bodegaSeleccionada)
      try {
          if (datos) {
            setOpen(false)
            setProductos(datos);
            setTablaProducto(datos);
          } else {
            setOpen(false);
            setProductos([]);
          }
      } catch (error) {
        setOpen(false);
      }
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    const termino = terminoBusqueda.toLowerCase();
    const resultadosBusqueda = tablaProducto.filter((elemento) => {
      const valores = Object.values(elemento).map((value) =>
        value ? value.toString().toLowerCase() : ""
      );
      return valores.some((valor) => valor.includes(termino));
    });
    setProductos(resultadosBusqueda);
  };

  const handleSelectionChange = useCallback((selectionModel) => {
    setSelectedRows(selectionModel);
    if (selectionModel.length > 0) {
      const resultadosFiltrados = tablaProducto.filter((elemento) => {
        const ARTICULO = elemento.ARTICULO;
        if (ARTICULO) {
          const productoString = ARTICULO.toString();
          return productoString.includes(selectionModel[0]);
        }
        return false;
      });
      setArticulo(resultadosFiltrados[0]);
    }
  }, [productos]);

  const handleProcessRowUpdate = (newRow) => {
    const updatedRows = productos.map((prod) => 
      prod.ARTICULO === newRow.ARTICULO ? { ...prod, ...newRow } : prod
    );
    setProductos(updatedRows);
    setTablaProducto(updatedRows);
    return newRow;
  };

  const handleCantidad = (ARTICULO, value) => {
    setCantidades({
      ...cantidades,
      [ARTICULO] : value,
    });
  };

  const agregarArticulo = () => {
    const articulosSeleccionados = productos.filter((prod) => cantidades[prod.ARTICULO]);
    onAgregarArticulo(
      articulosSeleccionados.map((art) => ({
        ...art,
        cantped: cantidades[art.ARTICULO]
      }))
    );
    handleCloseB();
  }

  const columns = [
    { field: "ARTICULO", headerName: "CODIGO", width: 130 },
    { field: "DESCRIPCION", headerName: "REFERENCIA", width: 500 },
    { field: "UNIDAD_EMPAQUE", headerName: "EMP", width: 130 },
    { field: "PRECIO", headerName: "PRECIO", width: 130,
      valueFormatter: (value) => {
        const precioRedondeado = Number(value).toFixed(0);
        return `${parseFloat(precioRedondeado).toLocaleString()}`;
      },
    },
    { field: "cantped", headerName: "CANT", width: 100,
      renderCell: (params) => {
        return (
          <TextField 
            value={cantidades[params.id] || ""}
            onChange={(e) => handleCantidad(params.id, e.target.value)}
            sx={{ width: "70px" }}
            variant="outlined"
            size="small"
          />
        )
      }
    },
    { field: "PORC_IMPUESTO", headerName: "IVA", width: 130 },
    { field: "PRECIOMASIVA", headerName: "MASIVA", width: 130,
      valueFormatter: (value) => {
        const precioRedondeado = Number(value).toFixed(0);
        return `${parseFloat(precioRedondeado).toLocaleString()}`;
      }, 
    },
    { field: "PORC_DCTO", headerName: "D1", width: 130, editable: true },
    { field: "TOTAL_DISP", headerName: "DISP", width: 130,
      valueFormatter: (value) => {
        const precioRedondeado = Number(value).toFixed(0);
        return `${parseFloat(precioRedondeado).toLocaleString()}`;
      }, 
    },
    { field: "EXIST_REAL", headerName: "EXISTREAL", width: 130,
      valueFormatter: (value) => {
        const precioRedondeado = Number(value).toFixed(0);
        return `${parseFloat(precioRedondeado).toLocaleString()}`;
      }, 
    },
  ]

  return (
    <>
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
          <h2><strong>PRODUCTOS</strong></h2>
          <Box display="flex" gap={1}>
            <Button variant="contained" color="success" onClick={agregarArticulo}>Agregar</Button>
            <Button variant="contained" color="error" onClick={handleCloseB}>Cerrar</Button>
          </Box>
        </Box>

        <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", gap: 2, alignItems: "center" }}>
          <Autocomplete
            options={bodegas}
            value={bodegaSeleccionada}
            onChange={handleBodega}
            getOptionLabel={(option) => option.NOMBRE || "Bodegas"}
            renderInput={(params) => (
              <TextField {...params} label="Bodegas" placeholder="Selecciona una bodega" variant="outlined" />
            )}
            isOptionEqualToValue={(option, value) =>
              option.NOMBRE === value.NOMBRE
            }
            sx={{ width: isSmallScreen ? "100%" : 350 }}
          />
      
          <TextField
            id="outlined-basic"
            placeholder="Buscar Producto"
            value={busqueda}
            onChange={handleChange}
            inputRef={inputRef}
            sx={{ width: isSmallScreen ? "100%" : 300, marginLeft: "auto" }}
          />
        </Box>

        <Box sx={{ width: "100%", height: 480 }}>
          {productos.length ? (
            <DataGrid
              density="compact"
              rows={productos}
              columns={columns}
              pageSize={10}
              getRowId={(row) => row.ARTICULO}
              rowSelectionModel={selectedRows}
              processRowUpdate={handleProcessRowUpdate}
              onRowSelectionModelChange={handleSelectionChange}
              sx={{
                "& .MuiDataGrid-columnHeaderTitle": {
                  fontWeight: "bold",
                },
              }}
            />
          ) : (
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
              {" "}<HelpOutlineIcon />  Seleccione una bodega para visualizar los productos {" "}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
}

export default Producto;
