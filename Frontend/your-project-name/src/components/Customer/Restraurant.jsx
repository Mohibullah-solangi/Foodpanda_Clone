import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import RestaurantCard from "./RestraurantCard";
import { useDispatch} from "react-redux";
import {fetchRestaurant} from '../../redux/Features/Restraurant/RestrauarantSlice'

const MainPage = () => {
  const [loader, setLoader] = useState(false);
  const dispatch =useDispatch();


  //  Calling data from backend on render

  useEffect(() => {
    dispatch(fetchRestaurant())
  }, []);

  return (
    <>
      {loader && <Spinner />}
      <div className="flex flex-wrap gap-6 px-20 justify-center">
      
           <RestaurantCard/>
    
      </div>
    </>
  );
};

export default MainPage;
