import { Box, TextField } from '@mui/material'
import { Field } from 'formik'
import React from 'react'
import { FormikTextField } from '../FormDetails'

export default function StepOne() {
  return (
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
      type="tel"
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
  )
}