import React, { useContext, useEffect } from "react";
import { collectionContext } from "../../context/CollectionContextProvider";

const CollectionList = () => {
  const { getCards } = useContext(collectionContext);
  console.log(getCards);
  useEffect(() => {
    getCards();
  }, []);
  return <div>CollectionList</div>;
};

export default CollectionList;
