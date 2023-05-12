import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import classes from "../Products/Add.module.css";

export default function AddProduct() {
  return (
    <div className={classes.AddContainer}>
      <h4>ADD PRODUCT</h4>
      <TextField className={classes.input} label="Image" margin="normal" />
      <TextField
        className={classes.input}
        label="Description"
        margin="normal"
      />
      <TextField className={classes.input} label="Title" margin="normal" />
      <TextField className={classes.input} label="Price" margin="normal" />
      <TextField className={classes.input} label="Color" margin="normal" />
      <Button
        className={classes.Btn}
        variant="contained"
        disableElevation
        style={{ margin: "20px", backgroundColor: "black" }}
      >
        Add Product
      </Button>
    </div>
  );
}
