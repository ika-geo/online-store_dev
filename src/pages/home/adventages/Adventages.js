import './adventages.scss'



const Adventages = () => {
    return (
        <div className="advantages">
            <div className="wrapper">
                <div className="advantages__block">

                    <div className="advantages__item">
                        <div className="advantages__itemTop">
                            <img src={require('../../../images/home/advantages/favorite.png')} alt="Uniqueness"/>
                            <h2>Uniqueness</h2>
                        </div>
                        <p className="advantages__text">
                            We create individual and unique solutions.
                        </p>
                    </div>

                    <div className="advantages__item">
                        <div className="advantages__itemTop">
                            <img src={require('../../../images/home/advantages/delivery.png')} alt="Uniqueness"/>
                            <h2>Delivery</h2>
                        </div>
                        <p className="advantages__text">
                            We deliver goods around the world
                        </p>
                    </div>

                    <div className="advantages__item">
                        <div className="advantages__itemTop">
                            <img src={require('../../../images/home/advantages/quality.png')} alt="Uniqueness"/>
                            <h2>Quality</h2>
                        </div>
                        <p className="advantages__text">
                            We deliver fabrics from Turkey, India, Italy


                        </p>
                    </div>

                    <div className="advantages__item">
                        <div className="advantages__itemTop">
                            <img src={require('../../../images/home/advantages/art-gallery.png')} alt="Uniqueness"/>
                            <h2>Uniqueness</h2>
                        </div>
                        <p className="advantages__text">
                            You can see our “here and now” products
                        </p>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Adventages;