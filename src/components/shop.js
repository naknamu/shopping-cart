import Card from "./card";

const Shop = (props) => {

    const {handleAddToCart} = props;

    return ( 
        <main>
            <div className="lagayan-ng-kard">
                <Card handleAddToCart={handleAddToCart}/>
            </div>
        </main>
     );
}
 
export default Shop;