import AddToCartButton from "../../../components/addToCartButton/AddToCartButton";

import './itemPageMain.scss'

const discountPercent = 15

const ItemPageMain = ({item, products, setProducts}) => {
    return (
        <div className="itemPageMain">
            <div className="wrapper">
                <div className="itemPageMain__block">
                    <div className="img__block">
                        <img src={require("../../../apiFake/" + item.src)} alt=""/>
                    </div>

                    <div className="info__block">

                        <h1 className='itemName'>{item.name}</h1>
                        <div className="price">
                            <p className='actualPrice'>${item.price-item.price*discountPercent/100}</p>
                        </div>

                        <AddToCartButton
                            item={item}
                            products={products}
                            setProducts={setProducts}
                        />

                        <div className="quantity"><span className='quantity__pcs'>{item.quantity}</span> {item.quantity<1?'pc':'pcs'} in stock</div>

                        <p className='item'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aspernatur beatae, cum distinctio dolores eius eos error hic maiores modi mollitia, nisi obcaecati quam quasi quibusdam reiciendis rem voluptate.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ItemPageMain;