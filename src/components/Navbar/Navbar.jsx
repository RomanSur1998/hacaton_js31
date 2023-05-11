import React from "react";
import "./navbar.css";
import basket from "../Images/basket.svg";
import search from "../Images/search.svg";
import user from "../Images/User.svg";
import clothing from "../Images/clothing.png";

const Navbar = () => {
  return (
    <div>
      <div className="header">
        <nav>
          <h1>UGMONK</h1>
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
