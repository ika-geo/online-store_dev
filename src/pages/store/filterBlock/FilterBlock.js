import CategoryFilter from "./categoryFilter/CategoryFilter";
import PriceFilter from "./priceFilter/PriceFilter";
import OutOfStockFilter from "./outOfStockFilter/OutOfStockFilter";

import './filterBlock.scss'

const FilterBlock = ({products, handleFilterPrices, handlePricesFilterReset, handleFilterCategory,  handelOutOfStock, filterBlock}) => {
    return (
        <div className={"filterBlock"+(filterBlock?' active':'')}>
            <div className='filterSticky'>
                <CategoryFilter
                    products={products}
                    handleFilterCategory={handleFilterCategory}
                />

                <PriceFilter
                    products={products}
                    handleFilterPrices={handleFilterPrices}
                    handlePricesFilterReset={handlePricesFilterReset}
                />

                <OutOfStockFilter
                    handelOutOfStock={handelOutOfStock}
                />
            </div>
        </div>
    );
};

export default FilterBlock;