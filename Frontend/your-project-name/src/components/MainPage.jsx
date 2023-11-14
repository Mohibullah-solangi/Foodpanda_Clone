import React from 'react'

const MainPage = () => {

    fetch("http://127.0.0.1:3500/AddNewDish", {
     method: "GET", 
     crossDomain: true,
     mode: "cors",
  
     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
     
       
   }) .then(response => response.json())
   .then((data) => {console.log(data)});


  return (
    <>

    
    </>
  )
}

export default MainPage
