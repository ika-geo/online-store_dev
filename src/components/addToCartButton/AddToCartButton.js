import './addToCartButton.scss'


const AddToCartButton = ({item, products, setProducts}) => {

    const addToCart = ()=>{
        setProducts(products.map(
            prod=>prod.name===item.name?{...prod, inCurt:prod.inCurt+1}:prod
        ))
    }

    return (
        <>
            <button onClick={addToCart} className={'addToCart' + (item.quantity===0?' disabled':item.inCurt>0?' added':"")}>{item.quantity===0?"Out of Stock":item.inCurt>0?' Added':"Add to curt"}</button>
        </>
    );
};

export default AddToCartButton;