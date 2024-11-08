"use client";

import { useCallback, useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { useAuth } from "@/context/authContext";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Conexion } from "@/conexion";
import Box from "@mui/material/Box";

  const columns = [
    { field: "CLIENTE", headerName: "NIT", width: 130, headerClassName: 'super-app-theme--header' },
    { field: "NOMBREALIAS", headerName: "NOMBRE", width: 600, headerClassName: 'super-app-theme--header' },
    { field: "DIRECCION", headerName: "DIRECCION", width: 300, headerClassName: 'super-app-theme--header' },
    { field: "TELEFONO1", headerName: "TELEFONO", width: 190, headerClassName: 'super-app-theme--header' },
    { field: "NOMVENDEDOR", headerName: "VENDEDOR", width: 200, headerClassName: 'super-app-theme--header' },
    { field: "SALDO", headerName: "CARTERA", type: "number", width: 120, headerClassName: 'super-app-theme--header',
        valueFormatter: (value) => {
            const precioRedondeado = Number(value).toFixed(0);
            return `${parseFloat(precioRedondeado).toLocaleString()}`;
        }, align: "right",
    },
  ];

const conseguirClientes = async () => {
    try {
        const response = await fetch("/api/clientes/listar", {
            method: "GET",
            headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching clients:", error);
        return [];
    }
}

const ClientesGlobal = ({ setOpen }) => {
    const { setCliente } = useAuth();
    const [busqueda, setBusqueda] = useState("");
    const [selectedRows, setSelectedRows] = useState([]);
    const [tablaClientes, setTablaClientes] = useState([]);
    const [clientesFiltrados, setClientesFiltrados] = useState([]);

    useEffect(() => {
      const fetchClientes = async () => {
          const datos = await conseguirClientes();
          if (datos && datos.length > 0) {
              setClientesFiltrados(datos);
              setTablaClientes(datos);
          } else {
              console.log("No se encontraron clientes");
          }
      };
      fetchClientes();
    }, []);

    const handleChange = (e) => {
        e.preventDefault();
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    };

    const filtrar = (terminoBusqueda) => {
        const resultadosBusqueda = tablaClientes.filter((elemento) => {
            const CLIENTE = elemento.CLIENTE && elemento.CLIENTE.toString().toLowerCase();
            const NOMVENDEDOR = elemento.NOMVENDEDOR && elemento.NOMVENDEDOR.toString().toLowerCase();
            const NOMBREALIAS = elemento.NOMBREALIAS && elemento.NOMBREALIAS.toLowerCase();

            return (
                CLIENTE?.includes(terminoBusqueda.toLowerCase()) ||
                NOMVENDEDOR?.includes(terminoBusqueda.toLowerCase()) ||
                NOMBREALIAS?.includes(terminoBusqueda.toLowerCase())
            );
        });
        setClientesFiltrados(resultadosBusqueda);
    };

    const handleSelectionChange = useCallback((selectionModel) => {
        setSelectedRows(selectionModel);
        if (selectionModel.length > 0) {
            const resultadosFiltrados = tablaClientes.filter((elemento) => {
                const CLIENTE = elemento.CLIENTE;
                return CLIENTE && CLIENTE.toString().includes(selectionModel[0]);
            });

            localStorage.setItem("clientTemp", JSON.stringify(resultadosFiltrados));
            setCliente(resultadosFiltrados[0]);
            setOpen(false);
        }
    }, [tablaClientes]);

    return (
        <>
            <div style={{ height: "auto", width: "100%", backgroundColor: "#ffffff" }}>
                <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", margin: 1 }}>
                  <h2><strong>CLIENTES</strong></h2>
                    <Paper elevation={3} sx={{ p: "2px 4px", display: "flex", alignItems: "flex-right", width: 600, margin: "0%" }}>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
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
                <Box sx={{ height: 640, width: "100%", '& .super-app-theme--header': { backgroundColor: '#00796b', color: '#000000' } }}>
                    <DataGrid
                      rows={clientesFiltrados}
                      columns={columns}
                      pageSizeOptions={[5, 10]}
                      onRowSelectionModelChange={handleSelectionChange}
                      rowSelectionModel={selectedRows}
                      getRowId={(row) => row.CLIENTE}
                      sx={{ backgroundColor: "#ffffff" }}
                      initialState={{
                          pagination: {
                              paginationModel: { page: 0, pageSize: 10 },
                          },
                      }}
                    />
                </Box>
            </div>
        </>
    );
};

export default ClientesGlobal;
