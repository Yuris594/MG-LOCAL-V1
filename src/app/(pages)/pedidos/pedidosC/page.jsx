"use client";

import { Search as SearchIcon, HighlightOff as HighlightOffIcon, NoteAdd as NoteAddIcon, ControlPoint as ControlPointIcon, Edit as EditIcon, SaveAs as SaveAsIcon, Print as PrintIcon, DeleteForever as DeleteForeverIcon, Calculate as CalculateIcon, Lock as LockIcon, Mood as MoodIcon, LocalShipping as LocalShippingIcon, People as PeopleIcon, Cached as CachedIcon, DeleteOutlined as DeleteIcon, Close as CancelIcon, Save as SaveIcon, } from "@mui/icons-material";
import { Box, Tabs, Tab, OutlinedInput, Button, Typography, Zoom, Paper, InputBase, IconButton, TextField, Grid, FormControl, InputLabel, Snackbar, ButtonGroup, Modal, } from "@mui/material";
import { GridRowModes, DataGrid, GridActionsCellItem, GridRowEditStopReasons, } from "@mui/x-data-grid";
import useCalculoSumaSaldo from "@/app/hooks/useCalculoSumaSaldo";
import Productos from "../../(producto)/productos/page";
import useGenerarPDF from "@/app/hooks/useGenerarPDF";
import Banner from "@/app/components/banner/banner";
import { useForm } from "@/app/hooks/useForm";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/authContext";
import PropTypes from "prop-types";
import React from "react";
import MuiAlert from "@mui/material/Alert";


const Alert = React.forwardRef(function Alert(props, ref) {
  return (
    <MuiAlert elevation={6}  ref={ref} variant="filled" {...props} />
  );
});

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other} >
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


const columns = [
  { field: "DESCRIPCION",  headerName: "Referencia", width: 500,  editable: true, },
  { field: "SUBLINEA", headerName: "Sublinea", width: 300 },
  { field: "TOTAL_DISP", headerName: "Disp", width: 70 },
  { field: "PRECIO", headerName: "Precio", width: 130,
      valueFormatter: (params) => {
        const PRECIO = params.value;
        const precioRedondeado = Number(PRECIO).toFixed(0);
        return `${parseFloat(precioRedondeado).toLocaleString()}`;
      }, align: 'right', editable: true
  },
  { field: "CANTIDAD", headerName: "Cant", width: 80, type: "number", editable: true, },
  { field: "PORC_IMPUESTO", headerName: "IVA", width: 40 },
  { field: "PRECIOMASIVA", headerName: "Masiva", width: 130,
      valueFormatter: (params) => {
        const PRECIOMASIVA = params.value;
        const precioRedondeado = Number(PRECIOMASIVA).toFixed(0);
        return `${parseFloat(precioRedondeado).toLocaleString()}`;
      }, align: 'right'
  },
  { field: "PORC_DCTO", headerName: "D1", width: 40 },
  { field: "UNIDAD_EMPAQUE", headerName: "Emp", width: 80 },
  { field: "EXIST_REAL", headerName: "Existreal", width: 90 },
];


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "white",
  width: "90%",
  height: "100%",
  boxShadow: 24,
  p: 4,
};


const conseguirProductos = async () => {
  const response = await fetch("/api/productos/listar_solo_para_mg", {
    method: "GET",
    headers: {
      "Content-Type" : "application/json",
    }
  })
    const data = await response.json()
    return data
};


const conseguirProductosP = async (pedidoId) => {
    const response = await fetch(`/api/pedidos/detalle_lineas/${pedidoId}`, {
      method: "GET",
      headers: {
        "Content-Type" : "application/json",
    }
  })
    const data = await response.json()
    return data
};

const conseguirProductosPendientes = async (pedidoId) => {
    const response = await fetch(`/api/pedidos/articulos_pendientes/${pedidoId}`, {
      method: "GET",
      headers: {
        "Content-Type" : "application/json",
    }
  })
    const data = await response.json()
    return data
};

const guardarProductos = async (bodyData) => {
  const response = await fetch("/api/pedido/crear/", {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json()
  return data
};

const guardarProductosP = async (bodyData) => {
  const response = await fetch("/api/pedido/crear/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(bodyData),
  });

  const data = await response.json()
  return data
};


export const PedidosC = () => {
  const { form, changed } = useForm({});
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const { pedido, setPedido } = useAuth();
  const [openP, setOpenP] = useState(false);
  const [openS, setOpenS] = useState(false);
  const [openE, setOpenE] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [checked, setChecked] = useState(false);
  const [productos, setProductos] = useState([]);
  const [productosP, setProductosP] = useState([]);
  const [clienteP, setClienteP] = useState(pedido[0]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [tablaProducto, setTablaProducto] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [productosConDISP0, setProductosConDIPS0] = useState([]);
  const handleChanges = (event, newValue) => { setValue(newValue) };
  const argumentoPDF = value === 0 ? productosP : productosConDISP0;
  const { sumaSaldoTotal, sumaSaldoTotalDESC } = useCalculoSumaSaldo( productosP, productosConDISP0, value );
  const { generarPDF } = useGenerarPDF( clienteP, argumentoPDF, sumaSaldoTotalDESC );


  useEffect(() => {
    const pedido = JSON.parse(localStorage.getItem("pedidoTemp"));
      if (pedido) {
        setPedido(pedido[0]);
      }
      if (clienteP) {
        obtenerProductos();
        obtenerProductosP(clienteP.PEDIDO);
        obtenerProductosPendientes(clienteP.PEDIDO);
      }

    setTimeout(() => {
      setChecked(true);
    }, 100);
  }, []);

  const obtenerProductos = async () => {
    const datos = await conseguirProductos();
    try {
      if (datos) {
        setProductos(datos);
        setTablaProducto(datos);
      }
    } catch (error) {
        console.log("Error al obtener los datos", error);
    }
  }

  const obtenerProductosP = async (pedidoId) => {
    const datos = await conseguirProductosP(pedidoId);
    try {
      if (datos) {
        setProductosP(datos);
      }
    } catch (error) {
        console.log("Error al obtener los datosP", error);
    }
  }

  const obtenerProductosPendientes = async (pedidoId) => {
    const datos = await conseguirProductosPendientes(pedidoId);
    try {
      if (datos) {
        setProductosConDIPS0(datos);
      }
    } catch (error) {
      console.log("Error al obtener los datoscon", error);
    }
  }

  const productosGuardar = async (e) => {
    e.preventDefault();
    const bodyData = {
      ...clienteP,
      ARTICULOS: productosP,
      OBSERVACIONES: form.OBSERVACIONES,
    };
    const data = await guardarProductos(bodyData);
    try {
          if (data) {
            console.log("Crear")
            setOpenS(true);
          } else {
            setOpenE(true);
            console.error("Error de red: ", error);
          }
    } catch (error) {
        setOpenE(true);
        console.error("Error de red: ", error);
      }
  }

  const productosguardarP = async () => {
    const bodyData = {
      ...clienteP,
      ARTICULOS: productosConDISP0,
    };
    const data = await guardarProductosP(bodyData)
    try {
        if (data) {
          setOpenS(true);
        } else {
          console.error("Error de reed: ", error);
        }
    } catch (error) {
      setOpenE(true);
      console.error("Error de reed: ", error);
    }
  }

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenP = () => setOpenP(true);
  const handleCloseP = () => setOpenP(false);

  

  const handleChange = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    const resultadosBusqueda = tablaProducto.filter((elemento) => {
      const ARTICULO =
        elemento.ARTICULO && elemento.ARTICULO.toString().toLowerCase();
      const DESCRIPCION =
        elemento.DESCRIPCION && elemento.DESCRIPCION.toString().toLowerCase();

      if (
        ARTICULO?.includes(terminoBusqueda.toLowerCase()) ||
        DESCRIPCION?.includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
      return null;
    });
      const resultadosFiltrados = resultadosBusqueda.filter(
        (elemento) => elemento !== null
      );
        setProductos(resultadosFiltrados);
  };


  const handleSelectionChange = (newSelection) => {
    setSelectedRows(newSelection);
  };

  const filasSelecciondas = {};
    selectedRows.forEach((id, index) => {
      const fila = productos.find((producto) => producto.ARTICULO === id);
        filasSelecciondas[index] = fila;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const datosActuales = JSON.parse(localStorage.getItem("pedidoTempG")) || {};
      const datosActualizados = { ...datosActuales, ...filasSelecciondas };
      localStorage.setItem("pedidoTempG", JSON.stringify(datosActualizados));
    }
  }, [filasSelecciondas])

  const guardar = () => {
    const pedido = JSON.parse(localStorage.getItem("pedidoTempG")) || {};
    const valores = Object.values(pedido);
    const productoExistente = productosP.some((producto) => producto.ARTICULO === valores[0].ARTICULO
    );
      if (productoExistente) {
          const productosActuales = [...productosP];
            setProductosP(productosActuales);
            setSelectedRows([]);
            localStorage.removeItem("pedidoTempG");
            alert("ya tienes este producto en el pedido");

      } else {
          const productosActuales = [...productosP];
          const nuevosProductos = [...productosActuales, ...valores];
          const productosActualesP = [...productosConDISP0];
          const nuevosProductosP = [...productosActualesP, ...valores];
            if (value === 0) {
              setProductosP(nuevosProductos);
            }
            if (value === 1) {
              setProductosConDIPS0(nuevosProductosP);
            }
            setOpen(false);
            setSelectedRows([]);
            localStorage.removeItem("pedidoTempG");
      }
  };

  const cerrar = () => {
    setOpen(false);
    setSelectedRows([]);
    localStorage.removeItem("pedidoTempG");
  };

  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setProductosP(productosP.filter((row) => row.ARTICULO !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = productosP.find((row) => row.ARTICULO === id);
    if (editedRow.isNew) {
      setProductosP(productosP.filter((row) => row.ARTICULO !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setProductosP(
      productosP.map((row) =>
        row.ARTICULO === newRow.ARTICULO ? updatedRow : row
      )
    );
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };


  const columnsP = [
    { field: "DESCRIPCION", headerName: "Referencia", width: 500 },
    { field: "DISP", headerName: "Disp", width: 70 },
    { field: "PRECIO", headerName: "Precio", width: 130,
      /*  valueFormatter: (params) => {
          const PRECIO = params.value;
          const precioRedondeado = Number(PRECIO).toFixed(0);
          return `${parseFloat(precioRedondeado).toLocaleString()}`;
        }, align: 'right', editable: true, type: 'number'*/
    },
    { field: "CPed", headerName: "Cant", width: 80, type: "number", editable: true, },
    { field: "PORC_DCTO", headerName: "D1", width: 70,
      /* valueFormatter: (params) => {
          const PORC_DCTO = params.value;
          const precioRedondeado = Number(PORC_DCTO).toFixed(0);
          return `${parseFloat(precioRedondeado).toLocaleString()}`;
        }, align: 'right', editable: true, type: 'number'*/
    },
    { field: "PORC_IMPUESTO", headerName: "IVA", width: 40 },
    { field: "Em", headerName: "Emp", width: 80 },
    { field: "EXIST_REAL", headerName: "Existreal", width: 90 },
    { field: "actions", type: "actions", headerName: "Actions", width: 100, cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
          if (isInEditMode) {
            return [
              <GridActionsCellItem
                icon={<SaveIcon />}
                label="Save"
                sx={{ color: "primary.main", }}
                onClick={handleSaveClick(id)}
              />,

              <GridActionsCellItem
                icon={<CancelIcon />}
                label="Cancel"
                className="textPrimary"
                onClick={handleCancelClick(id)}
                color="inherit"
              />,
            ];
          }

        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            className="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,

          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            className="textPrimary"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];

  const cerrarP = () => {
    window.history.back();
    localStorage.removeItem("pedidoTemp");
  };

  const handleCloses = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenE(false);
    setOpenS(false);
  };
  const especial = () => {
      const estado = pedido.U_COMPESPECIAL === "SI" ? null : "SI";
      const body = {
          ...clienteP,
          U_COMPESPECIAL: estado
      };
      setPedido(body);
      setClienteP(body);
  };

  return (
    <>
      <Box marginBottom="50px">  <Banner />  </Box>
          <Typography variant="h5" style={{fontWeight: "bold"}} component="h1" gutterBottom
              sx={{ display: "flex", justifyContent: "left", alignItems: "center", width: "auto", margin: 0, }}>
            PEDIDOS
          </Typography>

            <Paper style={{ height: "auto", width: "100%" }}>
              <Box style={{ height: "auto", width: "100%" }}>
                <Paper sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: 1, flexDirection: "row", width: "100%", gap: "70px", }}>
                  <Paper sx={{ p: "2px 4px", display: "flex", alignItems: "flex-rigth", width: "auto", margin: "0%", }}>
                    <InputBase
                      sx={{ ml: 1, flex: 1 }}
                      placeholder="Buscar"
                      inputProps={{ "aria-label": "search google maps" }}
                      id="usuario"
                      label="Usuario"
                      name="PER_Usuario"
                      autoComplete="usuario"
                      autoFocus
                      value={busqueda}
                      onChange={handleChange}
                    />

                      <IconButton title="buscar" type="button"  sx={{ p: "10px" }} aria-label="search">
                        <SearchIcon />
                      </IconButton>

                  <Button variant="filled" sx={{ margin: "2px", bgcolor: "#aeefff" }}> <PeopleIcon /> </Button>
                  <Button variant="filled" sx={{ margin: "2px", bgcolor: "#fff694" }}> <MoodIcon /> </Button>
                </Paper>

                <Box>
                  <Button variant="filled" sx={{ margin: "2px", bgcolor: "#b6ff91" }}> <CachedIcon /> </Button>
                  <Button variant="filled" sx={{ margin: "2px", bgcolor: "#aeefff" }} onClick={handleOpenP}> <LocalShippingIcon /> </Button>
                  <Button variant="filled" sx={{ margin: "2px", bgcolor: "#fff694" }}> <MoodIcon /> </Button>
                  <Button variant="filled" sx={{ margin: "2px", bgcolor: "#fff694" }} onClick={especial}> <LockIcon /> </Button>
                  <Button variant="filled" sx={{ margin: "2px", bgcolor: "#f3fec4" }}> <CalculateIcon /> </Button>
                  <Button variant="filled" sx={{ margin: "2px", bgcolor: "#ffa28a" }}> <DeleteForeverIcon /> </Button>
                </Box>

                <Box>
                  {clienteP?.AUTORIZADONOM || '' === "APROBADO" ? (
                    <Button variant="filled" sx={{ margin: "2px", bgcolor: "#fff694" }} onClick={generarPDF}> <PrintIcon /> </Button>               
                  ) : (
                    <Button variant="filled" sx={{ margin: "2px", bgcolor: "#fff64" }} disabled> <PrintIcon /> </Button>
                  )}
                    <Button variant="filled" sx={{ margin: "2px", bgcolor: "#eabafe" }} onClick={productosGuardar}> <SaveAsIcon /> </Button>
                    <Button variant="filled" sx={{ margin: "2px", bgcolor: "#aeefff" }}> <EditIcon /> </Button>
                    <Button variant="filled" sx={{ margin: "2px", bgcolor: "#84d8f4" }}> <NoteAddIcon /> </Button>
                    <Button variant="filled" sx={{ margin: "2px", bgcolor: "#ffa28a" }} onClick={cerrarP}> <HighlightOffIcon /> </Button>
                </Box>
              </Paper>

              <Box sx={{ display: "flex", alignItems: "center", alignContent: "center", justifyContent: "center", zoom: 0.8, margin: 1, }}>
                <Paper sx={{ width: "65%", height: "auto", padding: 2 }}>
                  <Grid container spacing={1}>
                    <Grid item xs={12} sm={3} md={3} lg={3}>
                      <FormControl sx={{ margin: 0.5 }}>
                        <InputLabel htmlFor="component-">Estado</InputLabel>
                          <OutlinedInput id="component-disabled" defaultValue={clienteP?.ESTADO || ''} label="Estado" />
                      </FormControl>
                    </Grid> {" "} <br />

                    <Grid item xs={12} sm={2} md={2} lg={2}>
                      <FormControl sx={{ margin: 0.5, display: "flex" }}>
                        <InputLabel htmlFor="component-disabled"> {" "} Authorizacion {" "} </InputLabel>
                          <OutlinedInput id="component-disabled" defaultValue={clienteP?.AUTORIZADONOM || ''} label="Authorizacion" />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={3} md={3} lg={3}>
                      <FormControl sx={{ margin: 0.5, display: "flex" }}>
                          <InputLabel htmlFor=""> </InputLabel>
                            <OutlinedInput id="component-disabled" defaultValue="" label="" />
                      </FormControl>
                    </Grid>


                    <Grid item xs={12} sm={2} md={2} lg={2}>
                      <FormControl sx={{ margin: 0.5, display: "flex" }}>
                        <InputLabel htmlFor="component-disabled"> Impreso </InputLabel>
                          <OutlinedInput id="component-disabled" defaultValue={clienteP?.IMPRESO || ''} label="Impreso" />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={2} md={2} lg={2}>
                      <FormControl sx={{ margin: 0.5, display: "flex" }}>
                        <InputLabel htmlFor="component-disabled">Nro</InputLabel>
                          <OutlinedInput id="component-disabled" defaultValue={clienteP?.PEDIDO || ''} label="Nro" />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={2} md={2} lg={2}>
                      <FormControl sx={{ margin: 0.5, display: "flex" }}>
                        <InputLabel htmlFor="component-disabled"> Cliente </InputLabel>
                          <OutlinedInput id="component-disabled" defaultValue={clienteP?.CLIENTE || ''} label="Cliente" />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={8} md={8} lg={8}>
                      <FormControl sx={{ margin: 0.5, display: "flex" }}>
                        <InputLabel htmlFor="component-disabled"></InputLabel>
                          <OutlinedInput id="component-disabled" defaultValue={clienteP?.NOMBRE_RAZON || ''} />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={2} md={2} lg={2}>
                      <FormControl sx={{ margin: 0.5, display: "flex" }}>
                        <InputLabel htmlFor="component-disabled">Fecha</InputLabel>
                            <OutlinedInput id="component-disabled" defaultValue={clienteP?.FECHA_PEDIDO || ''} label="Fecha" />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={5} md={5} lg={5}>
                      <FormControl sx={{ margin: 0.5, display: "flex" }}>
                        <InputLabel htmlFor="component-disabled"> Direccion envio </InputLabel>
                          <OutlinedInput id="component-disabled" defaultValue={clienteP?.DEPTO || ''} label="Direccion envio" />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={5} md={5} lg={5}>
                      <FormControl sx={{ margin: 0.5, display: "flex" }}>
                        <InputLabel htmlFor="component-disabled"></InputLabel>
                          <OutlinedInput id="component-disabled" defaultValue={clienteP?.CIUDAD || ''} />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={1} md={1} lg={1}>
                      <FormControl sx={{ margin: 0.5, display: "flex" }}>
                        <InputLabel htmlFor="component-disabled">Vend</InputLabel>
                          <OutlinedInput id="component-disabled" defaultValue={clienteP?.VENDEDOR || ''} label="Vend" />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={1} md={1} lg={1}>
                      <Paper>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom> Especial </Typography>
                        <Typography sx={{ fontSize: 20, padding: 0.5, color: "red" }} variant="body2" color="text.primary"> {clienteP?.U_COMPESPECIAL || ''} </Typography>
                      </Paper>
                    </Grid>

                    <Grid item xs={12} sm={6.3} md={6.3} lg={6.3}>
                      <FormControl sx={{ margin: 0.5, display: "flex" }}>
                        <InputLabel htmlFor="component-disabled"> Nota Factura (Doc2) </InputLabel>
                          <OutlinedInput
                            label="Nota Factura (Doc2)"
                            id="OBSERVACIONES"
                            name="OBSERVACIONES"
                            autoComplete="OBSERVACIONES"
                            autoFocus
                            value={form.OBSERVACIONES || ""}
                            onChange={changed} />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={0.9} md={0.9} lg={0.9}>
                      <FormControl sx={{ margin: 0.5, display: "flex" }}>
                        <InputLabel htmlFor="component-disabled"> Finac %/Dias </InputLabel>
                          <OutlinedInput id="component-disabled" defaultValue="Composed TextField" label="Finac %/Dias" />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={0.9} md={0.9} lg={0.9}>
                      <FormControl sx={{ margin: 0.5, display: "flex" }}>
                        <InputLabel htmlFor="component-disabled">D'UNA</InputLabel>
                          <OutlinedInput defaultValue="Composed TextField" label="D'UNA" />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={2} md={2} lg={2}>
                      <FormControl sx={{ margin: 0.5, display: "flex" }}>
                        <InputLabel htmlFor="component-disabled"> Ped.Origen </InputLabel>
                          <OutlinedInput id="component-disabled" defaultValue="Composed TextField" label="Ped.Origen" />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={1.9} md={1.9} lg={1.9}>
                      <FormControl sx={{ margin: 0.5, display: "flex" }}>
                        <InputLabel htmlFor="component-disabled"> Pendiente </InputLabel>
                          <OutlinedInput id="component-disabled" defaultValue="Composed TextField" label="Pendiente" />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={11} md={11} lg={11}>
                      <FormControl sx={{ margin: 0.5 }}>
                        <InputLabel htmlFor="component-disabled"></InputLabel>
                          <TextField
                            id="outlined-multiline-static"
                            label="Multiline"
                            multiline
                            rows={1.0}
                            defaultValue={clienteP?.OBSERVACIONES || ''}
                            sx={{ width: 760 }}
                          />
                      </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={1} md={1} lg={1}>
                      <FormControl sx={{ margin: 0.5, display: "flex" }}>
                        <InputLabel htmlFor="component-disabled">Plazo</InputLabel>
                          <OutlinedInput id="component-disabled" defaultValue="Composed TextField" label="Plazo" />
                      </FormControl>
                    </Grid>
                  </Grid>
              </Paper>
            </Box>

              <Button variant="filled" sx={{ margin: "2px", bgcolor: "#b6ff91" }} onClick={handleOpen}>
                <ControlPointIcon />
              </Button>
            </Box>

          <Paper sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChanges} aria-label="basic tabs example">
                <Tab label="Detalles Lineas" {...a11yProps(0)} />
                <Tab label="Articulos Pendiente" {...a11yProps(1)} />
              </Tabs>
            </Box>

          <CustomTabPanel value={value} index={0}>
            <Zoom in={checked}>
              <Box sx={{ height: "auto", width: "100%",
                    "& .MuiDataGrid-cell--editable": {
                      bgcolor: (theme) =>
                        theme.palette.mode === "dark" ? "#376331" : "#f5f5f5",
                    "&:hover": {
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#275126" : "#e1e1e1",
                    }, }, }}>

                <Box sx={{ height: 350, width: "100%" }}>
                  <DataGrid
                    density="compact"
                    rows={productosP}
                    columns={columnsP}
                    getRowId={(row) => row.ARTICULO}
                    editMode="row"
                    onRowModesModelChange={handleRowModesModelChange}
                    onRowEditStop={handleRowEditStop}
                    processRowUpdate={processRowUpdate}
                    slotProps={{ toolbar: { setProductosP, setRowModesModel }, }}
                    initialState={{ pagination: { paginationModel: { page: 0, pageSize: 20 },  }, }}
                    pageSizeOptions={[20, 40]}
                  />
                </Box>
              </Box>
            </Zoom>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={1}>
            <Zoom in={checked}>
              <Box sx={{ height: "auto", width: "100%",
                    "& .MuiDataGrid-cell--editable": {
                      bgcolor: (theme) =>
                        theme.palette.mode === "dark" ? "#376331" : "#f5f5f5",
                    "&:hover": {
                      backgroundColor: (theme) =>
                        theme.palette.mode === "dark" ? "#275126" : "#e1e1e1",
                    }, }, }}>

                <Box sx={{ height: 350, width: "100%" }}>
                  <DataGrid
                    rows={productosConDISP0}
                    columns={columnsP}
                    getRowId={(row) => row.ARTICULO}
                    onRowSelectionModelChange={handleRowModesModelChange}
                    onRowEditStop={handleRowEditStop}
                    processRowUpdate={processRowUpdate}
                    slotProps={{
                      toolbar: { setProductosP, setRowModesModel },
                    }}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 20 },
                      },
                    }}
                    pageSizeOptions={[20, 40]}
                  />
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                  <Button variant="filled" sx={{ margin: "2px", bgcolor: "#84D8F4" }} onClick={productosguardarP}>
                    <ControlPointIcon />
                  </Button>
                </Box>
              </Box>
            </Zoom>
          </CustomTabPanel>
        </Paper>
      </Paper>

      <Modal open={openP} onClose={handleCloseP} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}> <Productos /> </Box>
      </Modal>

      <Modal open={open} onClose={guardar} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"
          BackdropProps={{ style: { pointerEvents: "none", }, }}>
        <Box sx={style}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 5, flexDirection: "row", width: "100%", gap: "70px", }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", }}>
              <Button variant="filled" sx={{ margin: "2px", bgcolor: "#b6ff91" }} onClick={guardar}> Agregar </Button>
              <Button variant="filled" sx={{ margin: "2px", bgcolor: "#ffa28a" }} onClick={cerrar}> <HighlightOffIcon /> </Button>
            </Box>

              <Paper sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 600, margin: "0%", }}>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Buscar"
                  inputProps={{ "aria-label": "search google maps" }}
                  id="usuario"
                  label="Usuario"
                  name="PER_Usuario"
                  autoComplete="usuario"
                  autoFocus
                  value={busqueda}
                  onChange={handleChange}
                />
                  <IconButton title="buscar" type="button" sx={{ p: "10px" }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
              </Paper>
          </Box>

          <Box sx={{ height: 950, width: "100%" }}>
            <DataGrid
              rows={productos}
              columns={columns}
              getRowId={(row) => row.ARTICULO}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 20 },
                },
              }}
              pageSizeOptions={[20, 40]}
              onRowSelectionModelChange={handleSelectionChange}
              onSelectionModelChange={(newSelection) =>
                setSelectedRows(newSelection)
              }
              rowSelectionModel={selectedRows}
            />
          </Box>
        </Box>
      </Modal>

      <Paper sx={{ display: "flex", flexDirection: "column", alignItems: "flex-end", }}>
        <ButtonGroup variant="text" aria-label="text button group" sx={{ height: 60 }}>
          <Button sx={{ flexDirection: "column" }}>
            <Typography sx={{ display: "flex", fontSize: 14, paddingRight: 5 }} gutterBottom> {sumaSaldoTotal} </Typography>
            <Typography variant="body2" color="text.primary"> Sub-Total </Typography>
          </Button>

          <Button sx={{ flexDirection: "column" }}>
            <Typography sx={{ display: "flex", fontSize: 14, paddingRight: 5 }} gutterBottom> {sumaSaldoTotalDESC} </Typography>
            <Typography variant="body2" color="text.primary"> Total-Pedido </Typography>
          </Button>
        </ButtonGroup>
      </Paper>

      <Box sx={{ flexDirection: "row", display: "flex" }}>
        <Typography variant="body2" color="text.primary" > Editado por: </Typography>
        <Typography sx={{ display: "flex", fontSize: 14, paddingRight: 5 }} gutterBottom> {clienteP?.createdBy || ''} </Typography>
      </Box>

          {openS ? ( 
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center", }} open={openS} autoHideDuration={2000} onClose={handleCloses}>
                <Alert onClose={handleCloses} severity="success" sx={{ width: "400px", height: "100px" }}>
                  Guardado exitosamente
                </Alert>
              </Snackbar>
          ) : ( "" )}

          {openE ? ( 
            <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center", }} open={openS} autoHideDuration={2000} onClose={handleCloses}>
                <Alert onClose={handleCloses} severity="error" sx={{ width: "400px", height: "100px" }}>
                  No se pudo guardar
                </Alert>
              </Snackbar>
          ) : ( "" )}

    </>
  );
};

export default PedidosC;

