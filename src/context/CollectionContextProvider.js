import axios from "axios";
import React, { createContext, useState } from "react";
import { JSON_API_CLOTHES, JSON_API_OBJECT } from "../helpers/consts";
import { useNavigate } from "react-router-dom";
export const collectionContext = createContext();

const CollectionContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [collection, setCollection] = useState([]);

  async function getCards() {
    let { data } = await axios(JSON_API_CLOTHES);

    setCollection(data);
  }

  const addCard = async (newProduct) => {
    await axios.post(JSON_API_CLOTHES, newProduct);
    navigate("/");
  };

  const deleteProduct = async (id) => {
    await axios.delete(`${JSON_API_CLOTHESs}/${id}`);
    getCards();
  };
  const values = { getCards, collection, addCard };
  return (
    <collectionContext.Provider value={values}>
      {children}
    </collectionContext.Provider>
  );
};

export default CollectionContextProvider;
