import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { cartContext } from "../../context/CartContextProvider";
import { Button } from "@mui/material";
import "../Cart/Cart.css";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

export default function Cart() {
  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };
  const { getCart, cart, changeProductCount, deleteCartProduct } =
    React.useContext(cartContext);
  console.log(cart.products);
  React.useEffect(() => {
    getCart();
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.products.map((row) => (
            <TableRow
              key={row.item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <img src={row.item.image_1} alt="" width={100} />
              </TableCell>
              <TableCell align="right">{row.item.title}</TableCell>
              <TableCell align="right">
                <button
                  onClick={() => {
                    const newCount = row.count + 1;

                    changeProductCount(newCount, row.item.id);
                  }}
                >
                  +
                </button>
                <span>{row.count}</span>
                <button
                  onClick={() => {
                    if (row.count > 1) {
                      const newCount = row.count - 1;

                      changeProductCount(newCount, row.item.id);
                    }
                  }}
                >
                  -
                </button>
              </TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">
                <button
                  onClick={() => {
                    deleteCartProduct(row.item.id);
                  }}
                >
                  DELETE
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button> BUY NOW FOR {cart?.totalPrice} $</Button>
      <Button onClick={cartCleaner}> CLEAR CART</Button>
    </TableContainer>
  );
}
