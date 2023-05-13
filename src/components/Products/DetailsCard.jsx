import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collectionContext } from "../../context/CollectionContextProvider";
import "../Products/styles/DetailsCard.css";
import { cartContext } from "../../context/CartContextProvider";
const DetailsCard = () => {
  const { id } = useParams();
  const { oneCard, getCardtDetails } = useContext(collectionContext);
  const { addProductToCart } = useContext(cartContext);
  const [card, setCard] = useState(oneCard);

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
      <p>{card.decr}</p>

      <button
        onClick={() => {
          addProductToCart(card);
        }}
      >
        Add to Cart
      </button>
      <button>Buy Now </button>
    </div>
  );
};

export default DetailsCard;
