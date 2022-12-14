import { useState } from "react";

const Card = (props) => {
  const { handleAddToCart, itemImage, itemName, itemPrice, id} = props;

  const [cardCount, setCardCount] = useState(0);

  const handleCardCount = () => {
    let temp_cardCount = cardCount;

    temp_cardCount++;

    setCardCount(temp_cardCount);

    return temp_cardCount;
  };

  return (
    <div className="kard">
      <img src={itemImage} alt="click160" />
      <div>{itemName}</div>
      <p>SRP: {itemPrice}</p>
      {cardCount}
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