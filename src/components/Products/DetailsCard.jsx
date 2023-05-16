import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collectionContext } from "../../context/CollectionContextProvider";
import "../Products/styles/DetailsCard.css";
import { cartContext } from "../../context/CartContextProvider";
import favor from "../Images/icons8-favorites-128.png";
import { favorContext } from "../../context/FavorContextProvider";
const DetailsCard = () => {
  const { id } = useParams();
  const { oneCard, getCardtDetails } = useContext(collectionContext);
  const { addProductToCart } = useContext(cartContext);
  const { addProductToFavor } = useContext(favorContext);
  const [card, setCard] = useState(oneCard);
  const navigate = useNavigate();

  useEffect(() => {
    getCardtDetails(id);
  }, []);

  useEffect(() => {
    setCard(oneCard);
  }, [oneCard]);

  return (
    <div className="containerDetails">
      <h2>Details</h2>
      <div>
        <img src={card.image_1} alt="" />
      </div>
      <div className="sizePAram"> SIZE:{card.size}</div>
      <p>{card.decr}</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <img
          onClick={() => {
            addProductToFavor(card);
          }}
          src={favor}
          alt=""
          style={{ width: "35px", margin: "0" }}
        />
        <button
          style={{ width: "160px" }}
          onClick={() => {
            addProductToCart(card);
            navigate("/");
          }}
        >
          Add to Cart
        </button>
        <button
          onClick={() => {
            navigate(`/order/${id}`);
          }}
          style={{ width: "160px" }}
        >
          Buy Now{" "}
        </button>
      </div>
    </div>
  );
};

export default DetailsCard;
