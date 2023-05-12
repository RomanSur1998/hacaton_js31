import axios from "axios";
import React, { createContext, useState } from "react";
import { JSON_API_CLOTHES, JSON_API_OBJECT } from "../helpers/consts";
import { useNavigate } from "react-router-dom";
export const collectionContext = createContext();

const CollectionContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [collection, setCollection] = useState([]);
  const [oneCard, setOneCard] = useState({});
  const [searchResults, setSearchResults] = useState([]);

  async function getCards() {
    let { data } = await axios(JSON_API_CLOTHES);

    setCollection(data);
  }

  async function searchCards(event) {
    let { data } = await axios(JSON_API_CLOTHES);
    const filteredResults = data.filter((item) =>
      item.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchResults(filteredResults);
  }

  const addCard = async (newCard) => {
    await axios.post(JSON_API_CLOTHES, newCard);
    navigate("/");
  };

  const deleteCard = async (id) => {
    await axios.delete(`${JSON_API_CLOTHES}/${id}`);
    getCards();
  };

  const editCard = async (newCard) => {
    await axios.patch(`${JSON_API_CLOTHES}/${newCard.id}`, newCard);
    getCards();
    navigate("/");
  };
  const getCardtDetails = async (id) => {
    const { data } = await axios(`${JSON_API_CLOTHES}/${id}`);
    setOneCard(data);
  };


    
  const values = {
    getCards,
    collection,
    addCard,
    deleteCard,
    editCard,
    oneCard,
    getCardtDetails,
    searchCards,
    searchResults
  };
  return (
    <collectionContext.Provider value={values}>
      {children}
    </collectionContext.Provider>
  );
};

export default CollectionContextProvider;
