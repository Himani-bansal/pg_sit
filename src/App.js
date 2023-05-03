import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import LoginPage from "./components/login/LoginPage";
import Signup from "./components/login/Signup";
import Product from "./components/productpage/product";
import Homepage from "./components/Homepage/Homepage";
import PGShow from "./components/ListPg/Pgshow";

function App() {
  return <>
  <Navbar/>
  <Router>

    <Routes>
  
    <Route path='/homepage' element={<Homepage />} />
    <Route path='/listedpg' element={<PGShow />} />
      <Route path='/pg' element={<Product />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/Signup' element={<Signup />} />

    </Routes>
  </Router>
 
  </>
}

export default App;
