import all_new_click160 from "../images/all-new-click160.png";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../css/Cart.module.css";

const ShoppingCart = (props) => {
  const { showCart, setShowCart } = props;

  const handleCloseShoppingCart = (e) => {
    setShowCart(false);
  };

  const bgdrop = {
    hidden: {x: "-100%"},
    visible: {x: "0%"},
  }

  const cart = {
    hidden: { x: "100%" },
    visible: { x: "0" },
  };

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
              <div>
                <div>
                  <button onClick={(e) => handleCloseShoppingCart(e)}>X</button>
                  <h3>Your Shopping Cart</h3>
                </div>
                {/* <div className="item">
                            <img src={all_new_click160} alt="click160" />
                            <div>The All-New CLICK160</div>
                            <p>SRP:₱ 116,900.00</p>
                            <div className="cart-counter">
                                <button>-</button>
                                <div>0</div>
                                <button>+</button>
                            </div>
                        </div>
                        <p>Total: ₱ 116,900.00</p>
                        <button>Checkout</button> */}
              </div>
            </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ShoppingCart;
