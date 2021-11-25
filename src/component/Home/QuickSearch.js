import React, {Component} from 'react';
import QuickDetail from './QuickDetail.js';

const quickUrl = 'https://zomatoajulypi.herokuapp.com/quicksearch';
class QuickSearch extends Component {
    constructor(){
        super()

        this.state = {
            quickData:[]
        }
    }

    render() {
        return (
            <div id="QuickSearch">
                <QuickDetail quickData={this.state.quickData}/>
            </div>
            
        )
    }

    componentDidMount(){
        fetch(quickUrl,{method: 'GET'})
        .then((res) => res.json())
        .then((data) => {this.setState({quickData:data})})
    }
}

export default QuickSearch;