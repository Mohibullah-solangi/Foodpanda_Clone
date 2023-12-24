import React, { useState } from "react";


const AddDish = () => {


  // Defining initail state of input text fields

  const [newDish , setnewDish] = useState({
    Title:"",
    Description:"",
    Price:"",
    Category:"fastfood"
   
  })
   // Defining initail state of input image field

  const [image, setImage] = useState()





  // Handle form submition

  const Handlesubmit = (e)=>{
        e.preventDefault(); 

console.log(newDish)
console.log(image)

const formdata = new FormData();
formdata.append("Image", image)
for(let key in newDish){
  formdata.append(key, newDish[key])
}
        
  // Add New dish to backend 
  console.log(Array.from(formdata))

    fetch("http://127.0.0.1:3500/AddNewDish", {
     method: "POST", 
     crossDomain: true,
     mode: "cors",
  
     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
     body: 
      formdata
       
   }) .then(response => response.json())
   .then((data) => {console.log(data)});
   
  }

   // Handle change in image input field value
   const HandleChangeimg = (e) => {
   
    console.log(e.target.files[0])

      setImage(e.target.files[0])
   console.log(image)
  }
   

  // Handle change in text input field value

  const HandleChange = (e) => {
    console.log(e.target.value)
  
      setnewDish({...newDish,
        [e.target.name]: e.target.value
      
      })

    console.log(newDish)
   
  }






  return (
    <>
      <main className="flex justify-center items-center">
        <form
         onSubmit={Handlesubmit}
          className="bg-white rounded-lg w-1/2 font-sans"
        >
          <div className="p-20">
            <h1 className="text-3xl text-gray-700 pb-4">Add Item Details</h1>

            <div className="p-4 border-solid border-2 border-gray">
              <p className="text-1xl text-gray-300 pb-3">
                Items sell better when they have a Photo (image size should not
                be more than 1Mb and file format should be jpg or jpeg)
              </p>
              <label htmlFor="Image" className="text-1xl text-gray-600 pb-4">
                Upload Dish Photo
                <input
                  type="file"
                  name="Image"
                  id="image"
                  accept="image/jpg, image/jpeg"
                  required
                  className="text-blue-500 pt-4 "
        
                  onChange={HandleChangeimg}
                />
                <span className="text-1xl text-gray-400">or drag it in</span>
              </label>
            </div>

            <div className="p-4">
              <p className="text-1xl text-gray-300 pt-3">Item Name *</p>
              <input
                type="text"
                name="Title"
                required
                className="text-blue-500 p-4 Input_Dishes"
                placeholder=" Enter Item Title "
                value={newDish.Title}
                onChange={HandleChange}
              />{" "}
              <br />
              <label htmlFor="Title" className="text-1xl text-gray-600 p-8">
                Example: Chicken Burger, Apple Juice, Fried Rice ..
              </label>
            </div>
            <div className="p-4">
              <p className="text-1xl text-gray-300 pt-3">Item Description *</p>
              <input
                type="textarea"
                name="Description"
                required
                className="text-blue-500 p-4 Input_Dishes"
                placeholder=" Enter Breif item Description "
                value={newDish.Description}
                onChange={HandleChange}
              />{" "}
              <br />
              <label htmlFor="Description" className="text-1xl text-gray-600 p-8">
                Example: 80oz Meat patty with tomato and onion rings ..
              </label>
            </div>

            <div className="p-4">
              <p className="text-1xl text-gray-300 pt-3">Item Price *</p>
              <input
                type="text"
                name="Price"
                required
                className="text-blue-500 p-4 Input_Dishes"
                placeholder=" Enter Item price in PKR "
                value={newDish.Price}
                onChange={HandleChange}
              />{" "}
              <br />
              <label htmlFor="Price" className="text-1xl text-gray-600 p-8">
                Example: 599 without Rs. symbol
              </label>
            </div>

            <div className="p-4">
              <p className="text-1xl text-gray-300 p-3">Item Category *</p>

              <label htmlFor="Category" className="text-1xl text-gray-400 p-8 mt-4">
                Select one that best describe the item.
              </label>
              <select id="category" name="Category" onChange={HandleChange}  value={newDish.Category} className="text-1xl text-gray-600 p-2 mt-4">
                <option value="fastfood">FastFood</option>
                <option value="desi">Desi</option>
                <option value="desert">Desert</option>
                <option value="beverages">Beverages</option>
              </select>{" "}
              <br />
              
            </div>

            <div className="p-4">
              
              <button type="submit" className="text-blue-500 p-4">Save</button>{" "}
              <br />
             
            </div>
          </div>
        </form>
      </main>
    </>
  );
};

export default AddDish;
