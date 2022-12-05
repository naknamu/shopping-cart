import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
    return ( 
        <header className="pinaka">
            <div className="mataas">
                <h1>MotorStore</h1>
                <nav>
                    <h3>Home</h3>
                    <h3>Shop</h3>
                    <div className='simbolo'><FaShoppingCart/></div>
                </nav>
            </div>
        </header>
     );
}
 
export default Header;