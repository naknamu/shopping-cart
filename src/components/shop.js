import { useEffect, useState } from "react";
import Card from "./card";
import dio from "../images/dio.png";
import beat_street from "../images/beat-street.png";
import beat_fashionSport from "../images/beat-fashion-sport.png";
import beat_premium from "../images/beat-premium.png";
import genio from "../images/genio.png";
import click125 from "../images/click125.png";
import click160 from "../images/all-new-click160.png";
import airblade160 from "../images/airblade160.png";
import pcx160_cbs from "../images/pcx160-cbs.png";
import pcx160_abs from "../images/pcx160-abs.png";
import adv160 from "../images/adv160.png";

const Shop = (props) => {
  const { handleAddToCart, cardCountArray, setCardCountArray } = props;

  const motor = [
    [dio, "DIO", "59900.00"],
    [beat_street, "BeAT Street (STD)", "70900.00"],
    [beat_fashionSport, "BeAT Fashion Sport (STD)", "70900.00"],
    [genio, "Genio", "72900.00"],
    [beat_premium, "BeAT Premium (ISS/CBS)", "73900.00"],
    [click125, "The All-NEW CLICK125", "80900.00"],
    [click160, "The All-New CLICK160", "122900.00"],
    [airblade160, "The All-New AirBlade160", "125900.00"],
    [pcx160_cbs, "PCX160-CBS", "133900.00"],
    [pcx160_abs, "PCX160-ABS", "151900.00"],
    [adv160, "The All-New ADV160", "164900.00"]
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

    //initializes count for each card item
    let tempCardCount = [...cardCountArray];
    for (let i = 0; i < motor.length; i++) {
      tempCardCount.push(0);
    }

    setCardCountArray(tempCardCount);
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
            cardCountArray={cardCountArray}
            setCardCountArray={setCardCountArray}
          />
        ))}
      </div>
    </main>
  );
};

export default Shop;
