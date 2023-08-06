import {Link} from "react-router-dom";
import AddToCartButton from "../../../components/addToCartButton/AddToCartButton";

import './storeBlock.scss'

const StoreBlock = ({products, filterPrices, category, setProducts, outOfStock}) => {

    return (
        <ul className='items'>
            {products.map((item) => {

                    // filter for min price
                    if (filterPrices.filterMinPrice && item.price < filterPrices.filterMinPrice) {
                        return
                    }
                // filter for max price
                    if (filterPrices.filterMaxPrice && item.price > filterPrices.filterMaxPrice) {
                        return
                    }

                // filter for categories
                    if (category!=="All"&&item.category!==category){
                        return
                    }

                // filter for out of stock
                    if(outOfStock&&item.quantity===0){
                        return
                    }

                    return (
                        <li className='item' key={item.name}>
                            <div className='itemImg'>
                                <img src={require("../../../apiFake/" + item.src)} alt={item.name}/>
                                <AddToCartButton item={item} products={products} setProducts={setProducts}/>
                            </div>
                            <Link to={"/" + item.name}>{item.name}</Link>
                            <p style={{color: 'red'}}>{item.price} $</p>
                        </li>
                    )
                }
            )}
        </ul>
    );
};

export default StoreBlock;