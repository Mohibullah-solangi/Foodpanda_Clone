import React, { useEffect, useState } from 'react'



const ProductCard = (props) => {
  

    console.log(props.image)

    const [image, setImage] = useState(null)

    const fetchdata = async () => {
  
      // fetching data
      let response = await fetch(`http://127.0.0.1:3500/images/${encodeURI(props.image)}`, {
        method: "GET",
        crossDomain: true,
        mode: "cors",
  
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      });
      
      console.log(response)
      setImage(response.url)
    };
    
  useEffect(() => {
    fetchdata();
  }, []);

  
  return (
    <>
      <div className="cards">
      <img src={image} alt="" />
      <h5>{props.title}</h5>
        <p>{props.description}...</p>
        <p >
              <small>
                {props.price}
              </small>
              {props.category}
            </p>
      </div>
    </>
  )
}

export default ProductCard
