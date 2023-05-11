import React from "react";
import "./navbar.css";
import basket from "../Images/basket.svg";
import search from "../Images/search.svg";
import user from "../Images/User.svg";
import clothing from "../Images/clothing.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="header">
        <nav>
          <Link to="/">
            <h1>UGMONK</h1>
          </Link>
          <a href="">Clothing +</a>
          <a href="">Objects +</a>
          <a href="">Best sellers</a>
        </nav>
        <div className="btns">
          <button>Shop Analog</button>
          <button>
            <img src={search} alt="" />
          </button>
          <button>
            <img src={user} alt="" />
          </button>
          <button>
            <img src={basket} alt="" />
          </button>
        </div>
      </div>
      <img className="clothing" src={clothing} alt="" />
    </div>
  );
};

export default Navbar;
