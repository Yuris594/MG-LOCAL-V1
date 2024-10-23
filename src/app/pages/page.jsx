"use client";

import Image from "next/image";
import NavBar from "../components/navbar/nav";
import { Box, Typography } from "@mui/material";


export function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Departamento de Sistemas © - "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
};

const Inicio = () => {

    return (
        <>
          <NavBar />
          <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", margin: 2, color: "red" }}>
            <h2><strong>¿YA REALIZASTE EL RUTERO DEL DÍA DE HOY?</strong></h2>
          </Box>
          <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", alignItems: "center", margin: 2 }}>
            <Image
              src="/logo_miguelgomez.png"
              width={300}
              height={250}
              alt="Logo"
              priority={true}
            />
          </Box>
          <Copyright sx={{ mt: 5, mb: 5 }} />
        </>
    )
}

export default Inicio;