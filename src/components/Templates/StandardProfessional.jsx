import { Box, Grid2, Typography } from "@mui/material";
import React from "react";

const documentStyle = {
  mainTitles: {
    textTransform: "upperCase",
    fontWeight: "bold",
    fontSize: "0.7rem",
    marginTop: 1,
  },
  description: {
    marginLeft: 5,
  },
};

export default function StandardProfessional() {
  return (
    <Box paddingTop={5}>
      {/* personal info */}
      <Box textAlign={"center"} borderBottom={"dashed 1px #b7b7b7"}>
        <Typography textTransform={"capitalize"} variant="h3">
          baher abdo
        </Typography>
        <Typography
          fontSize={"0.7em"}
          textTransform={"capitalize"}
          variant="body2"
        >
          cairo egypt
        </Typography>
        <Typography fontSize={"0.7em"} mb={3} variant="body2">
          01288744169 baherabdo1995@gmaol.com
        </Typography>
      </Box>
      {/* objective */}
      <Box
        sx={{
          paddingY: 1,
        }}
      >
        <Typography sx={documentStyle.mainTitles}>
          professional summary
        </Typography>
        <Box sx={documentStyle.description}>
          <Typography fontSize={"0.7em"} variant="body2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere sit
            vero laboriosam repudiandae voluptate odit quae magni, consequatur
            laudantium amet praesentium iusto. Eveniet quos alias voluptatum
            fugiat incidunt libero reiciendis?
          </Typography>
        </Box>
      </Box>
      {/* skills */}
      <Box>
        <Typography sx={documentStyle.mainTitles}>skills</Typography>
        <Box sx={documentStyle.description}>
          <Typography
            fontSize={"0.7em"}
            variant="body2"
            textTransform={"capitalize"}
          >
            <Grid2 container>
              <Grid2 size={6}>html</Grid2>
              <Grid2 size={6}>css</Grid2>
              <Grid2 size={6}>javascript</Grid2>
              <Grid2 size={6}>bootstrap</Grid2>
              <Grid2 size={6}>tailwind</Grid2>
              <Grid2 size={6}>react js</Grid2>
              <Grid2 size={6}>next js</Grid2>
              <Grid2 size={6}>jquery</Grid2>
            </Grid2>
          </Typography>
        </Box>
      </Box>
      {/* work history */}
      <Box>
        <Typography sx={documentStyle.mainTitles}>work history</Typography>
        <Box mb={1} sx={documentStyle.description}>
          <Typography fontSize={"0.7em"} fontWeight={"bold"} variant="body2">
            title
          </Typography>
          <Typography fontSize={"0.7em"} fontWeight={"bold"} variant="body2">
            company{" "}
            <Typography fontWeight={"normal"} variant="span">
              |{" "}
            </Typography>
            <Typography fontWeight={"normal"} variant="span">
              march 2021 to febr 2024
            </Typography>
          </Typography>
          <Typography fontSize={"0.7em"} fontWeight={"normal"} variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            voluptas minima velit delectus incidunt tempore modi laborum esse
            pariatur voluptates explicabo veniam soluta atque, illum cum eveniet
            vel. Quos nisi, ex harum velit voluptates quae libero! Debitis
            assumenda aliquam, beatae fuga, velit alias soluta impedit qui
            quidem mollitia quod saepe?
          </Typography>
        </Box>
        <Box mb={1} sx={documentStyle.description}>
          <Typography fontSize={"0.7em"} fontWeight={"bold"} variant="body2">
            title
          </Typography>
          <Typography fontSize={"0.7em"} fontWeight={"bold"} variant="body2">
            company{" "}
            <Typography fontWeight={"normal"} variant="span">
              |{" "}
            </Typography>
            <Typography fontWeight={"normal"} variant="span">
              march 2021 to febr 2024
            </Typography>
          </Typography>
          <Typography fontSize={"0.7em"} fontWeight={"normal"} variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            voluptas minima velit delectus incidunt tempore modi laborum esse
            pariatur voluptates explicabo veniam soluta atque, illum cum eveniet
            vel. Quos nisi, ex harum velit voluptates quae libero! Debitis
            assumenda aliquam, beatae fuga, velit alias soluta impedit qui
            quidem mollitia quod saepe?
          </Typography>
        </Box>
        <Box mb={1} sx={documentStyle.description}>
          <Typography fontSize={"0.7em"} fontWeight={"bold"} variant="body2">
            title
          </Typography>
          <Typography fontSize={"0.7em"} fontWeight={"bold"} variant="body2">
            company{" "}
            <Typography fontWeight={"normal"} variant="span">
              |{" "}
            </Typography>
            <Typography fontWeight={"normal"} variant="span">
              march 2021 to febr 2024
            </Typography>
          </Typography>
          <Typography fontSize={"0.7em"} fontWeight={"normal"} variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            voluptas minima velit delectus incidunt tempore modi laborum esse
            pariatur voluptates explicabo veniam soluta atque, illum cum eveniet
            vel. Quos nisi, ex harum velit voluptates quae libero! Debitis
            assumenda aliquam, beatae fuga, velit alias soluta impedit qui
            quidem mollitia quod saepe?
          </Typography>
        </Box>
      </Box>
      {/* education */}
      <Box>
        <Typography sx={documentStyle.mainTitles}>education</Typography>
        <Box sx={documentStyle.description}>
          <Typography fontSize={"0.7em"} variant="body2" fontWeight={"bold"}>
            university // mar 2024 - major
          </Typography>
          <Typography fontSize={"0.7em"} variant="body2" fontWeight={"normal"}>
            2013
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
