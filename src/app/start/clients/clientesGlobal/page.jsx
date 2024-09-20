"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { useAuth } from "@/context/authContext";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Zoom from "@mui/material/Zoom";
import Box from "@mui/material/Box";


const columns = [
  { field: "CLIENTE", headerName: "NIT", width: 130,  headerClassName: 'super-app-theme--header',  },
  { field: "NOMBREALIAS", headerName: "NOMBRE", width: 600,  headerClassName: 'super-app-theme--header' },
  { field: "DIRECCION", headerName: "DIRECCION", width: 300,  headerClassName: 'super-app-theme--header' },
  { field: "TELEFONO1", headerName: "TELEFONO", width: 190,  headerClassName: 'super-app-theme--header' },
  { field: "NOMVENDEDOR", headerName: "VENDEDOR", width: 200,  headerClassName: 'super-app-theme--header' },
  { field: "SALDO", headerName: "CARTERA", type: "number", width: 120,  headerClassName: 'super-app-theme--header',
    valueFormatter: (value) => {
      const precioRedondeado = Number(value).toFixed(0);
      return `${parseFloat(precioRedondeado).toLocaleString()}`;
    },
    align: "right",
  },
];



const ClientesGlobal = ({ setOpen, clientes }) => {
  const { setCliente } = useAuth();
  const [clientesFiltrados, setClientesFiltrados] = useState(clientes);
  const [busqueda, setBusqueda] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);

  const handleChange = (e) => {
    e.preventDefault();
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    const resultadosBusqueda = clientes.filter((elemento) => {
      const CLIENTE = elemento.CLIENTE && elemento.CLIENTE.toString().toLowerCase();
      const NOMVENDEDOR = elemento.NOMVENDEDOR && elemento.NOMVENDEDOR.toString().toLowerCase();
      const NOMBREALIAS = elemento.NOMBREALIAS && elemento.NOMBREALIAS.toLowerCase();

      if (
        CLIENTE?.includes(terminoBusqueda.toLowerCase()) ||
        NOMVENDEDOR?.includes(terminoBusqueda.toLowerCase()) ||
        NOMBREALIAS?.includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
      return null;
    });
    setClientesFiltrados(resultadosBusqueda);
  };

  const handleSelectionChange = useCallback((selectionModel) => {
      setSelectedRows(selectionModel);
      if (selectionModel.length > 0) {
        const resultadosFiltrados = clientes.filter((elemento) => {
          const CLIENTE = elemento.CLIENTE;
          if (CLIENTE) {
            const clienteString = CLIENTE.toString();
            return clienteString.includes(selectionModel[0]);
          }
          return false;
        });

        localStorage.setItem("clientTemp", JSON.stringify(resultadosFiltrados));
        setClientesFiltrados(resultadosFiltrados[0]);
        setOpen(false);
      }
    },
    [clientesFiltrados]
  );


  return (
    <>
      <div style={{ height: "auto", width: "100%", backgroundColor: "#ffffff" }}>
          <Typography variant= "h" component="h1" gutterBottom
            sx={{ display: "flex", justifyContent: "center", alignItems: "center",  width: "auto",  margin: 0, color: "#000000", }}>
              CLIENTES
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between",  alignItems: "center", width: "100%", margin: 1, }}>
            <Button variant="outlined" sx={{ margin: "2px" }}>
                Nuevo
            </Button>
            <Paper elevation={3} sx={{ p: "2px 4px", display: "flex", alignItems: "flex-rigth", width: 650, margin: "0%", }}>
              <InputBase
                sx={{ ml: 1, flex: 1, }}
                placeholder="Buscar"
                inputProps={{ "aria-label": "search google maps" }}
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
            <Box sx={{ height: 640, width: "100%", 
                      '& .super-app-theme--header': {
                      backgroundColor: '#00796b', color: '#000000', }, }}>
              <DataGrid
                rows={clientesFiltrados}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 10 },
                  },
                }}
                pageSizeOptions={[5, 10]}
                onRowSelectionModelChange={handleSelectionChange}
                rowSelectionModel={selectedRows}
                getRowId={(row) => row.CLIENTE}
                sx={{ backgroundColor: "#ffffff" }}
              />
            </Box>
      </div>
    </>
  );
};

export default ClientesGlobal;
