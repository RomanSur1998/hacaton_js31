import axios from "axios";
import React, { createContext } from "react";
export const collectionContext = createContext();
const CollectionContextProvider = ({ children }) => {
  async function getCards() {
    let res = await axios("http://localhost:8000/1");
    console.log(res);
  }
  getCards();
  const values = {}
  return <collectionContext.Provider value={values}>{children}</collectionContext.Provider>;
};

export default CollectionContextProvider;
