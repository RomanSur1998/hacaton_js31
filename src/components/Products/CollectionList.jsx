import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Pagination } from "@mui/material";
import { collectionContext } from "../../context/CollectionContextProvider";
import CollectionCard from "./CollectionCard";
import Stack from "@mui/material/Stack";

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
  console.log(cards);

  const [page, setPage] = useState(1);
  const itemPerPage = 6;
  const count = Math.ceil(cards.length / itemPerPage);

  const handleChange = (e, p) => {
    setPage(p);
  };

  function currentData() {
    const begin = (page - 1) * itemPerPage;

    const end = begin + itemPerPage;

    return cards.slice(begin, end);
  }
  console.log(currentData());

  return (
    <div>
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

      <Stack spacing={2} style={{ margin: "40px" }}>
        <Pagination
          count={count}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default CollectionList;
