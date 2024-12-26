import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { grey, blue } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import { Box } from "@mui/material";
import FormDetails from "../FormDetails/FormDetails";

export default function Layout() {
  {
    localStorage.getItem("mode") ? null : localStorage.setItem("mode", "light");
  }

  const [mode, setMode] = useState(localStorage.getItem("mode"));

  const theme = createTheme({
    palette: {
      setMode,
      mode,
      navbar: {
        main: mode === "dark" ? grey[800] : grey[100],
        Typography: mode === "dark" ? grey[100] : grey[900],
      },
      header: {
        main: mode === "dark" ? grey[900] : grey[100],
        span: mode === "dark" ? blue[300] : blue[900],
      },
      titles: {
        mainTitle: mode === "dark" ? blue[100] : blue[700],
        secondTitle: mode === "dark" ? grey[100] : grey[700],
      },
      icons: {
        main: mode === "dark" ? grey[900] : "#fff",
      },
    },
  });

  return (
    <Box>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </Box>
  );
}
