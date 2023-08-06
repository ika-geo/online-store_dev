import CurtSum from "../../components/curtSum/CurtSum";
import CurtItem from "./curtItem/CurtItem";


import './curt.scss'


const Curt = ({products, setProducts}) => {

    return (
        <>
            <div className="curt">
                <div className="wrapper">
                    <div className="curt__block">
                        <table>
                                <thead>
                                <tr style={{textAlign: 'left'}}>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Sum</th>
                                    <th></th>
                                </tr>
                                </thead>


                            <tbody>
                            {products.map(item => {
                                    if (item.inCurt) {
                                        return (
                                            <CurtItem
                                                key={item.name}
                                                products={products}
                                                item={item}
                                                setProducts={setProducts}
                                            />
                                        )
                                    }
                                    return null
                                }
                            )}
                            </tbody>
                        </table>
                        <h1 className='sum'><CurtSum products={products}/></h1>
                    </div>
                </div>
            </div>


        </>

    );
};

export default Curt;