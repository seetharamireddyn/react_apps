import React,{Component, Fragment} from 'react';
import './Header.css';

class Header extends Component {
    constructor(){
        super()
        this.state={
            title:'React App',
            keyword:'User Text Here'
        }
    }

    findProduct = (event) => {
        this.setState({keyword:event.target.value ? event.target.value:'User Text Here' });
        this.props.userText(event.target.value);
    }

    render(){
        return(
            <Fragment>
                <header>
                    <div className="container">
                        <img src="ns.jpg" alt={this.state.title} style={{width:'100px',height:'100%'}}/>
                    </div>
                    <center>
                        <input onChange={this.findProduct}/>
                        <div style={{color:'white'}}>{this.state.keyword}</div>
                    </center>
                </header>
            </Fragment>
        )
    }
}

export default Header;