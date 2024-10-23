"use client";

import { AppBar, Box, Button, CssBaseline, IconButton, Menu, Toolbar, Typography } from "@mui/material";
import WidgetsIcon from '@mui/icons-material/Widgets';
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useAuth } from "@/context/authContext";
import Link from "next/link";
import { useState } from "react";
import MenuBar from "./bar";

const pages = [
  {
    title: "VENTAS",
    subPages: [
      { title: "Clientes", url: "/pages/client" },
      { title: "Pedidos por enviar", url: "/pages/pedidoSinEnviar" },
      { title: "Pedidos enviados", url: "/pages/pedidoEnviado" },
    ],
  },
  {
    title: "CARTERA",
    subPages: [
      { title: "Cartera Clientes", url: "/pages/cartera" },
      { title: "Recibos", url: "/pages/cartera/recibo" },
      { title: "Consultar Consignaciones", url: "/pages/cartera/consignacion" },
      { title: "Elaborar Consignaciones", url: "/pages/cartera/elaborarCo" },
    ],
  },
  {
    title: "INFORMES",
    subPages: [
      { title: "Ruteros Enviados", url: "/pages/gestionCartera" },
      { title: "Historico de Ventas", url: "/pages/historicoVenta" },
      { title: "Resumen Ventas Actual", url: "/pages/resumenVenta" },
    ],
  },
  {
    title: "INVENTARIOS",
    subPages: [
      { title: "Consultar Articulos", url: "/pages/inventario" },
    ],
  },

  {
    title: "ACTUALIZAR",
    subPages: [
      { title: "", url: "" },
    ],
  },
];

const NavBar = () => {
  const [selectedPage, setSelectedPage] = useState(null); 
  const [anchorEl, setAnchorEl] = useState(null);
  const { auth } = useAuth(); 

  const handlePageClick = (page) => {
    setSelectedPage(page); 
    setAnchorEl(null); 
  };

  const handleBackClick = () => {
    setSelectedPage(null); 
  };

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget); 
  };

  const handleClose = () => {
    setAnchorEl(null); 
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#262626" }}>
          <Toolbar>
            <IconButton color="inherit" onClick={handleOpen} sx={{ display: { xs: "flex", md: "none" } }}>
              <WidgetsIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", md: "flex" }, width: "100%" }}>
              {selectedPage ? (
                <>
                  <IconButton color="inherit" onClick={handleBackClick}>
                    <ExitToAppIcon />
                  </IconButton>
                  {selectedPage.subPages.map((subPage) => (
                    <Button
                      color="inherit"
                      key={subPage.title}
                      LinkComponent={Link}
                      href={subPage.url}
                    >
                      {subPage.title}
                    </Button>
                  ))}
                </>
              ) : (
                pages.map((page) => (
                  <Button
                    color="inherit"
                    key={page.title}
                    onClick={() => handlePageClick(page)}
                  >
                    {page.title}
                  </Button>
                ))
              )}
            </Box>
            <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
              <Button LinkComponent={Link} href="/pages" color="inherit">
                <ArrowBackIcon />
              </Button>
              <Button color="inherit" sx={{ width: "20%" }}>{auth && auth.PER_Nom}</Button>
              <Button LinkComponent={Link} href="/" color="inherit">Salir</Button>
          </Toolbar>
        </AppBar>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuBar pages={pages} onPageSelect={handlePageClick} />
        </Menu>
      </Box>
    </>
  );
};

export default NavBar;


