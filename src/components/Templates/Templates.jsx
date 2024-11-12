import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Card, Container } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import CardCover from "@mui/joy/CardCover";
import  Link  from "@mui/joy/Link";
import { Link as RouterLink } from "react-router-dom";
import template1 from "../../assets/images/templates/template-1.png";
import template2 from "../../assets/images/templates/template-2.png";
import template3 from "../../assets/images/templates/template-3.png";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  boxShadow: "none",
  textAlign: "center",
  backgroundColor: "transparent",
}));

export default function Templates() {
  return (
    <Container maxWidth="xl" sx={{ bgcolor: "#efebe9" }}>
      <Box sx={{ width: "100%", paddingY: 8 }}>
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={12} marginY={5}>
            <Item
              variant="h2"
              sx={{ fontSize: "2.7em", fontWeight: "bold", color: "#00004a" }}
            >
              Here are the Best Templates for you
            </Item>
            <Item
              variant="h3"
              sx={{
                color: "#4c5563",
                fontSize: "1.5em",
                width: "50%",
                marginX: "auto",
              }}
            >
              A great job application leads to a good interview. An amazing
              resume is what makes it all possible.
            </Item>
          </Grid>

          <Grid container paddingX={{ xs: 5, md: 15, lg: 20 }}>

            <Grid
              container
              justifyContent={"center"}
              padding={1}
              xs={12}
              md={6}
              lg={4}
            >
              <Card
                variant="plain"
                sx={{ width: 400, bgcolor: "initial", p: 0 }}
              >
                <Box sx={{ position: "relative" }}>
                  <AspectRatio ratio="4/5">
                    <figure>
                      <img src={template1} loading="lazy" alt="template1" />
                    </figure>
                  </AspectRatio>
                  <CardCover
                    className="gradient-cover"
                    sx={{
                      "&:hover, &:focus-within": {
                        opacity: 1,
                      },
                      opacity: 0,
                      transition: "0.1s ease-in",
                      background:
                        "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                    }}
                  >
                    <div>
                      <Box
                        sx={{
                          p: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          flexGrow: 1,
                          justifyContent: "center",
                        }}
                      >
                        <Link
                          component={RouterLink}
                          to={"/form"}
                          variant="solid"
                          href="#dribbble-shot"
                          overlay
                          underline="none"
                          sx={{
                            fontSize: 24,
                            color: "#fff",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            display: "block",
                            paddingX: 3,
                          }}
                        >
                          Select Template
                        </Link>
                      </Box>
                    </div>
                  </CardCover>
                </Box>
              </Card>
            </Grid>

            <Grid
              container
              justifyContent={"center"}
              padding={1}
              xs={12}
              md={6}
              lg={4}
            >
              <Card
                variant="plain"
                sx={{ width: 400, bgcolor: "initial", p: 0 }}
              >
                <Box sx={{ position: "relative" }}>
                  <AspectRatio ratio="4/5">
                    <figure>
                      <img src={template2} loading="lazy" alt="template2" />
                    </figure>
                  </AspectRatio>
                  <CardCover
                    className="gradient-cover"
                    sx={{
                      "&:hover, &:focus-within": {
                        opacity: 1,
                      },
                      opacity: 0,
                      transition: "0.1s ease-in",
                      background:
                        "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                    }}
                  >
                    <div>
                      <Box
                        sx={{
                          p: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          flexGrow: 1,
                          justifyContent: "center",
                        }}
                      >
                        <Link
                          component={RouterLink}
                          to={"/form"}
                          variant="solid"
                          href="#dribbble-shot"
                          overlay
                          underline="none"
                          sx={{
                            fontSize: 24,
                            color: "#fff",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            display: "block",
                            paddingX: 3,
                          }}
                        >
                          Select Template
                        </Link>
                      </Box>
                    </div>
                  </CardCover>
                </Box>
              </Card>
            </Grid>

            <Grid
              container
              justifyContent={"center"}
              padding={1}
              xs={12}
              md={6}
              lg={4}
            >
              <Card
                variant="plain"
                sx={{ width: 400, bgcolor: "initial", p: 0 }}
              >
                <Box sx={{ position: "relative" }}>
                  <AspectRatio ratio="4/5">
                    <figure>
                      <img src={template3} loading="lazy" alt="template3" />
                    </figure>
                  </AspectRatio>
                  <CardCover
                    className="gradient-cover"
                    sx={{
                      "&:hover, &:focus-within": {
                        opacity: 1,
                      },
                      opacity: 0,
                      transition: "0.1s ease-in",
                      background:
                        "linear-gradient(180deg, transparent 62%, rgba(0,0,0,0.00345888) 63.94%, rgba(0,0,0,0.014204) 65.89%, rgba(0,0,0,0.0326639) 67.83%, rgba(0,0,0,0.0589645) 69.78%, rgba(0,0,0,0.0927099) 71.72%, rgba(0,0,0,0.132754) 73.67%, rgba(0,0,0,0.177076) 75.61%, rgba(0,0,0,0.222924) 77.56%, rgba(0,0,0,0.267246) 79.5%, rgba(0,0,0,0.30729) 81.44%, rgba(0,0,0,0.341035) 83.39%, rgba(0,0,0,0.367336) 85.33%, rgba(0,0,0,0.385796) 87.28%, rgba(0,0,0,0.396541) 89.22%, rgba(0,0,0,0.4) 91.17%)",
                    }}
                  >
                    <div>
                      <Box
                        sx={{
                          p: 2,
                          display: "flex",
                          alignItems: "center",
                          gap: 1.5,
                          flexGrow: 1,
                          justifyContent: "center",
                        }}
                      >
                        <Link
                          component={RouterLink}
                          to={"/form"}
                          variant="solid"
                          href="#dribbble-shot"
                          overlay
                          underline="none"
                          sx={{
                            fontSize: 24,
                            color: "#fff",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            display: "block",
                            paddingX: 3,
                          }}
                        >
                          Select Template
                        </Link>
                      </Box>
                    </div>
                  </CardCover>
                </Box>
              </Card>
            </Grid>
            
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
