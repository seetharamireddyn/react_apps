import React, {Component, Fragment} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './productDisplay'
import ProductData from './db.json';

class Home extends Component {
    constructor(){
        super()
        this.state = {
            products: ProductData
        }
    }
    render(){
        return(
            <Fragment>
                <Header/>
                <br/>
                <ProductDisplay productData={this.state.products}/>
                <Footer/>
            </Fragment>
        )
    }
}

export default Home;