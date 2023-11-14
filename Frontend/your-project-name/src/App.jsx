
import './App.css'
import AddDish from './components/AddDish'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import MainPage from './components/MainPage'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/add-new-dish' element={<AddDish/>}  />
     <Route path='/' element={<MainPage/>}  />
     {/* <Route path='/' element={<SignIn/>}  /> */}
     {/* <Route path='/signup' element={<Signup/>}  /> */}
     
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

