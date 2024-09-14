import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar.js";
import Login from "./pages/login.js";
import SignUp from "./pages/signup.js";
import Kids from "./pages/kids.js";
import Men from "./pages/men.js";
import Women from "./pages/women.js";
import Home from "./pages/home.js";


const App = () => {

  return (
    <>

      <Router>
        <Navbar logo={"/logo192.png"} />
        <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login />} />          
          <Route path="/signup" element={<SignUp />} />
          <Route path="/men" element={<Men />} />
          <Route path="/kid" element={<Kids/>} />
          <Route path="/women" element={<Women />} />
        </Routes>
        </main>
        
      
      </Router>
    </>
  );
};

export default App;