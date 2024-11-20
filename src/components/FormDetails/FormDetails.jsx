import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  ButtonGroup,
  Container,
  CardContent,
  Card,
  Box,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Field, Formik, FieldArray } from "formik";
import Checkbox from "@mui/material/Checkbox";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useContext } from "react";
import { FormContext } from "../context/FormContext";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import CircularProgress from "@mui/material/CircularProgress";
import Steps from "./Steps";

const currentYear = dayjs();
export default function FormDetails() {
  const navigate = useNavigate();
  const { selectedTemplate } = useContext(FormContext);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (selectedTemplate === null) {
      navigate("/");
    }
  }, []);

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    address: Yup.string().required("Address is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    objective: Yup.string().required("Personal summary is required"),
    skills: Yup.array().of(Yup.string().required("Skill is required")),
    experience: Yup.array().of(
      Yup.object({
        company: Yup.string().required("Company name is required"),
        startDate: Yup.date().required("Start date is required"),
        title: Yup.string().required("Job title is required"),
        work: Yup.string().required("Work description is required"),
      })
    ),
    education: Yup.array().of(
      Yup.object({
        university: Yup.string().required("University name is required"),
        major: Yup.string().required("Major is required"),
        graduationYear: Yup.date().required("Graduation year is required"),
      })
    ),
  });

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
            // validationSchema={validationSchema}
          >
            {/* step 1 */}
            <Box paddingX={{ xs: 0, md: 5 }} paddingBottom={{ xs: 5 }}>
              <Field
                fullWidth
                variant="standard"
                name="firstName"
                component={FormikTextField}
                label="First Name"
                size="small"
                sx={{ marginY: 1 }}
              />

              <Field
                fullWidth
                variant="standard"
                name="lastName"
                component={FormikTextField}
                label="Last Name"
                size="small"
                sx={{ marginY: 1 }}
              />

              <Field
                fullWidth
                variant="standard"
                name="address"
                component={FormikTextField}
                label="Address"
                size="small"
                sx={{ marginY: 1 }}
              />

              <Field
                fullWidth
                variant="standard"
                name="phone"
                component={FormikTextField}
                label="Phone"
                size="small"
                sx={{ marginY: 1 }}
              />

              <Field
                fullWidth
                variant="standard"
                name="email"
                component={FormikTextField}
                label="Email"
                size="small"
                sx={{ marginY: 1 }}
              />
              <Field
                fullWidth
                variant="standard"
                name="objective"
                component={FormikTextField}
                label="Personal Summary"
                multiline
                rows={4}
                sx={{ marginY: 1 }}
              />
            </Box>

            {/* step 2 */}
            <Box paddingX={{ xs: 0, md: 5 }} paddingBottom={{ xs: 5 }}>
              <FieldArray name="skills">
                {(FieldArrayProps) => {
                  const { form, push, remove } = FieldArrayProps;
                  const { values } = form;
                  const { skills } = values;
                  return (
                    <>
                      {skills.map((skill, index) => {
                        return (
                          <Box key={index} my={1}>
                            <Grid
                              container
                              columnSpacing={2}
                              flexWrap={"wrap-reverse"}
                              alignItems={"end"}
                              padding={1}
                              sx={{
                                border: "1px #777 dashed",
                                borderRadius: 2,
                              }}
                            >
                              <Grid
                                size={{ xs: 12, lg: 2 }}
                                textAlign={"start"}
                                mt={1}
                              >
                                <ButtonGroup>
                                  <Button
                                    disabled={skills.length < 2}
                                    type="button"
                                    size="small"
                                    onClick={() => remove(index)}
                                    variant="outlined"
                                    startIcon={<DeleteIcon />}
                                    color="error"
                                  >
                                    Delete
                                  </Button>
                                  <Button
                                    type="button"
                                    size="small"
                                    onClick={() => {
                                      push("");
                                    }}
                                    variant="contained"
                                    endIcon={<AddIcon />}
                                  >
                                    Add
                                  </Button>
                                </ButtonGroup>
                              </Grid>
                              <Grid size={{ xs: 12, lg: 10 }}>
                                <Field
                                  fullWidth
                                  variant="standard"
                                  name={`skills[${index}]`}
                                  component={FormikTextField}
                                  label={`skill ${index + 1}`}
                                  size="small"
                                />
                              </Grid>
                            </Grid>
                          </Box>
                        );
                      })}
                    </>
                  );
                }}
              </FieldArray>
            </Box>

            {/* step 3 */}
            <Box paddingX={{ xs: 0, md: 5 }} paddingBottom={{ xs: 5 }}>
              <FieldArray name="experience">
                {(FieldArrayProps) => {
                  const { form, push, remove } = FieldArrayProps;
                  const { values } = form;
                  const { experience } = values;
                  return (
                    <>
                      {experience.map((work, index) => {
                        return (
                          <Box
                            key={index}
                            my={1}
                            padding={1}
                            sx={{ border: "1px #777 dashed", borderRadius: 2 }}
                          >
                            <Grid
                              container
                              justifyContent={"space-between"}
                              flexWrap={"wrap-reverse"}
                            >
                              <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 6 }}>
                                  <Field
                                    fullWidth
                                    variant="standard"
                                    name={`experience[${index}].company`}
                                    component={FormikTextField}
                                    label={`Company`}
                                    size="small"
                                  />
                                </Grid>
                                <Grid size={{ xs: 12, md: 6 }}>
                                  <Field
                                    fullWidth
                                    variant="standard"
                                    name={`experience[${index}].title`}
                                    component={FormikTextField}
                                    label={`Title`}
                                    size="small"
                                  />
                                </Grid>
                                <Box textAlign={"start"}>
                                  <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                  >
                                    <Grid container gap={2}>
                                      <Grid>
                                        <DatePicker
                                          onChange={(value) =>
                                            form.setFieldValue(
                                              `experience[${index}].startDate`,
                                              value.$d
                                            )
                                          }
                                          label="Start date"
                                          maxDate={currentYear}
                                          openTo="year"
                                          views={["year", "month"]}
                                          yearsOrder="desc"
                                          sx={{ minWidth: 250 }}
                                        />
                                      </Grid>
                                      <Grid>
                                        <DatePicker
                                          onChange={(value) =>
                                            form.setFieldValue(
                                              `experience[${index}].endDate`,
                                              value.$d
                                            )
                                          }
                                          label="End date"
                                          maxDate={currentYear}
                                          openTo="year"
                                          views={["year", "month"]}
                                          yearsOrder="desc"
                                          sx={{ minWidth: 250 }}
                                          disabled={experience[index].currently}
                                        />
                                      </Grid>
                                      <Grid>
                                        <FormControlLabel
                                          control={
                                            <Checkbox
                                              checked={
                                                form.values.experience[index]
                                                  .currently
                                              }
                                              onChange={(event) =>
                                                form.setFieldValue(
                                                  `experience[${index}].currently`,
                                                  event.target.checked
                                                )
                                              }
                                            />
                                          }
                                          label="I currently work here"
                                          name={`experience[${index}].currently`}
                                        />
                                      </Grid>
                                    </Grid>
                                  </LocalizationProvider>
                                </Box>
                              </Grid>
                            </Grid>
                            <Field
                              fullWidth
                              variant="standard"
                              name={`experience[${index}].work`}
                              component={FormikTextField}
                              label="Work Description"
                              multiline
                              rows={3}
                              sx={{ mt: 1 }}
                            />
                            <ButtonGroup sx={{ width: "100%", mt: 1 }}>
                              <Button
                                disabled={experience.length < 2}
                                type="button"
                                size="small"
                                onClick={() => remove(index)}
                                variant="outlined"
                                color="error"
                                startIcon={<DeleteIcon />}
                              >
                                Delete
                              </Button>
                              <Button
                                type="button"
                                size="small"
                                onClick={() => {
                                  push({
                                    company: "",
                                    startDate: "",
                                    endDate: "",
                                    currently: false,
                                    title: "",
                                    work: [""],
                                  });
                                }}
                                variant="contained"
                                endIcon={<AddIcon />}
                              >
                                Add
                              </Button>
                            </ButtonGroup>
                          </Box>
                        );
                      })}
                    </>
                  );
                }}
              </FieldArray>
            </Box>

            {/* step 4 */}
            <Box paddingX={{ xs: 0, md: 5 }} paddingBottom={{ xs: 5 }}>
              <FieldArray name="education">
                {(FieldArrayProps) => {
                  const { form, push, remove } = FieldArrayProps;
                  const { values } = form;
                  const { education } = values;
                  return (
                    <>
                      {education.map((university, index) => {
                        return (
                          <Box
                            key={index}
                            my={1}
                            padding={1}
                            sx={{ border: "1px #777 dashed", borderRadius: 2 }}
                          >
                            <Grid
                              container
                              alignItems={"end"}
                              spacing={1}
                              mb={1}
                            >
                              <Grid size={{ xs: 12, md: 4 }}>
                                <Field
                                  fullWidth
                                  variant="standard"
                                  name={`education[${index}].university`}
                                  component={FormikTextField}
                                  label={`University`}
                                  size="small"
                                />
                              </Grid>
                              <Grid size={{ xs: 12, md: 4 }}>
                                <Field
                                  fullWidth
                                  variant="standard"
                                  name={`education[${index}].major`}
                                  component={FormikTextField}
                                  label={`Major`}
                                  size="small"
                                />
                              </Grid>
                              <Grid size={{ xs: 12, md: 4 }}>
                                <LocalizationProvider
                                  dateAdapter={AdapterDayjs}
                                >
                                  <Grid container gap={2}>
                                    <Grid>
                                      <DatePicker
                                        onChange={(value) =>
                                          form.setFieldValue(
                                            `education[${index}].graduationYear`,
                                            value.$d
                                          )
                                        }
                                        label="Graduation Year"
                                        maxDate={currentYear}
                                        views={["year"]}
                                        yearsOrder="desc"
                                        sx={{ minWidth: 250 }}
                                      />
                                    </Grid>
                                  </Grid>
                                </LocalizationProvider>
                              </Grid>
                            </Grid>
                            <ButtonGroup sx={{ width: "100%" }}>
                              <Button
                                disabled={education.length < 2}
                                color="error"
                                type="button"
                                size="small"
                                onClick={() => remove(index)}
                                variant="outlined"
                                startIcon={<DeleteIcon />}
                              >
                                Delete
                              </Button>
                              <Button
                                type="button"
                                size="small"
                                onClick={() => {
                                  push({
                                    university: "",
                                    major: "",
                                    graduationYear: "",
                                  });
                                }}
                                variant="contained"
                                endIcon={<AddIcon />}
                              >
                                Add
                              </Button>
                            </ButtonGroup>
                          </Box>
                        );
                      })}
                    </>
                  );
                }}
              </FieldArray>
            </Box>
          </FormikStepper>
        </CardContent>
      </Card>
    </Container>
  );
}

function FormikTextField({ field, form, ...props }) {
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
