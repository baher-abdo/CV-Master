import React, { useContext, useRef } from "react";
import "./ResumePage.css";
import { FormContext } from "../context/FormContext";
import { Box, Button, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import dayjs from "dayjs";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';




const documentStyle = {
  mainColor: "#2A5978",
  secondaryColor: "#DFE6EB",
  border: {
    borderBottom: "0.5mm solid #2A5978",
    padding: "10px 0",
    marginTop: 2,
  },
  mainTitles: {
    textTransform: "upperCase",
    fontWeight: "bold",
    color: "#2A5978",
  },
  blueArea: {
    marginLeft: "10px",
    height: "auto",
    flexGrow: "1",
    backgroundColor: "#DFE6EB",
  },
};

const ResumePage = () => {
  const { FormValues } = useContext(FormContext);
  const pdfExportComponent = useRef(null)
  const contentrAea = useRef(null)
  const handleExport = (event)=>{
    pdfExportComponent.current.save()
  }

  const saveArea = (event) => {
    savePDF(contentrAea.current,{paperSize : "a4"})
  }

  return (<>
    <Box marginY={10}>
    <PDFExport ref={pdfExportComponent} paperSize={"a4"}>
    <Box ref={contentrAea} className="resume-container" sx={{position:"relative"}}>
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
              textTransform={"capitalize"}
              fontWeight={"bold"}
              color={documentStyle.mainColor}
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
                <Typography variant="caption">
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
        <Grid container spacing={5} size={12}>
          {/* work history */}
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
                    >
                      {work.title}
                      <span style={{ fontWeight: "normal", marginLeft: "5px" }}>
                        {`${dayjs(work.startDate).format("MMM/YYYY")} to ${
                          work.currently
                            ? "I currently work here"
                            : dayjs(FormValues.endDate).format("MMM/YYYY")
                        }`}
                      </span>
                    </Typography>
                    <Typography
                      lineHeight={1.5}
                      variant="body2"
                      fontWeight={"bold"}
                    >
                      {work.company}
                    </Typography>
                    <Box paddingTop={0.5}>
                      <Typography variant="caption">{work.work}</Typography>
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
                  <ul style={{ paddingLeft: 15 }}>
                    {FormValues.skills.map((skill, index) => {
                      return (
                        <li key={index}>
                          <Typography
                            lineHeight={1.7}
                            variant="body2"
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
                            {" "}
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
      <Button variant="contained" endIcon={<PictureAsPdfOutlinedIcon />} color="inherit" sx={{position:"absolute",bottom:0 , left:0,translate:"0 120%"}} onClick={handleExport}>Dwonload</Button>
      {/* <Button sx={{position:"absolute",bottom:0 , left:100,translate:"0 120%"}} onClick={saveArea}>Dwonload 2</Button> */}
      </Box>
    </PDFExport>
  </Box>
  </>
  );
};

export default ResumePage;
