import { FiMinus, FiPlus } from "react-icons/fi";
import styles from "../css/Item.module.css";

const Item = (props) => {
  const { clickImage, clickName, clickPrice, nonEmptyCartCount , handleMinusBtn, index} = props;

  return (
    <>
      <div className={styles.item}>
        <img src={clickImage} alt="item-img" />
        <div>{clickName}</div>
        <p>{clickPrice}</p>
        <div className={styles.countChanger}>
          <button onClick={() => handleMinusBtn(index)}>
            <FiMinus />
          </button>
          <div>{nonEmptyCartCount}</div>
          <button>
            <FiPlus />
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
