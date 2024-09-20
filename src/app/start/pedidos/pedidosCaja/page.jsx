"use client";

import { useEffect, useState } from "react";
import {
  Edit as EditIcon,
  DeleteOutlined as DeleteIcon,
  Close as CancelIcon,
  Save as SaveIcon,
} from "@mui/icons-material";
import {
  GridRowModes,
  DataGrid,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from "@mui/x-data-grid";
import {
  Box,
  Modal,
  ButtonGroup,
  Button,
  Typography,
  InputBase,
  LinearProgress,
} from "@mui/material";
import conseguirClientes from "@/app/components/clientes/clientesGlobal/page";
import useTecladoCaja from "@/app/hooks/useTecladoCaja";
import Banner from "@/app/components/banner/banner";
import { useAuth } from "@/context/authContext";
import PropTypes from "prop-types";
import Link from "next/link";


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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const columns = [
  { field: "DESCRIPCION", headerName: "Referencia", width: 500, headerClassName: 'super-app-theme--header', },
  { field: "SUBLINEA", headerName: "Sublinea", width: 300, headerClassName: 'super-app-theme--header', },
  { field: "TOTAL_DISP", headerName: "Disp", width: 70, headerClassName: 'super-app-theme--header', },
  { field: "PRECIO", headerName: "Precio", width: 130,
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    }, editable: true, headerClassName: 'super-app-theme--header',
  },
  { field: "CANTIDAD", headerName: "", width: 50, type: "number", headerClassName: 'super-app-theme--header', },
  { field: "EXIST_REAL", headerName: "Existreal", width: 90, headerClassName: 'super-app-theme--header', },
];



const PedidosCaja = ({ producto }) => {
  const { setCaja, cliente } = useAuth();
  const [open, setOpen] = useState(false);
  const [opcion, setOpcion] = useState("CPed");
  const [busqueda, setBusqueda] = useState([]);
  const [productos, setProductos] = useState(producto);
  const [cargando, setCargando] = useState(true);
  const [productosP, setProductosP] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectedRowsP, setSelectedRowsP] = useState([]);
  const [tablaProducto, setTablaProducto] = useState([]);
  const [rowModesModel, setRowModesModel] = useState({});
  const [sumaSaldoTotalDESC, setSumaSaldoTotalDESC] = useState(0);
  useTecladoCaja(productosP, setProductosP, selectedRowsP, opcion);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
;

  useEffect(() => {
    setTimeout(() => {
      productosP;
      const sumaSaldoDESC = productosP.reduce((sum, producto) => {
        const precioConDescuento = producto.PRECIO * (1 - producto.PORC_DCTO / 100);
        const precioConIVA = precioConDescuento * (1 + producto.PORC_IMPUESTO / 100);
        return sum + producto.CPed * precioConIVA;
      }, 0);
      const precioRedondeadoDESC = Number(sumaSaldoDESC).toFixed(0);
      setSumaSaldoTotalDESC(
        `${parseFloat(precioRedondeadoDESC).toLocaleString()}`
      );
    }, 100);
  }, [productosP, selectedRowsP]);

  useEffect(() => {
    if (selectedRows !== undefined) {
      const filasSeleccionadas = {};
      selectedRows.forEach((id, index) => {
        const fila = productos.find((producto) => producto.ARTICULO === id);

        if (fila) {
          fila.CPed = 1;

          if (typeof fila.PRECIO === "string") {
            const precioParseado = parseInt(fila.PRECIO);
            fila.PRECIO = isNaN(precioParseado)
              ? 0
              : Math.round(precioParseado * 100) / 100;
          } else if (typeof fila.PRECIO === "number") {
            fila.PRECIO = Math.round(fila.PRECIO);
          }
        }
        filasSeleccionadas[index] = fila;
      });
      const datosActuales =
        JSON.parse(localStorage.getItem("pedidoGTemp")) || {};
      const datosActualizados = { ...datosActuales, ...filasSeleccionadas };
      localStorage.setItem("pedidoTempG", JSON.stringify(datosActualizados));
      if (datosActualizados !== undefined) {
        guardar();
      }
    }
  }, [selectedRows]);


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
    const resultadosFiltrados = resultadosBusqueda.filter(
      (elemento) => elemento !== null
    );
    setProductos(resultadosFiltrados);
  };

  const handleSelectionChange = (newSelection) => {
    setSelectedRows(newSelection);
    setSelectedRowsP(newSelection);
  };

  const handleSelectionChanges = (newSelection) => {
    setSelectedRowsP(newSelection);
  };

  const guardar = () => {
    const pedido = JSON.parse(localStorage.getItem("pedidoTempG"));
    if (pedido && pedido[0] && pedido[0].ARTICULO) {
      const valores = Object.values(pedido);
      const productoExistente = productosP.some(
        (producto) => producto.ARTICULO === valores[0].ARTICULO
      );
      const productosActuales = [...productosP];
      if (productoExistente) {
      } else {
        const nuevosProductos = [...productosActuales, ...valores];
        setProductosP(nuevosProductos);
      }
    }
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
    { field: "CPed", headerName: "Cant", width: 80, type: "number", editable: true, },
    { field: "PRECIO", headerName: "Precio", width: 130 },
    { field: "actions", type: "actions", headerName: "Actions", cellClassName: "actions",
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

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const handleClick = (event) => {
    const nuevoValor = event.currentTarget.value;
    const indiceObjetoEditar = productosP.findIndex(
      (producto) => producto.ARTICULO === selectedRowsP[0]
    );

    if (indiceObjetoEditar !== -1) {
      const productosEditados = [...productosP];
      const valorActual = productosEditados[indiceObjetoEditar][opcion];
      if (valorActual === "0" || valorActual === "") {
        productosEditados[indiceObjetoEditar][opcion] = nuevoValor;
      } else {
        productosEditados[indiceObjetoEditar][
          opcion
        ] = `${valorActual}${nuevoValor}`;
      }
      setProductosP(productosEditados);
    }
  };

  const handleDelete = () => {
    const indiceObjetoEditar = productosP.findIndex(
      (producto) => producto.ARTICULO === selectedRowsP[0]
    );
    if (indiceObjetoEditar !== -1 && productosP[indiceObjetoEditar][opcion]) {
      const productosEditados = [...productosP];
      const valorActual = productosEditados[indiceObjetoEditar][opcion];
      productosEditados[indiceObjetoEditar][opcion] = valorActual.slice(0, -1);
      if (productosEditados[indiceObjetoEditar][opcion] === "") {
        productosEditados[indiceObjetoEditar][opcion] = "0";
      }
      setProductosP(productosEditados);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (busqueda !== "") {
        setSelectedRows([busqueda]);
        setSelectedRowsP([busqueda]);
        setBusqueda([]);
        console.log(busqueda);
        console.log(selectedRows);
      }
    }
  };

  const pago = () => {
    const sumaSaldoTotalObjeto = {
      total: sumaSaldoTotalDESC,
    };

    const datosDePago = { ...sumaSaldoTotalObjeto, ...productosP };
    localStorage.setItem("pago", JSON.stringify(datosDePago));
    setCaja(datosDePago);
  };

  return (
    <>
      <Box marginBottom="30px">
        {" "}
        <Banner />{" "}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 2,
          flexWrap: "wrap",
          mt: 2,
          mr: 4,
        }}
      >
        <InputBase
          sx={{
            ml: 1,
            flex: 1,
            maxWidth: "300px",
            border: "2px solid black",
            borderRadius: "4px",
            p: 1,
            mb: 2,
          }}
          type="text"
          value={busqueda}
          onChange={handleChange}
          placeholder="Escanea el código de barras aquí"
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row", height: "100%", justifyContent: "space-between", }}>
        <Box sx={{ width: "33%", display: "flex", flexDirection: "column", gap: 2, }}>
          <Box
            sx={{
              mb: 1,
              height: 700,
              width: "100%",
              "& .MuiDataGrid-cell--editable": {
                  bgcolor: (theme) =>
                  theme.palette.mode === "dark" ? "#376331" : "#f5f5f5",
              "&:hover": {
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#27512" : "#e1e1e1", // Cambia el color al hacer hover
                },
              },
              '& .super-app-theme--header': {
                  backgroundColor: 'rgba(0, 0, 0, 0.541)', color: '#fff' },
            }}
          >
            <DataGrid
              density="compact"
              rows={productosP}
              columns={columnsP}
              editMode="row"
              getRowId={(row) => row.ARTICULO}
              rowSelectionModel={selectedRowsP}
              rowModesModel={rowModesModel}
              onRowModesModelChange={handleRowModesModelChange}
              onRowSelectionModelChange={handleSelectionChanges}
              onRowEditStop={handleRowEditStop}
              processRowUpdate={processRowUpdate}
              slotProps={{
                toolbar: { setProductosP, setRowModesModel },
              }}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 16 },
                },
              }}
              pageSizeOptions={[5, 16]}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              mt: 1,
            }}
          >
            <ButtonGroup
              variant="text"
              aria-label="text button group"
              sx={{ height: 20 }}
            >
              <Button sx={{ flexDirection: "row" }}>
                <Typography
                  variant="outline"
                  sx={{ paddingRight: 2, color: "black" }}
                  gutterBottom
                >
                  {" "}
                  Total:${" "}
                </Typography>
                <Typography
                  sx={{}}
                  gutterBottom
                >
                  {" "}
                  {sumaSaldoTotalDESC}{" "}
                </Typography>
              </Button>
            </ButtonGroup>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <ButtonGroup
                variant="outlined"
                aria-label="text button group"
              >
                <Button sx={{ flexDirection: "column" }}>
                  <Typography
                    sx={{ display: "flex", color: "black" }}
                    gutterBottom
                  >
                    {" "}
                    Nota del Cliente{" "}
                  </Typography>
                </Button>
                <Button sx={{ flexDirection: "column" }}>
                  <Typography
                    sx={{ display: "flex", color: "black" }}
                    gutterBottom
                  >
                    {" "}
                    Reembolso{" "}
                  </Typography>
                </Button>
                <Button sx={{ flexDirection: "column" }}>
                  <Typography
                    sx={{ display: "flex", color: "black" }}
                    gutterBottom
                  >
                    {" "}
                    Informacion{" "}
                  </Typography>
                </Button>
              </ButtonGroup>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                height: "230px",
                overflow: "auto",
              }}
            >
              <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined button group"
                variant="text"
                sx={{ margin: "2px", width: "100%", height: "100%" }}
              >
                <Button
                  variant="outlined"
                  sx={{ width: "100%", height: "30%" }}
                  onClick={handleOpen}
                >
                  Cliente:{cliente.NOMBREALIAS}
                </Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <conseguirClientes />
                  </Box>
                </Modal>

                <Button
                  component={Link}
                  href={sumaSaldoTotalDESC !== "0" ? "../../../start/caja" : ""}
                  variant="outlined"
                  sx={{
                    width: "100%",
                    height: "100%",
                    backgroundColor:
                      sumaSaldoTotalDESC !== "0" ? "#00796b" : "transparent",
                    color: sumaSaldoTotalDESC !== "0" ? "white" : "black",
                  }}
                  onClick={sumaSaldoTotalDESC !== "0" ? pago : null}
                >
                  Pago
                </Button>
              </ButtonGroup>

              <ButtonGroup
                orientation="vertical"
                aria-label="vertical outlined button group"
                variant="text"
                sx={{ margin: "2px", width: "30%", height: "100%" }}
              >
                <Button
                  variant="outlined"
                  sx={{ height: "100%" }}
                  value={1}
                  onClick={handleClick}
                >
                  {" "}
                  1{" "}
                </Button>
                <Button
                  variant="outlined"
                  sx={{ height: "100%" }}
                  value={4}
                  onClick={handleClick}
                >
                  {" "}
                  4{" "}
                </Button>
                <Button
                  variant="outlined"
                  sx={{ height: "100%" }}
                  value={7}
                  onClick={handleClick}
                >
                  {" "}
                  7{" "}
                </Button>
                <Button
                  variant="outlined"
                  sx={{ height: "100%" }}
                  value={0}
                  onClick={handleClick}
                >
                  {" "}
                  +/-{" "}
                </Button>
              </ButtonGroup>

              <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="text"
                sx={{ margin: "2px", width: "30%", height: "100%" }}
              >
                <Button
                  variant="outlined"
                  sx={{ height: "100%" }}
                  value={2}
                  onClick={handleClick}
                >
                  {" "}
                  2{" "}
                </Button>
                <Button
                  variant="outlined"
                  sx={{ height: "100%" }}
                  value={5}
                  onClick={handleClick}
                >
                  {" "}
                  5{" "}
                </Button>
                <Button
                  variant="outlined"
                  sx={{ height: "100%" }}
                  value={8}
                  onClick={handleClick}
                >
                  {" "}
                  8{" "}
                </Button>
                <Button
                  variant="outlined"
                  sx={{ height: "100%" }}
                  value={0}
                  onClick={handleClick}
                >
                  {" "}
                  0{" "}
                </Button>
              </ButtonGroup>

              <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="text"
                sx={{ margin: "2px", width: "30%", height: "100%" }}
              >
                <Button
                  variant="outlined"
                  sx={{ height: "100%" }}
                  value={3}
                  onClick={handleClick}
                >
                  {" "}
                  3{" "}
                </Button>
                <Button
                  variant="outlined"
                  sx={{ height: "100%" }}
                  value={6}
                  onClick={handleClick}
                >
                  {" "}
                  6{" "}
                </Button>
                <Button
                  variant="outlined"
                  sx={{ height: "100%" }}
                  value={9}
                  onClick={handleClick}
                >
                  {" "}
                  9{" "}
                </Button>
                <Button
                  variant="outlined"
                  sx={{ height: "100%" }}
                  value={0}
                  onClick={handleClick}
                >
                  {" "}
                  ,{" "}
                </Button>
              </ButtonGroup>

              <ButtonGroup
                orientation="vertical"
                aria-label="vertical contained button group"
                variant="text"
                sx={{ margin: "2px", width: "30%", height: "100%" }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor:
                      opcion === "CPed" ? "#606060" : "transparent",
                    color: opcion === "CPed" ? "white" : "",
                    height: "100%",
                  }}
                  onClick={() => setOpcion("CPed")}
                >
                  {" "}
                  Ctdad{" "}
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor:
                      opcion === "PORC_DCTO" ? "#606060" : "transparent",
                    color: opcion === "PORC_DCTO" ? "white" : "",
                    height: "100%",
                  }}
                  onClick={() => setOpcion("PORC_DCTO")}
                >
                  {" "}
                  %Desc{" "}
                </Button>

                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor:
                      opcion === "PRECIO" ? "#606060" : "transparent",
                    color: opcion === "PRECIO" ? "white" : "",
                    height: "100%",
                  }}
                  onClick={() => setOpcion("PRECIO")}
                >
                  {" "}
                  Precio{" "}
                </Button>

                <Button
                  variant="outlined"
                  sx={{ height: "100%" }}
                  onClick={handleDelete}
                >
                  {" "}
                  X{" "}
                </Button>
              </ButtonGroup>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "70%",
            alignItems: "center",
            height: "100%",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "flex", width: "100%", height: 1030, 
                    '& .super-app-theme--header': {
                      backgroundColor: '#DCDCDC', color: '#000000' } }}>
            {cargando === true ? (
              <Box sx={{ width: "100%" }}>
                {" "}
                <LinearProgress />{" "}
              </Box>
            ) : (
              <DataGrid
                rows={productos}
                columns={columns}
                getRowId={(row) => row.ARTICULO}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 18 },
                  },
                }}
                pageSizeOptions={[5, 18]}
                onRowSelectionModelChange={handleSelectionChange}
                onSelectionModelChange={(newSelection) =>
                  setSelectedRows(newSelection)
                }
                rowSelectionModel={selectedRows}
              />
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PedidosCaja;
