import Slider from "react-slick";
import {Link} from "react-router-dom";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./homeBanner.scss"


const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        pagination: true,
        navigate: false,
        autoplay: true,
        className: 'banner'
    }

    return (
        <>
            <div>
                <Slider {...settings}>

                    <Link to='/' className='banner__item'>
                        <img src={require('../../images/home/Banner/banner (1).jpg')} alt="banner"/>
                    </Link>

                    <Link to='/' className='banner__item'>
                        <img src={require('../../images/home/Banner/banner (2).jpg')} alt="banner"/>
                    </Link>

                    <Link to='/' className='banner__item'>
                        <img src={require('../../images/home/Banner/banner (3).jpg')} alt="banner"/>
                    </Link>

                </Slider>
            </div>
        </>

    );
};

export default Banner;

