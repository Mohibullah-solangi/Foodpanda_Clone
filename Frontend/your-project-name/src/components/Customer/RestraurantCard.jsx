import React from "react";
import { useSelector } from "react-redux";

const RestaurantCard = () => {
  const state = useSelector((state) => {
    return state.Restraurant.Restraurant;
  });

  console.log(state);

  const AllRestaurant = !state
    ? ""
    : state.map((elem) => {
        const { _id, RestaurantName, rating, Category, BannerImage } = elem;
        return (
          <div className="cards flex flex-col" key={_id}>
            <img src={BannerImage} alt="Banner" />
            <h3 className="text-base text-black font-bold pt-2">{RestaurantName} <small className="ml-64">
                {rating} (0)
              </small></h3>
            
            <p className="self-start pb-3 px-4 text-sm text-slate-600 font-medium">$ . {Category}</p>
          </div>
        );
      });

  return <>{AllRestaurant}</>;
};

export default RestaurantCard;
