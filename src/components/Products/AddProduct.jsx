import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function AddProduct() {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
      }}
    >
      <TextField fullWidth label="Image" id="fullWidth" />
      <TextField fullWidth label="Description" id="fullWidth" />
      <TextField fullWidth label="Title" id="fullWidth" />
      <TextField fullWidth label="Price" id="fullWidth" />
      <TextField fullWidth label="Color" id="fullWidth" />
      <Button variant="contained" disableElevation>
        Disable elevation
      </Button>
    </Box>
  );
}
