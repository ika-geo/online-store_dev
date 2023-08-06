import './footer.scss'
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer>
                <div className="wrapper">
                    <div className="footer__block">


                        <ul className='footer__info footerGroup'><h2 className="footerGroup__title">Information</h2>
                            <li><Link to='/'>Privacy policy</Link></li>
                            <li><Link to='/'>Refund policy</Link></li>
                            <li><Link to='/'>Term Of Use</Link></li>
                            <li><Link to='/'>Shipping & Return</Link></li>
                        </ul>


                        <ul className='footer__info footerGroup'><h2 className="footerGroup__title">Quick links</h2>
                            <li><Link to='/'>My account</Link></li>
                            <li><Link to='/'>Cart</Link></li>
                            <li><Link to='/'>Wishlist</Link></li>
                            <li><Link to='/'>Checkout</Link></li>
                        </ul>


                        <ul className="footer__contact footerGroup"><h2 className="footerGroup__title">Contact us</h2>
                            <li><span>Find a location nearest you. See Our Stores</span></li>
                            <li><a href="tel:+1234567890">+0 123 456 789</a></li>
                            <li><a href="mailto: abc@example.com">Send Email</a></li>
                        </ul>


                        <div className="footer__subscribe footerGroup"><h2 className="footerGroup__title">Subscribe</h2>
                            <input placeholder='name' type="text"/>
                            <br/>
                            <input placeholder='email' type="email"/>
                            <div className='subscribeButton'>
                                <button>Subscribe</button>
                            </div>
                        </div>


                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;