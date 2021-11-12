import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/Home';
import Listing from './component/Listing/listingApi';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/> 
                <Route path="/mealtype_id/:id" element={<Listing/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;