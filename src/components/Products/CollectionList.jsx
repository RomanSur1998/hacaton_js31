import React, { useContext, useEffect } from "react";
import { collectionContext } from "../../context/CollectionContextProvider";

const CollectionList = () => {
  const { getCards, collection } = useContext(collectionContext);
  console.log(collection);

  useEffect(() => {
    getCards();
  }, []);
  return <div>CollectionList</div>;
};

export default CollectionList;
