import React, { useEffect } from "react";
import "./navbar.css";
import basket from "../Images/basket.svg";
import backetFull from "../Images/Basket-full.svg";

import user from "../Images/User.svg";
import clothing from "../Images/background.jpg";
import { Link, useNavigate } from "react-router-dom";
import { collectionContext } from "../../context/CollectionContextProvider";
import { useContext } from "react";
import { cartContext } from "../../context/CartContextProvider";

const Navbar = () => {
  const { getCart, cart } = useContext(cartContext);
  console.log(cart);

  useEffect(() => {
    getCart();
  }, []);
  console.log(cart.products.length);

  const navigate = useNavigate();

  const { searchCards } = useContext(collectionContext);

  return (
    <div>
      <div className="header">
        <nav>
          <Link to="/">
            <h1>UGMONK</h1>
          </Link>
          <a href="">Clothing +</a>
          <Link to="/object">
            <a href="">Objects +</a>
          </Link>

          <Link to="/add">
            <p>Add Product</p>
          </Link>
        </nav>
        <div className="btns">
          <input type="text" className="search" onChange={searchCards} />
          <button>
            <img src={user} alt="" />
          </button>
          <button>
            <img
              src={!cart.products.length ? basket : backetFull}
              alt=""
              onClick={() => {
                navigate("/cart");
              }}
            />
          </button>
        </div>
      </div>
      <img className="clothing" src={clothing} alt="" />
    </div>
  );
};

export default Navbar;
