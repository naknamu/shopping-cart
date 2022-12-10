import click160 from "../images/all-new-click160.png";
import { FiMinus, FiPlus } from "react-icons/fi";
import styles from "../css/Item.module.css";

const Item = (props) => {

    const {clickImage, clickName, clickPrice} = props;

    return ( 
        <>
        <div className={styles.item}>
            <img src={clickImage} alt="item-img" />
            <div>{clickName}</div>
            <p>{clickPrice}</p>
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