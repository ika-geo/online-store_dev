import {useState} from "react";

import FilterBlock from "./filterBlock/FilterBlock";
import StoreBlock from "./storeBlock/StoreBlock";

import './store.scss'


const Store = ({products, setProducts}) => {

    const [filterPrices, setFilterPrices] = useState({filterMinPrice:0, filterMaxPrice:0})

    // set price filter
    const handleFilterPrices = (prices)=>{
        setFilterPrices({filterMinPrice: prices.inputMin, filterMaxPrice: prices.inputMax})
         window.scrollTo(0, 0);
    }

    // reset price filter
    const handlePricesFilterReset = ()=>{
        setFilterPrices({filterMinPrice:0, filterMaxPrice:0})
        window.scrollTo(0, 0);
    }


    // set category filter
    const [category, setCategory] = useState('All')

    const handleFilterCategory = (category)=>{
        setCategory(category)
        window.scrollTo(0, 0);
    }


    // set out of stock filter
    const [outOfStock, setOutOfStock] = useState(false)

    const handelOutOfStock = ()=>{
        console.log('change')
        setOutOfStock(!outOfStock)
        window.scrollTo(0, 0);
    }

    // show filter block in mobile view
    const [filterBlock, setFilterBlock] = useState(false)

    const showFilterBlock = ()=>{
        setFilterBlock(!filterBlock)
    }


    return (
        <>
            <div className="store">
                <div className="wrapper">
                    <div className="store__block">
                        <span onClick={showFilterBlock} className='filterBTN'>Filter</span>
                        <FilterBlock
                            products={products}
                            handleFilterPrices={handleFilterPrices}
                            handlePricesFilterReset={handlePricesFilterReset}
                            handleFilterCategory={handleFilterCategory}
                            handelOutOfStock={handelOutOfStock}
                            filterBlock={filterBlock}
                        />

                        <StoreBlock
                            products={products}
                            setProducts={setProducts}
                            filterPrices={filterPrices}
                            category={category}
                            outOfStock={outOfStock}
                        />

                    </div>
                </div>
            </div>
        </>
    );
};

export default Store;


// <ul className='items'>
//     {products.map((item, index)=>
//         <li className='item' key={item.name}>
//             <img src={require("../../apiFake/"+item.src)} alt={item.name}/>
//             <Link to={"/"+item.name}>{item.name} <span style={{color:'red'}}>{item.price} $</span></Link>
//             <button>add to cart</button>
//         </li>
//     )}
// </ul>