import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './component/Home/Home';
import Listing from './component/Listing/listingApi';
import RestDetails from './component/details/restDetails'

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/> 
                <Route path="/mealid" element={<Listing/>}>
                    <Route path=":id" element={<Listing/>} />
                </Route>
                <Route path="/details" element={<RestDetails />}>
                    <Route path=":restid" element={<RestDetails />}/>
                </Route> 
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;