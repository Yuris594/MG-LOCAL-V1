"use client";

import { Backdrop, CircularProgress, LinearProgress, Tab, useMediaQuery } from "@mui/material";
import { useCallback, useRef, useEffect, useState } from "react";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

import Banner from "../../../components/banner/banner";
import BotonExcel from "@/app/hooks/useExportoExcel";
import { conexion } from "../../usuarios/page";
import { Conexion } from "@/conexion";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const fDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  return new Date(dateString).toLocaleDateString("es-ES", options);
};

const columns = [
  { field: "ARTICULO", headerName: "COD", width: 130 },
  { field: "DESCRIPCION", headerName: "REFERENCIA", width: 700 },
  { field: "SUBLINEA", headerName: "SUBLINEA", width: 300 },
  { field: "TOTAL_DISP", headerName: "DISP", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    },
  },
  { field: "PRECIO", headerName: "PRECIO", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    },
  },
  { field: "PORC_IMPUESTO", headerName: "IVA", width: 130 },
  { field: "PRECIOMASIVA", headerName: "MASIVA", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    },
  },
  { field: "PORC_DCTO", headerName: "D1", width: 130 },
  { field: "UNIDAD_EMPAQUE", headerName: "EMP", width: 130 },
  { field: "EXIST_REAL", headerName: "EXISTREAL", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    },
  },
];

const columnsF = [
  { field: "FACTURA", headerName: "FACTURA", width: 130 },
  { field: "FECHA_DESPACHO", headerName: "FECHA", width: 190,
    renderCell: (params) => fDate(params.value),
  },
  { field: "ANULADA", headerName: "AN", width: 50 },
  { field: "PRECIO_TOTAL", headerName: "V. FACT", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `$ ${parseFloat(precioRedondeado).toLocaleString()}`;
    }, 
  },
  { field: "PEDIDO", headerName: "PEDIDO", width: 130, cellClassName: "pedido-cell" },
  { field: "ARTICULO", headerName: "ARTICULO", width: 130 },
  { field: "DESCRIPCION", headerName: "DESCRIPCION", width: 700 },
  { field: "CANTIDAD", headerName: "CANT", width: 130 },
  { field: "PRECIO_UNITARIO", headerName: "PRECIO UNI.", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `$ ${parseFloat(precioRedondeado).toLocaleString()}`;
    }, 
  },
  { field: "PORCIVA", headerName: "IVA", width: 130, },
  { field: "PORDESC", headerName: "DESC", width: 130, },
  { field: "VDESC", headerName: "V. DESC", width: 130 },
  { field: "TOTAL_MERCADERIA", headerName: "V. TOTAL", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `$ ${parseFloat(precioRedondeado).toLocaleString()}`;
    }, cellClassName: "autor-cell",
  },
  { field: "IDRUTERO", headerName: "ID RUTERO", width: 130 },
  { field: "IDGUIA", headerName: "ID GUIA", width: 130 },
  { field: "OBSERVACIONES", headerName: "OBSERVACIONES", width: 800 },
  { field: "RUBRO1", headerName: "DOCS 2", width: 500 },
];

const columnsP = [
  { field: "FECHA", headerName: "FECHA", width: 250,
    renderCell: (params) => fDate(params.value),
  },
  { field: "CLIENTE", headerName: "CLIENTE", width: 160 },
  { field: "PEDIDO", headerName: "PEDIDO", width: 100, cellClassName: "pedido-cell" },
  { field: "PED", headerName: "PED", width: 100, },
  { field: "DESP", headerName: "DESP", width: 100, },
  { field: "PEND", headerName: "PEND", width: 100, },
  { field: "ESTADO", headerName: "ESTADO", width: 120 },
  { field: "AUTORIZADONOM", headerName: "AUTORIZADO", width: 200,
    renderCell: (params) => {
      const AUTORIZADONOM = params.row.AUTORIZADONOM;
      const cellStyle = {
        color:
        AUTORIZADONOM === "APROBADO"
        ? "#00FC00"
        : AUTORIZADONOM === "RETENIDO"
        ? "#FF1507"
        : "#000000",
        backgroundColor: "transparent",
      };
      return <Typography style={cellStyle}>{AUTORIZADONOM}</Typography>;
    },
  },
  { field: "VE", headerName: "VEND", width: 80, cellClassName: "autor-cell" },
];

const obtenerBodegas = async () => {
  const response = await fetch("/api/productos/bodegas", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  return data;
};

const obtenerProductos = async (bodegaSeleccionada) => {
  const response = await fetch(`/api/productos/listar/${bodegaSeleccionada.BODEGA}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return response.json();
};

const obtenerFacturas = async (articulo) => {
  const response = await fetch(`/api/productos/facturas/${articulo.ARTICULO}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", },
  });
  if (!response.ok) {
    if (response.status === 404) {
      console.log("No hay facturas para este producto.");
      return [];
    }
  }
  return response.json();
};

const obtenerPedidos = async (articulo) => {
  const response = await fetch(`/api/productos/pedidos/${articulo.ARTICULO}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    if (response.status === 404) {
      console.log("No hay pedidos para este producto.");
      return [];
    }
  }
  const data = await response.json();
  return data;
};


function productos() {
  const inputRef = useRef();
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [bodegas, setBodegas] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [busqueda, setBusqueda] = useState([]);
  const [facturas, setFacturas] = useState([]);
  const [articulo, setArticulo] = useState("");
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const [tablaProducto, setTablaProducto] = useState([]);
  const [bodegaSeleccionada, setBodegaSeleccionada] = useState(null);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const handleChanges = (event, newValue) => {
    setValue(newValue);
  };


  useEffect(() => {
    const conseguirBodegas = async () => {
      const datos = await obtenerBodegas();
      try {
        if (datos) 
          setBodegas(datos);
      } catch (error) {
        conexion();
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


  useEffect(() => {
    setCargando(true);
  }, [value]);

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
      const datos = await obtenerProductos(bodegaSeleccionada);
      try {
        if (datos) {
          setOpen(false);
          setProductos(datos);
          setTablaProducto(datos);
          setCargando(false);
        } else {
          setOpen(false);
          setProductos([]);
          setCargando(false);
        }
      } catch (error) {
        setOpen(false);
      }
    }
  };

  const conseguirFacturas = async () => {
    const datos = await obtenerFacturas(articulo);
    setFacturas([]);
    try {
      if (bodegaSeleccionada) {
        if (datos) {
          setFacturas(datos);
          setCargando(false);
        } else {
          setFacturas([]);
          setCargando(false);
        }
      }
    } catch (error) {
      setOpen(false);
    }
  };

  const conseguirPedidos = async () => {
    const datos = await obtenerPedidos(articulo);
    setPedidos([]);
    try {
      if (bodegaSeleccionada) {
        if (datos) {
          setPedidos(datos);
          setCargando(false);
        } else {
          setPedidos([]);
          setCargando(false);
        }
      }
    } catch (error) {
      console.log(error);
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
            return selectionModel.includes(productoString);
          }
          return false;
        });
        if (resultadosFiltrados.length > 0) {
          setArticulo(resultadosFiltrados[0]);
          conseguirFacturas();
          conseguirPedidos();
        }
      }
    }, [tablaProducto]);


  return (
    <>
      <Box>{" "}<Banner />{" "}</Box>
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
          <h2><strong>PRODUCTOS</strong></h2>
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
            sx={{ width: isSmallScreen ? "100%" : 500 }}
          />

          <h2 style={{ display: "flex", justifyContent: "column", alignItems: "center", width: "auto", margin: 0, color: "#920b0d" }}>
            {articulo.DESCRIPCION}
          </h2>

          {productos.length > 0 ? <BotonExcel datos={productos}  sx={{ marginLeft: "auto" }}/> : ""}

          <TextField
            id="outlined-basic"
            placeholder="Buscar Producto"
            value={busqueda}
            onChange={handleChange}
            inputRef={inputRef}
            sx={{ width: isSmallScreen ? "100%" : 600, marginLeft: "auto" }}
          />
        </Box>

      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChanges} aria-label="basic tabs example">
            <Tab label="Articulos" {...a11yProps(0)} />
            <Tab label={`Pedidos:${pedidos.length}`} {...a11yProps(1)} onClick={conseguirPedidos} />
            <Tab label={`Facturas:${facturas.length}`} {...a11yProps(2)} onClick={conseguirFacturas} />
          </Tabs>
        </Box>

          <CustomTabPanel component={Box} value={value} index={0}>
            <Box sx={{ width: "100%", height: 950 }}>
              {productos.length <= 0 ? (
                <Box sx={{ width: "100%" }} title="Seleccione una bodega en la lista de arriba">
                  {" "}<HelpOutlineIcon />{" "}
                </Box>
              ) : (
                <DataGrid
                  rows={productos}
                  columns={columns}
                  pageSizeOptions={[5, 16, 20]}
                  onRowSelectionModelChange={handleSelectionChange}
                  rowSelectionModel={selectedRows}
                  getRowId={(row) => row.ARTICULO}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 16 },
                    },
                  }}
                  sx={{
                    "& .MuiDataGrid-columnHeaderTitle": {
                      fontWeight: "bold",
                    },
                  }}
                />
              )}
            </Box>
          </CustomTabPanel>

          <CustomTabPanel component={Box} value={value} index={1}>
            {cargando === true ? (
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
              ) : pedidos.length === 0 ? (
                <h2>NO HAY PEDIDOS</h2>
              ) : (
              <Box sx={{ width: "100%", height: 950 }}>
                <DataGrid
                  rows={pedidos}
                  columns={columnsP}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 16 },
                    },
                  }}
                  pageSizeOptions={[5, 16, 20]}
                  getRowId={(row) => row.PEDIDO}
                  sx={{
                    "& .MuiDataGrid-columnHeaderTitle": {
                      fontWeight: "bold",
                    },
                  }}
                />
              </Box>
            )}
          </CustomTabPanel>

          <CustomTabPanel component={Box} value={value} index={2}>
            {cargando === true ? (
              <Box sx={{ width: "100%" }}>
                <LinearProgress />
              </Box>
              ) : facturas && facturas.length <= 0 ? (
                <h2>NO HAY FACTURAS</h2>
              ) : (
              <Box sx={{ width: "100%", height: 950 }}>
                <DataGrid
                  rows={facturas}
                  columns={columnsF}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 16 },
                    },
                  }}
                  pageSizeOptions={[5, 16, 20]}
                  getRowId={(row) => row.FACTURA}
                  sx={{
                    "& .MuiDataGrid-columnHeaderTitle": {
                      fontWeight: "bold",
                    },
                  }}
                />
              </Box>
            )}
          </CustomTabPanel>
        </Box>
      </Box>
    </>
  );
}

export default productos;
