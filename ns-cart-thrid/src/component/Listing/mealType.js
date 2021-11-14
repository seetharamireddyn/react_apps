import React from 'react';
import { Link } from 'react-router-dom';
import './listing.css';

const MealType = (props) => {

    const restDetail = ({ restData }) => {
        if (restData) {
            if (restData.length > 0) {
                return restData.map((rest) => {
                    return (
                        <div className="item" key={rest._id}>
                            <div className="row">
                                <div className="col-md-5">
                                    <img className="Image" alt={rest.restaurant_name} src={rest.restaurant_thumb} />
                                </div>
                                <div className="col-md-7">
                                    <div className="hotel_name">
                                        <Link to={`/details/${rest.restaurant_id}`}>{rest.restaurant_name}</Link>
                                        <div className="city_name">{rest.address}</div>
                                        <div className="city_name">{rest.rating_text}</div>
                                        <div className="city_name">Rs. {rest.cost}</div>
                                        <div className="labelDiv">
                                            <span className="label label-primary">
                                                {rest.mealTypes[0].mealtype_name}
                                                {mealNames.bind(rest.mealTypes)}
                                            </span> &nbsp;
                                            <span className="label label-success">
                                                {rest.mealTypes[1].mealtype_name}
                                            </span>
                                        </div>
                                        <div className="labelDiv">
                                            <span className="label label-danger">
                                                {rest.cuisines[0].cuisine_name}
                                            </span> &nbsp;
                                            <span className="label label-info">
                                                {rest.cuisines[1].cuisine_name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        }
        else {
            <div>
                <img src="/images/loader.gif" alt="loader" />
                <h3>Loading....</h3>
            </div>
        }
    }

    function mealNames(data) {
        console.log(data);
        if(data){
            return data.map((item) => {
                console.log(item);
                return (
                   {item}
                )
            })
        }
    }


    return (
        <div id="content">
            {restDetail(props)}
        </div>
    )
    
}

export default MealType;
