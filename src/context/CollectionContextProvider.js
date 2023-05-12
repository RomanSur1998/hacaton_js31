import axios from "axios";
import React, { createContext, useState } from "react";
export const collectionContext = createContext();

const CollectionContextProvider = ({ children }) => {
  const [collection, setCollection] = useState("");
  async function getCards() {
    let { data } = await axios("  http://localhost:8000/1");

    setCollection(data);
  }

  const values = { getCards, collection };
  return (
    <collectionContext.Provider value={values}>
      {children}
    </collectionContext.Provider>
  );
};

export default CollectionContextProvider;
