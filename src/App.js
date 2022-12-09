import Footer from "./components/footer";
import Header from "./components/header";
import Shop from "./components/shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import ShoppingCart from "./components/shopping-cart";
import { useState } from "react";

function App() {

  const [showCart, setShowCart] = useState(false);

  const handleCartClick = () => {
      setShowCart(true);
  }

  return (
    <>
      <BrowserRouter>
        <Header handleCartClick={handleCartClick}/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shop" element={<Shop />} />
          <Route path="/shopping-cart" element={<ShoppingCart />} />
        </Routes>
      <Footer />
      <ShoppingCart showCart={showCart} setShowCart={setShowCart}/>
      </BrowserRouter>
    </>
  );
}

export default App;
