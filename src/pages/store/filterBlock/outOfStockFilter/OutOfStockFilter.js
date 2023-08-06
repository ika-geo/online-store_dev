


import './outOfStockFilter.scss'
import CheckboxInput from "../../../../components/checkboxInput/CheckboxInput";

const OutOfStockFilter = ({handelOutOfStock}) => {


    return (
        <div className='outOfStockFilter'>
            <h2>Filter out of stock items</h2>


            <CheckboxInput
                id='outOfStock'
                name='outOfStock'
                value='outOfStock'
                LabelText='Out of stock'
                handelOutOfStock={handelOutOfStock}
            />


            {/*<input id='OutOfStock' type="checkbox" onClick={handelOutOfStock}/>*/}
            {/*<label htmlFor="OutOfStock">Hide out of stock</label>*/}

        </div>
    );
};

export default OutOfStockFilter;