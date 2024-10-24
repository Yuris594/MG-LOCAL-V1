"use client";

import { Box, Tabs, Tab, Typography, TextField, Divider, Button, 
  ButtonGroup, Checkbox, FormControlLabel, Paper, LinearProgress, } from "@mui/material/";
import Banner from "@/app/components/banner/banner";
import { useAuth } from "@/context/authContext";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Grid from "@mui/material/Grid2";
import PropTypes from "prop-types";
import Link from "next/link";
import { useRouter } from "next/navigation";


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

const columnsP = [
  { field: "FECHA_PEDIDO", headerName: "Fecha", width: 250,
    renderCell: (params) => fDate(params.value),
  },
  { field: "PEDIDO", headerName: "Pedido", width: 130 },
  { field: "ESTADO", headerName: "Estado", width: 130 },
  { field: "AUTORIZADONOM", headerName: "Autorizado", width: 130 },
  { field: "TOTAL_A_FACTURAR", headerName: "Total a facturar", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, align: "right",
  },
  { field: "CreatedBy", headerName: "Creado por", width: 230 },
  { field: "U_EDITADOPOR", headerName: "Editado por", width: 130 },
  { field: "OBSERVACIONES", headerName: "Notas ", width: 130 },
  { field: "COMENTARIO_CXC", headerName: "Comentarios CL", width: 300 },
];


const columnsF = [
  { field: "FACTURA", headerName: "Factura", width: 130 },
  { field: "FECHA_DESPACHO", headerName: "Fecha", width: 190,
    renderCell: (params) => fDate(params.value),
  },
  { field: "ANULADA", headerName: "AN", width: 130 },
  { field: "PRECIO_TOTAL", headerName: "V.fact", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    },
  },
  { field: "PEDIDO", headerName: "Pedido", width: 130 },
  { field: "ARTICULO", headerName: "Articulo", width: 130 },
  { field: "DESCRIPCION", headerName: "Descripcion", width: 700 },
  { field: "CANTIDAD", headerName: "Cant", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    },
  },
  { field: "PRECIO_UNITARIO", headerName: "PrecioUni", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    },
  },
  { field: "PORCIVA", headerName: "IVA", width: 100, align: "right" },
  { field: "PORDESC", headerName: "Desc", width: 130, align: "right" },
  { field: "VDESC", headerName: "VDesc", width: 130 },
  { field: "TOTAL_MERCADERIA", headerName: "VTotal ", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    },
  },
  { field: "IDRUTERO", headerName: "IdRutero", width: 130 },
  { field: "FECHARUT", headerName: "FechaRut", width: 300 },
  { field: "IDGUIA", headerName: "IdGuia", width: 130 },
  { field: "FECHAGUIA", headerName: "FechaGuia", width: 250,
    valueFormatter: (params) => {
      const FECHAGUIA = params.value;
      const fecha = new Date(FECHAGUIA);

      return fecha.toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    },
  },
  { field: "OBSERVACIONES", headerName: "Observaciones", width: 800 },
  { field: "RUBRO1", headerName: "Docs2", width: 500 },
];


const columnsC = [
  { field: "DOC", headerName: "DOC", width: 130 },
  { field: "FECHADOC",  headerName: "FechaDoc", width: 190,
    renderCell: (params) => fDate(params.value),
  },
  { field: "FECHAVENC", headerName: "FechaVenc", width: 190,
    renderCell: (params) => fDate(params.value),
  },
  { field: "NUMDOC", headerName: "NumDoc", width: 130 },
  { field: "DIASVENC", headerName: "Venc", width: 130, align: "right" },
  { field: "MONTO", headerName: "Monto", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, align: "right",
  },
  { field: "SALDO", headerName: "Saldo", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, align: "right",
  },
  { field: "SMenorA30", headerName: "Venc < 30", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, align: "right",
  },
  { field: "SMayorA60", headerName: "Venc < 60", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, align: "right",
  },
  { field: "SMenorA60", headerName: "Venc > 60", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, align: "right",
  },
  { field: "PLAZO", headerName: "Plazo", width: 130, align: "right" },
  { field: "VENDEDOR", headerName: "VENDEDOR", width: 130 },
];



const ConseguirPedidos = async (clienteT) => {
  const response = await fetch(`/api/clientes/pedidos/${clienteT.CLIENTE}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", },
  });
  if (!response.ok) {
    if (response.status === 404) {
      console.log("No hay pedidos para este cliente.");
      return [];
    }
  }
  return response.json();
};

const ConseguirFacturas = async (clienteT) => {
  const response = await fetch(`/api/clientes/facturas/${clienteT.CLIENTE}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", },
  });
  if (!response.ok) {
    if (response.status === 404) {
      console.log("No hay facturas para este cliente.");
      return [];
    }
  }
  return response.json();
};

const ConseguirCarteras = async (clienteT) => {
  const response = await fetch(`/api/clientes/cartera/${clienteT.CLIENTE}`, {
    method: "GET",
    headers: { "Content-Type": "application/json", },
  });
  if (!response.ok) {
    if (response.status === 404) {
      console.log("No hay cartera para este cliente.");
      return [];
    }
  }
  return response.json();
};


const ClientesTemp = () => {
  const { cliente } = useAuth();
  const router = useRouter();
  const [selectedRows] = useState([]);
  const [value, setValue] = useState(3);
  const [cartera, setCartera] = useState([]);
  const [pedidos, setPedidos] = useState([]);
  const [facturas, setFacturas] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [clienteT, setClienteT] = useState(cliente[0]);
  const [sumaSaldoTotal, setSumaSaldoTotal] = useState(0);
  const [sumaSaldo60Total, setSumaSaldo60Total] = useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setCargando(true);
    if (clienteT) {
      obtenerPedidos(clienteT.CLIENTE);
      obtenerFacturas(clienteT.CLIENTE);
      obtenerCarteras(clienteT.CLIENTE);
    }
  }, [value]);


  useEffect(() => {
    if (Array.isArray(cartera)) {
      const sumaSaldo60 = cartera.reduce((total, item) => total + item.SMayorA60, 0);
      const saldo60Redondeado = Number(sumaSaldo60).toFixed(0);
      setSumaSaldo60Total(`${parseFloat(saldo60Redondeado).toLocaleString()}`);

      const sumaSaldo = cartera.reduce((total, item) => total + item.SALDO, 0);
      const precioRedondeado = Number(sumaSaldo).toFixed(0);
      setSumaSaldoTotal(`${parseFloat(precioRedondeado).toLocaleString()}`);
    }
  }, [cartera]);


  const cerrar = () => {
    router.push("./")
    localStorage.removeItem("clientTemp");
    setClienteT("");
  };

  const obtenerPedidos = async () => {
    const datos = await ConseguirPedidos(clienteT);
    if (datos) {
      setPedidos(datos);
      setCargando(false);
    } else {
      console.log("Error al obtener los datos");
      setPedidos([]);
      setCargando(false);
    }
  };

  const obtenerFacturas = async () => {
    const datos = await ConseguirFacturas(clienteT);
    if (datos) {
      setFacturas(datos);
      setCargando(false);
    } else {
      console.log("Error al obtener los datos");
      setFacturas([]);
      setCargando(false);
    }
  };

  const obtenerCarteras = async () => {
    const datos = await ConseguirCarteras(clienteT);
    if (datos) {
      setCartera(datos);
      setCargando(false);
    } else {
      console.log("Error al obtener los datos");
      setCartera([]);
      setCargando(false);
    }
  };

  return (
    <>
      <Box><Banner /></Box>
      <Box className="container" sx={{ paddingTop: 1, display: "flex", alignContent: "center", alignItems: "center", }}>
        <Box style={{ backgroundColor: "#eaeaea", width: "65%", height: "auto", paddingTop: 0, }}>
          <Paper sx={{ padding: 1 }}>
            <Box>
              <Box>
                <Button variant="outlined" sx={{ margin: "2px", bgcolor: "#ffa28a", color: "white" }} onClick={cerrar}>
                  {" "}Cerrar{" "}
                </Button>
                <Button variant="outlined" sx={{ margin: "2px", bgcolor: "#6cff5d", color: "white" }} LinkComponent={Link} href=".././pedidos/pedidosG/">
                  {" "}Pedido{" "}
                </Button>
              </Box>
              <Divider sx={{}} orientation="horizontal" />

              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", }}>
                <ButtonGroup variant="text" aria-label="text button group" sx={{ height: 60 }}>
                  <Button sx={{ flexDirection: "column" }}>
                    <Typography sx={{ display: "flex", fontSize: 14, paddingRight: 5 }} gutterBottom >
                      {sumaSaldoTotal}
                    </Typography>
                    <Typography variant="body2" color="text.primary">Saldo</Typography>
                  </Button>

                  <Button sx={{ flexDirection: "column" }}>
                    <Typography sx={{ display: "flex", fontSize: 14, paddingRight: 5 }} gutterBottom>
                      {sumaSaldo60Total}
                    </Typography>
                    <Typography variant="body2" color="text.primary">Saldo Mayor a 60</Typography>
                  </Button>
                </ButtonGroup>
              </Box>
            </Box>

            <Divider orientation="horizontal" />

            <FormControlLabel label="Individual" control={<Checkbox />} />
            <FormControlLabel label="Compañia" control={<Checkbox />} />

            <h3 sx={{ fontSize: 35 }}>{clienteT?.NOMBREALIAS || ""}</h3>

            <Grid container rowSpacing={1.5} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              <Grid size={{ xs: 2 }}>
                <strong>NIT</strong>
                <Typography sx={{ mb: 1.5, display: "flex" }} color="text.secondary">
                  {clienteT?.CLIENTE || ""}
                </Typography>
              </Grid>

              <Grid size={{ xs: 2 }}>
                <strong>Cupo</strong>
                <Typography sx={{ mb: 1.5, display: "flex" }} color="text.secondary">
                  {Number(clienteT?.CUPO || "").toFixed(0)}
                </Typography>
              </Grid>

              <Grid size={{ xs: 2 }}>
                <strong>Debe</strong>
                <Typography sx={{ mb: 1.5, display: "flex" }} color="text.secondary">
                  {Number(clienteT?.SALDO || "").toFixed(0)}
                </Typography>
              </Grid>

              <Grid size={{ xs: 2 }}>
                <strong>Dirección</strong>
                <Typography sx={{ mb: 1.5, display: "flex" }} color="text.secondary">
                  {clienteT?.DIRECCION || ""}
                </Typography>
              </Grid>

              <Grid size={{ xs: 2 }}>
                <strong>Telefono</strong>
                <Typography sx={{ mb: 1.5, display: "flex" }} color="text.secondary">
                  {clienteT?.TELEFONO1 || ""}
                </Typography>
              </Grid>

              <Grid size={{ xs: 2 }}>
                <strong>Celular</strong>
                <Typography sx={{ mb: 1.5, display: "flex" }} color="text.secondary">
                  {clienteT?.TELEFONO1 || ""}
                </Typography>
              </Grid>

              <Grid size={{ xs: 2 }}>
                <strong>Ciudad</strong>
                <Typography sx={{ mb: 1.5, display: "flex" }} color="text.secondary">
                  {clienteT?.CIUDAD || ""}
                </Typography>
              </Grid>

              <Grid size={{ xs: 3 }}>
                <strong>Departamento</strong>
                <Typography sx={{ mb: 1.5, display: "flex" }} color="text.secondary">
                  {clienteT?.DEPARTAMENTO || ""}
                </Typography>
              </Grid>

              <Grid size={{ sx: 4 }}>
                <strong>Email</strong>
                <Typography sx={{ mb: 1.5, display: "flex" }} color="text.secondary">
                  {clienteT?.E_MAIL || ""}
                </Typography>
              </Grid>
            </Grid>

            <TextField
              id="filled-multiline-static"
              label="Notas"
              multiline
              rows={3}
              defaultValue={clienteT?.NOTAS || ""}
              variant="filled"
              sx={{ width: "100%" }}
            />

            <Paper sx={{ width: "100%" }}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                  <Tab label="Pedidos" {...a11yProps(0)} onClick={obtenerPedidos} />
                  <Tab label="Facturas" {...a11yProps(1)} onClick={obtenerFacturas} />
                  <Tab label="Cartera" {...a11yProps(2)} onClick={obtenerCarteras} />
                  <Tab label="" {...a11yProps(3)}  />
                </Tabs>
              </Box>

              <CustomTabPanel value={value} index={0}>
                <Box sx={{ width: "100%", height: "auto" }}>
                  {cargando === true ? (
                    <Box sx={{ width: "100%" }}>
                      <LinearProgress />
                    </Box>
                  ) : pedidos.length <= 0 ? (
                    <h2>NO HAY PEDIDOS</h2>
                  ) : (
                    <DataGrid
                      density="compact"
                      rows={pedidos}
                      columns={columnsP}
                      pageSizeOptions={[5, 10]}
                      rowSelectionModel={selectedRows}
                      getRowId={(row) => row.PEDIDO}
                      initialState={{
                        pagination: {
                          paginationModel: { page: 0, pageSize: 10 },
                        },
                      }}
                      />
                  )}
                </Box>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={1}>
                <Box sx={{ width: "100%", height: "auto" }}>
                  {cargando === true ? (
                    <Box sx={{ width: "100%" }}>
                      <LinearProgress />
                    </Box>
                  ) : facturas.length <= 0 ? (
                    <h2>NO HAY FACTURAS</h2>
                  ) : (
                    <DataGrid
                      density="compact"
                      rows={facturas}
                      columns={columnsF}
                      pageSizeOptions={[5, 10]}
                      rowSelectionModel={selectedRows}
                      getRowId={(row) => row.ID}
                      initialState={{
                        pagination: {
                          paginationModel: { page: 0, pageSize: 10 },
                        },
                      }}
                    />
                  )}
                </Box>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={2}>
                <Box sx={{ width: "100%", height: "auto" }}>
                  {cargando === true ? (
                    <Box sx={{ width: "100%" }}>
                      <LinearProgress />
                    </Box>
                  ) : cartera.length <= 0 ? (
                    <h2>NO HAY CARTERA</h2>
                  ) : (
                    <DataGrid
                      density="compact"
                      rows={cartera}
                      columns={columnsC}
                      pageSizeOptions={[5, 10]}
                      rowSelectionModel={selectedRows}
                      getRowId={(row) => row.NUMDOC}
                      initialState={{
                        pagination: {
                          paginationModel: { page: 0, pageSize: 10 },
                        },
                      }}
                    />
                  )}
                </Box>
              </CustomTabPanel>
            </Paper>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default ClientesTemp;
