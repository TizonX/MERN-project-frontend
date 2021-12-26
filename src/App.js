import React from 'react';
import Navbar from './components/Navbar';
import Register from './components/Register';
import PrivateComponent from './components/PrivateComponent';
import {BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route element={<PrivateComponent/>}>
        <Route path="/" element={<h1>products page</h1>} />
        <Route path="/Add" element={<h1>Add products page</h1>} />
        <Route path="/Update" element={<h1>Update products page</h1>} />
        <Route path="/Logout" element={<h1>Logout page</h1>} />
        </Route>
        <Route path="/Register" element={<Register/>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
