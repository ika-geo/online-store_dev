import React from 'react';
import {Outlet} from "react-router-dom";

import Header from "./header/Header";
import Footer from "./footer/Footer";


const HeaderFooter = ({products}) => {
    return (
        <div>
            <Header products={products}/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default HeaderFooter;