import * as React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './public/Login'
import Register from './public/Register'
import MainPage from './user/ProductsPage'
import Cakes from './user/CakesPage'
import Bakery from './user/BakeryPage'
import axios from 'axios'

const App = () => {
  return(
    <BrowserRouter>
      {/* Public Routes*/}
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/products" element={<MainPage/>}/>
        <Route path="/products/cakes" element={<Cakes/>}/>
        <Route path="/products/bakery" element={<Bakery/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App