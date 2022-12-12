import Footer from "./components/footer";
import Header from "./components/header";
import Shop from "./components/shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ShoppingCart from "./components/shopping-cart";
import { useEffect, useState } from "react";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const [cartItem, setCartItem] = useState([]);
  const [cartCountArray, setCartCountArray] = useState([]);

  const [nonEmptyCartItem, setNonEmptyCartItem] = useState([]);
  const [nonEmptyCartCount, setNonEmptyCartCount] = useState([]);

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleAddToCart = (img, name, price, id, count) => {
    setCartCount(cartCount + 1);

    let temp_cartItem = [...cartItem];
    temp_cartItem[id] = [img, name, price];

    setCartItem(temp_cartItem);

    let temp_cartCountArray = [...cartCountArray];
    temp_cartCountArray[id] = [count];

    setCartCountArray(temp_cartCountArray);
  };

  const handleEmptyCartItem = () => {
    let temp_cartItem = [...cartItem];
    let temp_cartCount = [...cartCountArray];

    const nonEmptyArray = temp_cartItem.filter((item) => item !== undefined);
    const nonEmptyCountArray = temp_cartCount.filter(
      (item) => item !== undefined
    );

    setNonEmptyCartItem(nonEmptyArray);
    setNonEmptyCartCount(nonEmptyCountArray);
  };

  useEffect(() => {
    handleEmptyCartItem();
  }, [cartCount]);

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
          cartItem={cartItem}
          nonEmptyCartCount={nonEmptyCartCount}
          nonEmptyCartItem={nonEmptyCartItem}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
