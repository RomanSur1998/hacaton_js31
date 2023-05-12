import React, { useContext, useEffect, useState } from "react";
const DetailsCard = () => {
  const { id } = useParams();
  const { oneCard, getCardtDetails } = useContext(collectionContext);
  const [card, setCard] = useState(oneCard);

  useEffect(() => {
    getCardtDetails(id);
  }, []);

  useEffect(() => {
    setCard(oneCard);
  }, [oneCard]);
  console.log(card);

  console.log(card.image_1);
  return (
    <div>
      <p>{card.decr}</p>
    </div>
  );
};

export default DetailsCard;
