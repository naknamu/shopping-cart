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

  const handleCartClick = () => {
      setShowCart(true);
  }

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
}

  return (
    <>
      <BrowserRouter>
        <Header handleCartClick={handleCartClick} cartCount={cartCount}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Shop handleAddToCart={handleAddToCart} />} />
          <Route path="/shopping-cart" element={<ShoppingCart cartCount={cartCount}/>} />
        </Routes>
      <Footer />
      <ShoppingCart showCart={showCart} setShowCart={setShowCart}/>
      </BrowserRouter>
    </>
  );
}

export default App;
