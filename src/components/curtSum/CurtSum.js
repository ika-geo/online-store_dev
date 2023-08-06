import {useEffect, useState} from "react";

const CurtSum = ({products}) => {

    const [sum, setSum] = useState(0)

    useEffect(()=>{
        let sum1=0
        for (let i=0; i<products.length; i++)
            if (products[i].inCurt){
                sum1=sum1+products[i].inCurt*products[i].price
            }
        setSum(sum1)
    }, [products])

    return (
        <>
            Sum: {sum}$
        </>
    );
};

export default CurtSum;