import Iframe from "react-iframe";

import './map.scss'

const Map = () => {
    return (
        <div className='map'>
            <div className="wrapper">
                <div className="map__block">
                    <Iframe
                        url='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.258633129974!2d44.8015112!3d41.693352100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cefb1568e95%3A0xf27796ca7216c57!2z0J_Qu9C-0YnQsNC00Ywg0KHQstC-0LHQvtC00Ys!5e0!3m2!1sru!2sge!4v1673286240203!5m2!1sru!2sge'
                        style="border:0;"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </div>
    );
};

export default Map;