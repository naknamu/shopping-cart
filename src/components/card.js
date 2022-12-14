// import { useState } from "react";

const Card = (props) => {
  const { handleAddToCart, itemImage, itemName, itemPrice, id, cardCountArray, setCardCountArray} = props;

  // const [cardCount, setCardCount] = useState(0);

  // const handleCardCount = () => {
  //   let temp_cardCount = cardCount;

  //   temp_cardCount++;

  //   setCardCount(temp_cardCount);

  //   return temp_cardCount;
  // };

  const handleCardCount = () => {
    let temp_cardCount = [...cardCountArray];

    temp_cardCount[id]++;

    setCardCountArray(temp_cardCount);

    return temp_cardCount[id];
  };

  return (
    <div className="kard">
      <img src={itemImage} alt="click160" />
      <div>{itemName}</div>
      <p>SRP: {itemPrice}</p>
      {cardCountArray[id]}
      <button
        onClick={function () {
          const count = handleCardCount();
          handleAddToCart(itemImage, itemName, itemPrice, id, count);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;