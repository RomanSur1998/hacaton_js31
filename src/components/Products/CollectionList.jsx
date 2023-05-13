import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { collectionContext } from "../../context/CollectionContextProvider";
import CollectionCard from "./CollectionCard";

const CollectionList = () => {
  const { getCards, collection, searchResults } = useContext(collectionContext);
  const [filterValue, setFilterValue] = useState("");

  useEffect(() => {
    getCards();
  }, []);

  // ! а вот та часть которой не хватало
  const cards = searchResults.length ? searchResults : collection;
  function filterCard(cards) {
    if (filterValue) {
      return cards.filter((elem) => {
        if (Array.isArray(elem.color)) {
          return elem.color.includes(filterValue);
        }
        return elem.color === filterValue;
      });
    }
    return cards;
  }

  return (
    <>
      <div>
        <select
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        >
          <option value="">All</option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="gray">Gray</option>
          <option value="blue">Blue</option>
          <option value="olive">Olive</option>
          <option value="yellow">Yellow</option>
          <option value="brown">Brown</option>
          <option value="red">Red</option>
        </select>
        {/* <select>
          <option selected></option>
          <option>Пункт 2</option>
        </select> */}
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {filterValue === ""
          ? cards.map((item) => <CollectionCard item={item} key={item.id} />)
          : filterCard(cards).map((item) => (
              <CollectionCard item={item} key={item.id} />
            ))}
      </div>
    </>
  );
};

export default CollectionList;
