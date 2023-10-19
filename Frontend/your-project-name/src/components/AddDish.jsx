import React from "react";

const AddDish = () => {
  return (
    <>
      <main className="flex justify-center items-center">
        <form
          action="/AddNewDish"
          method="POST"
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
                className="text-blue-500 p-4"
                placeholder=" Enter Item Title "
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
                className="text-blue-500 p-4"
                placeholder=" Enter Breif item Description "
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
                className="text-blue-500 p-4"
                placeholder=" Enter Item price in PKR "
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
              <select id="category" name="Category" className="text-1xl text-gray-600 p-2 mt-4">
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
