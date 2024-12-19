"use client";


import { Box, Tabs, Tab, Button, Typography, Paper, TextField, FormControl, InputLabel, ButtonGroup, Modal, useMediaQuery, OutlinedInput, Divider } from "@mui/material";
import { GridRowModes, DataGrid, GridActionsCellItem, GridRowEditStopReasons } from "@mui/x-data-grid";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "@/context/authContext";
import { useForm } from "@/app/hooks/useForm";
import MuiAlert from "@mui/material/Alert";
import Grid from "@mui/material/Grid2";
import { Conexion } from "@/conexion";

import useCalculoSumaSaldo from "@/app/hooks/useCalculoSumaSaldo";
import useGenerarPDF from "@/app/hooks/useGenerarPDF";
import Banner from "@/app/components/banner/banner";
import PropTypes from "prop-types";
import React from "react";

import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SaveAsIcon from '@mui/icons-material/SaveAs';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import PrintIcon from '@mui/icons-material/Print';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
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
  const { pedido, setPedido } = useAuth();
  const [busqueda, setBusqueda] = useState([]);
  const [productos, setProductos] = useState([]);
  const [productosP, setProductosP] = useState([]);
  const [clienteP, setClienteP] = useState(pedido[0]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [tablaProducto, setTablaProducto] = useState([]);
  const [cantidades, setCantidades] = useState({});
  const [productosConDISP0, setProductosConDIPS0] = useState([]);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  
  const [openM, setOpenM] = useState(false);
  const [openS, setOpenS] = useState(false);
  const [openE, setOpenE] = useState(false); 
  const [value, setValue] = useState(0);
  
  const argumentoPDF = value === 0 ? productosP : productosConDISP0;
  const { sumaSaldoTotal, sumaSaldoTotalDESC } = useCalculoSumaSaldo(productosP, productosConDISP0, value);
  const { generarPDF } = useGenerarPDF(clienteP, argumentoPDF, sumaSaldoTotalDESC);
  const handleChanges = (event, newValue) => {
      setValue(newValue);
  };

  const handleOpenM = () => setOpenM(true);
  const handleCloseM = () => setOpenM(false);



  useEffect(() => {
      conseguirProductos()
      conseguirProductosP()
      conseguirProductosPendientes()
  }, [])

  const conseguirProductos = async () => {
    try {
      const response = await fetch(Conexion.url + "/productos/listar_solo_para_mg", {
        method: "GET",
        headers: { "Content-Type" : "application/json" },
      });

      const datos = await response.json();

      if (datos) {
        setProductos(datos);
        setTablaProducto(datos)
      };
    } catch (error) {
      console.log("error")
    }
  };

  const conseguirProductosP = async () => {
    try {
      const response = await fetch(Conexion.url + `/pedidos/detalle_lineas/${clienteP.PEDIDO}`, {
        method: "GET",
        headers: { "Content-Type" : "application" },
      });

      const datos = await response.json();

      if (datos) {
        setProductosP(datos);
      }
    } catch (error) {
      console.log("error")
    }
  };

  const conseguirProductosPendientes = async () => {
    try {
      const response = await fetch(Conexion.url + `/pedidos/articulos_pendientes/${clienteP.PEDIDO}`, {
        method: "GET",
        headers: { "Content-Type" : "application/json" }
      });

      const datos = await response.json();

      if (datos) {
        setProductosConDIPS0(datos);
      }
    } catch (error) {
      console.log("error")
    }
  }

  const productosGuardar = async (e) => {
    e.preventDefault();
    const bodyData = {
        ...clienteP,
        ARTICULOS: productosP,
        OBSERVACIONES: form.OBSERVACIONES
    };

    try {
      const response = await fetch(Conexion.url + "/pedido/crear/", {
          method: "POST",
          body: JSON.stringify(bodyData), 
          headers: { "Content-Type": "application/json" }
      });

      if (response.ok) {
          setOpenS(true)
      } else {
          console.error("Error al enviar la solicitud:", response.statusText);
          setOpenE(true)
      }
    } catch (error) {
        console.error("Error de red:", error);
        setOpenE(true)
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
          body: JSON.stringify(bodyData), 
          headers: { "Content-Type": "application/json" }
      });
      if (response.ok) {

      } else {
        console.error("Error al enviar la solicitud:", response.statusText);
      }
    } catch (error) {
        console.log("error")
        console.error("Error de red:", error);
    }
  };

  
  const handleChange = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value)
    filtrar(e.target.value);
  };

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
    const index = productosP.findIndex((row) => row.ARTICULO === newRow.ARTICULO);
      if (index === -1) {
        console.error("ARTICULO NO ENCONTRADO");
        return newRow;
      }
    const updatedRow = { ...newRow, isNew: false };
    const newProductosP = [...productosP];
    newProductosP[index] = updatedRow;
    setProductosP(newProductosP);
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
      setRowModesModel(newRowModesModel);
  };


  const columnsP = [
    { field: 'ARTICULO', headerName: 'CODIGO', width: 100 },
    { field: 'DESCRIPCION', headerName: 'REFERENCIA', width: 500 },
    { field: 'PRECIO', headerName: 'PRECIO', width: 130,
      valueFormatter: (value) => {
        const precio = parseFloat(value).toFixed(0);
        return `${parseFloat(precio).toLocaleString()}`;
      }, editable: true, type: 'number'
    },
    { field: 'CPed', headerName: 'CANT', width: 80, type: 'number', editable: true },
    { field: 'PORC_DCTO', headerName: 'D1', width: 70,
      valueFormatter: (value) => {
        const precio = parseFloat(value).toLocaleString();
        return `${parseFloat(precio).toFixed(1)}`;
      }, editable: true, type: "number"
    },
    { field: 'DISP', headerName: 'DISP', width: 70, 
      valueFormatter: (value) => {
        const precio = parseFloat(value).toFixed(0);
        return `${parseFloat(precio).toLocaleString()}`;
      }, type: "number",
      cellClassName: (params) => params.value === 0 ? 'red-text' : '' 
    },
    { field: 'PORC_IMPUESTO', headerName: 'IVA', width: 40, 
      valueFormatter: (value) => {
        const iva = parseFloat(value).toLocaleString();
        return `${parseFloat(iva).toFixed(1)}`;
      }, type: "number"
    },
    { field: 'Em', headerName: 'EMP', width: 80 },
    { field: 'EXIST_REAL', headerName: 'EXIST-REAL', width: 90, 
      valueFormatter: (value) => {
        const real = parseFloat(value).toFixed(0);
        return `${parseFloat(real).toLocaleString()}`;
      }, type: "number"
    },
    { field: 'actions', type: 'actions', headerName: 'ACTIONS', width: 100, cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                  color: 'primary.main',
              }}
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
              onClick={handleDeleteClick(id)}
              color="inherit"
            />,
        ];
      },
    },
  ];

  const cerrarP = () => {
    window.history.back();
    localStorage.removeItem('pedidoTemp');
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

  const handleCantidad = (ARTICULO, value) => {
    setCantidades({
      ...cantidades,
      [ARTICULO] : value,
    });
  };

  const handleProducto = () => {
    const productosConCantidades = selectedRows.map((ARTICULO) => {
      const producto = productos.find((prod) => prod.ARTICULO === ARTICULO);
      if (producto && cantidades[ARTICULO]) {
        return { ...producto, CANTIDAD: cantidades[ARTICULO] }; 
      }
      return null;
    }).filter(Boolean);

    setProductosP((prevProductos) => {
      const productosActualizados = [...prevProductos];
  
      productosConCantidades.forEach((producto) => {
        const productoExistente = productosActualizados.find(
          (prod) => prod.ARTICULO === producto.ARTICULO
        );
  
        if (productoExistente) {
          productoExistente.CANTIDAD += producto.CANTIDAD;
        } else {
          productosActualizados.push(producto);
        }
      });
  
      return productosActualizados;
    });

    setSelectedRows([]);
    setCantidades({});
    handleCloseM();
  };

  const handleSelectionChange = (newSelection) => {
    setSelectedRows(newSelection);
  };


  const columnsM = [
    { field: 'ARTICULO', headerName: 'CODIGO', width: 100 },
    { field: 'DESCRIPCION', headerName: 'REFERENCIA', width: 500, editable: true },
    { field: 'SUBLINEA', headerName: 'SUBLINEA', width: 300 },
    { field: 'PRECIO', headerName: 'PRECIO', width: 130,
      valueFormatter: (value) => {
        const precio = parseFloat(value).toFixed(0);
        return `${parseFloat(precio).toLocaleString('es-CO')}`;
      }, editable: true, type: "number"
    },
    { field: 'CANTIDAD', headerName: 'CANT', width: 80, type: 'number', editable: true,
      renderCell: (params) => {
        return (
          <TextField 
            sx={{ width: "70px" }}
            variant="outlined"
            size="small"
            value={cantidades[params.id] || ""}
            onChange={(e) => handleCantidad(params.id, e.target.value)}
          />
        )
      },
    },
    { field: 'PORC_IMPUESTO', headerName: 'IVA', width: 40 },
    { field: 'PRECIOMASIVA', headerName: 'MASIVA', width: 130,
      valueFormatter: (value) => {
        const precio = parseFloat(value).toFixed(0);
        return `${parseFloat(precio).toLocaleString('es-CO')}`;
      }, editable: true
    },
    { field: 'PORC_DCTO', headerName: 'D1', width: 40 },
    { field: 'TOTAL_DISP', headerName: 'DISP', width: 70, },
    { field: 'UNIDAD_EMPAQUE', headerName: 'EMP', width: 80 },
    { field: 'EXIST_REAL', headerName: 'EXISTREAL', width: 90 },
  ];

  return (
    <>
      <Box> {" "} <Banner />{" "} </Box>
      <Box sx={{ padding: "20px" }}> 
      <Paper elevation={3} sx={{ padding: 1, marginBottom: 1 }}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
            <Grid size={{ xs: 12, sm: 8, md: 6}}> 
              <h2 style={{ margin: 0 }}><strong>PEDIDOS</strong></h2>
            </Grid>
            <Grid size={{ xs: 12, sm: 8, md: 6}}>
                {clienteP?.AUTORIZADONOM === "APROBADO" ? (
                  <Button variant="filled" sx={{ bgcolor: "#fa4f4f" }} onClick={generarPDF}>
                    {" "}<PrintIcon />{" "}
                  </Button>
                ) : (
                  <Button variant="filled" sx={{ margin: 1, bgcolor: "#fff64" }} disabled>
                    {" "}<PrintIcon />{" "}
                  </Button>
                )}

                <Button variant="filled" sx={{ margin: 1, bgcolor: "#fff694" }} onClick={especial}>
                  {" "}<StarIcon />{" "}
                </Button>
                <Button variant="filled" sx={{ margin: 1, bgcolor: "#b6ff91" }} onClick={handleOpenM}>
                  MG
                </Button>
                <Button variant="filled" sx={{ margin: 1, bgcolor: "#f145af" }}>
                  {" "}<CheckCircleIcon />{" "}
                </Button>
                <Button variant="filled" sx={{ margin: 1, bgcolor: "#eabafe" }} onClick={productosGuardar}>
                  {" "}<SaveAsIcon />{" "}
                </Button>
                <Button variant="filled" sx={{ margin: 1, bgcolor: "#84D8F4" }} onClick={productosguardarP}>
                  <SaveAltIcon  />
                </Button>
                <Button variant="filled" sx={{ bgcolor: "#ffa28a" }} onClick={cerrarP}>
                  {" "}<HighlightOffIcon />{" "}
                </Button>
            </Grid>
          </Grid>
        </Paper>

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
                    <OutlinedInput  label="Fecha" />
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
                <Button variant="contained" color="success" onClick={handleProducto}>Agregar</Button>
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
                processRowUpdate={processRowUpdate}
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



