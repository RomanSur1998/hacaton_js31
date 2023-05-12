import * as React from "react";

export default function CollectionCard({ item }) {
  console.log(item);
  return (
    <>
      <div className="cardContanier">
        <img src="" alt="" />
        <div className="cardBottom">
          <h4>title</h4>
          <h5>price</h5>
        </div>
      </div>
    </>
  );
}
