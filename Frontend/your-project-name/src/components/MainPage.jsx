import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import {fetchRestraurant} from '../redux/Features/Dishes/RestrauarantSlice'

const MainPage = () => {
  const [loader, setLoader] = useState(false);
  // const [dishes, setDishes] = useState([]);

  const dispatch =useDispatch();
 
  

  //  Calling data from backend on render

  useEffect(() => {
    dispatch(fetchRestraurant())
  }, []);

  return (
    <>
      {loader && <Spinner />}
      <div className="flex flex-wrap gap-2">
      
           <ProductCard/>
    
      </div>
    </>
  );
};

export default MainPage;
