import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Button, Grid, Typography } from "@mui/material";
import TypeEffict from "../TypeAnimation/TypeAnimation";
import steps from '../Steps/Steps'
import "./ScrollDown.css";

export default function Header() {
    return (
        <>
          <CssBaseline />
          <Container maxWidth="xl" sx={{ bgcolor: "#e7e7e7" }}>
            <Box
              sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Grid sx={{ textAlign: "center"}}>
                <Grid item alignItems={"center"} sx={{ mb: 2 }}>
                  <Typography
                    variant="h2"
                    sx={{
                      fontSize: "3.5em",
                      fontWeight: "bold",
                      color: "#00004a",
                      textTransform: "capitalize",
                    }}
                  >
                    create your professional cv in just 5{" "}
                    <Typography variant="span" sx={{ color: "#1966d2" }}>
                      minutes!
                    </Typography>
                  </Typography>
                <Grid item sx={{ my: 2 }}>
                  <TypeEffict />
                </Grid>
                </Grid>
                <Grid item>
                  
                  <Box className="mouse_scroll">
                    <Box>
                      <span className="m_scroll_arrows unu"></span>
                      <span className="m_scroll_arrows doi"></span>
                      <span className="m_scroll_arrows trei"></span>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </>
      );
}
