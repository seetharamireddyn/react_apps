import React, {Component} from 'react';
import axios from 'axios';
import MealTypeDetail from './MealTypeDetail';

const mealTypeUrl = "https://zomatoajulypi.herokuapp.com/restaurant?mealtype_id"

class ListingApi extends Component {

    render() {
        return (
            <div>
                <MealTypeDetail/>
            </div>
        )
    }

    componentDidMount() {

        //console.log(mealtype_id);
        
        // axios.get(`${mealTypeUrl}/${mealTypeId}`)
        // .then((res) => this.setState({restList:res.data}))

    }

    
}

export default ListingApi;