const addressUrl = 'https://www.google.com/maps/place/%D0%9F%D0%BB%D0%BE%D1%89%D0%B0%D0%B4%D1%8C+%D0%A1%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D1%8B/@41.6933561,44.7993225,17z/data=!3m1!4b1!4m5!3m4!1s0x40440cefb1568e95:0xf27796ca7216c57!8m2!3d41.6932838!4d44.8014975'

const Info = () => {
    return (
        <div className="info">

            <h2>Contact</h2>

            <a href="mailto:mail@mail.com" className="info__item">
                <img src={require('../../../../images/contact/email.png')} alt=""/>
                <p>mail@mail.com</p>
            </a>

            <a href="tel:0123456789" className="info__item">
                <img src={require('../../../../images/contact/phone.png')} alt=""/>
                <p>0123456789</p>
            </a>

            <a href={addressUrl} target='_blank' className="info__item">
                <img src={require('../../../../images/contact/map.png')} alt=""/>
                <p>some place, some str.</p>
            </a>

        </div>
    );
};

export default Info;