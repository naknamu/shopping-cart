import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "../css/Header.module.css";

const Header = (props) => {
  const { handleCartClick, cartCount } = props;

  const [showCartCount, setShowCartCount] = useState(false);

  useEffect(() => {
    if (cartCount > 0) {
      setShowCartCount(true);
    } else {
      setShowCartCount(false);
    }
  }, [cartCount]);

  return (
    <>
      <header className="pinaka">
        <div className="mataas">
          <Link to="/">
            <h1>MotorStore</h1>
          </Link>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <div className="simbolo" onClick={handleCartClick}>
              <FaShoppingCart />
            </div>
            {showCartCount && (
              <div className={styles.cartCount}>{cartCount}</div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
