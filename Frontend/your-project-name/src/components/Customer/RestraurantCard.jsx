import React from 'react'
import { useSelector } from "react-redux";


const RestraurantCard = () => {
 
  const state = useSelector((state)=>{ return state.Restraurant.Restraurant})

 console.log(state)
 
 

  const AllRestraurant = !state? "": state.map((elem) => {
    const {_id, RestaurantName} = elem;
    return (
      <div className="cards" key={_id}>
      {/* <img src={Image} alt="" /> */}
      <h5>{RestaurantName}</h5>
        {/* <p>{Description}...</p>
        <p >
              <small>
                {Price}
              </small>
              {Category}
            </p> */}
      </div>
    );
  })
  
  return (
    <>
      {AllRestraurant}
    </>
  )
}

export default RestraurantCard
