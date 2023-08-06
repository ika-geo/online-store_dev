import './categoryFilter.scss'
import RadioInput from "../../../../components/radioInput/RadioInput";


const CategoryFilter = ({products, handleFilterCategory}) => {


    // create categories from products list
    const categories = ["All"]
    for (let i = 0; i < products.length; i++) {
        if (!categories.includes(products[i].category)) {
            categories.push(products[i].category)
        }
    }


    return (
        <div className='categoryFilter'>

            <h2>Category Filter</h2>
            {categories.map(item =>
                    <RadioInput
                        key={item}
                        item={item}
                        name='category'
                        handleFilterCategory={() => handleFilterCategory(item)}
                    />
            )}
        </div>

    );
};

export default CategoryFilter;