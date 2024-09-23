"use client";

import { AppBar, Box, Button, CssBaseline, IconButton, Menu, MenuItem, Modal, Toolbar, Typography } from "@mui/material";
import { AccountCircle, ShoppingBag, Assignment, Person, ReceiptLong, Storefront } from "@mui/icons-material";
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import { useState } from "react";
import Navbar from "./navbar";
import Link from "next/link";
import { Lora } from "next/font/google";

const inter = Lora({ subsets: ['latin'] })


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
  textAlign: "center",
  pt: 2,
  px: 4,
  pb: 3,
};

const Banner = () => {
  const router = useRouter();
  const { auth, logout } = useAuth();
  const handleOpen = () => setOpen(true);
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [productos, setProductos] = useState(false);


  const handleOpenNavMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorEl(null);
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
    logout()
    router.push("/")
  }

  const page = [
    {
      title: "USUARIOS ",
      url: "/start/usuarios",
      icon: <AccountCircle />,
    },
    {
      title: "PEDIDOS",
      url: "/start/pedidos",
      icon: <Assignment />,
    },
    {
      title: "CLIENTES",
      url: "/start/clients",
      icon: <Person />,
    },
    {
      title: "PRODUCTOS",
      icon: <ShoppingBag />,
      onClick: handleClick,
    },
    {
      title: "FACTURAS",
      url: "../start/facturas",
      icon: <ReceiptLong />,
    },
    {
      title: "CAJA",
      url: "../components/pedidosCaja",
      icon: <Storefront />,
    },
  ];

  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#262626", width: "auto" }}>
          <Toolbar>
            <IconButton color="inherit" onClick={handleOpenNavMenu} sx={{ display: { xs: "flex", md: "none" } }}>
              <WidgetsOutlinedIcon />
            </IconButton>
              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                {page.map((link) => (
                  <Button sx={{ fontSize: "15px" }}
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
                <HomeIcon />
              </Button>
              <Button className={inter.className} color="inherit" sx={{ fontSize: "15px" }} >
                <PersonIcon />
                {auth && auth.PER_Nom}
              </Button>
              <Button color="inherit" onClick={handleOpen}>
                <LogoutIcon />
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

          <MenuItem onClick={handleCloseM} component={Link} href="/start/productos">
            Productos Por Bodega
          </MenuItem>
          <MenuItem onClick={handleCloseM} component={Link} href="/start/productosMG">
            Productos-MG
          </MenuItem>
        </Menu>

        <Menu 
          id="basic-menu"
          anchorEl={anchorEl}
          MenuListProps={{'aria-labelledby': 'basic-button'}}
          open={Boolean(anchorEl)} 
          onClose={handleCloseNavMenu} 
          sx={{ display: { xs: "flex", md: "none" } }}>
            <Navbar page={page} />
        </Menu>
      </Box>
    </>
  );
};

export default Banner;
