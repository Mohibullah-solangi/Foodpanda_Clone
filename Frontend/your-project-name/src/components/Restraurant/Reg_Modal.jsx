import React from "react";
import logo from "../unnamed.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Reg_Modal = () => {
  // Handle form submition

  // Defining initail state of input text fields

  const [restaurant, setRestaurant] = useState({
    Owner_Fname: "",
    Owner_Lname: "",
    RestaurantName: "",
    email: "",
    MobileNo: "",
    password: "",
    Category: "Fast Food",
  });

  const [update, setUpdate] = useState({});
  const navigate = useNavigate()

  const Handlesubmit = (e) => {
    e.preventDefault();
    const rest = JSON.stringify(restaurant);

    // Add New restaurant to backend

    fetch("http://127.0.0.1:3500/Restaurant", {
      method: "POST",
      crossDomain: true,
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: "no-referrer",
      body: rest,
    })
      .then((response) => response.json())
      .then((data) => {
        setUpdate(data);
        setTimeout(()=>{
          setUpdate({});
          navigate("/partner/login")
        }, 3000)
      })
      .catch((error) => console.error(error));
  };

  // Handle change in text input field value

  const HandleChange = (e) => {
    setRestaurant({ ...restaurant, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="relative inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center flex-col z-10 pt-5">
        <div className="w-28 h-20 self-end">
          <p className="border border-black rounded-3xl p-2 font-semibold hover:bg-zinc-50 cursor-pointer">
            English
          </p>
        </div>

        <div className="w-[340px]">
          \{/* Modal Upper Part */}
          <div className="bg-white p-1 rounded-lg flex justify-center items-center flex-col ">
            <a
              href="/partner/login"
              className="w-[75px] border-4 border-white drop-shadow-lg rounded-xl -mt-8 cursor-pointer"
            >
              <img src={logo} alt="Partner Logo" className="rounded-xl" />
            </a>

            <h3 className="text-lg text-black font-bold py-8">
              Let’s start! It should only take a few minutes.
            </h3>
            <p className=" text-sm text-slate-400 font-medium mb-3">
              Sign up now and start earning more with the leading food delivery
              service foodpanda.
            </p>

            {/* Signup Form for new restruarant Dashboard */}
            <form onSubmit={Handlesubmit}>
              <input
                type="text"
                name="Owner_Fname"
                required
                className="text-slate-500 p-4 outline outline-gray-100 hover:outline-slate-400 my-2 rounded w-72"
                placeholder=" Business Owner First Name  "
                value={restaurant.Owner_Fname}
                id="Owner_Fname"
                onChange={HandleChange}
              />

              <input
                type="text"
                name="Owner_Lname"
                required
                className="text-slate-500 p-4 outline outline-gray-100 hover:outline-slate-400 my-2 rounded w-72"
                placeholder=" Business Owner Last Name "
                value={restaurant.Owner_Lname}
                id="Owner_Lname"
                onChange={HandleChange}
              />

              <input
                type="text"
                name="RestaurantName"
                required
                className="text-slate-500 p-4 outline outline-gray-100 hover:outline-slate-400 my-2 rounded w-72"
                placeholder=" Restaurant Name "
                value={restaurant.RestaurantName}
                id="RestaurantName"
                onChange={HandleChange}
              />

              <input
                type="email"
                name="email"
                required
                className="text-slate-500 p-4 outline outline-gray-100 hover:outline-slate-400 my-2 rounded w-72"
                placeholder=" Enter your Business E-mail "
                value={restaurant.email}
                id="R_Email"
                onChange={HandleChange}
              />

              <input
                type="tel"
                name="MobileNo"
                required
                className="text-slate-500 p-4 outline outline-gray-100 hover:outline-slate-400 my-2 rounded w-72"
                placeholder=" Mobile Number Ex: 3334448888 "
                value={restaurant.MobileNo}
                pattern="[0-9]{10}"
                id="MobileNo"
                onChange={HandleChange}
              />

              <input
                type="password"
                name="password"
                required
                id="R_Password"
                className="text-slate-500 p-4 outline outline-gray-100 hover:outline-slate-400 my-2 rounded w-72"
                placeholder=" Password "
                value={restaurant.password}
                onChange={HandleChange}
                autoComplete="off"
              />
              <label
                htmlFor="Category"
                className="text-1xl text-gray-400 p-8 mt-4"
              >
                Select category
                <select
                  id="category"
                  name="Category"
                  onChange={HandleChange}
                  value={restaurant.Category}
                  className="text-slate-500 outline outline-gray-100 hover:outline-slate-400 text-1xl p-2 mt-4 ml-2"
                >
                  <option value="Fast Food">FastFood</option>
                  <option value="Desi">Desi</option>
                  <option value="Desert">Desert</option>
                  <option value="Beverages">Beverages</option>
                </select>
              </label>

              <div className="p-4">
                <button
                  type="submit"
                  className="text-white px-3 py-2 bg-pink-600 hover:bg-pink-700 w-72"
                >
                  Sign-Up
                </button>
              </div>
            </form>
          </div>
          {/* Modal Lower Part - Signin */}
          <div className="bg-white p-3 my-6 rounded-lg flex justify-center items-center flex-col ">
            <p className=" text-sm text-slate-500 font-normal">
              Already have an account? Sign-in here.
            </p>

            {/* Redirecting to Signin page */}
            <div className="m-3 py-2 w-72 px-3 bg-white outline outline-pink-50 hover:outline hover:outline-pink-600 hover:bg-pink-100 rounded cursor-pointer">
              <Link to="/partner/login" className=" text-pink-700 ">
                Login
              </Link>
            </div>
          </div>

          {/* Showing Error or success messages based on sigup info and navigate to login when successful */}
          <div style={{height: "50px"} }>
            {update.Error && (
              <div>
                <p className="bg-pink-300 text-xs text-black border-b-4 border-pink-700 text-start py-2 px-5">
                  <strong>Error</strong><br/> {update.Error}
                </p>
              </div>
            )}

            {update.Success && (
              <div>
                <p className="bg-green-400 text-xs text-black border-b-4 border-green-700 text-start py-2 px-5">
                  <strong>Success</strong>:<br/> {update.Success}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reg_Modal;
