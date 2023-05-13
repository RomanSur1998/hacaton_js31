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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Cart() {
  const [count, setCount] = React.useState(1);
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
                {" "}
                <button
                  onClick={() => {
                    setCount(count + 1);
                    changeProductCount(count, row.item.id);
                  }}
                >
                  +
                </button>
                <span>{count}</span>
                <button
                  onClick={() => {
                    setCount(count - 1);
                    changeProductCount(count, row.item.id);
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
      <Button onClick={cartCleaner}> BUY NOW FOR {cart?.totalPrice} $</Button>
    </TableContainer>
  );
}
