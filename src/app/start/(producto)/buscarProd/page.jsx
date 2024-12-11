"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid2";
import { DataGrid } from "@mui/x-data-grid";
import Banner from "@/app/components/banner/banner";
import SearchIcon from '@mui/icons-material/Search';
import BotonExcel from "@/app/hooks/useExportoExcel";
import { Autocomplete, Box, IconButton, Tab, Tabs, TextField, 
 useMediaQuery, useTheme, LinearProgress, 
 Typography} from "@mui/material";


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


const options = [
  {label: "ARTICULO"},
  {label: "REFERENCIA"}
];


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
  { field: "TOTAL_DISP", headerName: "DISP", width: 130 },
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
  { field: "EXIST_REAL", headerName: "EXISTREAL", width: 130 },
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
  const response = await fetch(`/api/productos/facturas/${seleccionarArticulo.ARTICULO}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!response.ok) {
    if (response.status === 404) {
      console.log("No hay facturas para este producto.");
      return [];
    }
  }
  return response.json();
};

const obtenerPedidos = async (seleccionarArticulo) => {
  const response = await fetch(`/api/productos/pedidos/${seleccionarArticulo.ARTICULO}`, {
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
  return response.json();
};


const BuscarReferencia = () => {
  const [value, setValue] = useState(0);
  const [pedidos, setPedidos] = useState([]);
  const [facturas, setFacturas] = useState([]);
  const [criterio, setCriterio] = useState('');
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [valorBusqueda, setValorBusqueda] = useState("");
  const [seleccionarArticulo, setSeleccionarArticulo] = useState('');
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));


  const consultarArticulo = async () => {
    if (valorBusqueda) {
      try {
        let response;
        if (criterio === "ARTICULO") {
          response = await fetch(`/api/productos/${valorBusqueda}`, {
            method: "GET",
            headers: { "Content-Type" : "application/json" }
          });
        } else {
          response = await fetch(`/api/productos/descripcion/${valorBusqueda}`, {
            method: "GET",
            headers: { "Content-Type" : "application/json" }  
          })
        };
  
        const datos = await response.json();
        setProductos(datos);        
      } catch (error) {
        console.log("Error al momento de realizar la busqueda", error);
      }
    }
  };

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
      <Grid container direction="column" sx={{ minHeight: "100vh", backgroundColor: "#ffffff", padding: 2 }}>
        <Grid size={12}>
          <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center">
            <h2><strong>BUSCADOR DE REFERENCIAS</strong></h2>
            <BotonExcel datos={productos} />
          </Box>
        </Grid>

        <Grid size={12}>
          <Box display= "flex" flexDirection= {isSmallScreen ? "column" : "row"} alignItems= "center" gap={2} sx={{ width: "100%" }}>
            <h3 style={{ margin: 0, color: "#920b0d" }}>
              {seleccionarArticulo.DESCRIPCION}
            </h3>
            <Box display="flex" alignItems="center" gap={2} sx={{ marginLeft: isSmallScreen ? 0 : "auto" }}>
              <Autocomplete 
                id="size-small-outlined"
                size="small"
                disablePortal
                sx={{ width: 190 }}
                options={options}
                onChange={(event, newValue) => { setCriterio(newValue?.label || ""); }}
                renderInput={(params) => <TextField {...params} label="Tipo de Referencia" />}
              />

              <TextField 
                id="outlined-basic"
                size="small"
                value={valorBusqueda}
                onChange={(e) => setValorBusqueda(e.target.value)}
                sx={{ width: 190 }}
              />

              <IconButton onClick={consultarArticulo}>
                <SearchIcon sx={{ fontSize: 45 }} color="success" />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        <Grid size={12}>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChanges} aria-label="basic tabs example">
                <Tab label="Articulos" {...a11yProps(0)} />
                <Tab label={`Pedidos: ${pedidos.length}`} {...a11yProps(1)} onClick={conseguirPedidos} />
                <Tab label={`Facturas: ${facturas.length}`} {...a11yProps(2)} onClick={conseguirFacturas} />
              </Tabs>
            </Box>

            <CustomTabPanel component={Box} value={value} index={0}>
              <Box sx={{ width: "100%", height: 950 }}>
                <DataGrid
                  rows={productos}
                  columns={columns}
                  pageSizeOptions={[5, 15, 20]}
                  getRowId={(row) => row.ARTICULO}
                  onRowClick={handleRowClick}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 15 },
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

            <CustomTabPanel component={Box} value={value} index={1}>
              {cargando === true ? (
                <Box sx={{ width: "100%" }}>
                  <LinearProgress />
                </Box>
                ) : pedidos.length <= 0 ? (
                  <h2>NO HAY PEDIDOS</h2>
                ) : (
                <Box sx={{ width: "100%", height: 950 }}>
                  <DataGrid
                    rows={pedidos}
                    columns={columnsP}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 15 },
                      },
                    }}
                    pageSizeOptions={[5, 15, 20]}
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
                ) : facturas.length <= 0 ? (
                  <h2>NO HAY FACTURAS</h2>
                ) : (
                <Box sx={{ width: "100%", height: 950 }}>
                  <DataGrid
                    rows={facturas}
                    columns={columnsF}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 15 },
                      },
                    }}
                    pageSizeOptions={[5, 15, 20]}
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
