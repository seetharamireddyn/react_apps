import React from 'react';
import { Link } from 'react-router-dom';
import './listing.css';

const MealType = (props) => {

    const restDetail = ({ restData, mealId }) => {
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
                                        <div className="labelDiv" >
                                            {rest.mealTypes.map(function (mealType) {
                                                console.log(typeof(mealType.mealtype_id));
                                                console.log(typeof(mealId));
                                                return (
                                                    <span className={ mealType.mealtype_id === Number(mealId) ? "label label-success" : "label label-primary"}
                                                        key={mealType.mealtype_id}>
                                                        {mealType.mealtype_name}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                        <div className="labelDiv">
                                            {rest.cuisines.map(function (cuisine, index) {
                                                return (
                                                    <span className={index === 1 ? "label label-danger" : "label label-info"}
                                                        key={cuisine.cuisine_id}>
                                                        {cuisine.cuisine_name}
                                                    </span>
                                                )
                                            })}
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

    return (
        <div id="content">
            {restDetail(props)}
        </div>
    )

}

export default MealType;
