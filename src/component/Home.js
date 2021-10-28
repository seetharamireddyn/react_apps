import React, {Component, Fragment} from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './productDisplay'
import ProductData from './db.json';

class Home extends Component {
    constructor(){
        super()

        this.state={
            products:ProductData,
            filtered:ProductData
        }
    }

    filterProduct=(keyword)=>{
        var output = this.state.products.filter((item) => {
            return item.name.toLowerCase().indexOf(keyword.toLowerCase())>-1
        })
        this.setState({filtered:output})
    }

    render(){
        return(
            <Fragment>
                <Header userText={(data) => {this.filterProduct(data)}}/>
                <br/>
                <ProductDisplay prodData={this.state.filtered}/>
                <Footer year="2021" month="Oct"/>
            </Fragment>
        )
    }
}

export default Home;