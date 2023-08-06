import {HashRouter, Routes, Route} from "react-router-dom";

import HeaderFooter from "./components/headerFooter/headerFooter";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Store from "./pages/store/Store";
import Contact from "./pages/contact/Contact";
import NoPage from "./pages/noPage/NoPage";
import ItemPage from "./pages/itemPage/ItemPage";
import Curt from "./pages/curt/Curt";
import {useState} from "react";
import {fakeJSON} from "./apiFake/products";


function App() {

    const [products, setProducts] = useState(fakeJSON.map(item=>{return {...item, inCurt:item.name==='bag4'||item.name==='shoe3'?1:0}}))

    return (
        <HashRouter>
            <Routes>
                    <Route path='' element={<HeaderFooter products={products}/>}>
                        <Route index element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>
                        <Route path='/store' element={<Store products={products} setProducts={setProducts}/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path='cart' element={<Curt products={products} setProducts={setProducts}/>}/>
                        <Route path='*' element={<NoPage/>}/>
                        {products.map(item =>
                            <Route key={item.name} path={"/" + item.name} element={<ItemPage
                                item={item}
                                products={products}
                                setProducts={setProducts}
                            />}/>
                        )}
                    </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
