"use client";

import { AccountCircle, ShoppingBag, Assignment, Person, ReceiptLong, Storefront, } from "@mui/icons-material";
import { AppBar, Box, Button, CardActions, CardContent, Divider, List, ListItem, ListItemButton, 
  ListItemIcon, ListItemText, Menu, MenuItem, Paper, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import { useAuth }  from "@/context/authContext";
import HomeIcon from "@mui/icons-material/Home";
import { Lora } from "next/font/google";
import { useState } from "react";
import Swal from "sweetalert2";
import Link from "next/link";

  const inter = Lora({ subsets: ['latin'] })

  const Inicio = () => {
    const { auth, logout } = useAuth();
    const [anchor, setAnchor] = useState(null);
    const [productos, setProductos] = useState(false);

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

    const handleClick = (event) => {
      setProductos(true);
      setAnchor(event.currentTarget);
    };

    const handleCloseM = () => {
      setProductos(false);
      setAnchor(null);
    };

    const cerrarSesion = () => {
      Swal.fire({
        title: "¿Quieres Terminar La Sesión?",
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: "#28ee32",
        cancelButtonColor: "#f12260",
        confirmButtonText: "Aceptar"
      }).then((result) => {
        if (result.isConfirmed) {
          logout();
        }
      })
    };


  const page = [
    {
      title: "USUARIOS",
      url: "./start/usuarios",
      icon: <AccountCircle />,
    },
    {
      title: "PEDIDOS",
      url: "./start/pedidos",
      icon: <Assignment />,
    },
    {
      title: "CLIENTES",
      url: "./start/clients",
      icon: <Person />,
    },
    
    {
      title: "PRODUCTOS",
      icon: <ShoppingBag />,
      onClick: handleClick,
    },
    {
      title: "FACTURAS",
      url: "./start/facturas",
      icon: <ReceiptLong />,
    },
    {
      title: "CAJA",
      url: "./start/pedidos/pedidosCaja",
      icon: <Storefront />,
    },
  ];

  return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static" sx={{ bgcolor: "#262626" }}>
            <Toolbar>
              <Box sx={{ alignItems: "center", marginBottom: "20px", width: { xs: "50px", sm: "80px", md: "100px" }, height: "auto" }}>
                <img src="/logo2.png" alt="imagenmg" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
              </Box>
              
              <Typography variant="h6" sx={{ flexGrow: 1 }}></Typography>

              <Button component={Link} href="../start" color="inherit">
                <HomeIcon fontSize="large" />
              </Button>

              <Button className={inter.className} variant="h5" color="inherit" sx={{ fontSize: "15px" }}>
                <PersonIcon fontSize="large" /> {auth && auth.PER_Nom}
              </Button>

              <Button color="inherit" onClick={cerrarSesion}>
                <LogoutIcon fontSize="large" />
              </Button>
            </Toolbar>
          </AppBar>
        </Box>

        <Box className="containers" sx={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: isSmallScreen ? "column" : "row", padding: isSmallScreen ? 2 : 0, mt: isSmallScreen ? 2 : 0 }}>
          <Paper id="wave" sx={{ width: isSmallScreen ? "90%" : "40%", maxWidth: "600px", height: isSmallScreen ? 600 : 750, border: 6, overflow: "auto",}}> 
            <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", bgcolor: "#262626", borderColor: "#262626", padding: 2 }}>
              <Box sx={{ alignItems: "center", marginBottom: "20px", width: { xs: "220px", sm: "200px", md: "250px" }, height: "auto" }}>
                <img src="/logo2.png" alt="imagenmg" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
              </Box>
              <Typography className={inter.className} variant="h6" sx={{  marginTop: 4, marginBottom: 2 }} color="white">{auth && auth.PER_Nom}</Typography> 
            </CardContent>

            <CardActions sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 2 }}>
              <Box sx={{ alignItems: "center", marginBottom: "20px", width: { xs: "150px", sm: "150px", md: "180px" }, height: "auto" }}>
                <img src="/truperLogo.png" alt="imagenmg" style={{ width: "100%", height: "auto", objectFit: "contain" }} />
              </Box>
              <Divider sx={{ width: "80%", my: 2 }} />
            <List sx={{ width: "100%", padding: 0 }}>
              {page.map((link) => (
                <ListItem disablePadding key={link.title}>
                  <ListItemButton LinkComponent={Link} href={link.url} onClick={link.onClick}>
                    <ListItemIcon sx={{ fontSize: 20 }}>
                      {link.icon}
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ fontSize: 15, fontWeight: 'medium', textAlign: "center" }}>
                      {link.title}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </CardActions>
        </Paper>
      </Box>

      <Menu id="basic-menu" anchorEl={anchor} open={productos} onClose={handleCloseM} MenuListProps={{ "aria-labelledby" : "basic-button", }}>
        <MenuItem onClick={handleCloseM} component={Link} href="/start/buscarProd" variant="body1" sx={{ fontSize: "15px" }}>
          Buscar Por Referencias
        </MenuItem>
        <MenuItem onClick={handleCloseM} component={Link} href="/start/productosMG" variant="body1" sx={{ fontSize: "15px" }}>
          Lista De Todos Los Productos
        </MenuItem>
      </Menu>
    </>
  );
};

export default Inicio;


