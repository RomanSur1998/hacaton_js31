import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Pagination } from "@mui/material";
import { collectionContext } from "../../context/CollectionContextProvider";
import CollectionCard from "./CollectionCard";
import Stack from "@mui/material/Stack";
import { useLocation } from "react-router-dom";

const CollectionList = () => {
  const { getCards, collection, searchResults } = useContext(collectionContext);
  const [filterValue, setFilterValue] = useState("");
  const [filterSize, setFilterSize] = useState("");
  console.log(filterSize);
  useEffect(() => {
    getCards();
  }, []);
  const location = useLocation();
  console.log(location);
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

  function filterCardSize(cards) {
    if (filterSize) {
      return cards.filter((elem) => {
        if (Array.isArray(elem.size)) {
          return elem.size.includes(filterSize);
        }
        return elem.size === filterSize;
      });
    }
    return cards;
  }

  //! filter function
  // function filterAllCards(cards) {
  //   if (filterValue && filterSize) {
  //     return cards.filter((elem) => {
  //       if (Array.isArray(elem.color)) {
  //         return (
  //           elem.color.includes(filterValue) && elem.size.includes(filterSize)
  //         );
  //       }
  //       return elem.color === filterValue && elem.size === filterSize;
  //     });
  //   } else if (filterValue) {
  //     return cards.filter((elem) => {
  //       if (Array.isArray(elem.color)) {
  //         return elem.color.includes(filterValue);
  //       }
  //       return elem.color === filterValue;
  //     });
  //   } else if (filterSize) {
  //     return cards.filter((elem) => {
  //       if (Array.isArray(elem.size)) {
  //         return elem.size.includes(filterSize);
  //       }
  //       return elem.size === filterSize;
  //     });
  //   }
  //   return cards;
  // }

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

  return (
    <div>
      <div style={{ display: "flex", margin: "20px 400px", columnGap: "50px" }}>
        <p>Filter: </p>
        <select
          style={{ border: "none" }}
          value={filterValue}
          onChange={(e) => setFilterValue(e.target.value)}
        >
          <option value="">All Colors</option>
          <option value="white">White</option>
          <option value="black">Black</option>
          <option value="gray">Gray</option>
          <option value="blue">Blue</option>
          <option value="olive">Olive</option>
          <option value="yellow">Yellow</option>
          <option value="brown">Brown</option>
          <option value="red">Red</option>
        </select>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {filterValue === ""
          ? currentData().map((item) => (
              <CollectionCard item={item} key={item.id} />
            ))
          : filterCard(cards).map((item) => (
              <CollectionCard item={item} key={item.id} />
            ))}
      </div>

      <Stack spacing={2} style={{ margin: "40px" }}>
        <Pagination
          style={{ margin: "0 auto" }}
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
