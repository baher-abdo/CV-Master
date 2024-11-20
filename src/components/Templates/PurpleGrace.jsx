import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React from "react";

const documentStyle = {
  mainColor: "#7243A1",
  spacing: {
    marginTop: 1,
  },
  mainTitles: {
    textTransform: "upperCase",
    fontWeight: "bold",
    fontSize: "0.7rem",
  },
};

export default function PurpleGrace() {
  return (
    <Box>
      <Box
        sx={{ width: "100%",marginTop:3 ,paddingY: 1, bgcolor: documentStyle.mainColor }}
      ></Box>
      {/* personal info */}
      <Box
        textAlign={"center"}
        textTransform={"uppercase"}
        sx={documentStyle.spacing}
      >
        <Typography
          variant="h3"
          fontSize={"2.3rem"}
          color="#7243A1"
          fontWeight={"light"}
        >
          baher abdo
          {/* contact */}
        </Typography>
        <Typography fontSize={"0.7em"} variant="body2">
          cairo, egypt
        </Typography>
        <Typography fontSize={"0.7em"} variant="body2">
          01288744169 | baherabdo1995@gmail.com
        </Typography>
      </Box>
      {/* objective */}
      <Box
        sx={{
          borderTop: `0.15em dotted ${documentStyle.mainColor}`,
          borderBottom: `0.15em dotted ${documentStyle.mainColor}`,
          paddingY: 1,
        }}
      >
        <Typography sx={documentStyle.mainTitles}>
          professional summary
        </Typography>
        <Typography fontSize={"0.7em"} variant="body2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sit
          vero laboriosam repudiandae voluptate odit quae magni, consequatur
          laudantium amet praesentium iusto. Eveniet quos alias voluptatum
          fugiat incidunt libero reiciendis?
        </Typography>
      </Box>
      {/* work history */}
      <Box sx={documentStyle.spacing}>
        <Typography sx={documentStyle.mainTitles}>work history</Typography>
        <Box>
          <Typography fontSize={"0.7em"} fontWeight={"medium"} variant="body2">
            company
          </Typography>
          <Typography fontSize={"0.7em"} fontWeight={"normal"} variant="body2">
            front end // address // march 2021 to febr 2024
          </Typography>
          <Typography
            fontSize={"0.7em"}
            ml={2}
            fontWeight={"normal"}
            variant="body2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            voluptas minima velit delectus incidunt tempore modi laborum esse
            pariatur voluptates explicabo veniam soluta atque, illum cum eveniet
            vel. Quos nisi, ex harum velit voluptates quae libero! Debitis
            assumenda aliquam, beatae fuga, velit alias soluta impedit qui
            quidem mollitia quod saepe?
          </Typography>
          <Typography fontSize={"0.7em"} fontWeight={"medium"} variant="body2">
            company
          </Typography>
          <Typography fontSize={"0.7em"} fontWeight={"normal"} variant="body2">
            front end // address // march 2021 to febr 2024
          </Typography>
          <Typography
            fontSize={"0.7em"}
            ml={2}
            fontWeight={"normal"}
            variant="body2"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            voluptas minima velit delectus incidunt tempore modi laborum esse
            pariatur voluptates explicabo veniam soluta atque, illum cum eveniet
            vel. Quos nisi, ex harum velit voluptates quae libero! Debitis
            assumenda aliquam, beatae fuga, velit alias soluta impedit qui
            quidem mollitia quod saepe?
          </Typography>
        </Box>
      </Box>
      {/* skills */}
      <Box sx={documentStyle.spacing}>
        <Typography sx={documentStyle.mainTitles}>skills</Typography>
        <Grid container ml={2}>
          <Grid size={6}>
            <Typography
              fontSize={"0.7em"}
              fontWeight={"normal"}
              variant="body2"
            >
              baher
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography
              fontSize={"0.7em"}
              fontWeight={"normal"}
              variant="body2"
            >
              baher
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography
              fontSize={"0.7em"}
              fontWeight={"normal"}
              variant="body2"
            >
              baher
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography
              fontSize={"0.7em"}
              fontWeight={"normal"}
              variant="body2"
            >
              baher
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography
              fontSize={"0.7em"}
              fontWeight={"normal"}
              variant="body2"
            >
              baher
            </Typography>
          </Grid>
          <Grid size={6}>
            <Typography
              fontSize={"0.7em"}
              fontWeight={"normal"}
              variant="body2"
            >
              baher
            </Typography>
          </Grid>
        </Grid>
      </Box>
      {/* education */}
      <Box sx={documentStyle.spacing}>
        <Typography sx={documentStyle.mainTitles}>education</Typography>
        <Box>
          <Typography fontSize={"0.7em"} variant="body2" fontWeight={"bold"}>
            major
          </Typography>
          <Typography fontSize={"0.7em"} variant="body2" fontWeight={"normal"}>
            university // mar 2024
          </Typography>
          <Typography fontSize={"0.7em"} variant="body2" fontWeight={"bold"}>
            major
          </Typography>
          <Typography fontSize={"0.7em"} variant="body2" fontWeight={"normal"}>
            university // mar 2024
          </Typography>
        </Box>
      </Box>
      {/* certification */}
      <Box sx={documentStyle.spacing}>
        <Typography sx={documentStyle.mainTitles}>certification</Typography>
        <Typography fontSize={"0.7em"} variant="body2" fontWeight={"normal"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          veritatis.
        </Typography>
      </Box>
    </Box>
  );
}
