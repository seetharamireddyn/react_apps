import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home/Home';

const Routing = () =>{
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;