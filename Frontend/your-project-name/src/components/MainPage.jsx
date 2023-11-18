import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import ProductCard from "./ProductCard";


const MainPage = () => {
  const [loader, setLoader] = useState(false);
  const [dishes, setDishes] = useState([]);
  
  

  const fetchdata = async () => {
    // set loading true for loading icon to display while fetching
    setLoader(true);

    // fetching data
    let response = await fetch("http://127.0.0.1:3500/AddNewDish", {
      method: "GET",
      crossDomain: true,
      mode: "cors",

      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    let data = await response.json();
    console.log(
      data.map((elem) => {
        console.log(elem.Dishes);

        setDishes(elem.Dishes);
      })
    );

    //  set loading false to display fetched data
    setLoader(false);
  };

  //  Calling data from backend on render

  useEffect(() => {
    fetchdata();
  }, []);


  return (
    <>
      <h1>FoodPanda Clone</h1>
      
    
      {loader && <Spinner />}
      <div className="flex gap-2">{dishes.map((elem)=>{
         return (
          <div key={elem._id}>
            <ProductCard 
            title={elem.Title}
            description={ elem.Description }
            image={elem.Image}
            price={elem.Price}
            category={elem.Category}
            />
           
          </div>
         
        );
      })}</div>
    </>
  );
};

export default MainPage;
