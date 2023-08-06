import './promotions.scss'
import {Link} from "react-router-dom";


const Promotions = () => {
    return (
        <div className='promotions'>
            <div className="wrapper">

                <div className="promotions__block">

                    <div className="promotions__info">

                        <img className='promotions__leave leave1' src={require('../../../images/home/promotions/leave1.jpg')} alt="leave"/>
                        <img className='promotions__leave leave2' src={require('../../../images/home/promotions/leave2.jpg')} alt="leave"/>

                        <h1 className="promotions__title">Promotion -10%</h1>
                        <p className="promotions__text">When buying 2 units the discount is -10%. Make a purchase and enter the promo code Fana 10 in the cart</p>
                        <Link to='/' className="promotions__link">VIEW COLLECTION</Link>
                    </div>

                    <div className="promotions__img">
                        <img src={require("../../../images/home/promotions/promotionImg.jpg")} alt="promotions"/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Promotions;