import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import classes from "../Products/styles/Add.module.css";
import { collectionContext } from "../../context/CollectionContextProvider";

export default function AddProduct() {
  const { addCard } = React.useContext(collectionContext);
  const [card, setCard] = React.useState({
    title: "",
    price: "",
    image_1: "",
    image_2: "",
    color: "",
    size: "",
    decr: "",
  });

  const handleInp = (e) => {
    console.log(e);
    if (e.target.name === "price") {
      let obj = {
        ...card,
        [e.target.name]: Number(e.target.value),
      };
      setCard(obj);
    } else {
      let obj = {
        ...card,
        [e.target.name]: e.target.value,
      };
      setCard(obj);
    }
    console.log(card);
  };
  return (
    <div className={classes.AddContainer}>
      <h4>ADD PRODUCT</h4>
      <TextField
        className={classes.input}
        label="Image"
        margin="normal"
        variant="outlined"
        name="image_1"
        onChange={handleInp}
      />
      <TextField
        className={classes.input}
        label="Image"
        margin="normal"
        variant="outlined"
        name="image_2"
        onChange={handleInp}
      />
      <TextField
        className={classes.input}
        label="Title"
        margin="normal"
        onChange={handleInp}
        name="title"
      />
      <TextField
        className={classes.input}
        label="Price"
        margin="normal"
        name="price"
        onChange={handleInp}
      />
      <TextField
        className={classes.input}
        label="Color"
        margin="normal"
        onChange={handleInp}
        name="color"
      />
      <TextField
        className={classes.input}
        label="Size"
        margin="normal"
        name="size"
        onChange={handleInp}
      />
      <TextField
        className={classes.input}
        label="Description"
        margin="normal"
        name="decr"
        onChange={handleInp}
      />
      <Button
        className={classes.Btn}
        variant="contained"
        disableElevation
        style={{ margin: "20px", backgroundColor: "black" }}
        onClick={() => {
          addCard(card);
        }}
      >
        Add Product
      </Button>
    </div>
  );
}
