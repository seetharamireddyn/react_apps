import React,{Component} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './details.css';

const url = "https://zomatoajulypi.herokuapp.com/details"

class RestaurentDetails extends Component{
    constructor(props){
        super(props);

        this.state={
            details:''
        }
    }

    render(){
        let {details} = this.state;
        return(
            <>
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h2>{this.state.details.restaurant_name}</h2>
                    </div>
                    <div className="panel-body">
                    <h2>{details.restaurant_name}</h2>
                    </div>
                </div>
            </div>
            </>
        )
    }

    async componentDidMount(){
        const {restid} = this.props.params;

        let response = await axios.get(`${url}/${restid}`)
        this.setState({details:response.data[0]})
    }
}


export default (props) => (
    <RestaurentDetails
        {...props}
        params={useParams()}
    />
);