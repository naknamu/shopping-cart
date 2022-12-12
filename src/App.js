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

  const [clickImage, setClickImage] = useState([]);
  const [clickName, setClickName] = useState([]);
  const [clickPrice, setClickPrice] = useState([]);

  const [cartItem, setCartItem] = useState([]);
  const [cartCountArray, setCartCountArray] = useState([]);

  const handleCartClick = () => {
    setShowCart(true);
  };

  const handleAddToCart = (img, name, price, id, count) => {
    setCartCount(cartCount + 1);

    let imageArray = [...clickImage];
    let nameArray = [...clickName];
    let priceArray = [...clickPrice];

    imageArray.push(img);
    nameArray.push(name);
    priceArray.push(price);

    setClickImage(imageArray);
    setClickName(nameArray);
    setClickPrice(priceArray);

    let temp_cartItem = [...cartItem];
    temp_cartItem[id] = [img, name, price];
    setCartItem(temp_cartItem);

    let temp_cartCountArray = [...cartCountArray];
    temp_cartCountArray[id] = [count];
    setCartCountArray(temp_cartCountArray);
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
          clickImage={clickImage}
          clickName={clickName}
          clickPrice={clickPrice}
          cartItem={cartItem}
          cartCountArray={cartCountArray}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
