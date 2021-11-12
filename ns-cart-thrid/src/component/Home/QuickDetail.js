import React from 'react';
import './QuickSearch.css';
import {Link} from 'react-router-dom';

const QuickDetail = (props) => {

    const quickMeal = ({quickData}) => {
        if(quickData){
            return quickData.map((item) => {
                return(
                    <Link to={`/mealtype_id/${item.mealtype_id}`} key={item.mealtype_id}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.meal_image} alt=""/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.mealtype}
                                </div>
                                <div className="componentSubHeading">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }          

    return(
        <div className="quickSearchContainer">
            <p className="quickSearchHeading">
                Quick Search
            </p>
            <p className="quickSearchSubHeading">
                Discover Restaurant By Meal Type
            </p>
            <br/>
            {quickMeal(props)}
        </div>
    )
}

export default QuickDetail; 