import ItemPageMain from "./itemPageMain/ItemPageMain";

export default function ItemPage({item, products, setProducts}){
    return(
        <>
            <ItemPageMain
                item={item}
                products={products}
                setProducts={setProducts}
            />
        </>
    )
}