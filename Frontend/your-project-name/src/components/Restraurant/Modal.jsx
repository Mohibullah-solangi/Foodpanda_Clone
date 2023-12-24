import React from "react";
import logo from "../unnamed.png";
import { useState } from "react";

const Modal = (props) => {
  // Handle form submition

  // Defining initail state of input text fields

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const Handlesubmit = (e) => {
    e.preventDefault();
  };

  // Handle change in text input field value

  const HandleChange = (e) => {
    console.log(e.target.value);

    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="absolute inset-x-0 top-4 bg-opacity-25 backdrop-blur-sm flex justify-center items-center flex-col">
        <div className="w-28 h-20 self-end mr-4">
          <p className="border border-black rounded-3xl p-2 font-semibold hover:bg-slate-50 cursor-pointer">
            English
          </p>
        </div>
        <div className="w-[340px]">
          \{/* Modal Upper Part */}
          <div className="bg-white p-1 rounded-lg flex justify-center items-center flex-col ">
            <a
              href="/partner/login"
              className="w-[75px] border-4 border-white drop-shadow-lg rounded-xl -mt-12 cursor-pointer"
            >
              <img src={logo} alt="Partner Logo" className="rounded-xl" />
            </a>

            <h3 className=" text-black font-bold py-6">
              Welcome to panda partner
            </h3>
            <p className=" text-sm text-slate-400 font-medium">
              Log into your account
            </p>

            {/* Login Form for existing restruarant Dashboard */}
            <form onSubmit={Handlesubmit}>
              <input
                type="email"
                name="email"
                required
                className="text-blue-500 p-4 hover:outline outline-slate-400 my-2 rounded w-72"
                placeholder=" E-mail "
                value={user.email}
                id="R_Email"
                onChange={HandleChange}
              />

              <input
                type="password"
                name="password"
                required
                id="R_Password"
                className="text-blue-500 p-4 hover:outline outline-slate-400 rounded w-72"
                placeholder=" Password "
                value={user.password}
                onChange={HandleChange}
              />
              <div className="p-4">
                <button
                  type="submit"
                  className="text-white px-3 py-2 bg-pink-600 hover:bg-pink-700 w-72"
                >
                  Login
                </button>
              </div>
            </form>
            <h4 className="text-pink-700 font-semibold hover:bg-pink-100 w-40 self-end rounded p-3">
              Forgot password?
            </h4>
            <p>or</p>
            <h4 className="text-pink-700 font-semibold outline outline-pink-50 hover:outline hover:bg-pink-100 hover:outline-pink-400 px-3 py-2 rounded my-2 cursor-pointer w-72">
              Login with phone number
            </h4>
          </div>
          {/* Modal Lower Part - Signup */}
          <div className="bg-white p-2 mt-6 rounded-lg flex justify-center items-center flex-col ">
            <p className=" text-sm text-slate-500 font-normal">
              Reach new customers and increase your sales by joining the largest
              delivery platform in the region.
            </p>

            {/* Redirecting to Signup page */}
            <div className="m-3 py-2 w-72 px-3 mb-8 bg-white outline outline-pink-50 hover:outline hover:outline-pink-600 hover:bg-pink-100 rounded cursor-pointer">
              <a
                href="/"
                className=" text-pink-700 "
              >
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
