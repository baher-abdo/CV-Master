import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Field, FieldArray } from "formik";
import Grid from "@mui/material/Grid2";
import { currentYear, FormikTextField } from "../FormDetails";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export default function StepThree() {
  return (
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
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
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
                                        form.values.experience[index].currently
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
  );
}
