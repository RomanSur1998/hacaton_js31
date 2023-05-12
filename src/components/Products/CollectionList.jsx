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
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {collection.map((item) => (
          <CollectionCard item={item} />
        ))}
      </div>
    </>
  );
};

export default CollectionList;
