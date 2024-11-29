import React from "react";
import { Box, Button, ButtonGroup } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { FormikTextField } from "../FormDetails";
import { Field, FieldArray } from "formik";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

export default function StepTwo() {
  return (
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
                      <Grid size={{ xs: 12, lg: 2 }} textAlign={"start"} mt={1}>
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
  );
}
