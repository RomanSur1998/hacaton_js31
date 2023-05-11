import React, { createContext } from "react";
export const collectionContext = createContext();
const CollectionContextProvider = ({ children }) => {
  return <collectionContext.Provider>{children}</collectionContext.Provider>;
};

export default CollectionContextProvider;
