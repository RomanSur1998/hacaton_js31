import React from "react";
import "./navbar.css";
import basket from "../Images/basket.svg";
// import search from "../Images/search.svg";
import user from "../Images/User.svg";
import clothing from "../Images/clothing.png";
import { Link, useNavigate } from "react-router-dom";
import { collectionContext } from "../../context/CollectionContextProvider";
import { useContext } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { searchCards, searchTerm } = useContext(collectionContext);
  return (
    <div>
      <div className="header">
        <nav>
          <Link to="/">
            <h1>UGMONK</h1>
          </Link>
          <a href="">Clothing +</a>
          <a href="">Objects +</a>
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
              src={basket}
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
