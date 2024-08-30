'use client';

import { createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
      primary: {
        main: "#00796b",
      },
      secondary: {
        main: "#9bddcd",
      },
      background: {
        default: "#fff"
      }
    },
    typography: {
      fontFamily: "Roboto, Arial, san-serif"
    },
      fontSize: 25
  })


export default theme;