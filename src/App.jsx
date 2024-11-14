import FormContextProvider from "./components/context/FormContext";
import FormDetails from "./components/FormDetails/FormDetails";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ResumePage from "./components/ResumePage/ResumePage";

import { grey, blue } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

let router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "form", element: <FormDetails /> },
      { path: "resume-page", element: <ResumePage /> },
    ],
  },
]);

function App() {
  const [mode, setMode] = useState("light");

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
        main: mode === "dark" ? grey[900]:"#fff",
      }
    },
  });

  return (
    <ThemeProvider theme={theme} setMode={setMode}>
      <FormContextProvider>
        <CssBaseline />
        <RouterProvider router={router}></RouterProvider>
      </FormContextProvider>
    </ThemeProvider>
  );
}

export default App;
