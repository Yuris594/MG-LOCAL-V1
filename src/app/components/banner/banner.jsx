
"use client";

import { AppBar, Box, Button, CssBaseline, Drawer, IconButton, Menu, MenuItem, Modal, Toolbar, Typography, } from "@mui/material";
import { AccountCircle, ShoppingBag, Assignment, Person, ReceiptLong, Storefront, } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import { useState } from "react";
import Navbar from "./navbar";
import Link from "next/link";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  alignItems: "center",
  justifyContext: "center",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Banner = () => {
  const router = useRouter();
  const { auth } = useAuth();
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [productos, setProductos] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleClick = (event) => {
    setProductos(true);
    setAnchorEl(event.currentTarget);
  };

  const handleCloseM = () => {
    setProductos(false);
    setAnchorEl(null);
  };

  const cerrarSesion = () => {
    router.push("/")
  }

  const page = [
    {
      title: "USUARIOS ",
      url: "../../usuarios",
      icon: <AccountCircle />,
    },
    {
      title: "PEDIDOS",
      url: "../../pedidos",
      icon: <Assignment />,
    },
    {
      title: "CLIENTES",
      url: "../../clients",
      icon: <Person />,
    },
    {
      title: "PRODUCTOS",
      icon: <ShoppingBag />,
      onClick: handleClick,
    },
    {
      title: "FACTURAS",
      url: "../../facturas",
      icon: <ReceiptLong />,
    },
    {
      title: "CAJA",
      url: "../../pedidos/pedidosCaja",
      icon: <Storefront />,
    },
  ];

  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#262626", width: "auto" }}>
          <Toolbar>
            <IconButton color="inherit" onClick={handleOpenNavMenu}
              sx={{ display: { xs: "flex", md: "none" } }}>
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {page.map((link) => (
                <Button sx={{ fontWeight: "bold", }}
                  color="inherit"
                  size="large"
                  key={link.title}
                  LinkComponent={Link}
                  href={link.url}
                  onClick={link.onClick}>
                  {link.title}
                </Button>
              ))}
            </Box>
            <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>
            <Button component={Link} href="/start" color="inherit">
              <HomeIcon></HomeIcon>
            </Button>
            <Button color="inherit">
              <PersonIcon></PersonIcon>
              {auth && auth.PER_Nom}
            </Button>
            <Button color="inherit" onClick={handleOpen}>
              <LogoutIcon></LogoutIcon>
            </Button>
          </Toolbar>
        </AppBar>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description" >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              ¿Estas seguro que quiere salir?
            </Typography>
            <Box>
              <Button sx={{ bgcolor: "red" }} variant="contained" onClick={cerrarSesion}>
                SALIR
              </Button>
            </Box>
          </Box>
        </Modal>

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={productos}
          onClose={handleCloseM}
          MenuListProps={{ "aria-labelledby": "basic-button", }}>

          <MenuItem onClick={handleCloseM} component={Link} href="../../productos" >
            Productos Por Bodega
          </MenuItem>
          <MenuItem onClick={handleCloseM} component={Link} href="../../productosMG">
            Productos-MG
          </MenuItem>
        </Menu>

        <Menu 
         id="basic-menu"
         anchorEl={anchorEl}
         MenuListProps={{'aria-labelledby': 'basic-button'}}
         open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{ display: { xs: "flex", md: "none" } }}>
          <Navbar page={page} />
        </Menu>
      </Box>
    </>
  );
};

export default Banner;
