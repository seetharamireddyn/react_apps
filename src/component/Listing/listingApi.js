import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import MealType from './mealType';
import './listing.css';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter';

const mealTypeUrl = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id="

class ListingApi extends Component {

    constructor(props) {
        super(props)

        this.state = {
            restList: [],
            mealId:  this.props.params.id
        }
    }

    setDataPerFilter = (data) => {
        this.setState({restList:data})
    }

    render() {
        
        return (
            <div className="row">
                <div id="mainListing">
                    <div id="filter">
                        <center>
                            <h1>Filter</h1>
                        </center>
                        <CuisineFilter 
                            mealId={this.state.mealId}
                            restPerCuisine={(data) => {this.setDataPerFilter(data)}}/>
                        <CostFilter mealId={this.state.mealId}
                            restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                    </div>
                    <MealType restData={this.state.restList} mealId = {this.state.mealId}/>
                </div>
            </div>
        )
    }

    componentDidMount() {
        axios.get(`${mealTypeUrl}${this.state.mealId}`)
        .then((res) => this.setState({restList:res.data}));
    }
}

export default (props) => (
    <ListingApi
        {...props}
        params={useParams()}
    />
);