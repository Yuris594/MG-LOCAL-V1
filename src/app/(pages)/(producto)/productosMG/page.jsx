"use client";

import { Box, IconButton, InputBase, LinearProgress, Paper, Tab, Tabs, Typography, } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from "prop-types";

import Banner from "../../../components/banner/banner";
import BotonExcel from "@/app/hooks/useExportoExcel";
import Peticion from "@/conexion/peticion";
import { Global } from "@/conexion/conexion";



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
  {
    field: "TOTAL_DISP",
    headerName: "Disp",
    width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    },
  },
  {
    field: "PRECIO",
    headerName: "Precio",
    width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, align: "right",
  },
  { field: "PORC_IMPUESTO", headerName: "IVA", width: 130 },
  {
    field: "PRECIOMASIVA",
    headerName: "Masiva",
    width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, align: "right",
  },
  { field: "PORC_DCTO", headerName: "D1", width: 130 },
  { field: "UNIDAD_EMPAQUE", headerName: "Emp", width: 130 },
  {
    field: "EXIST_REAL",
    headerName: "Existreal",
    width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, align: "right",
  },
];

console.log("Datos que se estan pasando al DataGrid", columns)

const columnsP = [
  {
    field: "FECHA",
    headerName: "Fecha",
    width: 250,
    renderCell: (params) => fDate(params.value)
  },
  { field: "CLIENTE", headerName: "Cliente", width: 180 },
  { field: "PEDIDO", headerName: "Pedido", width: 150 },
  { field: "VE", headerName: "VEND", width: 80, align: "right" },
  { field: "PED", headerName: "Ped", width: 50, align: "right" },
  { field: "DESP", headerName: "Desp", width: 100, align: "right" },
  { field: "PEND", headerName: "Pend", width: 100, align: "right" },
  { field: "ESTADO", headerName: "Estado", width: 160 },
  {
    field: "AUTORIZADONOM",
    headerName: "Autortizado",
    width: 200,
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

const columnsF = [
  { field: "FACTURA", headerName: "Factura", width: 130 },
  {
    field: "FECHA_DESPACHO",
    headerName: "Fecha",
    width: 190,
    renderCell: (params) => fDate(params.value)
  },
  { field: "ANULADA", headerName: "AN", width: 50 },
  {
    field: "PRECIO_TOTAL",
    headerName: "V.fact",
    width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, align: "right",
  },
  { field: "PEDIDO", headerName: "Pedido", width: 130 },
  { field: "ARTICULO", headerName: "Articulo", width: 130 },
  { field: "DESCRIPCION", headerName: "Descripcion", width: 700 },
  {
    field: "CANTIDAD",
    headerName: "Cant",
    width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, align: "right",
  },
  {
    field: "PRECIO_UNITARIO",
    headerName: "PrecioUni",
    width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    },
    align: "right",
  },
  { field: "PORCIVA", headerName: "IVA", width: 130, align: "right" },
  { field: "PORDESC", headerName: "Desc", width: 130, align: "right" },
  { field: "VDESC", headerName: "VDesc", width: 130 },
  {
    field: "TOTAL_MERCADERIA",
    headerName: "VTotal ",
    width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    },
    align: "right",
  },
  { field: "IDRUTERO", headerName: "IdRutero", width: 130 },
  { field: "FECHARUT", headerName: "FechaRut", width: 300 },
  { field: "IDGUIA", headerName: "IdGuia", width: 130 },
  {
    field: "FECHAGUIA",
    headerName: "FechaGuia",
    width: 250,
    renderCell: (params) => fDate(params.value)
  },
  { field: "OBSERVACIONES", headerName: "Observaciones", width: 800 },
  { field: "RUBRO1", headerName: "Docs2", width: 500 },
];

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

function allyProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const productosMG = () => {
  const [value, setValue] = useState(0);
  const [pedidos, setPedidos] = useState([]);
  const [facturas, setFacturas] = useState([]);
  const [busqueda, setBusqueda] = useState([]);
  const [articulo, setArticulo] = useState("");
  const [cargando, setCargando] = useState(true);
  const [productos, setProductos] = useState([]);
  const [cargando2, setCargando2] = useState(true);
  const [selectedRows, setSelectedRows] = useState([]);
  const [tablaProducto, setTablaProducto] = useState([]);

  useEffect(() => {
    setCargando(true);
  }, [value]);

  useEffect(() => {
    conseguirProductos();
  }, []);

  const conseguirProductos = async () => {
    try {
      const { datos } = await Peticion("/api/productos/listar_solo_para_mg", "GET");
      if (datos) {
        setProductos(datos);
        setTablaProducto(datos);
        setCargando2(false);
      } else {
        setProductos([]);
        setCargando2(false);
      }
    } catch (error) {
      console.log("Error al obtener usuarios", error);
    }
  };

  const memo = useMemo(() => conseguirProductos, []);

  useEffect(() => {
    memo();
  }, [memo]);

  const conseguirFacturas = async () => {
    setFacturas([]);
    try {
      const { datos } = await Peticion(
        "/api/productos/facturas/" + articulo.ARTICULO,
        "GET"
      );
      console.log(datos);
      if (datos) {
        setFacturas(datos);
        setCargando(false);
      } else {
        setFacturas([]);
        setCargando(false);
      }
    } catch (error) {
      console.log("Error al obtener usuarios", error);
    }
  };

  const conseguirPedidos = async () => {
    setPedidos([]);
    try {
      const { datos } = await Peticion(
       "/api/productos/pedidos/" + articulo.ARTICULO,
        "GET"
      );
      if (datos) {
        setPedidos(datos);
        setCargando(false);
      } else {
        setPedidos([]);
        setCargando(false);
      }
    } catch (error) {
      console.log("Error al obtener usuarios", error);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    const resultadosBusqueda = tablaProducto.filter((elemento) => {
      const valores = Object.values(elemento).map((value) =>
        value ? value.toString().toLowerCase() : ""
      );
      return valores.some((valor) => valor.includes(terminoBusqueda));
    });
    setProductos(resultadosBusqueda);
  };

  const handleSelection = useCallback(
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

  const limpiarBusqueda = () => {
    setBusqueda();
    fetchUsuarios();
  };

  return (
    <>
      <Box marginBottom="50px">
        {" "}
        <Banner />{" "}
      </Box>
      {cargando2 === true ? (
        <Box sx={{ height: "auto", width: "100%" }}>
          <LinearProgress />
        </Box>
      ) : (
        <div style={{ height: "auto", width: "100%" }}>
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
                color: "#000000",
              }}
            >
              PRODUCTOS MG
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "auto",
                  margin: 1,
                }}
              >
                <BotonExcel datos={productos} />
              </Box>
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
                  }}
                >
                  {articulo.DESCRIPCION}
                </Typography>
              </Box>
              <Paper
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "flex-rigth",
                  width: 1100,
                  margin: "10px",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Buscar..."
                  inputProps={{ "aria-label": "search google maps" }}
                  autoFocus
                  value={busqueda}
                  onChange={handleChange}
                />
                <IconButton
                  title="buscar"
                  sx={{ p: "10px" }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Paper>
            </Box>
          </Box>

          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChanges}
                aria-label="basic tabs example"
              >
                <Tab
                  label="Articulos"
                  {...allyProps(0)}
                />
                <Tab
                  label={`Pedidos:${pedidos.length}`}
                  {...allyProps(1)}
                  onClick={conseguirPedidos}
                />
                <Tab
                  label={`Facturas:${facturas.length}`}
                  {...allyProps(2)}
                  onClick={conseguirFacturas}
                />
              </Tabs>
            </Box>

            <CustomTabPanel
              componente={Box}
              value={value}
              index={0}
            >
              <Box sx={{ width: "100%", height: 850 }}>
                <DataGrid
                  rows={productos}
                  columns={columns}
                  getRowId={(row) => row.ARTICULO}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 18 },
                    },
                  }}
                  rowSelectionModel={selectedRows}
                  onRowSelectionModelChange={handleSelection}
                  pageSizeOptions={[5, 18, 20]}
                />
              </Box>
            </CustomTabPanel>

            <CustomTabPanel
              component={Box}
              value={value}
              index={1}
            >
              {cargando === true ? (
                <Box sx={{ width: "100%" }}>
                  <LinearProgress />
                </Box>
              ) : pedidos.length <= 0 ? (
                <h1>NO HAY PEDIDOS</h1>
              ) : (
                <Box sx={{ width: "100%", height: 850 }}>
                  <DataGrid
                    rows={pedidos}
                    columns={columnsP}
                    getRowId={(row) => row.PEDIDO}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 18 },
                      },
                    }}
                    pageSizeOptions={[5, 18, 20]}
                  />
                </Box>
              )}
            </CustomTabPanel>

            <CustomTabPanel
              component={Box}
              value={value}
              index={2}
            >
              {cargando === true ? (
                <Box sx={{ width: "100%" }}>
                  <LinearProgress />
                </Box>
              ) : facturas.length <= 0 ? (
                <h1>NO HAY FACTURAS</h1>
              ) : (
                <Box sx={{ width: "100%", height: 850 }}>
                  <DataGrid
                    rows={facturas}
                    columns={columnsF}
                    getRowId={(row) => row.ID}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 18 },
                      },
                    }}
                    pageSizeOptions={[5, 18, 20]}
                  />
                </Box>
              )}
            </CustomTabPanel>
          </Box>
        </div>
      )}
    </>
  );
};

export default productosMG;
