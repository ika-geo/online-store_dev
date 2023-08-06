import './weDo.scss'




const WeDo = () => {
    return (
        <div className='weDo'>
            <div className="wrapper">
                <div className="weDo__block">
                    <div className="weDoImg">
                        <img src={require('../../../images/about/weDo.jpg')} alt="store"/>
                    </div>
                    <div className="weDo__info">
                        <h2 className="weDo__title">What We Do</h2>
                        <p className="weDo__text">Find the right care right when you need it. Start by choosing your
                            reason for visit, and we’ll help you find the right care.</p>
                        <ul className="weDo__list">
                            <li>Shop directly and save!</li>
                            <li>24 hour/7 day customer service</li>
                            <li>Free or discounted shipping</li>
                            <li>A greener way to shop</li>
                            <li>Assurance of freshness with expiration dates</li>
                            <li>Shop directly and save!</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeDo;