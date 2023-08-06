import {Link} from "react-router-dom";
import './curtItem.scss'

const CurtItem = ({products, item, setProducts}) => {

    const deleteItem = (name) => {
        setProducts(products.map(item => item.name === name ? {...item, inCurt: 0} : item))
    }

    const plus = (name) => {
        setProducts(products.map(item => item.name === name && item.inCurt < item.quantity ? {
            ...item,
            inCurt: item.inCurt + 1
        } : item))
    }

    const minus = (name) => {
        setProducts(products.map(item => item.name === name && item.inCurt > 1 ? {
            ...item,
            inCurt: item.inCurt - 1
        } : item))
    }

    return (
        <tr className='itemInCurt'>
            <td className='itemImg'><img src={require("../../../apiFake/" + item.src)} alt={item.name}/></td>
            <td className='itemTitle'>
                <Link to={'/'+item.name}>{item.name}</Link>
            </td>
            <td className='itemPrice'>{item.price}$</td>
            <td className='InCurt'>
                <span className={item.inCurt === 1?'itemMinus min':'itemMinus'} onClick={() => minus(item.name)}>-</span>
                <span className='curt'>{item.inCurt}</span>
                <span className={item.inCurt === item.quantity?"itemPlus max":'itemPlus'}
                      onClick={() => plus(item.name)}>+</span>
            </td>
            <td className='itemSum'>{item.price * item.inCurt}</td>
            <td className='itemDelete'><span onClick={() => deleteItem(item.name)}>delete</span></td>
        </tr>
    );
};

export default CurtItem;