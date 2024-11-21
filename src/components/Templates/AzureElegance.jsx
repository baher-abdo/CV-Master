import React, { useContext } from "react";
import Grid from "@mui/material/Grid2";
import dayjs from "dayjs";
import { Box, Typography } from "@mui/material";
import { FormContext } from "../context/FormContext";

const documentStyle = {
  mainColor: "#2A5978",
  secondaryColor: "#DFE6EB",
  border: {
    borderBottom: "0.5mm solid #2A5978",
    padding: "5px 0",
    marginTop: 2,
  },
  mainTitles: {
    textTransform: "upperCase",
    fontWeight: "bold",
    color: "#2A5978",
    fontSize: "0.9rem",
  },
  blueArea: {
    marginLeft: "10px",
    height: "auto",
    flexGrow: "1",
    backgroundColor: "#DFE6EB",
  },
};
export default function AzureElegance() {
  const { FormValues } = useContext(FormContext);

  return (
    <>
      <Box
        width={"100%"}
        height={"35px"}
        backgroundColor={documentStyle.secondaryColor}
      ></Box>

      {/* personal info */}
      <Box>
        <Grid container>
          <Grid size={12} sx={documentStyle.border}>
            <Typography
              variant="h3"
              textTransform={"uppercase"}
              fontWeight={"bold"}
              color={documentStyle.mainColor}
              fontSize={"2.5rem"}
            >
              {`${FormValues.firstName} ${FormValues.lastName}`}
            </Typography>
          </Grid>
          <Grid container spacing={5} size={12}>
            <Grid size={7} sx={documentStyle.border}>
              <Box sx={{ display: "flex" }}>
                <Typography sx={documentStyle.mainTitles}>
                  professional summary
                </Typography>
                <span style={documentStyle.blueArea}></span>
              </Box>
              <Box paddingY={1}>
                <Typography variant="body2" fontSize={"0.7rem"}>
                  {FormValues.objective}
                </Typography>
              </Box>
            </Grid>

            {/* contact */}
            <Grid size={5} sx={documentStyle.border}>
              <Box sx={{ display: "flex" }}>
                <Typography sx={documentStyle.mainTitles}>contact</Typography>
                <span style={documentStyle.blueArea}></span>
              </Box>
              <Box paddingY={1}>
                <Typography
                  lineHeight={1.5}
                  variant="body2"
                  fontWeight={"bold"}
                  fontSize={"0.7rem"}
                >
                  Address:
                  <span style={{ fontWeight: "normal", marginLeft: "5px" }}>
                    {FormValues.address}
                  </span>
                </Typography>
                <Typography
                  lineHeight={1.5}
                  variant="body2"
                  fontWeight={"bold"}
                  fontSize={"0.7rem"}
                >
                  Phone:
                  <span style={{ fontWeight: "normal", marginLeft: "5px" }}>
                    {FormValues.phone}
                  </span>
                </Typography>
                <Typography
                  lineHeight={1.5}
                  variant="body2"
                  fontWeight={"bold"}
                  fontSize={"0.7rem"}
                >
                  Email:
                  <span style={{ fontWeight: "normal", marginLeft: "5px" }}>
                    {FormValues.email}
                  </span>
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box>
          {/* work history */}
        <Grid container spacing={5} size={12} position={"relative"}>
          <Grid size={7}>
            <Box sx={documentStyle.border}>
              <Box sx={{ display: "flex" }}>
                <Typography sx={documentStyle.mainTitles}>
                  work history
                </Typography>
                <span style={documentStyle.blueArea}></span>
              </Box>
              {FormValues.experience.map((work, index) => {
                return (
                  <Box paddingY={2} key={index}>
                    <Typography
                      lineHeight={1.5}
                      variant="body2"
                      fontWeight={"bold"}
                      fontSize={"0.7rem"}
                    >
                      {work.title}
                      <span style={{ fontWeight: "normal", marginLeft: "5px" }}>
                        {`${dayjs(work.startDate).format("MMM YYYY")} to ${
                          work.currently
                            ? "I currently work here"
                            : dayjs(FormValues.endDate).format("MMM YYYY")
                        }`}
                      </span>
                    </Typography>
                    <Typography
                      lineHeight={1.5}
                      variant="body2"
                      fontWeight={"bold"}
                      fontSize={"0.7rem"}
                    >
                      {work.company}
                    </Typography>
                    <Box paddingTop={0.5}>
                      <Typography variant="body2" fontSize={"0.7rem"}>
                        {work.work}
                      </Typography>
                    </Box>
                  </Box>
                );
              })}
            </Box>
          </Grid>
          <Grid size={5}>
            <Box>
              {/* skills */}
              <Box sx={documentStyle.border}>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={documentStyle.mainTitles}>skills</Typography>
                  <span style={documentStyle.blueArea}></span>
                </Box>
                <Box paddingTop={0.5}>
                  <ul style={{ paddingLeft: 15, listStyle: "none" }}>
                    {FormValues.skills.map((skill, index) => {
                      return (
                        <li key={index}>
                          <Typography
                            lineHeight={1.7}
                            variant="body2"
                            fontSize={"0.7rem"}
                          >
                            {skill}
                          </Typography>
                        </li>
                      );
                    })}
                  </ul>
                </Box>
              </Box>
              {/* education */}
              <Box sx={documentStyle.border}>
                <Box sx={{ display: "flex" }}>
                  <Typography sx={documentStyle.mainTitles}>
                    education
                  </Typography>
                  <span style={documentStyle.blueArea}></span>
                </Box>
                <Box paddingTop={0.5}>
                  {FormValues.education.map((ele, index) => {
                    return (
                      <Box key={index}>
                        <Typography
                          lineHeight={1.5}
                          variant="body2"
                          fontWeight={"bold"}
                          fontSize={"0.7rem"}
                        >
                          {ele.major}
                        </Typography>
                        <Typography
                          lineHeight={1.5}
                          variant="body2"
                          fontWeight={"normal"}
                        >
                          {ele.university}
                          <span style={{ fontWeight: "normal" }}>
                           - {dayjs(ele.graduationYear).format("YYYY")}
                          </span>
                        </Typography>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
