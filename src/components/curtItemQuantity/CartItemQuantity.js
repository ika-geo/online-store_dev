import {useEffect, useState} from "react";

const CartItemQuantity = ({products}) => {
    const [quantity, setQuantity] = useState(0)

    useEffect(()=>{
        let Quantity = 0
        for (let i=0; i<products.length; i++){
            if (products[i].inCurt){
                Quantity=Quantity+1
            }
        }
        setQuantity(Quantity)
    }, [products])

    return (
        <>
            {quantity&&quantity}
        </>
    );
};


export default CartItemQuantity;