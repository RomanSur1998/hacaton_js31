import React, { createContext, useState } from "react";
import {
  calcSubPrice,
  calcTotalPrice,
  getCountProductsInCart,
} from "../helpers/function";
export const cartContext = createContext();
const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  console.log(cart);
  const getCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      localStorage.setItem(
        "cart",
        JSON.stringify({
          products: [],
          totalPrice: 0,
        })
      );
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    setCart(cart);
  };

  const values = { getCart };
  return <cartContext.Provider value={values}>{children}</cartContext.Provider>;
};

export default CartContextProvider;
