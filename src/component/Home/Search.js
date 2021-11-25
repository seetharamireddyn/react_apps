import React, {Component} from 'react';
import './Search.css';

const cityUrl = "https://zomatoajulypi.herokuapp.com/location";
const restUrl = "https://zomatoajulypi.herokuapp.com/restaurant?stateId="
class Search extends Component {
    constructor(){
        super()
        this.state={
            location:'',
            restaurants:''
        }
    }

    renderLocation = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    renderRestutarent = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }

    changeLocation = (event) => {
        fetch(`${restUrl}${event.target.value}`)
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurants:data})
        })
    }

    render(){
        return(
            <div id="search">
                <div id="logo">
                    <span>JS!</span>
                </div>
                <div id="heading">
                    Find The Restaurant
                </div>
                <div id="dropdown">
                    <select id="city" onChange={this.changeLocation}>
                        <option>--- Select Current Loction----</option>
                        {this.renderLocation(this.state.location)}
                    </select>
                    <select id="restaurants">
                        <option>----Select Restaurant---- </option>
                        {this.renderRestutarent(this.state.restaurants)}
                    </select>
                </div>
            </div>
        )
    }

    componentDidMount(){
        fetch(cityUrl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {this.setState({location:data})})
    }
}

export default Search;