import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, Typography, useTheme } from "@mui/material";
import TypeEffict from "../TypeAnimation/TypeAnimation";
import bgImage from "../../assets/images/graphic_dots_2.png";
import "./ScrollDown.css";

export default function Header() {
  const theme = useTheme();

  const header = theme.palette;

  return (
    <>
      <Container maxWidth="xl" sx={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }}>
        <Box
          sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Grid sx={{ textAlign: "center" }}>
            <Grid item alignItems={"center"} sx={{ mb: 2 }}>
              <Typography
                variant="h2"
                color={header.titles.mainTitle}
                sx={{
                  fontSize: "3.5em",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                }}
              >
                create your professional CV in just
                <Typography variant="span" ml={2} color={header.header.span}>
                  5 minutes!
                </Typography>
              </Typography>
              <Grid item color={header.header.span} sx={{ my: 2 }}>
                <TypeEffict />
              </Grid>
            </Grid>
            <Grid item>
              <Box className="mouse_scroll">
                <a href="#steps">
                  <span
                    style={{
                      borderBottom: "2px solid" + header.titles.mainTitle,
                      borderRight: "2px solid" + header.titles.mainTitle,
                    }}
                    className="m_scroll_arrows unu"
                  ></span>
                  <span
                    style={{
                      borderBottom: "2px solid" + header.titles.mainTitle,
                      borderRight: "2px solid" + header.titles.mainTitle,
                    }}
                    className="m_scroll_arrows doi"
                  ></span>
                  <span
                    style={{
                      borderBottom: "2px solid" + header.titles.mainTitle,
                      borderRight: "2px solid" + header.titles.mainTitle,
                    }}
                    className="m_scroll_arrows trei"
                  ></span>
                </a>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
