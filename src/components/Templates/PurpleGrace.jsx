import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";
import dayjs from "dayjs";

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
  const { FormValues } = useContext(FormContext);

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          marginTop: 3,
          paddingY: 1,
          bgcolor: documentStyle.mainColor,
        }}
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
          {FormValues.firstName + " " + FormValues.lastName}
          {/* contact */}
        </Typography>
        <Typography fontSize={"0.7em"} variant="body2">
          {FormValues.address}
        </Typography>
        <Typography fontSize={"0.7em"} variant="body2">
          {FormValues.phone + " | " + FormValues.email}
        </Typography>
      </Box>
      {/* objective */}
      <Box
        id="line"
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
          {FormValues.objective}
        </Typography>
      </Box>
      {/* work history */}
      <Box sx={documentStyle.spacing}>
        <Typography sx={documentStyle.mainTitles}>work history</Typography>
        <Box>
          {FormValues.experience.map((work, index) => {
            return (
              <Box key={index}>
                <Typography
                  fontSize={"0.7em"}
                  fontWeight={"bold"}
                  variant="body2"
                >
                  {work.company}
                </Typography>
                <Typography
                  fontSize={"0.7em"}
                  fontWeight={"normal"}
                  variant="body2"
                >
                  {/* {work.title + "//" + work.startDate + " " + `${work.currently ? work.currently : work.endDate }`} */}
                  {work.title +
                    " // " +
                    `${dayjs(work.startDate).format("MMM YYYY")} to ${
                      work.currently
                        ? "I currently work here"
                        : dayjs(FormValues.endDate).format("MMM YYYY")
                    }`}
                </Typography>
                <Typography
                  fontSize={"0.7em"}
                  ml={2}
                  fontWeight={"normal"}
                  variant="body2"
                >
                  {work.work}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      {/* skills */}
      <Box sx={documentStyle.spacing}>
        <Typography sx={documentStyle.mainTitles}>skills</Typography>
        <Grid container ml={2}>
          {FormValues.skills.map((skill, index) => {
            return (
              <Grid key={index} size={6}>
                <Typography
                  fontSize={"0.7em"}
                  fontWeight={"normal"}
                  variant="body2"
                >
                  {skill}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      {/* education */}
      <Box sx={documentStyle.spacing}>
        <Typography sx={documentStyle.mainTitles}>education</Typography>
        <Box>
          {FormValues.education.map((education, index) => {
            return (
              <Box key={index}>
                <Typography
                  fontSize={"0.7em"}
                  variant="body2"
                  fontWeight={"bold"}
                >
                  {education.major}
                </Typography>
                <Typography
                  ml={2}
                  fontSize={"0.7em"}
                  variant="body2"
                  fontWeight={"normal"}
                >
                  {education.university +
                    " // " +
                    `${dayjs(education.graduationYear).format("MMM YYYY")}`}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      {/* certification */}
      {/* <Box sx={documentStyle.spacing}>
        <Typography sx={documentStyle.mainTitles}>certification</Typography>
        <Typography fontSize={"0.7em"} variant="body2" fontWeight={"normal"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
          veritatis.
        </Typography>
      </Box> */}
    </Box>
  );
}
