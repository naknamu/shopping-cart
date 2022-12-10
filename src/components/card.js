import all_new_click160 from "../images/all-new-click160.png";

const Card = (props) => {

    const {handleAddToCart} = props;

    return ( 
        <div className="kard">
            <img src={all_new_click160} alt="click160" />
            <div>The All-New CLICK160</div>
            <p>SRP:₱ 116,900.00</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
     );
}
 
export default Card;