import React from "react";
import { Box, Button, ButtonGroup } from "@mui/material";
import { Field, FieldArray } from "formik";
import Grid from "@mui/material/Grid2";
import { currentYear, FormikTextField } from "../FormDetails";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export default function StepFour() {
  return (
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
                    <Grid container alignItems={"end"} spacing={1} mb={1}>
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
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
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
  );
}
