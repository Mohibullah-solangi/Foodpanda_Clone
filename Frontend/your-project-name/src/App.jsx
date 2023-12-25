import "./App.css";
import AddDish from "./components/Restraurant/AddDish";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Restraurant from "./components/Customer/Restraurant";
import Header from "./components/Customer/Header";
import Login from "./components/Restraurant/Login";
import Registration from "./components/Restraurant/Registration"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/add-new-dish" element={<AddDish />} />
          <Route exact path="/" element={<Restraurant />} />
          <Route exact path="/partner/login" element={<Login />} />
          <Route exact path="/partner/signup" element={<Registration/>} />
         
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
