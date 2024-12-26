import React, { useContext, useState } from "react";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Alert, Container, useTheme } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

import AzureElegance from "../../assets/images/templates/AzureElegance.png";
import PurpleGrace from "../../assets/images/templates/PurpleGrace.png";
import StandardProfessional from "../../assets/images/templates/StandardProfessional.png";
import { FormContext } from "../context/FormContext";

export default function SelectTemplate() {
  const theme = useTheme();
  const { setSelectedTemplate, selectedTemplate } = useContext(FormContext);

  const templates = theme.palette;

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  function selectLoading() {
    setLoading(true);
    setTimeout(() => {
      navigate("/form");
    }, 1000);
  }

  return (
    <Container maxWidth="xl" sx={{ bgcolor: templates.header.main }}>
      <Grid
        container
        paddingX={{ xs: 1, md: 3 }}
        sx={{ width: "100%", paddingY: 8 }}
      >
        <Grid size={12} textAlign={"center"}>
          <Typography
            variant="h2"
            marginBottom={3}
            color={templates.titles.mainTitle}
            sx={{ fontSize: "2.7em", fontWeight: "bold" }}
          >
            Here are the Best Templates for you
          </Typography>
          <Typography
            variant="h3"
            fontSize={"1.5em"}
            color={templates.titles.secondTitle}
          >
            A great job application leads to a good interview. An amazing resume
            is what makes it all possible.
          </Typography>
        </Grid>
        <Grid
          container
          spacing={3}
          size={12}
          paddingY={5}
          paddingX={{ xs: 1, sm: 10, md: 15 }}
        >
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Card>
              <CardActionArea>
                <Box
                  component={Link}
                  onClick={() => {
                    selectLoading();
                    setSelectedTemplate("azure-elegance");
                  }}
                  sx={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "orange",
                    "&:hover, &:focus-within": {
                      opacity: 1,
                    },
                    opacity: 0,
                    transition: "0.1s ease-in",
                    background:
                      "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                  }}
                >
                  <Alert
                    variant="filled"
                    sx={{
                      width: "75%",
                      justifyContent: "center",
                      fontSize: { xs: "1.2em", md: "1.6em" },
                      fontWeight: "bold",
                      paddingY: 0,
                    }}
                    icon={false}
                    severity="info"
                  >
                    {loading && selectedTemplate == "azure-elegance" ? (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          width: 100,
                        }}
                      >
                        <CircularProgress color="inherit" size={"1.5em"} />
                      </Box>
                    ) : (
                      "Select Template"
                    )}
                  </Alert>
                </Box>
                <CardMedia
                  component="img"
                  image={AzureElegance}
                  alt="template"
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Card>
              <CardActionArea>
                <Box
                  component={Link}
                  onClick={() => {
                    selectLoading();
                    setSelectedTemplate("purple-grace");
                  }}
                  sx={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "orange",
                    "&:hover, &:focus-within": {
                      opacity: 1,
                    },
                    opacity: 0,
                    transition: "0.1s ease-in",
                    background:
                      "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                  }}
                >
                  <Alert
                    variant="filled"
                    sx={{
                      width: "75%",
                      justifyContent: "center",
                      fontSize: { xs: "1.2em", md: "1.6em" },
                      fontWeight: "bold",
                      paddingY: 0,
                    }}
                    icon={false}
                    severity="info"
                  >
                    {loading && selectedTemplate == "purple-grace" ? (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          width: 100,
                        }}
                      >
                        <CircularProgress color="inherit" size={"1.5em"} />
                      </Box>
                    ) : (
                      "Select Template"
                    )}
                  </Alert>
                </Box>
                <CardMedia component="img" image={PurpleGrace} alt="template" />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Card>
              <CardActionArea>
                <Box
                  component={Link}
                  onClick={() => {
                    selectLoading();
                    setSelectedTemplate("standard-professional");
                  }}
                  sx={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "absolute",
                    inset: 0,
                    backgroundColor: "orange",
                    "&:hover, &:focus-within": {
                      opacity: 1,
                    },
                    opacity: 0,
                    transition: "0.1s ease-in",
                    background:
                      "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                  }}
                >
                  <Alert
                    variant="filled"
                    sx={{
                      width: "75%",
                      justifyContent: "center",
                      fontSize: { xs: "1.2em", md: "1.6em" },
                      fontWeight: "bold",
                      paddingY: 0,
                    }}
                    icon={false}
                    severity="info"
                  >
                    {loading && selectedTemplate == "standard-professional" ? (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          width: 100,
                        }}
                      >
                        <CircularProgress color="inherit" size={"1.5em"} />
                      </Box>
                    ) : (
                      "Select Template"
                    )}
                  </Alert>
                </Box>
                <CardMedia
                  component="img"
                  image={StandardProfessional}
                  alt="template"
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
