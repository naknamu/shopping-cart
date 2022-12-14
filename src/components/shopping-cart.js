import { motion, AnimatePresence } from "framer-motion";
import styles from "../css/Cart.module.css";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "./item";
import TotalPrice from "./totalPrice";

const ShoppingCart = (props) => {
  const {
    showCart,
    setShowCart,
    cartCount,
    setCartCount,
    cartItem,
    setCartItem,
    cartCountArray,
    setCartCountArray,
    nonEmptyCartCount,
    setNonEmptyCartCount,
    nonEmptyCartItem,
    setNonEmptyCartItem,
    cardCountArray,
    setCardCountArray,
    totalPrice,
    handleTotalPrice,
    newPrice,
    setNewPrice,
    nonEmptyPrice,
    setNonEmptyPrice,
  } = props;

  const [isCartEmpty, setIsCartEmpty] = useState(true);

  const bgdrop = {
    hidden: { x: "-100%" },
    visible: { x: "0%" },
  };

  const cart = {
    hidden: { x: "100%" },
    visible: { x: "0" },
  };

  const handleCloseShoppingCart = () => {
    setShowCart(false);
  };

  const handleMinusBtn = (index) => {
    //array with no undefined items
    let tempCount = [...nonEmptyCartCount];
    let tempArray = [...nonEmptyCartItem];

    tempCount[index]--;
    setNonEmptyCartCount(tempCount);

    //price decrease
    // handlePriceChange(index, tempArray ,tempCount);
    handlePriceDecrease(index, tempArray, tempCount);

    //array with undefined items
    let tempNullCountArray = [...cartCountArray];
    let tempNullItemArray = [...cartItem];
    let newIndex = tempArray[index][3];

    tempNullCountArray[newIndex]--;
    setCartCountArray(tempNullCountArray);

    //card counter array
    let tempCardCount = [...cardCountArray];
    tempCardCount[newIndex]--;
    setCardCountArray(tempCardCount);

    if (tempCount[index] === 0) {
      //remove array item
      tempCount.splice(index, 1);
      setNonEmptyCartCount(tempCount);

      tempArray.splice(index, 1);
      setNonEmptyCartItem(tempArray);

      //set to undefined to reflect back original array
      tempNullCountArray[newIndex] = undefined;
      setCartCountArray(tempNullCountArray);

      tempNullItemArray[newIndex] = undefined;
      setCartItem(tempNullItemArray);
    }

    //total cart count
    setCartCount(cartCount - 1);
  };

  const handlePlusBtn = (index) => {
    //array filtered with undefined items
    let tempCount = [...nonEmptyCartCount];
    let tempArray = [...nonEmptyCartItem];

    tempCount[index]++;
    setNonEmptyCartCount(tempCount);

    //price increase
    // handlePriceChange(index, tempArray , tempCount);
    handlePriceIncrease(index, tempArray, tempCount);

    //array with undefined items
    let newIndex = tempArray[index][3];
    let tempNullCountArray = [...cartCountArray];

    tempNullCountArray[newIndex]++;
    setCartCountArray(tempNullCountArray);

    //card counter array
    let tempCardCount = [...cardCountArray];
    tempCardCount[newIndex]++;
    setCardCountArray(tempCardCount);

    //total cart count
    setCartCount(cartCount + 1);
  };

  const handlePriceDecrease = (index, arrayItem, arrayCount) => {
    //array with no undefined items
    let tempCount = [...arrayCount];
    let tempArray = [...arrayItem];
    let tempPrice = [...nonEmptyPrice];
    let tempEmptyPrice = [...newPrice];

    let numPrice = parseFloat(tempArray[index][2]);
    numPrice *= tempCount[index];

    let newIndex = tempArray[index][3];
    tempEmptyPrice[newIndex] = numPrice.toString() + ".00";
    setNewPrice(tempEmptyPrice);

    //if price is zero, delete item
    if (numPrice === 0) {
      tempPrice.splice(index, 1);
      tempEmptyPrice[newIndex] = undefined;
      setNewPrice(tempEmptyPrice);
    } else {
      tempPrice[index] = numPrice.toString() + ".00";
    }

    setNonEmptyPrice(tempPrice);

    //calc total price
    handleTotalPrice(tempPrice);
  };

  const handlePriceIncrease = (index, arrayItem, arrayCount) => {
    //array with no undefined items
    let tempCount = [...arrayCount];
    let tempArray = [...arrayItem];
    let tempPrice = [...nonEmptyPrice];
    let tempEmptyPrice = [...newPrice];

    let numPrice = parseFloat(tempArray[index][2]);
    numPrice *= tempCount[index];

    //price array with no undefined items
    tempPrice[index] = numPrice.toString() + ".00";
    setNonEmptyPrice(tempPrice);

    //price array with undefined items
    let newIndex = tempArray[index][3];
    tempEmptyPrice[newIndex] = numPrice.toString() + ".00";
    setNewPrice(tempEmptyPrice);

    //calc total price
    handleTotalPrice(tempPrice);
  };

  useEffect(() => {
    if (cartCount > 0) {
      setIsCartEmpty(false);
    } else {
      setIsCartEmpty(true);
    }
  }, [cartCount]);

  return (
    <AnimatePresence>
      {showCart && (
        <>
          <motion.div
            variants={bgdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ ease: "easeOut", duration: 0.5 }}
            className={styles.overlay}
          />
          <motion.div
            variants={cart}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ ease: "easeOut", duration: 0.5 }}
            className={styles.cart}
          >
            <div className={styles.cart_container}>
              <div className={styles.head}>
                <button
                  className={styles.exitBtn}
                  onClick={(e) => handleCloseShoppingCart(e)}
                >
                  <MdOutlineClose />
                </button>
                <h3>Your Shopping Cart</h3>
              </div>

              {isCartEmpty && <p>Your cart is empty.</p>}
              {isCartEmpty && (
                <div alt="empty bag" className={styles.empty_bag}>
                  <AiOutlineShopping />
                </div>
              )}
              {isCartEmpty && (
                <Link to="/shop" className={styles.browse_prod}>
                  <button onClick={handleCloseShoppingCart}>
                    Browse Products
                  </button>
                </Link>
              )}

              {!isCartEmpty &&
                nonEmptyCartItem.map((item, index) => (
                  <Item
                    key={index}
                    clickImage={item[0]}
                    clickName={item[1]}
                    clickPrice={nonEmptyPrice[index]}
                    nonEmptyCartCount={nonEmptyCartCount[index]}
                    handleMinusBtn={handleMinusBtn}
                    index={index}
                    handlePlusBtn={handlePlusBtn}
                  />
                ))}

              {!isCartEmpty && <TotalPrice totalPrice={totalPrice} />}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ShoppingCart;
