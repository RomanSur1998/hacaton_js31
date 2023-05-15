import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collectionContext } from "../../context/CollectionContextProvider";
import "../Products/styles/DetailsCard.css";
import { cartContext } from "../../context/CartContextProvider";
const DetailsCard = () => {
  const { id } = useParams();
  const { oneCard, getCardtDetails } = useContext(collectionContext);
  const { addProductToCart } = useContext(cartContext);
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
      <div>
        <img src={card.image_1} alt="" />
      </div>
      <div className="sizePAram"> SIZE:{card.size}</div>
      <p>{card.decr}</p>

      <button
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
      >
        Buy Now{" "}
      </button>
    </div>
  );
};

export default DetailsCard;
