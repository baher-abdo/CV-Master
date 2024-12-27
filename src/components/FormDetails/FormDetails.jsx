import React, { useEffect, useMemo, useState } from "react";
import {
  TextField,
  Button,
  ButtonGroup,
  Container,
  CardContent,
  Card,
  Box,
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Formik } from "formik";
import dayjs from "dayjs";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import CircularProgress from "@mui/material/CircularProgress";
import Steps from "./StepsBar";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import StepFour from "./Steps/StepFour";

const MemoizedStepOne = React.memo(StepOne);
const MemoizedStepTwo = React.memo(StepTwo);
const MemoizedStepThree = React.memo(StepThree);
const MemoizedStepFour = React.memo(StepFour);

export default function FormDetails() {
  const navigate = useNavigate();
  const { selectedTemplate } = useContext(FormContext);

  const stepOne = useMemo(() => {
    return <MemoizedStepOne />;
  }, []);
  const stepTwo = useMemo(() => {
    return <MemoizedStepTwo />;
  }, []);
  const stepThree = useMemo(() => {
    return <MemoizedStepThree />;
  }, []);
  const stepFour = useMemo(() => {
    return <MemoizedStepFour />;
  }, []);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    address: Yup.string().required("Address is required"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "invalid Phone")
      .required("phone is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    objective: Yup.string().required("Personal summary is required"),
    // skills: Yup.array().of(Yup.string().required("Skill is required")),
    // experience: Yup.array().of(
    //   Yup.object({
    //     company: Yup.string().required("Company name is required"),
    //     startDate: Yup.date().required("Start date is required"),
    //     title: Yup.string().required("Job title is required"),
    //     work: Yup.string().required("Work description is required"),
    //   })
    // ),
    // education: Yup.array().of(
    //   Yup.object({
    //     university: Yup.string().required("University name is required"),
    //     major: Yup.string().required("Major is required"),
    //     graduationYear: Yup.date().required("Graduation year is required"),
    //   })
    // ),
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    if (selectedTemplate === null) {
      navigate("/");
    }
  }, [selectedTemplate, navigate]);

  return (
    <Container sx={{ marginY: 8 }}>
      <Card>
        <CardContent>
          <FormikStepper
            initialValues={{
              firstName: "",
              lastName: "",
              address: "",
              phone: "",
              email: "",
              objective: "",
              skills: [""],
              experience: [
                {
                  company: "",
                  startDate: "",
                  endDate: "",
                  currently: false,
                  title: "",
                  work: "",
                },
              ],
              education: [{ university: "", major: "", graduationYear: "" }],
            }}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
          >
            {stepOne}
            {stepTwo}
            {stepThree}
            {stepFour}
          </FormikStepper>
        </CardContent>
      </Card>
    </Container>
  );
}

export const currentYear = dayjs();

export function FormikTextField({ field, form, ...props }) {
  return (
    <TextField
      {...field}
      {...props}
      onChange={(e) => form.setFieldValue(field.name, e.target.value)}
      onBlur={() => form.setFieldTouched(field.name, true)}
      error={Boolean(form.errors[field.name] && form.touched[field.name])}
      helperText={
        form.errors[field.name] && form.touched[field.name]
          ? form.errors[field.name]
          : ""
      }
    />
  );
}

export function FormikStepper({ children, ...props }) {
  const [activeStep, setActiveStep] = React.useState(0);

  const childrenArry = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArry[step];
  const { FormValues, setFormValues } = useContext(FormContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  function handleBack() {
    setStep((s) => s - 1);
    setActiveStep(step - 1);
  }

  function handleNext(values) {
    if (step === childrenArry.length - 1) {
      setFormValues(values);
      setLoading(true);
      setTimeout(() => {
        navigate("/resume-page");
      }, 3000);
      console.log(values);
    } else {
      setStep((s) => s + 1);
      setActiveStep(step + 1);
      window.scrollTo(0, 0);
    }
  }

  return (
    <Formik
      {...props}
      onSubmit={(values) => {
        handleNext(values);
      }}
    >
      {({ handleSubmit }) => (
        <form
          style={{
            minHeight: 550,
            position: "relative",
            textAlign: "center",
          }}
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <Steps value={{ step, activeStep }} />
          {currentChild}
          <ButtonGroup
            disableElevation
            variant="contained"
            aria-label="Disabled button group"
            sx={{
              marginX: { xs: 0, md: 5 },
              gap: 1,
              width: "100%",
              position: "absolute",
              bottom: 0,
              left: 0,
            }}
          >
            <Button
              disabled={step === 0 || loading}
              onClick={() => {
                handleBack();
              }}
              startIcon={<ArrowBackIosNewIcon />}
            >
              Back
            </Button>
            <Button
              disabled={loading}
              type="submit"
              color={step === childrenArry.length - 1 ? "success" : "primary"}
              endIcon={
                step === childrenArry.length - 1 ? null : (
                  <ArrowForwardIosIcon />
                )
              }
            >
              {step === childrenArry.length - 1 ? (
                loading ? (
                  <Box
                    width={45}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CircularProgress color="inherit" size={"1em"} />
                  </Box>
                ) : (
                  "Finish"
                )
              ) : (
                "Next"
              )}
            </Button>
          </ButtonGroup>
        </form>
      )}
    </Formik>
  );
}