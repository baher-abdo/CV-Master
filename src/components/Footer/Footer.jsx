import * as React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Container, Icon, IconButton, Link, Typography } from "@mui/material";
import logo from "../../assets/images/favicon.png";
export default function Footer() {
    const dateOfYear = new Date()
    return (
      <footer>
            
          <Container maxWidth="xl">
            <Box sx={{ width: "100%", paddingY: 8 }}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                paddingX={{ xs: 0, sm: 5, md: 10, lg: 15 }}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent={{ xs: "center", md: "start" }}
                  marginY={3}
                  xs={12}
                  md={6}
                  lg={4}
                >
                  <Grid item xs={10}>
                    <IconButton
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ marginBottom: 1, paddingLeft: 2 }}
                    >
                      <img src={logo} alt="logo" style={{ width: "35px" }} />
                      <Typography
                        variant="h1"
                        color="#3e3e3e"
                        component="div"
                        fontSize={20}
                        fontWeight={"bold"}
                        sx={{ flexGrow: 1, marginLeft: 1 }}
                      >
                        CV Master
                      </Typography>
                    </IconButton>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: "1em", color: "#4c5563" }}
                    >
                      CV Master is a CV builder that helps users like you to create
                      stunning CVs within 4 minutes
                    </Typography>
                  </Grid>
                </Grid>
      
                <Grid
                  container
                  direction="row"
                  justifyContent={{ xs: "center", md: "start" }}
                  marginY={3}
                  xs={12}
                  md={6}
                  lg={2}
                >
                  <Grid item xs={10}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "1.9em",
                        fontWeight: "normal",
                        color: "#00004a",
                        marginBottom: 3,
                      }}
                    >
                      CV Master
                    </Typography>
      
                    <Typography variant="h6" sx={{ fontSize: "1em" }}>
                      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                        <li>
                          <Link
                            to={"#"}
                            sx={{
                              textDecoration: "none",
                              color: "#4c5563",
                              cursor: "pointer",
                            }}
                          >
                            Home page
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"#"}
                            sx={{
                              textDecoration: "none",
                              color: "#4c5563",
                              cursor: "pointer",
                            }}
                          >
                            CV Master
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"#"}
                            sx={{
                              textDecoration: "none",
                              color: "#4c5563",
                              cursor: "pointer",
                            }}
                          >
                            CV Templates
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"#"}
                            sx={{
                              textDecoration: "none",
                              color: "#4c5563",
                              cursor: "pointer",
                            }}
                          >
                            Login
                          </Link>
                        </li>
                      </ul>
                    </Typography>
                  </Grid>
                </Grid>
      
                <Grid
                  container
                  direction="row"
                  justifyContent={{ xs: "center", md: "start" }}
                  marginY={3}
                  xs={12}
                  md={6}
                  lg={2}
                >
                  <Grid item xs={10}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "1.9em",
                        fontWeight: "normal",
                        color: "#00004a",
                        marginBottom: 3,
                      }}
                    >
                      Legal
                    </Typography>
      
                    <Typography variant="h6" sx={{ fontSize: "1em" }}>
                      <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                        <li>
                          <Link
                            to={"#"}
                            sx={{
                              textDecoration: "none",
                              color: "#4c5563",
                              cursor: "pointer",
                            }}
                          >
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link
                            to={"#"}
                            sx={{
                              textDecoration: "none",
                              color: "#4c5563",
                              cursor: "pointer",
                            }}
                          >
                            Use of Terms
                          </Link>
                        </li>
                      </ul>
                    </Typography>
                  </Grid>
                </Grid>
      
                <Grid
                  container
                  direction="row"
                  justifyContent={{ xs: "center", md: "start" }}
                  marginY={3}
                  xs={12}
                  md={6}
                  lg={4}
                >
                  <Grid item xs={10}>
                    <Typography
                      variant="h3"
                      sx={{
                        fontSize: "1.9em",
                        fontWeight: "normal",
                        color: "#00004a",
                        marginBottom: 3,
                      }}
                    >
                      Help Center
                    </Typography>
      
                    <Typography variant="h6" sx={{ fontSize: "1em" }}>
                      <span style={{ color: "#4c5563", marginRight: 5 }}>
                        Contact:
                      </span>
      
                      <Link
                        href={"mailto:baherabdo1995@gmail.com"}
                        sx={{
                          textDecoration: "none",
                          color: "#4c5563",
                          cursor: "pointer",
                        }}
                      >
                        baherabdo1995@gmail.com
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
                </Box>
          </Container>
            <Box sx={{ textAlign: "center", width: "100%", paddingY: 2, borderTop: "solid 1px #b7b7b7" }}>
                <Typography level="h4" sx={{color:"#4c5563"}}>© { `${dateOfYear.getFullYear()}`} CV Master. All rights reserved</Typography>
                </Box>
      </footer>
  );
}
