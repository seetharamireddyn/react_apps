import React,{Component, Fragment} from 'react';
import './Header.css';

class Header extends Component {
    render(){
        return(
            <Fragment>
                <header>
                    <div className="logo">NS Cart</div>
                    <center>
                        <input/>
                        <div style={{marginTop: '5px'}}>
                        <button type="button" class="btn btn-dark">Search</button>
                        </div>
                    </center>
                </header>
            </Fragment>
        )
    }
}

export default Header;