const SocialMedia = () => {
    return (
        <div className="socialMedia">

            <h2>Follow Us</h2>

            <a href="https://fb.com/" target="_blank" className="info__item">
                <img src={require('../../../../images/contact/facebook.png')} alt=""/>
                <p>Facebook</p>
            </a>

            <a href="https://twitter.com/" target="_blank" className="info__item">
                <img src={require('../../../../images/contact/twitter.png')} alt=""/>
                <p>Twitter</p>
            </a>

            <a href="https://www.instagram.com/" target="_blank" className="info__item">
                <img src={require('../../../../images/contact/instagram.png')} alt=""/>
                <p>Instagram</p>
            </a>

            <a href="https://www.pinterest.com/" target="_blank" className="info__item">
                <img src={require('../../../../images/contact/pinterest.png')} alt=""/>
                <p>Pinterest</p>
            </a>

            <a href="https://www.linkedin.com/" target="_blank" className="info__item">
                <img src={require('../../../../images/contact/linkedin.png')} alt=""/>
                <p>Linkedin</p>
            </a>

        </div>
    );
};

export default SocialMedia;