import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <header className="pinaka">
            <div className="mataas">
                <h1>MotorStore</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <div className='simbolo'><FaShoppingCart/></div>
                </nav>
            </div>
        </header>
     );
}
 
export default Header;