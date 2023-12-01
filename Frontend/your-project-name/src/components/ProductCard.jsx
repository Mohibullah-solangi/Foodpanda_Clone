import React from 'react'
import { useSelector } from "react-redux";
import { useState } from 'react';

const ProductCard = () => {
  const [dishes, setDishes] = useState([]);
  const Restraurant = useSelector((state)=>{
    state.Restraurant.Restraurant
  })
console.log(!Restraurant? "" : Restraurant.map((elem)=>{
     setDishes(elem.Dishes)
}))

console.log(dishes)

  const AllDishes = !Restraurant? "": Restraurant.map((elem) => {
    const {_id, Title, Description, Image, Price, Category} = elem;
    return (
      <div className="cards" key={_id}>
      <img src={Image} alt="" />
      <h5>{Title}</h5>
        <p>{Description}...</p>
        <p >
              <small>
                {Price}
              </small>
              {Category}
            </p>
      </div>
    );
  })
  
  return (
    <>
      {AllDishes}
    </>
  )
}

export default ProductCard
