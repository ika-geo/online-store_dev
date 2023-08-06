import {Link} from "react-router-dom";
import './categories.scss'

const Categories = () => {
    return (
        <>
            <div className="categories">
                <div className="wrapper">
                    <div className="categories__block">
                        <div className="categories__info">
                            <h1 className="categories__title">Shop by Categories</h1>
                            <p className="categories__text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet minus
                                repellendus saepe voluptates
                            </p>
                        </div>
                        <div className="categories__items">

                            <div className="categories__item">
                                <Link to='/' className="item__category">Trousers</Link>
                            </div>

                            <div className="categories__item">
                                <Link to='/' className="item__category">Dresses</Link>
                            </div>

                            <div className="categories__item">
                                <Link to='/' className="item__category">Shoes</Link>
                            </div>

                            <div className="categories__item">
                                <Link to='/' className="item__category">Bags</Link>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Categories;