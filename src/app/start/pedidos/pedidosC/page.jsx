"use client";


import { Box, Tabs, Tab, OutlinedInput, Button, Typography, Paper, TextField, FormControl, InputLabel, ButtonGroup, Modal, useMediaQuery } from "@mui/material";
import { GridRowModes, DataGrid, GridActionsCellItem, GridRowEditStopReasons, } from "@mui/x-data-grid";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import useCalculoSumaSaldo from "@/app/hooks/useCalculoSumaSaldo";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Producto from "../../(producto)/producto/page";
import useGenerarPDF from "@/app/hooks/useGenerarPDF";
import SaveAsIcon from '@mui/icons-material/SaveAs';
import CancelIcon from '@mui/icons-material/Cancel';
import Banner from "@/app/components/banner/banner";
import DeleteIcon from '@mui/icons-material/Delete';
import PrintIcon from '@mui/icons-material/Print';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { useAuth } from "@/context/authContext";
import { useForm } from "@/app/hooks/useForm";
import { useCallback, useEffect, useRef, useState } from "react";
import MuiAlert from "@mui/material/Alert";
import Grid from "@mui/material/Grid2";
import PropTypes from "prop-types";
import React from "react";
import { Conexion } from "@/conexion";
import StarIcon from '@mui/icons-material/Star';


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxHeight: "90vh",
  maxWidth: "80vw",
  overflowY: "auto",
  overflowX: "hidden",
  padding: "16px",
  backgroundColor: "#fff",
  border: "2px solid #000",
  boxShadow: 24
};


const Alert = React.forwardRef(function Alert(props, ref) {
  return (
    <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
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
};



export const PedidosC = () => {
  const inputRef = useRef();
  const { form, changed } = useForm({});
  const [value, setValue] = useState(0);
  const [fecha, setFecha] = useState("");
  const { pedido, setPedido } = useAuth();
  
  const [openM, setOpenM] = useState(false);
  const [openB, setOpenB] = useState(false);
  const [openS, setOpenS] = useState(false);
  const [openE, setOpenE] = useState(false);

  const [busqueda, setBusqueda] = useState("");
  const [checked, setChecked] = useState(false);
  const [productos, setProductos] = useState([]);
  const [clienteP, setClienteP] = useState(null);
  const [cantidades, setCantidades] = useState("");
  const [productosP, setProductosP] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [tablaProducto, setTablaProducto] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [productosConDISP0, setProductosConDIPS0] = useState([]);
  const [articulosSeleccionados, setArticulosSeleccionados] = useState([]);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const argumentoPDF = value === 0 ? productosP : productosConDISP0;
  const { sumaSaldoTotal, sumaSaldoTotalDESC } = useCalculoSumaSaldo( productosP, productosConDISP0, value );
  const { generarPDF } = useGenerarPDF( clienteP, argumentoPDF, sumaSaldoTotalDESC, productosP );
  const handleChanges = (event, newValue) => { setValue(newValue) };

  const handleOpenM = () => setOpenM(true);
  const handleCloseM = () => { 
    setOpenM(false);
    setSelectedRows([]);
    localStorage.removeItem("pedidosTemp");
  };

  const handleOpenB = () => setOpenB(true);
  const handleCloseB = () => { 
    setOpenB(false);
    setSelectedRows([]);
    localStorage.removeItem("pedidosTemp");
  };

  useEffect(() => {
    if(clienteP) {
      obtenerProductos();
      obtenerProductosP(clienteP.PEDIDO);
      obtenerProductosPendientes(clienteP.PEDIDO);
    }
  }, [clienteP]);


  useEffect(() => {
    const datos = localStorage.getItem("pedidoTemp");
    if (datos) {
      setClienteP(JSON.parse(datos)[0]);
    }
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      filtrar(checked);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [checked]);


  useEffect(() => {
    if (clienteP?.FECHA_PEDIDO) {
      const fechaActual = () => {
        const fechaPedido = new Date(clienteP.FECHA_PEDIDO);
        const dias = fechaPedido.getDate().toString().padStart(2, '0');
        const mes = (fechaPedido.getMonth() + 1).toString().padStart(2, '0');
        const anio = fechaPedido.getFullYear();

        const fechaFormateada = `${dias}/${mes}/${anio}`;
        setFecha(fechaFormateada);
      };
      fechaActual(); 
    }
  }, [clienteP]);

  //Traer los datos de productos MG de la base de datos 
  const obtenerProductos = async () => {
    try {
      const response = await fetch("/api/productos/listar_solo_para_mg", {
        method: "GET",
        headers: { "Content-Type" : "application/json" }
      });
      const datos = await response.json();
      if (datos) {
        setProductos(datos);
        setTablaProducto(datos);
      }
    } catch (error) {
      console.log("Error al obtener los datos de Productos", error);
    }
  };

  const obtenerProductosP = async () => {
    try {
      const response = await fetch(`/api/pedidos/detalle_lineas/${clienteP.PEDIDO}`, {
        method: "GET",
        headers: { "Content-Type" : "application/json" }
      });
      const datos = await response.json();
      if (datos) {
        setProductosP(datos);
      } else {
        console.log("Error.....")
      }
    } catch (error) {
      console.log("Error al obtener los datos de Detalles de Lineas", error);
    }
  };

  const obtenerProductosPendientes = async () => {
    try {
      const response = await fetch(`/api/pedidos/articulos_pendientes/${clienteP.PEDIDO}`, {
        method: "GET",
        headers: { "Content-Type": "application/json", },
      });
      const datos = await response.json();
      if (Array.isArray(datos)) {
        setProductosConDIPS0(datos);
      } else {
        console.log("La respuesta no es un array", datos);
      }
    } catch (error) {
      console.log("Error al obtener los datos de Articulos Pendientes", error);
    }
  };



  const productosGuardar = async (e) => {
    e.preventDefault();
    const bodyData = {
      ...clienteP,
      ARTICULOS: productosP,
      OBSERVACIONES: form.OBSERVACIONES,
    };
    try {
      const response = await fetch(Conexion.url + "/pedido/crear/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });
      
      const data = await response.json();
      if (data) {
        console.log("Crear");
        setOpenS(true);
      } else {
        setOpenE(true);
        console.error("Error de red: ", error);
      }
    } catch (error) {
      setOpenE(true);
      console.error("Error de red: ", error);
    }
  };


  const productosguardarP = async () => {
    const bodyData = {
      ...clienteP,
      ARTICULOS: productosConDISP0,
    };
    try {
      const response = await fetch(Conexion.url + "/pedido/crear/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bodyData),
      });

      const data = await response.json();

      if (data) {
        setOpenS(true);
        console.log("Crear x2")
      } else {
        console.error("Error de reed: ", error);
      }
    } catch (error) {
      setOpenE(true);
      console.error("Error de reed: ", error);
    }
  };


  //Cerrar la pagina 
  const cerrarP = () => {
    window.history.back();
    localStorage.removeItem("pedidoTemp");
  };

  //Definir a un cliente como especial
  const especial = () => {
    const estado = pedido.U_COMPESPECIAL === "SI" ? null : "SI";
    const body = {
      ...clienteP,
      U_COMPESPECIAL: estado,
    };
    setPedido(body);
    setClienteP(body);
  };



  // Tabla de los Productos de la pagina principal
  const columnsP = [
    { field: "DESCRIPCION", headerName: "REFERENCIA", width: 500 },
    { field: "DISP", headerName: "DISP", width: 70 },
    { field: "PRECIO", headerName: "PRECIO", width: 130,
      valueFormatter: (value) => {
        const precioRedondeado = Number(value).toFixed(0);
        return `${parseFloat(precioRedondeado).toLocaleString()}`;
      },
    },
    { field: "CPed", headerName: "CANT", width: 80, type: "number", editable: true,
    },
    { field: "PORC_DCTO", headerName: "D1", width: 70,
      valueFormatter: (value) => {
        const precioRedondeado = Number(value).toFixed(0);
        return `${parseFloat(precioRedondeado).toLocaleString()}`;
      },
    },
    { field: "PORC_IMPUESTO", headerName: "IVA", width: 40 },
    { field: "Em", headerName: "EMP", width: 80 },
    { field: "EXIST_REAL", headerName: "EXISTREAL", width: 90 },
    { field: "actions", type: "actions", headerName: "Actions", width: 100, cellClassName: "actions",
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{ color: "primary.main" }}
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

  //Funcionalidades de ediccion
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


  //Filtrar y Busqueda de los productos

  const handleChange = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value)
    filtrar(e.target.value);
}

  const filtrar = (terminoBusqueda) => {
    const resultadosBusqueda = tablaProducto.filter((elemento) => {
      const ARTICULO = elemento.ARTICULO && elemento.ARTICULO.toString().toLowerCase();
      const DESCRIPCION = elemento.DESCRIPCION && elemento.DESCRIPCION.toString().toLowerCase();
        if (
            ARTICULO?.includes(terminoBusqueda.toLowerCase()) ||
            DESCRIPCION?.includes(terminoBusqueda.toLowerCase())
        ) {
            return elemento;
        }
        return null; 
      });
    const resultadosFiltrados = resultadosBusqueda.filter((elemento) => elemento !== null);
    setProductos(resultadosFiltrados);
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
      setTablaProducto(resultadosFiltrados[0]);
    }
  }, [productos]);


  //////////////////////////////////////////////////////////////////




  const agregarArticulo = (nuevosArticulos) => {
    const articulosConTotal = nuevosArticulos.map((art) => {
      const precioUnitario = art.PRECIO * (1 + art.PORC_IMPUESTO / 100);
      const cantidad = parseFloat(art.cantped);
      const descuento = parseFloat(art.PORC_DCTO) / 100;
      const total = precioUnitario * cantidad * (1 - descuento);
      return {
        ...art,
        Total: total.toFixed(0),
      };
    });
    const articulosActualizados = [...articulosSeleccionados, ...articulosConTotal];
    setArticulosSeleccionados(articulosActualizados);
  };

  const handleProcessRowUpdate = (newRow) => {
    const updatedRows = productos.map((prod) => 
      prod.ARTICULO === newRow.ARTICULO ? { ...prod, ...newRow } : prod
    );
    setProductosP(updatedRows);
    setTablaProducto(updatedRows);
    return newRow;
  };


  const handleCantidad = (ARTICULO, value) => {
    setCantidades({
      ...cantidades,
      [ARTICULO] : value,
    });
  };

  const agregarArticulos = () => {
    const articulosSeleccionados = productos.filter((prod) => cantidades[prod.ARTICULO]);
    agregarArticulo(
      articulosSeleccionados.map((art) => ({
        ...art,
        CANTIDAD: cantidades[art.ARTICULO]
      }))
    );
    handleCloseM();
  }

  const columnsM = [
    { field: "ARTICULO", headerName: "CODIGO", width: 130 },
    { field: "DESCRIPCION", headerName: "REFERENCIA", width: 500 },
    { field: "UNIDAD_EMPAQUE", headerName: "EMP", width: 80 },
    { field: "PRECIO", headerName: "PRECIO", width: 130,
      valueFormatter: (value) => {
        const precioRedondeado = Number(value).toFixed(0);
        return `${parseFloat(precioRedondeado).toLocaleString()}`;
      },
    },
    { field: "CANTIDAD", headerName: "CANT", width: 80, 
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
    { field: "PORC_IMPUESTO", headerName: "IVA", width: 40 },
    { field: "PRECIOMASIVA", headerName: "MASIVA", width: 130,
      valueFormatter: (value) => {
        const precioRedondeado = Number(value).toFixed(0);
        return `${parseFloat(precioRedondeado).toLocaleString()}`;
      }, align: "right",
    },
    { field: "PORC_DCTO", headerName: "D1", width: 40 },
    { field: "TOTAL_DISP", headerName: "DISP", width: 70 },
    { field: "EXIST_REAL", headerName: "EXISTREAL", width: 90 },
  ];

  return (
    <>
      <Box> {" "} <Banner />{" "} </Box>
      <Box sx={{ padding: "20px" }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid size={{ xs: 12 }}>
            <h2 style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", margin: 6 }}><strong>PEDIDOS</strong></h2>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <Paper sx={{ p: 2, display: "flex", flexWrap: "wrap", gap: 2, boxShadow: 3 }}>
              <Box sx={{ display: "flex", gap: 1, width: "100%", justifyContent: "space-between" }}>
                
                <Box sx={{ display: "flex", gap: 1 }}>
                  {clienteP?.AUTORIZADONOM === "APROBADO" ? (
                    <Button variant="filled" sx={{ margin: "2px", bgcolor: "#fff694" }} onClick={generarPDF}>
                      {" "}<PrintIcon />{" "}
                    </Button>
                  ) : (
                    <Button variant="filled" sx={{ margin: "2px", bgcolor: "#fff64" }} disabled>
                      {" "}<PrintIcon />{" "}
                    </Button>
                  )}

                  <Button variant="filled" sx={{ margin: "2px", bgcolor: "#fff694" }} onClick={especial}>
                    {" "}<StarIcon />{" "}
                  </Button>
                  <Button variant="filled" sx={{ margin: "2px", bgcolor: "#aeefff" }} onClick={handleOpenB}>
                    {" "}<LocalShippingIcon />{" "}
                  </Button>
                  <Button variant="filled" sx={{ margin: "2px", bgcolor: "#b6ff91" }} onClick={handleOpenM}>
                    MG
                  </Button>
                  <Button variant="filled" sx={{ margin: "2px", bgcolor: "#f145af" }}>
                    {" "}<CheckCircleIcon />{" "}
                  </Button>
                  <Button variant="filled" sx={{ margin: "2px", bgcolor: "#eabafe" }} onClick={productosGuardar}>
                    {" "}<SaveAsIcon />{" "}
                  </Button>
                  <Button variant="filled" sx={{ margin: "2px", bgcolor: "#84D8F4" }} onClick={productosguardarP}>
                    <ControlPointIcon />
                  </Button>
                  <Button variant="filled" sx={{ margin: "2px", bgcolor: "#ffa28a" }} onClick={cerrarP}>
                    {" "}<HighlightOffIcon />{" "}
                  </Button>
                </Box>
                
                <Box sx={{ display: "flex", justifyContent: "flex-end", flexGrow: 1 }}>
                  <TextField
                    id="outlined-basic"
                    placeholder="Buscar Producto"
                    value={busqueda}
                    onChange={handleChange}
                    inputRef={inputRef}
                    sx={{ width: "100%", maxWidth: 300 }} 
                  />
                </Box>
              </Box>
            </Paper>
          </Grid>


          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "#fff", p: 2, zoom: 0.80  }}>
            <Paper sx={{ width: { xs: "90%", sm: "70%", md: "50%", lg: "40%" } }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 3 }}>
                  <FormControl fullWidth>
                    <InputLabel>Estado</InputLabel>
                    <OutlinedInput value={clienteP?.ESTADO || ''} label="Estado" />
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12, sm: 3 }}>
                  <FormControl fullWidth>
                    <InputLabel>{" "}Authorizacion{" "}</InputLabel>
                    <OutlinedInput value={clienteP?.AUTORIZADONOM || ""} label="Authorizacion" />
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12, sm: 3 }}>
                  <FormControl fullWidth>
                    <InputLabel>{" "}Impreso{" "}</InputLabel>
                    <OutlinedInput value={clienteP?.IMPRESO || ""} label="Impreso" />
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12, sm: 3 }}>
                  <FormControl fullWidth>
                    <InputLabel>Nro</InputLabel>
                    <OutlinedInput value={clienteP?.PEDIDO || ""} label="Nro" />
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12, sm: 3 }}>
                  <FormControl fullWidth>
                    <InputLabel>{" "}Cliente{" "}</InputLabel>
                    <OutlinedInput value={clienteP?.CLIENTE || ""} label="Cliente" />
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12, sm: 9 }}>
                  <FormControl fullWidth>
                    <InputLabel></InputLabel>
                    <OutlinedInput value={clienteP?.NOMBRE_RAZON || ""} />
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12, sm: 3 }}>
                  <FormControl fullWidth>
                    <InputLabel>Fecha</InputLabel>
                    <OutlinedInput value={fecha} label="Fecha" />
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12, sm: 3 }}>
                  <FormControl fullWidth>
                    <InputLabel>{" "}Direccion de Envio{" "}</InputLabel>
                    <OutlinedInput value={clienteP?.DEPTO || ""} label="Direccion Envio" />
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12, sm: 3}}>
                  <FormControl fullWidth>
                    <InputLabel></InputLabel>
                    <OutlinedInput value={clienteP?.CIUDAD || ""} />
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12, sm: 3 }}>
                  <FormControl fullWidth>
                    <InputLabel>Vend</InputLabel>
                    <OutlinedInput value={clienteP?.VENDEDOR || ""} label="Vend" />
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12, sm: 1 }}>
                  <Paper>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom >{" "}Especial{" "}</Typography>
                    <Typography sx={{ fontSize: 20, padding: 0.5, color: "red" }} variant="body2" color="text.primary">{" "}{clienteP?.U_COMPESPECIAL || ""}{" "}</Typography>
                  </Paper>
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <FormControl sx={{ margin: 0.5, display: "flex" }}>
                    <InputLabel htmlFor="component-disabled">{" "}Nota Factura (Doc2){" "}</InputLabel>
                    <OutlinedInput
                      label="Nota Factura (Doc2)"
                      id="OBSERVACIONES"
                      name="OBSERVACIONES"
                      autoComplete="OBSERVACIONES"
                      autoFocus
                      value={form.OBSERVACIONES || ""}
                      onChange={changed}
                    />
                  </FormControl>
                </Grid>

                <Grid size={{ xs: 12, sm: 5}}>
                  <FormControl sx={{ margin: 0.5, display: "flex"  }}>
                    <InputLabel htmlFor="component-disabled"></InputLabel>
                    <TextField
                      id="outlined-multiline-static"
                      label="Multiline"
                      multiline
                      rows={1}
                      defaultValue={clienteP?.OBSERVACIONES || ""}
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Paper>
          </Box>

          <Grid size={{ xs: 12 }}>
            <Paper sx={{ width: "100%" }}>
              <Tabs value={value} onChange={handleChanges} aria-label="basic tabs example">
                <Tab label="Detalles Lineas" {...a11yProps(0)} />
                <Tab label="Articulos Pendientes" {...a11yProps(1)} />
              </Tabs>
          
              <CustomTabPanel value={value} index={0}>
                <Box sx={{ height: "auto", width: "100%", 
                    "& .MuiDataGrid-cell--editable": {
                      bgcolor: (theme) =>
                        theme.palette.mode === "dark" ? "#376331" : "#f5f5f5",
                      "&:hover": {
                        backgroundColor: (theme) =>
                          theme.palette.mode === "dark" ? "#275126" : "#e1e1e1",
                      },
                    },
                  }}>
                  <Box sx={{ height: "auto", width: "100%" }}>
                    <DataGrid
                      density="compact"
                      rows={productosP}
                      columns={columnsP}
                      getRowId={(row) => row.ARTICULO}
                      editMode="row"
                      onRowModesModelChange={handleRowModesModelChange}
                      onRowEditStop={handleRowEditStop}
                      processRowUpdate={processRowUpdate}
                      slotProps={{ toolbar: { setProductosP, setRowModesModel } }}
                      initialState={{
                        pagination: {
                          paginationModel: { page: 0, pageSize: 10 },
                        },
                      }}
                      pageSizeOptions={[10]}
                    />
                  </Box>
                </Box>
              </CustomTabPanel>

              <CustomTabPanel value={value} index={1}>
                <Box sx={{ height: "auto", width: "100%",
                    "& .MuiDataGrid-cell--editable": {
                      bgcolor: (theme) =>
                        theme.palette.mode === "dark" ? "#376331" : "#f5f5f5",
                      "&:hover": {
                        backgroundColor: (theme) =>
                          theme.palette.mode === "dark" ? "#275126" : "#e1e1e1",
                      },
                    },
                  }}>
                  <Box sx={{ height: "auto", width: "100%" }}>
                    <DataGrid
                      density="compact"
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
                          paginationModel: { page: 0, pageSize: 10 },
                        },
                      }}
                      pageSizeOptions={[10]}
                    />
                  </Box>
                </Box>
              </CustomTabPanel>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Paper elevation={3} sx={{ padding: 3, margin: 3, marginTop: 3}}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <ButtonGroup variant="text" aria-label="text button group" sx={{ height: 60 }}>
            <Button sx={{ flexDirection: "column" }}>
              <Typography sx={{ display: "flex", fontSize: 14, paddingRight: 5 }} gutterBottom>{" "}${sumaSaldoTotal}{" "}</Typography>
              <strong>{" "}SUB-TOTAL{" "}</strong>
            </Button>
            <Button sx={{ flexDirection: "column" }}>
              <Typography sx={{ display: "flex", fontSize: 14, paddingRight: 5 }} gutterBottom>{" "}${sumaSaldoTotalDESC}{" "}</Typography>
              <strong>{" "}TOTAL{" "}</strong>
            </Button>
          </ButtonGroup>
        </Box>
      </Paper>

      <Box sx={{ flexDirection: "row", display: "flex", justifyContent: "flex-end" }}>
        <strong>{" "}Editado por:{" "}</strong>
        <Typography sx={{ display: "flex", fontSize: 14, paddingRight: 5 }} gutterBottom>
          {" "}{clienteP?.createdBy || ""}{" "}
        </Typography>
      </Box>


      <Modal
        open={openB}
        onClose={handleCloseB}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>{" "}<Producto  handleCloseB={handleCloseB}  />{" "}</Box>
      </Modal>

         
      <Modal
        open={openM}
        onClose={handleCloseM}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <Box sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", justifyContent: "space-between", alignItems: "center", gap: 2 }}>
              <h2><strong>PRODUCTOS</strong></h2>
              <Box display="flex" gap={1}>
                <Button variant="contained" color="success" onClick={agregarArticulos}>Agregar</Button>
                <Button variant="contained" color="error" onClick={handleCloseM}>Cerrar</Button>
              </Box>
            </Box>

            <Box sx={{ display: "flex", flexDirection: isSmallScreen ? "column" : "row", gap: 2, alignItems: "center" }}>
              <TextField
                id="outlined-basic"
                placeholder="Buscar Producto"
                value={busqueda}
                onChange={handleChange}
                inputRef={inputRef}
                sx={{ width: "100%" }}
              />
            </Box> 

            <Box sx={{ width: "100%", height: 480 }}>
              <DataGrid
                density="compact"
                rows={productos}
                columns={columnsM}
                getRowId={(row) => row.ARTICULO}
                pageSize={10}
                rowSelectionModel={selectedRows}
                processRowUpdate={handleProcessRowUpdate}
                onRowSelectionModelChange={handleSelectionChange}
                sx={{
                  "& .MuiDataGrid-columnHeaderTitle": {
                    fontWeight: "bold",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default PedidosC;







/*



  const handleCloses = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenE(false);
    setOpenS(false);
  };
  




  Alertas

  {openS ? (
        <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={openS} autoHideDuration={2000} onClose={handleCloses}>
          <Alert onClose={handleCloses} severity="success" sx={{ width: "400px", height: "100px" }}>
            Guardado exitosamente
          </Alert>
        </Snackbar>
      ) : ( "" )}

      {openE ? (
        <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={openS} autoHideDuration={2000} onClose={handleCloses}>
          <Alert onClose={handleCloses} severity="error" sx={{ width: "400px", height: "100px" }}>
            No se pudo guardar
          </Alert>
        </Snackbar>
      ) : ( "" )}




          
*/