import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = (props) => {

    const {handleCartClick} = props;

    return ( 
        <>
        <header className="pinaka">
            <div className="mataas">
                <Link to="/"><h1>MotorStore</h1></Link>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <div className='simbolo' onClick={handleCartClick}>
                        <FaShoppingCart/>
                    </div>
                </nav>
            </div>
        </header>
        </>
     );
}
 
export default Header;