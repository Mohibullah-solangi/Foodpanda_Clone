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
      <div className="relative inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center flex-col z-10 -mt-8 pt-2">
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

            <h3 className=" text-black font-bold py-8">
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
                autoComplete="off"
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
            <h4 className="text-pink-700 font-semibold outline outline-pink-50 hover:outline hover:bg-pink-100 hover:outline-pink-400 px-3 py-3 rounded mt-2 mb-3 cursor-pointer w-72">
              Login with phone number
            </h4>
          </div>
          {/* Modal Lower Part - Signup */}
          <div className="bg-white p-3 my-6 rounded-lg flex justify-center items-center flex-col ">
            <p className=" text-sm text-slate-500 font-normal">
              Reach new customers and increase your sales by joining the largest
              delivery platform in the region.
            </p>

            {/* Redirecting to Signup page */}
            <div className="m-3 py-2 w-72 px-3 bg-white outline outline-pink-50 hover:outline hover:outline-pink-600 hover:bg-pink-100 rounded cursor-pointer">
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
