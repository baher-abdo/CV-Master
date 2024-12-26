import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import LayersIcon from "@mui/icons-material/Layers";
import ArticleIcon from "@mui/icons-material/Article";
import DownloadIcon from "@mui/icons-material/Download";

export default function Steps() {
  const theme = useTheme();

  const steps = theme.palette;

  return (
    <Box id="steps" paddingX={{ xs: 1, md: 3 }}>
      <Container maxWidth="xl">
        
      <Grid container margin={0} paddingY={10} spacing={1}>
        <Grid size={12} paddingBottom={5} textAlign={"center"}>
          <Typography
            marginBottom={3}
            variant="h2"
            color={steps.titles.mainTitle}
            sx={{
              fontSize: "2.7em",
              fontWeight: "bold",
            }}
          >
            Create your perfect Resume with easy steps
          </Typography>
          <Typography
            variant="h3"
            sx={{ color: steps.titles.secondTitle, fontSize: "1.5em" }}
          >
            Effortlessly make a job-worthy resume and cover letter that gets you
            hired faster.
          </Typography>
        </Grid>
        <Grid
          container
          size={{ xs: 12, md: 6, lg: 4 }}
          marginY={{ xs: 2, lg: 0 }}
          alignItems={"center"}
        >
          <Grid
            display={"flex"}
            alignItems={"center"}
            justifyContent={"end"}
            size={2}
          >
            <LayersIcon
              sx={{
                fontSize: "3em",
                padding: "5px",
                backgroundColor: steps.titles.mainTitle,
                color: steps.icons.main,
              }}
            />
          </Grid>
          <Grid size={10} paddingLeft={1}>
            <Typography
              variant="h3"
              color={steps.titles.mainTitle}
              sx={{ fontSize: "1.9em", fontWeight: "normal" }}
            >
              Choose your CV template
            </Typography>
            <Typography
              variant="h6"
              color={steps.titles.secondTitle}
              sx={{ fontSize: "1em" }}
            >
              Pick a template and color of your choice from a variety of
              professional templates.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          size={{ xs: 12, md: 6, lg: 4 }}
          marginY={{ xs: 3, lg: 0 }}
          alignItems={"center"}
        >
          <Grid
            display={"flex"}
            alignItems={"center"}
            justifyContent={"end"}
            size={2}
          >
            <ArticleIcon
              sx={{
                fontSize: "3em",
                padding: "5px",
                backgroundColor: steps.titles.mainTitle,
                color: steps.icons.main,
              }}
            />
          </Grid>
          <Grid size={10} paddingLeft={1}>
            <Typography
              variant="h3"
              color={steps.titles.mainTitle}
              sx={{ fontSize: "1.9em", fontWeight: "normal" }}
            >
              Place Your Information
            </Typography>
            <Typography
              variant="h6"
              color={steps.titles.secondTitle}
              sx={{ fontSize: "1em" }}
            >
              Keep track of your CV with the help of live .
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          size={{ xs: 12, md: 6, lg: 4 }}
          marginY={{ xs: 3, lg: 0 }}
          alignItems={"center"}
        >
          <Grid
            display={"flex"}
            alignItems={"center"}
            justifyContent={"end"}
            size={2}
          >
            <DownloadIcon
              sx={{
                fontSize: "3em",
                padding: "5px",
                backgroundColor: steps.titles.mainTitle,
                color: steps.icons.main,
              }}
            />
          </Grid>
          <Grid size={10} paddingLeft={1}>
            <Typography
              variant="h3"
              color={steps.titles.mainTitle}
              sx={{ fontSize: "1.9em", fontWeight: "normal" }}
            >
              Instantly download your CV
            </Typography>
            <Typography
              variant="h6"
              color={steps.titles.secondTitle}
              sx={{ fontSize: "1em" }}
            >
              Easily download your CV as a PDF and share it via a link..
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
    </Box>
  );
}
