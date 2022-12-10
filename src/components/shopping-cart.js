import { motion, AnimatePresence } from "framer-motion";
import styles from "../css/Cart.module.css";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import Item from "./item";

const ShoppingCart = (props) => {

  const { showCart, setShowCart, cartCount, clickImage, clickName, clickPrice} = props;

  const [isCartEmpty, setIsCartEmpty] = useState(true);

  const bgdrop = {
    hidden: {x: "-100%"},
    visible: {x: "0%"},
  }

  const cart = {
    hidden: { x: "100%" },
    visible: { x: "0" },
  };

  const handleCloseShoppingCart = () => {
    setShowCart(false);
  };

  useEffect(() => {
    if (cartCount > 0){
      setIsCartEmpty(false);
    } else{
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
                  <button className={styles.exitBtn} onClick={(e) => handleCloseShoppingCart(e)}><MdOutlineClose /></button>
                  <h3>Your Shopping Cart</h3>
                </div>

                {isCartEmpty && <p>Your cart is empty.</p>}
                {isCartEmpty && 
                <div alt="empty bag" className={styles.empty_bag}>
                <AiOutlineShopping />
                </div>}
                {isCartEmpty && <Link to="/shop" className={styles.browse_prod}><button onClick={handleCloseShoppingCart}>Browse Products</button></Link>}

                {!isCartEmpty && <Item clickImage={clickImage} clickName={clickName} clickPrice={clickPrice}/>}
              </div>
            </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ShoppingCart;
