import { motion, AnimatePresence } from "framer-motion";
import styles from "../css/Cart.module.css";
import { MdOutlineClose } from "react-icons/md";
import { AiOutlineShopping } from "react-icons/ai";
import { Link } from 'react-router-dom';
import all_new_click160 from "../images/all-new-click160.png";

const ShoppingCart = (props) => {
  const { showCart, setShowCart } = props;

  const handleCloseShoppingCart = () => {
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
              <div className={styles.cart_container}>
                <div className={styles.head}>
                  <button className={styles.exitBtn} onClick={(e) => handleCloseShoppingCart(e)}><MdOutlineClose /></button>
                  <h3>Your Shopping Cart</h3>
                </div>
                <p>Your cart is empty.</p>
                <div alt="empty bag" className={styles.empty_bag}>
                <AiOutlineShopping />
                </div>
                <Link to="/shop" className={styles.browse_prod}><button onClick={handleCloseShoppingCart}>Browse Products</button></Link>
              </div>
            </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ShoppingCart;
