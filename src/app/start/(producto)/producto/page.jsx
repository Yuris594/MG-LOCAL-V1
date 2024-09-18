"use client"

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Paper from "@mui/material/Paper";
import { DataGrid } from "@mui/x-data-grid";
import InputBase from "@mui/material/InputBase";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import BotonExcel from "@/app/hooks/useExportoExcel";
import Autocomplete from "@mui/material/Autocomplete";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useCallback, useRef, useEffect, useState, } from "react";
import { Backdrop, CircularProgress, LinearProgress, Tab } from "@mui/material";



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
  return new Date(dateString).toLocaleDateString('es-ES', options);
}

const columns = [
  { field: "ARTICULO", headerName: "Cod", width: 130 },
  { field: "DESCRIPCION", headerName: "Referencia", width: 700 },
  { field: "SUBLINEA", headerName: "Sublinea", width: 300 },
  { field: "TOTAL_DISP", headerName: "Disp", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, align: "right",
  },
  { field: "PRECIO", headerName: "Precio", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, align: "right",
  },
  { field: "PORC_IMPUESTO", headerName: "IVA", width: 130 },
  {field: "PRECIOMASIVA", headerName: "Masiva", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, align: "right",
  },
  { field: "PORC_DCTO", headerName: "D1", width: 130 },
  { field: "UNIDAD_EMPAQUE", headerName: "Emp", width: 130 },
  { field: "EXIST_REAL", headerName: "Existreal", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, align: "right",
  },
]

const columnsF = [
  { field: "FACTURA", headerName: "Factura", width: 130 },
  { field: "FECHA_DESPACHO", headerName: "Fecha", width: 190,
    renderCell: (params) => fDate(params.value)
  },
  { field: "ANULADA", headerName: "AN", width: 50 },
  { field: "PRECIO_TOTAL", headerName: "V.fact", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    },align: "right",
  },
  { field: "PEDIDO", headerName: "Pedido", width: 130 },
  { field: "ARTICULO", headerName: "Articulo", width: 130 },
  { field: "DESCRIPCION", headerName: "Descripcion", width: 700 },
  { field: "CANTIDAD", headerName: "Cant", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(1);
      return precioRedondeado;
    }, align: "right",
  },
  { field: "PRECIO_UNITARIO", headerName: "PrecioUni", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, align: "right",
  },
  { field: "PORCIVA", headerName: "IVA", width: 130, align: "right" },
  { field: "PORDESC", headerName: "Desc", width: 130, align: "right" },
  { field: "VDESC", headerName: "VDesc", width: 130 },
  { field: "TOTAL_MERCADERIA", headerName: "VTotal ", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, align: "right",
  },
  { field: "IDRUTERO", headerName: "IdRutero", width: 130 },
  { field: "FECHARUT", headerName: "FechaRut", width: 300 },
  { field: "IDGUIA", headerName: "IdGuia", width: 130 },
  { field: "FECHAGUIA", headerName: "FechaGuia", width: 250,
    renderCell: (params) => fDate(params.value)
  },
  { field: "OBSERVACIONES", headerName: "Observaciones", width: 800 },
  { field: "RUBRO1", headerName: "Docs2", width: 500 },
];

const columnsP = [
  { field: "FECHA", headerName: "Fecha", width: 250,
    renderCell: (params) => fDate(params.value)
  },
  { field: "CLIENTE", headerName: "Cliente", width: 160 },
  { field: "PEDIDO", headerName: "Pedido", width: 100 },
  { field: "VE", headerName: "VEND", width: 80, align: "right" },
  { field: "PED", headerName: "Ped", width: 100, align: "right" },
  { field: "DESP", headerName: "Desp", width: 100, align: "right" },
  { field: "PEND", headerName: "Pend", width: 100, align: "right" },
  { field: "ESTADO", headerName: "Estado", width: 120 },
  { field: "AUTORIZADONOM", headerName: "Autortizado", width: 200,
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
];


const obtenerProductos = async (bodegaSeleccionada) => {
  const response = await fetch(`/api/productos/listar/${bodegaSeleccionada.BODEGA}`, {
    method: "GET",
    headers: {
      "Content-Type" : "application/json"
    }
  });
  return response.json()
  
};

const obtenerFacturas = async (articulo) => {
  const response = await fetch(`/api/productos/facturas/${articulo.ARTICULO}`, {
    method: "GET",
    headers: {
      "Content-Type" : "application/json"
    }
  });
  if (!response.ok) {
    if (response.status === 404) {
      console.log("No hay facturas para este producto.");
      return [];
    }
  }
  return response.json()
};


const obtenerPedidos = async (articulo) => {
  const response = await fetch(`/api/productos/pedidos/${articulo.ARTICULO}`, {
    method: "GET",
    headers: {
      "Content-Type" : "application/json"
    }
  });
  if (!response.ok) {
    if (response.status === 404) {
      console.log("No hay pedidos para este producto.");
      return [];
    }
  }
  const data = await response.json() 
  console.log(data)
  return data
};

const obtenerBodegas = async () => {
  const response = await fetch('/api/productos/bodegas', {
    method: "GET",
    headers: {
      "Content-Type" : "application/json"
    }
  })
  return response.json()
};


function Producto() {
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
  const [bodegaSeleccionada, setBodegaSeleccionada] = useState();

  const conseguirBodegas = async () => {
    const datos = await obtenerBodegas()
    try {
      if (datos)
      setBodegas(datos);
    } catch (error) {
      conexion()
    }
  };


  useEffect(() => {
    conseguirBodegas();
  }, []);

  useEffect(() => {
    if (bodegaSeleccionada) {
      inputRef.current.focus();
      conseguirProductos();
    }
  }, [bodegaSeleccionada]);

  useEffect(() => {
    setCargando(true)
  }, [value])

  const handleBodega = (event, newValue) => {
    if (newValue) {
      setBodegaSeleccionada(null);
      setBodegaSeleccionada(newValue);
      conseguirProductos(newValue);
    }
  }
  const conseguirProductos = async () => {
    if (bodegaSeleccionada) {
      setOpen(true);
    const datos = await obtenerProductos(bodegaSeleccionada)
    try {
        if (datos) {
          setOpen(false)
          setProductos(datos);
          setTablaProducto(datos);
          setCargando(false)
         
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
    const datos = await obtenerFacturas(articulo)
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
    const datos = await obtenerPedidos(articulo)
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

  const handleSelectionChange = useCallback(
    (selectionModel) => {
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
    },
    [productos]
  );

  const handleChanges = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <>
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}>
          <CircularProgress color="inherit" />
        </Backdrop>
          <Box sx={{ padding: '20px' }}>
            <Typography
              variant="h5"
              component="h1"
              gutterBottom
              sx={{
                display: "flex",
                justifyContent: "column",
                alignItems: "center",
                width: "auto",
                margin: 0,
                color: "#000000",
              }}>
              PRODUCTOS
            </Typography>
          </Box>

            <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", }}>
              <Paper>
                <Autocomplete
                  options={bodegas}
                  value={bodegaSeleccionada}
                  onChange={handleBodega}
                  getOptionLabel={(option) => option.NOMBRE || "Bodegas"}
                  disablePortal
                  id="combo-box-demo"
                  sx={{ width: 350 }}
                  isOptionEqualToValue={(option, value) =>
                    option.NOMBRE === value.NOMBRE
                  }
                  renderInput={(params) => (
                    <TextField {...params} label="Bodegas" placeholder="Selecciona una bodega" variant="standard" />
                  )}
                  disableClearable
                />
              </Paper>

              <Box>
                <Typography
                  variant="h5"
                  component="h1"
                  gutterBottom
                  sx={{
                    display: "flex",
                    justifyContent: "column",
                    alignItems: "center",
                    width: "auto",
                    margin: 0,
                    color: "#920b0d",
                  }}>
                  {articulo.DESCRIPCION}
                </Typography>
              </Box>

              <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                {productos.length > 0 ? <BotonExcel datos={productos} /> : ""}

                <Paper sx={{ p: "2px 4px", display: "flex", alignItems: "flex-rigth", width: 400, margin: "10px", }}>
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Buscar"
                    inputProps={{ "aria-label": "search google maps" }}
                    autoFocus
                    value={busqueda}
                    onChange={handleChange}
                    inputRef={inputRef}
                  />
                  <IconButton title="buscar" sx={{ p: "10px" }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Paper>
              </Box>
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
              <Box sx={{ width: "100%", height: 700 }}>
                {productos.length <= 0 ? (
                  <Box sx={{ width: "100%" }} title="Seleccione una bodega en la lista de arriba" >
                    {" "}<HelpOutlineIcon />{" "}
                  </Box>
                ) : (
                  <DataGrid
                    rows={productos}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 11 },
                      },
                    }}
                    pageSizeOptions={[5, 11, 20]}
                    onRowSelectionModelChange={handleSelectionChange}
                    rowSelectionModel={selectedRows}
                    getRowId={(row) => row.ARTICULO}
                    sx={{ backgroundColor: "#ffffff" }}
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
                <h1>NO HAY PEDIDOS</h1>
              ) : (
                <Box sx={{ width: "100%", height: 700 }}>
                  <DataGrid
                    rows={pedidos}
                    columns={columnsP}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 11 },
                      },
                    }}
                    pageSizeOptions={[5, 11, 20]}
                    getRowId={(row) => row.PEDIDO}
                    sx={{ backgroundColor: "#ffffff", }}
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
                <h1>NO HAY FACTURAS</h1>
              ) : (
                <Box sx={{ width: "100%", height: 700 }}>
                  <DataGrid
                    rows={facturas}
                    columns={columnsF}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 11 },
                      },
                    }}
                    pageSizeOptions={[5, 11, 20]}
                    getRowId={(row) => row.FACTURA}
                    sx={{ backgroundColor: "#ffffff", }}
                  />
                </Box>
              )}
            </CustomTabPanel>
          </Box>
    </>
  );
}

export default Producto;
