import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { collectionContext } from "../../context/CollectionContextProvider";
import "../Products/styles/DetailsCard.css";
import { cartContext } from "../../context/CartContextProvider";
import favor from "../Images/icons8-favorites-128.png";
import { favorContext } from "../../context/FavorContextProvider";
import axios from "axios";
import { JSON_API_CLOTHES } from "../../helpers/consts";
const DetailsCard = () => {
  const { id } = useParams();
  const { oneCard, getCardtDetails, getCards } = useContext(collectionContext);
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
  // const [like, setLike] = useState(card.like ? card.like : 1);

  // const getLike = async (id) => {
  //   const { data } = await axios(`${JSON_API_CLOTHES}/${id}`);
  //   console.log(data);
  // };
  // useEffect(() => {
  //   const newObj = { ...card, like: like };
  //   editCard(newObj);
  // }, [like]);

  // const editCard = async (newObj) => {
  //   await axios.patch(`${JSON_API_CLOTHES}/${newObj.id}`, newObj);
  //   getLike(card.id);
  // };

  return (
    <div className="containerDetails">
      <h2>Details</h2>
      <div>
        <img src={card.image_1} alt="" />
      </div>
      <div className="Like" style={{ display: "flex", alignItems: "center" }}>
        <button
          style={{ width: "50px" }}
          onClick={() => {
            // setLike(like + 1);
          }}
        >
          Like
        </button>
        <p>{card.like}</p>
        <button style={{ width: "50px" }}>DisLike</button>
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
