import React, { useContext, useEffect } from "react";
import { collectionContext } from "../../context/CollectionContextProvider";
import CollectionCard from "./CollectionCard";

const CollectionList = () => {
  const { getCards, collection } = useContext(collectionContext);
  console.log(collection);

  useEffect(() => {
    getCards();
  }, []);
  return (
    <>
      <div>
        {collection.map((item) => (
          <h2>
            <CollectionCard item={item} />
          </h2>
        ))}
      </div>
    </>
  );
};

export default CollectionList;
