import Card from "./card";
import click160 from "../images/all-new-click160.png";
import airblade160 from "../images/airblade160.png";
import pcx160_cbs from "../images/pcx160-cbs.png";
import { useEffect, useState } from "react";

const Shop = (props) => {
  const { handleAddToCart} = props;

  const motor = [
    [click160, "The All-New CLICK160", "₱ 122,900.00"],
    [airblade160, "The All-New AirBlade160", "₱ 125,900.00"],
    [pcx160_cbs, "PCX160-CBS", "₱ 133,900.00"],
  ];

  const [itemImage, setItemImage] = useState([]);
  const [itemName, setItemName] = useState([]);
  const [itemPrice, setItemPrice] = useState([]);

  useEffect(() => {
    let imageArray = [];
    let nameArray = [];
    let priceArray = [];

    for (let i = 0; i < motor.length; i++) {
      imageArray.push(motor[i][0]);
      nameArray.push(motor[i][1]);
      priceArray.push(motor[i][2]);
    }

    setItemImage(imageArray);
    setItemName(nameArray);
    setItemPrice(priceArray);
  }, []);

  return (
    <main>
      <div className="lagayan-ng-kard">
        {motor.map((item, index) => (
          <Card
            key={index}
            handleAddToCart={handleAddToCart}
            itemImage={itemImage[index]}
            itemName={itemName[index]}
            itemPrice={itemPrice[index]}
            id={index}
          />
        ))}
      </div>
    </main>
  );
};

export default Shop;