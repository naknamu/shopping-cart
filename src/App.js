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

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleAddToCart = (img, name, price, id, count, cardCount) => {
    setCartCount(cartCount + 1);

    let temp_cartItem = [...cartItem];
    temp_cartItem[id] = [img, name, price];

    let temp_cartCountArray = [...cartCountArray];
    temp_cartCountArray[id] = [count];

    console.log(cardCount);
    handleEmptyCartItem(temp_cartItem, temp_cartCountArray);
  };

  const handleEmptyCartItem = (array1, array2) => {

    const nonEmptyArray = array1.filter((item) => item !== undefined);
    const nonEmptyCountArray = array2.filter(
      (item) => item !== undefined
    );

    setCartItem(nonEmptyArray);
    setCartCountArray(nonEmptyCountArray);
  };

  return (
    <>
      <BrowserRouter>
        <Header handleCartClick={handleCartClick} cartCount={cartCount} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/shop"
            element={<Shop handleAddToCart={handleAddToCart} />}
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
        />
      </BrowserRouter>
    </>
  );
}

export default App;
