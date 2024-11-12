import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  ButtonGroup,
  Container,
  CardContent,
  Card,
  Box,
  Grid,
  Typography,
} from "@mui/material";
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

const currentYear = dayjs();
export default function FormDetails() {
  useEffect(() => {
    window.scrollTo(0, 0);
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
    <Container sx={{ marginY: 10 }}>
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
            <Box padding={{ xs: 0, md: 5 }} paddingBottom={{ xs: 5 }}>
              <Box>
                <Typography variant="h6">
                  Your Presonal Data And Personal Summary
                </Typography>
              </Box>
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
            <Box padding={{ xs: 0, md: 5 }} paddingBottom={{ xs: 5 }}>
              <Box>
                <Typography variant="h6">Your Skills</Typography>
              </Box>
              <FieldArray name="skills">
                {(FieldArrayProps) => {
                  const { form, push, remove } = FieldArrayProps;
                  const { values } = form;
                  const { skills } = values;
                  return (
                    <>
                      {skills.map((skill, index) => {
                        return (
                          <Box key={index} marginY={1}>
                            <Grid
                              container
                              justifyContent={"space-between"}
                              flexWrap={"wrap-reverse"}
                            >
                              <Grid
                                flexWrap={"nowrap"}
                                item
                                xs={12}
                                md={2}
                                alignSelf={"end"}
                                textAlign={"start"}
                                marginTop={1}
                              >
                                <ButtonGroup>
                                  {skills.length < 2 ? (
                                    <Button
                                      type="button"
                                      size="small"
                                      variant="outlined"
                                      startIcon={<DeleteIcon />}
                                      disabled
                                      color="error"
                                    >
                                      Delete
                                    </Button>
                                  ) : (
                                    <Button
                                      type="button"
                                      size="small"
                                      onClick={() => remove(index)}
                                      variant="outlined"
                                      startIcon={<DeleteIcon />}
                                    >
                                      Delete
                                    </Button>
                                  )}
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
                              <Grid item xs={12} md={9} marginTop={1}>
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
            <Box padding={{ xs: 0, md: 5 }} paddingBottom={{ xs: 5 }}>
              <Box>
                <Typography variant="h6">Your Experience</Typography>
              </Box>
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
                            marginY={3}
                            boxShadow={1}
                            padding={1}
                          >
                            <Grid
                              container
                              justifyContent={"space-between"}
                              flexWrap={"wrap-reverse"}
                            >
                              <Grid
                                item
                                container
                                alignItems={"end"}
                                gap={2}
                                xs={12}
                              >
                                <Field
                                  sx={{ minWidth: 250 }}
                                  variant="standard"
                                  name={`experience[${index}].company`}
                                  component={FormikTextField}
                                  label={`Company`}
                                  size="small"
                                />
                                <Field
                                  sx={{ minWidth: 250 }}
                                  variant="standard"
                                  name={`experience[${index}].title`}
                                  component={FormikTextField}
                                  label={`Title`}
                                  size="small"
                                />
                                <Box textAlign={"start"}>
                                  <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                  >
                                    <Grid container gap={2}>
                                      <Grid item>
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
                                      <Grid item>
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
                                      <Grid item>
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
                              sx={{ marginY: 1 }}
                            />
                            <ButtonGroup sx={{ width: "100%", marginTop: 2 }}>
                              {experience.length < 2 ? (
                                <Button
                                  type="button"
                                  size="small"
                                  variant="outlined"
                                  startIcon={<DeleteIcon />}
                                  disabled
                                  color="error"
                                >
                                  Delete
                                </Button>
                              ) : (
                                <Button
                                  type="button"
                                  size="small"
                                  onClick={() => remove(index)}
                                  variant="outlined"
                                  startIcon={<DeleteIcon />}
                                >
                                  Delete
                                </Button>
                              )}
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
            <Box padding={{ xs: 0, md: 5 }} paddingBottom={{ xs: 5 }}>
              <Box>
                <Typography variant="h6">Education</Typography>
              </Box>
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
                            marginY={3}
                            boxShadow={1}
                            padding={1}
                          >
                            <Grid
                              container
                              justifyContent={"space-between"}
                              flexWrap={"wrap-reverse"}
                            >
                              <Grid
                                item
                                container
                                alignItems={"end"}
                                gap={2}
                                xs={12}
                              >
                                <Field
                                  sx={{ minWidth: 250 }}
                                  variant="standard"
                                  name={`education[${index}].university`}
                                  component={FormikTextField}
                                  label={`University`}
                                  size="small"
                                />
                                <Field
                                  sx={{ minWidth: 250 }}
                                  variant="standard"
                                  name={`education[${index}].major`}
                                  component={FormikTextField}
                                  label={`Major`}
                                  size="small"
                                />
                                <Box textAlign={"start"}>
                                  <LocalizationProvider
                                    dateAdapter={AdapterDayjs}
                                  >
                                    <Grid container gap={2}>
                                      <Grid item>
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
                                </Box>
                              </Grid>
                            </Grid>
                            <ButtonGroup sx={{ width: "100%", marginTop: 2 }}>
                              {education.length < 2 ? (
                                <Button
                                  type="button"
                                  size="small"
                                  variant="outlined"
                                  startIcon={<DeleteIcon />}
                                  disabled
                                  color="error"
                                >
                                  Delete
                                </Button>
                              ) : (
                                <Button
                                  type="button"
                                  size="small"
                                  onClick={() => remove(index)}
                                  variant="outlined"
                                  startIcon={<DeleteIcon />}
                                >
                                  Delete
                                </Button>
                              )}
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
  const childrenArry = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArry[step];
  const { FormValues, setFormValues } = useContext(FormContext);
  const navigate = useNavigate();

  return (
    <Formik
      {...props}
      onSubmit={(values) => {
        if (step === childrenArry.length - 1) {
          setFormValues(values);
          navigate("/resume-page");
          console.log(values);
        } else {
          setStep((s) => s + 1);
        }
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
              disabled={step === 0}
              onClick={() => setStep((s) => s - 1)}
              startIcon={<ArrowBackIosNewIcon />}
            >
              Prev
            </Button>
            <Button
              type="submit"
              color={step === childrenArry.length - 1 ? "success" : "primary"}
              endIcon={
                step === childrenArry.length - 1 ? "" : <ArrowForwardIosIcon />
              }
            >
              {step === childrenArry.length - 1 ? "Finish" : "Next"}
            </Button>
          </ButtonGroup>
        </form>
      )}
    </Formik>
  );
}
