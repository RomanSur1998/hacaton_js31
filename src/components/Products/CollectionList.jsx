import React, { useContext, useEffect, useState } from "react";
import { collectionContext } from "../../context/CollectionContextProvider";
import CollectionCard from "./CollectionCard";

const CollectionList = () => {
  const { getCards, collection, searchResults } = useContext(collectionContext);

  useEffect(() => {
    getCards();
  }, []);
  // ! а вот та часть которой не хватало
  const cards = searchResults.length ? searchResults : collection;

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {cards.map((item) => (
          <CollectionCard item={item} />
        ))}
      </div>
    </>
  );
};

export default CollectionList;
