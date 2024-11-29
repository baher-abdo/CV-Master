import React, { useContext, useEffect, useRef } from "react";
import "./ResumePage.css";
import { Box, Button } from "@mui/material";
import { PDFExport } from "@progress/kendo-react-pdf";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import { Outlet, useNavigate } from "react-router-dom";
import { FormContext } from "../context/FormContext";

const ResumePage = () => {
  const { selectedTemplate } = useContext(FormContext);
  const pdfExportComponent = useRef(null);
  const handleExport = (event) => {
    pdfExportComponent.current.save();
  };

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (selectedTemplate === null) {
      navigate("/form");
    } else {
      navigate(selectedTemplate);
    }
    window.addEventListener("popstate", () => {
      navigate("/form");
    })
  }, []);

  return (
    <>
      <Box
        marginY={10}
        className="resume-container"
        sx={{ position: "relative" }}
      >
        <PDFExport ref={pdfExportComponent} paperSize={"a4"}>
          <Box>
            <Box p={5} pt={0}>
              <Outlet />
            </Box>
          </Box>
          <Button
            variant="contained"
            endIcon={<SaveAltIcon />}
            color="success"
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              translate: "0 120%",
            }}
            onClick={handleExport}
          >
            Dwonload
          </Button>
        </PDFExport>
      </Box>
    </>
  );
};

export default ResumePage;
