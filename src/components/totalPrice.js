import styles from "../css/TotalPrice.module.css";

const TotalPrice = (props) => {

    const {totalPrice} = props;

    const handleCheckout = () => {
        alert("Feature not included! Maybe next update?")
    }

    return ( 
        <>
            <div className={styles.totalPrice}>
                <h4>Total Price: ₱{totalPrice}.00</h4>
                <div className={styles.checkoutBtn}>
                    <button onClick={handleCheckout}>Checkout</button>
                </div>
            </div>
        </>
     );
}
 
export default TotalPrice;