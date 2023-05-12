import axios from "axios";
import React, { createContext } from "react";
export const collectionContext = createContext();

const CollectionContextProvider = ({ children }) => {
  async function getCards() {
    let { data } = await axios("  http://localhost:8000/1");
    console.log(data);
  }

  const values = { getCards };
  return (
    <collectionContext.Provider value={values}>
      {children}
    </collectionContext.Provider>
  );
};

export default CollectionContextProvider;
