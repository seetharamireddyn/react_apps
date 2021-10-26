import React, {Fragment} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './productDisplay'

const Home = () => {
    return(
        <Fragment>
            <Header/>
            <ProductDisplay/>
            <Footer/>
        </Fragment>
    )
}

export default Home;