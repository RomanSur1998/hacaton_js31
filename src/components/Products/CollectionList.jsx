import React, { useContext, useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { collectionContext } from "../../context/CollectionContextProvider";
import CollectionCard from "./CollectionCard";
import Stack from "@mui/material/Stack";

const CollectionList = () => {
  const { getCards, collection, searchResults } = useContext(collectionContext);

  useEffect(() => {
    getCards();
  }, []);

  // ! а вот та часть которой не хватало
  const cards = searchResults.length ? searchResults : collection;
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {currentData().map((item) => (
          <CollectionCard item={item} />
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
