"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid2";
import { DataGrid } from "@mui/x-data-grid";
import Banner from "@/app/components/banner/banner";
import CheckIcon from '@mui/icons-material/Check';
import BotonExcel from "@/app/hooks/useExportoExcel";
import { Autocomplete, Box, IconButton, Tab, Tabs, TextField, 
 useMediaQuery, useTheme, LinearProgress, Typography,
 CircularProgress } from "@mui/material";
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
  { field: "TOTAL_DISP", headerName: "DISP-MG", width: 130 },
  { field: "EXIST_REAL", headerName: "EXISTREAL", width: 130 },
  { field: "PRECIO", headerName: "PRECIO", width: 130,
    valueFormatter: (value) => {
      const precio = parseFloat(value).toFixed(0);
      return `$${parseFloat(precio).toLocaleString('es-CO')}`;
    },
  },
  { field: "PORC_IMPUESTO", headerName: "IVA", width: 130 },
  { field: "PRECIOMASIVA", headerName: "MASIVA", width: 130,
    valueFormatter: (value) => {
      const precio = parseFloat(value).toFixed(0);
      return `$${parseFloat(precio).toLocaleString('es-CO')}`;
    },
  },
  { field: "PORC_DCTO", headerName: "D1", width: 130 },
  { field: "UNIDAD_EMPAQUE", headerName: "EMP", width: 130 },
];

const columnsF = [
  { field: "FACTURA", headerName: "FACTURA", width: 130 },
  { field: "FECHA_DESPACHO", headerName: "FECHA", width: 190,
    renderCell: (params) => fDate(params.value),
  },
  { field: "ANULADA", headerName: "AN", width: 50 },
  { field: "PRECIO_TOTAL", headerName: "V. FACT", width: 130,
    valueFormatter: (value) => {
      const precio = parseFloat(value).toFixed(0);
      return `$${parseFloat(precio).toLocaleString('es-CO')}`;
    },
  },
  { field: "PEDIDO", headerName: "PEDIDO", width: 130, cellClassName: "pedido-cell" },
  { field: "ARTICULO", headerName: "ARTICULO", width: 130 },
  { field: "DESCRIPCION", headerName: "DESCRIPCION", width: 700 },
  { field: "CANTIDAD", headerName: "CANT", width: 130 },
  { field: "PRECIO_UNITARIO", headerName: "PRECIO UNI.", width: 130,
    valueFormatter: (value) => {
      const precio = parseFloat(value).toFixed(0);
      return `$${parseFloat(precio).toLocaleString('es-CO')}`;
    },
  },
  { field: "PORCIVA", headerName: "IVA", width: 130, },
  { field: "PORDESC", headerName: "DESC", width: 130, },
  { field: "VDESC", headerName: "V. DESC", width: 130 },
  { field: "TOTAL_MERCADERIA", headerName: "V. TOTAL", width: 130,
    valueFormatter: (value) => {
      const precio = parseFloat(value).toFixed(0);
      return `$${parseFloat(precio).toLocaleString('es-CO')}`;
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


const obtenerFacturas = async (seleccionarArticulo) => {
  const response = await fetch(Conexion.url + `/productos/facturas/${seleccionarArticulo.ARTICULO}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", },
  });
  if (!response.ok) {
    if (response.status === 404) {
      console.log("No hay facturas para este producto.");
      return [];
    }
    throw new Error(`Error en la solicitud: ${response.status}`);
  }
  try {
    return await response.json();
  } catch (error) {
    console.error("Error al analizar JSON:", error);
    throw new Error("La respuesta no tiene un formato JSON válido.");
  }
};

const obtenerPedidos = async (seleccionarArticulo) => {
  const response = await fetch(Conexion.url + `/productos/pedidos/${seleccionarArticulo.ARTICULO}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    if (response.status === 404) {
      console.log("No hay pedidos para este producto.");
      return [];
    }
  }
  try {
    return await response.json();
  } catch (error) {
    console.error("Error al analizar JSON:", error);
    throw new Error("La respuesta no tiene un formato JSON válido.");
  }
};


const BuscarReferencia = () => {
  const [value, setValue] = useState(0);
  const [pedidos, setPedidos] = useState([]);
  const [facturas, setFacturas] = useState([]);
  const [criterio, setCriterio] = useState(null);
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [valorBusqueda, setValorBusqueda] = useState("");
  const [seleccionarArticulo, setSeleccionarArticulo] = useState('');
  const [errorCriterio, setErrorCriterio] = useState(false);
  const [errorBusqueda, setErrorBusqueda] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const options = [
    {label: "ARTICULO"},
    {label: "REFERENCIA"}

    
  ];

  const consultarArticulo = async () => {

    if (!criterio) {
      setErrorCriterio(true);
    } else {
      setErrorCriterio(false);
    }

    if (!valorBusqueda.trim()) {
      setErrorBusqueda(true);
    } else {
      setErrorBusqueda(false);
    }

    setCargando(true);
    try {
      const endpoint =
      criterio === "ARTICULO" 
        ? Conexion.url + `/productos/${valorBusqueda}`
        : Conexion.url + `/productos/descripcion/${valorBusqueda}`;
      const response = await fetch(endpoint, {
        method: "GET",
        headers: { "Content-Type" : "application/json" }
      });
        
      if (response.ok) {
        const datos = await response.json();
        setProductos(datos);        
      } else {
        console.log("Error en la busqueda:", response.statusText);
        setProductos([]);
      }
    } catch (error) {
      console.log("Error al momento de realizar la busqueda", error);
      setProductos([]);
    } finally {
      setCargando(false);
    }
  };
  

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      consultarArticulo();
    }
  }

  const handleChanges = (event, newValue) => {
    setValue(newValue);
  };

  const handleRowClick = (params) => {
    setSeleccionarArticulo(params.row);
  };

  const conseguirFacturas = async () => {
    const datos = await obtenerFacturas(seleccionarArticulo);
    setFacturas([]);
    try {
      if (datos) {
        setFacturas(datos);
        setCargando(false);
      } else {
        setFacturas([]);
        setCargando(false);
      }
    } catch (error) {
      console.log("Este articulo no tiene facturas", error);
    }
  };

  const conseguirPedidos = async () => {
    const datos = await obtenerPedidos(seleccionarArticulo);
    setPedidos([]);
    try {
      if (datos) {
        setPedidos(datos);
        setCargando(false);
      } else {
        setPedidos([]);
        setCargando(false);
      }
    } catch (error) {
      console.log("Este articulo no tiene pedidos", error);
    }
  };


  return (
    <>
      <Banner />
      <Grid container direction="column" sx={{ minHeight: "90vh", backgroundColor: "#ffffff", padding: 2 }}>
        <Grid size={12}>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <Box display="flex" alignItems="center" gap={2}>
            <h2><strong>Buscar Por Referencias</strong></h2>
              <Autocomplete 
                id="size-small-outlined"
                size="small"
                disablePortal
                options={options}
                value={criterio}
                onChange={(event, newValue) => { setCriterio(newValue?.label || ""); }}
                renderInput={(params) => <TextField 
                  {...params} 
                  label="Criterio de Busqueda" 
                  variant="outlined"
                  error={errorCriterio}
                  helperText={errorCriterio ? "El criterio es requerido" : ""}
                />}
                sx={{ width: 190 }}
              />

              <TextField 
                id="outlined-basic"
                size="small"
                value={valorBusqueda}
                onChange={(e) => setValorBusqueda(e.target.value)}
                onKeyPress={handleKeyPress}
                error={errorBusqueda}
                helperText={errorBusqueda ? "Este valor es requerido" : ""}
                sx={{ width: 190 }}
              />

              <IconButton onClick={consultarArticulo}>
                <CheckIcon sx={{ fontSize: 45 }} color="success" />
              </IconButton>
            </Box>

            <Box>
              <h3 style={{ margin: 0, color: "#db2093" }}>
                {seleccionarArticulo.DESCRIPCION}
              </h3>
            </Box>
            <BotonExcel datos={productos} />
          </Box>
        </Grid>

    
        <Grid size={12}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChanges} variant="fullWidth" aria-label="full width tabs example">
                <Tab label="Articulos" {...a11yProps(0)} />
                <Tab label={`Pedidos: ${pedidos.length}`} {...a11yProps(1)} onClick={conseguirPedidos} />
                <Tab label={`Facturas: ${facturas.length}`} {...a11yProps(2)} onClick={conseguirFacturas} />
              </Tabs>
            </Box>

            <CustomTabPanel component={Box} value={value} index={0} dir={theme.direction}>
                <Box sx={{ width: "100%", height: 750 }}>
                  <DataGrid
                    rows={productos}
                    columns={columns}
                    pageSizeOptions={[5, 12, 20]}
                    getRowId={(row) => row.ARTICULO}
                    onRowClick={handleRowClick}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 12 },
                      },
                    }}
                    sx={{
                      "& .MuiDataGrid-columnHeaderTitle": {
                        fontWeight: "bold",
                      },
                    }}
                  />
                </Box>
              
            </CustomTabPanel>

            <CustomTabPanel component={Box} value={value} index={1} dir={theme.direction}>
              {cargando === true ? (
                <Box sx={{ width: "100%" }}>
                  <LinearProgress />
                </Box>
                ) : pedidos.length <= 0 ? (
                  <h2>NO HAY PEDIDOS</h2>
                ) : (
                <Box sx={{ width: "100%", height: 750 }}>
                  <DataGrid
                    rows={pedidos}
                    columns={columnsP}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 12 },
                      },
                    }}
                    pageSizeOptions={[5, 12, 20]}
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

            <CustomTabPanel component={Box} value={value} index={2} dir={theme.direction}>
              {cargando === true ? (
                <Box sx={{ width: "100%" }}>
                  <LinearProgress />
                </Box>
                ) : facturas.length <= 0 ? (
                  <h2>NO HAY FACTURAS</h2>
                ) : (
                <Box sx={{ width: "100%", height: 750 }}>
                  <DataGrid
                    rows={facturas}
                    columns={columnsF}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 12 },
                      },
                    }}
                    pageSizeOptions={[5, 12, 20]}
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
        </Grid>

      </Grid>
     
    </>
  )
}

export default BuscarReferencia;
