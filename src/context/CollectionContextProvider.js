import axios from "axios";
import React, { createContext, useState } from "react";
export const collectionContext = createContext();

const CollectionContextProvider = ({ children }) => {
  const [state, setState] = useState([])
  async function getCards() {
    let { data } = await axios('http://localhost:8000/clothes');
    setState(state)
    console.log(data);
  }
  getCards()
  
  const values = { getCards };
  return (
    <collectionContext.Provider value={values}>
      {children}
    </collectionContext.Provider>
  );
};

export default CollectionContextProvider;
