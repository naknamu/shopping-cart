import click160 from "../images/all-new-click160.png";
import { FiMinus, FiPlus } from "react-icons/fi";
import styles from "../css/Item.module.css";

const Item = () => {
    return ( 
        <>
        <div className={styles.item}>
            <img src={click160} alt="item-img" />
            <div>The All-New CLICK160</div>
            <p>P397</p>
            <div className={styles.countChanger}>
            <button><FiMinus /></button>
            <div>1</div>
            <button><FiPlus /></button>
            </div>
        </div>
        </>
     );
}
 
export default Item;