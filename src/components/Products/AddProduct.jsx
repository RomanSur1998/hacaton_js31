import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import classes from "../Products/Add.module.css";

export default function AddProduct() {
  return (
    <div className={classes.AddContainer}>
      <h4>ADD PRODUCT</h4>
      <TextField
        className={classes.input}
        fullWidth
        label="Image"
        id="fullWidth"
      />
      <TextField
        className={classes.input}
        fullWidth
        label="Description"
        id="fullWidth"
      />
      <TextField
        className={classes.input}
        fullWidth
        label="Title"
        id="fullWidth"
      />
      <TextField
        className={classes.input}
        fullWidth
        label="Price"
        id="fullWidth"
      />
      <TextField
        className={classes.input}
        fullWidth
        label="Color"
        id="fullWidth"
      />
      <Button className={classes.Btn} variant="contained" disableElevation>
        Add Product
      </Button>
    </div>
  );
}
