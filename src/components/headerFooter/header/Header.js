import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import './header.scss'
import CartItemQuantity from "../../curtItemQuantity/CartItemQuantity";

const Header = ({products}) => {

    // mobile burger menu
    const [mobileMenu, setMobileMenu] = useState(false)
    const openMenu = ()=>{
        setMobileMenu(!mobileMenu)
    }


    //scroll to top after link
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <header>
            <div className="wrapper">
                <div className="headerBlock">

                    <div className="headerLogo">
                        <Link to='/'>Fashion</Link>
                    </div>

                    <div onClick={openMenu} className={mobileMenu?"mobileBurgerMenu active":"mobileBurgerMenu"}>
                        <div className='burgerMenu__Line'></div>
                    </div>
                    
                    <nav className={mobileMenu?"active":""}>
                        <ul className='headerNav'>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/store'>Store</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </nav>

                    <div className="headerCart">
                        <div className="cartQuantity">
                            <CartItemQuantity products={products}/>
                        </div>
                        <Link to='/cart'>
                            <img src={require("../../../images/header/shoppingCart.png")} alt="shopping cart"/>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;