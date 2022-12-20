import Footer from "./components/footer";
import Header from "./components/header";
import Shop from "./components/shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ShoppingCart from "./components/shopping-cart";
import { useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const [cartItem, setCartItem] = useState([]);
  const [cartCountArray, setCartCountArray] = useState([]);

  const [nonEmptyCartItem, setNonEmptyCartItem] = useState([]);
  const [nonEmptyCartCount, setNonEmptyCartCount] = useState([]);

  const [cardCountArray, setCardCountArray] = useState([]);

  const [newPrice, setNewPrice] = useState([]);
  const [nonEmptyPrice, setNonEmptyPrice] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleAddToCart = (img, name, price, id, count) => {
    setCartCount(cartCount + 1);

    let temp_cartItem = [...cartItem];
    temp_cartItem[id] = [img, name, price, id];

    setCartItem(temp_cartItem);

    let temp_cartCountArray = [...cartCountArray];
    temp_cartCountArray[id] = count;

    setCartCountArray(temp_cartCountArray);

    handleEmptyCartItem(temp_cartItem, temp_cartCountArray, id);

    handlePriceIncrease(id, temp_cartItem, temp_cartCountArray);
  };

  const handleEmptyCartItem = (array1, array2, id) => {
    const nonEmptyArray = array1.filter((item) => item !== undefined);
    const nonEmptyCountArray = array2.filter((item) => item !== undefined);

    setNonEmptyCartItem(nonEmptyArray);
    setNonEmptyCartCount(nonEmptyCountArray);
  };

  const handleEmptyPrice = (array) => {
    const nonEmptyArray = array.filter((item) => item !== undefined);

    setNonEmptyPrice(nonEmptyArray);
  };

  const handlePriceIncrease = (index, arrayItem, arrayCount) => {
    //array filtered with undefined items
    let tempCount = [...arrayCount];
    let tempArray = [...arrayItem];
    let tempPrice = [...newPrice];

    //convert string into number
    let price = parseFloat(tempArray[index][2]);

    price *= tempCount[index];

    tempPrice[index] = price.toString() + ".00";

    setNewPrice(tempPrice);

    handleTotalPrice(tempPrice);

    handleEmptyPrice(tempPrice);
  };

  const handleTotalPrice = (tempArray) => {
    let total = 0;
    for (let i = 0; i < tempArray.length; i++) {
      if (tempArray[i] !== undefined) {
        let number = parseFloat(tempArray[i]);
        total += number;
      }
    }
    setTotalPrice(total);
  };

  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header handleCartClick={handleCartClick} cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={
              <Shop
                handleAddToCart={handleAddToCart}
                cardCountArray={cardCountArray}
                setCardCountArray={setCardCountArray}
              />
            }
          />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
        <Footer />
        <ShoppingCart
          showCart={showCart}
          setShowCart={setShowCart}
          cartCount={cartCount}
          setCartCount={setCartCount}
          cartItem={cartItem}
          setCartItem={setCartItem}
          cartCountArray={cartCountArray}
          setCartCountArray={setCartCountArray}
          nonEmptyCartCount={nonEmptyCartCount}
          setNonEmptyCartCount={setNonEmptyCartCount}
          nonEmptyCartItem={nonEmptyCartItem}
          setNonEmptyCartItem={setNonEmptyCartItem}
          cardCountArray={cardCountArray}
          setCardCountArray={setCardCountArray}
          totalPrice={totalPrice}
          handleTotalPrice={handleTotalPrice}
          newPrice={newPrice}
          setNewPrice={setNewPrice}
          nonEmptyPrice={nonEmptyPrice}
          setNonEmptyPrice={setNonEmptyPrice}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
