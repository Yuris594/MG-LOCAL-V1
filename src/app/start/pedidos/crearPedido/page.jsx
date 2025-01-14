"use client";


import Link from "next/link";
import { Conexion } from "@/conexion";
import Grid from "@mui/material/Grid2";
import { useAuth } from "@/context/authContext";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Banner from "@/app/components/banner/banner";
import DeleteIcon from "@mui/icons-material/Delete";
import CancelIcon from "@mui/icons-material/Cancel";
import BusinessIcon from "@mui/icons-material/Business";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ClientesGlobal from "../../clients/clientesGlobal/page";
import UseImportoExcel from "@/app/hooks/useImportoExcel";
import { useCallback, useEffect, useRef, useState } from "react";
import { DataGrid, GridRowModes, GridActionsCellItem } from "@mui/x-data-grid";
import { Box, Button, ButtonGroup, Modal, Paper, TextField, Typography, 
useMediaQuery } from "@mui/material";


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
  bgcolor: "#fff",
  border: "2px solid #000",
  boxShadow: 24
};


const CrearPedido = () => {
  const inputRef = useRef();
  const { cliente } = useAuth();
  const [total, setTotal] = useState("0");
  const [notas, setNotas] = useState("");
  const [open, setOpen] = useState(false);
  const [openM, setOpenM] = useState(false);
  const [subTotal, setSubTotal] = useState("0");
  const [busqueda, setBusqueda] = useState("");
  const [productos, setProductos] = useState([]);
  const [cantidades, setCantidades] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const [tablaProducto, setTablaProducto] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [clienteP, setClienteP] = useState(cliente?.[0] || {});
  const [articulosSeleccionados, setArticulosSeleccionados] = useState([]);
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const handleOpenM = () => setOpenM(true);
  const handleCloseM = () => setOpenM(false);
  const handleOpenC = () => setOpen(true);
  const handleCloseC = () => setOpen(false);

  useEffect(() => {
    if (cliente?.[0]) {
      setClienteP(cliente[0]);
    }
  }, [cliente]);

  const seleccionarCliente = (clienteSeleccionado) => {
    setClienteP(clienteSeleccionado);
    cliente[0] = clienteSeleccionado;
  };

  const handleImportData = (data) => {
    const nuevosProductos = data.map((row) => ({
      ARTICULO: `${row["CODIGO"]}`,
      DESCRIPCION: row["REFERENCIA"],
      SUBLINEA: row["SUBLINEA"],
      UNIDAD_EMPAQUE: row["EMP"],
      PRECIO: row["PRECIO"],
      cantped: parseFloat(row["CANT"]) || 0,
      PORC_IMPUESTO: parseFloat(row["IVA"]) || 0,
      PORC_DCTO: parseFloat(row["DESC"]) || 0,
      PRECIOMASIVA: parseFloat(row["MASIVA"]) || 0,
      TOTAL_DISP: parseFloat(row["DISP"]) || 0,
      EXIST_REAL: parseFloat(row["EXIST_REAL"]) || 0,
    }));
    setArticulosSeleccionados((prevProductos) => [...prevProductos, ...nuevosProductos]);
    CalcularTotales(nuevosProductos)
  };

  const columns = [
    { field: "ARTICULO", headerName: "CODIGO", width: 100 },
    { field: "DESCRIPCION", headerName: "REFERENCIA", width: 500 },
    { field: "SUBLINEA", headerName: "SUBLINEA", width: 250 },
    { field: "UNIDAD_EMPAQUE", headerName: "EMP", width: 80 },
    { field: "PRECIO", headerName: "PRECIO", width: 130, 
      valueFormatter: (value) => {
        const precio = parseFloat(value).toFixed(0);
        return `${parseFloat(precio).toLocaleString('es-CO')}`;
      }, editable: true, type: "number",
    },
    { field: "cantped", headerName: "CANT", width: 100, 
      editable: true, editable: true, type: "number"
    },
    { field: "PORC_IMPUESTO", headerName: "IVA", width: 70,
      valueFormatter: (value) => {
        const precio = parseFloat(value).toFixed(0);
        return `${parseFloat(precio).toLocaleString()}`;
      }, editable: true, type: "number" 
    },
    { field: "PORC_DCTO", headerName: "DESC", width: 70,
      valueFormatter: (value) => {
        const precio = parseFloat(value).toFixed(0);
        return `${parseFloat(precio).toLocaleString()}`;
      }, editable: true, type: "number" 
    },
    { field: "PRECIOMASIVA", headerName: "MASIVA", width: 100,
      valueFormatter: (value) => {
        const precio = parseFloat(value).toFixed(0);
        return `${parseFloat(precio).toLocaleString('es-CO')}`;
      }, 
    },
    { field: "TOTAL_DISP", headerName: "DISP", width: 70, 
      valueFormatter: (value) => {
        const precio = parseFloat(value).toFixed(0);
        return `${parseFloat(precio).toLocaleString()}`;
      }
    },
    { field: "EXIST_REAL", headerName: "EXIST_REAL", width: 90, 
      valueFormatter: (value) => {
        const precio = parseFloat(value).toFixed(0);
        return `${parseFloat(precio).toLocaleString()}`;
      }
    },
    { field: "actions", type: "actions", headerName: "", width: 100, 
      cellClassName: "actions",
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
    setArticulosSeleccionados((prevSeleccionados) => 
      prevSeleccionados.filter((row) => row.ARTICULO !== id) 
    );
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = productos.find((row) => row.ARTICULO === id);
    if (editedRow.isNew) {
      setProductos(productos.filter((row) => row.ARTICULO !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const index = articulosSeleccionados.findIndex((row) => row.ARTICULO === newRow.ARTICULO);
      if (index === -1) {
        console.error("ARTICULO NO ENCONTRADO");
        return newRow;
      }
    const updatedRow = { ...newRow, isNew: false };
    const newProductosP = [...articulosSeleccionados];
    newProductosP[index] = updatedRow;
    setArticulosSeleccionados(newProductosP);
    CalcularTotales(newProductosP);
    return updatedRow;
  };



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
    CalcularTotales(articulosActualizados);
  };


  const CalcularTotales = (articulos) => {
    let nuevoSubTotal = 0;
    let nuevoTotal = 0;

    articulos.forEach((art) => {
      const precioBase = parseFloat(art.PRECIO);
      const cantidad = parseFloat(art.cantped);
      const descuento = parseFloat(art.PORC_DCTO) / 100;
      const iva = parseFloat(art.PORC_IMPUESTO) / 100;

      const subTotalArticulo = precioBase * cantidad;
      const totalConDescuento = subTotalArticulo * (1 - descuento);
      const totalArticulo = totalConDescuento * (1 + iva);

      nuevoSubTotal += subTotalArticulo;
      nuevoTotal += totalArticulo;
    });

    const subTotalFormateado = Number(nuevoSubTotal.toFixed(0)).toLocaleString();
    const totalFormateado = Number(nuevoTotal.toFixed(0)).toLocaleString();

    setTotal(totalFormateado);
    setSubTotal(subTotalFormateado);
  };


  const guardarPedido = () => {
    const pedidosGuardados = JSON.parse(localStorage.getItem("pedidos")) || [];

    let ultimoId = 0;
    if (pedidosGuardados.length > 0) {
      ultimoId = Math.max(...pedidosGuardados.map(pedido => pedido.PEDID));
    }

    const nuevoId = ultimoId + 1;

    const pedido = {
      PEDID: nuevoId,
      Fecha: new Date().toISOString(),
      Nombre: clienteP.NOMBREALIAS,
      Nit: clienteP.CLIENTE,
      notas,
      total,
      subTotal,
      articulos: articulosSeleccionados.map(art => ({
        ...art,
        IdPedido: nuevoId
      })),
    };

    pedidosGuardados.push(pedido);
    localStorage.setItem("pedidos", JSON.stringify(pedidosGuardados));

    alert("Pedido Guaardado Correctamente");
  };

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const response = await fetch("/api/productos/listar_solo_para_mg", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });

        const datos = await response.json();

        if (datos) {
          setProductos(datos);
          setTablaProducto(datos);
        }
      } catch (error) {
        console.log(error);
      }
    };
    obtenerProductos();
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    const termino = terminoBusqueda.toLowerCase();
    const resultadosBusqueda = Array.isArray(tablaProducto) ? tablaProducto.filter((elemento) => {
      const valores = Object.values(elemento).map((value) =>
        value ? value.toString().toLowerCase() : ""
      );
      return valores.some((valor) => valor.includes(termino));
    })
    : [];
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
      setTablaProducto(resultadosFiltrados[0]);
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

  const agregarArticulos = () => {
    const articulosSeleccionados = productos.filter((prod) => cantidades[prod.ARTICULO]);
    agregarArticulo(
      articulosSeleccionados.map((art) => ({
        ...art,
        cantped: cantidades[art.ARTICULO]
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
        const precio = parseFloat(value).toFixed(0);
        return `${parseFloat(precio).toLocaleString()}`;
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
    { field: "PORC_DCTO", headerName: "D1", width: 40 },
    { field: "PRECIOMASIVA", headerName: "MASIVA", width: 100,
      valueFormatter: (value) => {
        const precio = parseFloat(value).toFixed(0);
        return `${parseFloat(precio).toLocaleString()}`;
      }, 
    },
    { field: "TOTAL_DISP", headerName: "DISP", width: 70, 
      valueFormatter: (value) => {
        const disponible = parseFloat(value).toFixed(0);
        return `${parseFloat(disponible).toLocaleString()}`;
      },
    },
    { field: "EXIST_REAL", headerName: "EXIST-REAL", width: 90, 
      valueFormatter: (value) => {
        const existe = parseFloat(value).toFixed(0);
        return `${parseFloat(existe).toLocaleString()}`;
        
      },
    },
  ];



  return (
    <>
      <Banner />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", margin: 3 }}>
          <h3>CREACIÓN DE PEDIDOS</h3>
        </Box>
        
        <Box sx={{ padding: 2 }}>
          <Button onClick={handleOpenC} variant="filled" sx={{ bgcolor: "#d85bd8", "&:hover": { bgcolor: "#ec1ee2 " },  }}>
            Clientes
          </Button>
          <Button onClick={handleOpenM} variant="filled" sx={{ bgcolor: "#6cd3ec", "&:hover": { bgcolor: "#36c7e7" }, m: 2 }}>
            Productos-MG
          </Button>
          <UseImportoExcel onImportData={handleImportData} />
          <Button onClick={guardarPedido} variant="filled" sx={{ bgcolor: "#5de46f", "&:hover": { bgcolor: "#3ae92a" }, m: 2 }}>
            Guardar Pedido
          </Button>
          <Button variant="filled" sx={{ bgcolor: "#f13c3c", "&:hover": { bgcolor: "#ec1c27" }, }} LinkComponent={Link} href="../../clients/">
            Cerrar
          </Button>
        </Box>
      </Box>

      <Box>
        <Paper elevation={3} sx={{ padding: 3, margin: "0 auto", marginTop: 3, maxWidth: 1100, width: "100%" }}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12 }}>
              <Box display="flex" alignItems="center">
                <strong>NOMBRE:</strong>
                <Typography variant="body1" sx={{ marginLeft: 1 }}>{clienteP?.NOMBREALIAS}</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box display="flex" alignItems="center">
                <strong>NIT: </strong>
                <Typography variant="body1" sx={{ marginLeft: 1 }}>{clienteP?.CLIENTE}</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Box display="flex" alignItems="center">
                <PhoneIcon color="primary" sx={{ marginRight: 1 }} />
                <Typography variant="body1">{clienteP?.TELEFONO1}</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box display="flex" alignItems="center">
                <LocationOnIcon color="primary" sx={{ marginRight: 1 }} />
                <Typography variant="body1">{clienteP?.DIRECCION}</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box display="flex" alignItems="center">
                <BusinessIcon color="primary" sx={{ marginRight: 1 }} />
                <Typography variant="body1">{clienteP?.CIUDAD}</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box display="flex" alignItems="center">
                <EmojiPeopleIcon color="primary" sx={{ marginRight: 1 }} />
                <Typography variant="body1">{clienteP?.VENDEDOR}</Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, sm: 4 }}>
              <Box display="flex" alignItems="center">
                <EmailIcon color="primary" sx={{ marginRight: 1 }} />
                <Typography variant="body1">{clienteP?.E_MAIL}</Typography>
              </Box>
            </Grid>
          </Grid>

          <TextField
            id="outlined-basic"
            multiline
            rows={3}
            value={notas}
            onChange={(e) => setNotas(e.target.value)}
            variant="outlined"
            sx={{ width: "100%", border: "2px solid #13e95a", marginTop: 2 }}
          />
        </Paper>
      </Box>

      <Box sx={{ width: "97%", height: "auto", margin: 2 }}>
        <DataGrid 
          rows={articulosSeleccionados}
          columns={columns}
          getRowId={(row) => row.ARTICULO}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 10 }
            }
          }}
          pageSizeOptions={[5, 10, 15]}
          onRowEditStop={handleRowEditStop}
          processRowUpdate={processRowUpdate}
          slotProps={{ toolbar: { setArticulosSeleccionados, setRowModesModel } }}
        />
      </Box>

     
      <Paper elevation={3} sx={{ padding: 3, margin: 3, marginTop: 3}}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <ButtonGroup variant="text" aria-label="text button group" sx={{ height: 60 }}>
            <Button sx={{ flexDirection: "column" }}>
              <Typography sx={{ display: "flex", fontSize: 14, paddingRight: 5 }} gutterBottom>{" "}${subTotal}{" "}</Typography>
              <strong>{" "}SUB-TOTAL{" "}</strong>
            </Button>
            <Button sx={{ flexDirection: "column" }}>
              <Typography sx={{ display: "flex", fontSize: 14, paddingRight: 5 }} gutterBottom>{" "}${total}{" "}</Typography>
              <strong>{" "}TOTAL{" "}</strong>
            </Button>
          </ButtonGroup>
        </Box>
      </Paper>

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


      <Modal
        open={open}
        onClose={handleCloseC}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">

        <Box sx={style}>
          <ClientesGlobal setOpen={setOpen} seleccionarCliente={seleccionarCliente} />
        </Box>
      </Modal>

    </>
  )
}

export default CrearPedido;

