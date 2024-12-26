import { Box, Grid2, Typography } from "@mui/material";
import React, { useContext } from "react";
import { FormContext } from "../context/FormContext";
import dayjs from "dayjs";

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
  const { FormValues } = useContext(FormContext);

  return (
    <Box paddingTop={5}>
      {/* personal info */}
      <Box textAlign={"center"} borderBottom={"dashed 1px #b7b7b7"}>
        <Typography textTransform={"capitalize"} variant="h3">
          {FormValues.firstName + " " + FormValues.lastName}
        </Typography>
        <Typography
          fontSize={"0.7em"}
          textTransform={"capitalize"}
          variant="body2"
        >
          {FormValues.address}
        </Typography>
        <Typography fontSize={"0.7em"} mb={3} variant="body2">
          {FormValues.phone + " | " + FormValues.email}
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
            {FormValues.objective}
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
              {FormValues.skills.map((skill, index) => {
                return (
                  <Grid2 key={index} size={6}>
                    {skill}
                  </Grid2>
                );
              })}
            </Grid2>
          </Typography>
        </Box>
      </Box>
      {/* work history */}
      <Box>
        <Typography sx={documentStyle.mainTitles}>work history</Typography>
        {FormValues.experience.map((work, index) => {
          return (
            <Box mb={1} sx={documentStyle.description}>
              <Typography
                fontSize={"0.7em"}
                fontWeight={"bold"}
                variant="body2"
              >
                {work.title}
              </Typography>
              <Typography
                fontSize={"0.7em"}
                fontWeight={"bold"}
                variant="body2"
              >
                {work.company}
                <Typography fontWeight={"normal"} variant="span">
                  {` | ${dayjs(work.startDate).format("MMM YYYY")} to ${
                    work.currently
                      ? "I currently work here"
                      : dayjs(FormValues.endDate).format("MMM YYYY")
                  }`}
                </Typography>
              </Typography>
              <Typography
                fontSize={"0.7em"}
                fontWeight={"normal"}
                variant="body2"
              >
                {work.work}
              </Typography>
            </Box>
          );
        })}
      </Box>
      {/* education */}
      <Box>
        <Typography sx={documentStyle.mainTitles}>education</Typography>
        <Box sx={documentStyle.description}>
          {FormValues.education.map((education, index) => {
            return (
              <Box>
                <Typography
                  fontSize={"0.7em"}
                  variant="body2"
                  fontWeight={"bold"}
                  key={index}
                >
                  {education.university}
                  <Typography variant="span" fontWeight={"normal"}>
                    {" | " +
                      education.major +
                      " - " +
                      dayjs(education.graduationYear).format("MMM YYYY")}
                  </Typography>
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
