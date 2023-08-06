import {useEffect, useState} from "react";


import './priceFilter.scss'



const PriceFilter = ({products, handleFilterPrices, handlePricesFilterReset}) => {

    //get min and max prices from products
    const [prices, setPrices] = useState({minPrice:0, maxPrice:0})
    useEffect(()=>{
        let minPrice1=0
        let maxPrice1=0
        for (let i = 0; i < products.length; i++) {
            if (products[i].price<minPrice1||minPrice1===0){
                minPrice1=products[i].price
            }
            if (products[i].price>maxPrice1){
                maxPrice1=products[i].price
            }
        }
        setPrices({minPrice:minPrice1, maxPrice:maxPrice1})
    }, [products])


    const [inputPrices, setInputPrices] = useState({inputMin:"", inputMax:""})

    const changeInputMin = (e)=>{
        setInputPrices(prev=> ({...prev, inputMin:e.target.value}))
    }

    const changeInputMax = (e)=>{
        setInputPrices(prev=>  ({...prev, inputMax:e.target.value}))
    }


    const resetInputs=()=>{
        handlePricesFilterReset()
        setInputPrices({inputMin:"", inputMax:""})
    }


    return (
        <>
            <div className='priceFilter'>
                <h2>Price Filter</h2>
                <input
                    placeholder={prices.minPrice.toString()}
                    min={prices.minPrice}
                    onChange={changeInputMin}
                    value={inputPrices.inputMin}
                    type="number"/>

                <input
                    placeholder={prices.maxPrice.toString()}
                    max={prices.maxPrice}
                    onChange={changeInputMax}
                    value={inputPrices.inputMax}
                    type="number"/>

                <span className='reset' onClick={resetInputs}>✖</span>

                <input
                    type="button"
                    value='ok'
                    onClick={()=>handleFilterPrices(inputPrices)}
                />




            </div>
        </>
    );
};

export default PriceFilter;