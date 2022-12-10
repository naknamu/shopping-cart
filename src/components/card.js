const Card = (props) => {

    const {handleAddToCart, itemImage, itemName, itemPrice} = props;

    return ( 
        <div className="kard">
            <img src={itemImage} alt="click160" />
            <div>{itemName}</div>
            <p>SRP: {itemPrice}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
     );
}
 
export default Card;