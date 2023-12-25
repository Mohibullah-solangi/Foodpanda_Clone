import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import RestraurantCard from "./RestraurantCard";
import { useDispatch, useSelector} from "react-redux";
import {fetchRestraurant} from '../../redux/Features/Restraurant/RestrauarantSlice'

const MainPage = () => {
  const [loader, setLoader] = useState(false);


  const dispatch =useDispatch();
 
  const state = useSelector((state)=>{
    state.Restraurant
  })
 console.log(state)

  //  Calling data from backend on render

  useEffect(() => {
    dispatch(fetchRestraurant())
  }, []);

  return (
    <>
      {loader && <Spinner />}
      <div className="flex flex-wrap gap-2 w-[1390px] px-20">
      
           <RestraurantCard/>
    
      </div>
    </>
  );
};

export default MainPage;
