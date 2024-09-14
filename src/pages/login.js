import React, { useContext, useState } from "react";

import { Link, useNavigate, Navigate } from "react-router-dom";




const Login = () => {
  const navigate=useNavigate();
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin=async(e)=>{
    e.preventdefault();
    <Navigate to={"/"}/>;
          
  }
  
  return (
    <>
    <div className="login-page form-page">
      <div className="login-form">
        <h2>Sign In</h2>
        

        <form  className="form-component" onSubmit={handleLogin}>
          <div className="input-box">
            <input
            type="text"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          </div>
          <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          </div>
          <button type="submit" className='login-page-btn'>Login</button>
          <div className='not-register'>
            <h6>Don't have an account?</h6>
            <Link style={{textDecoration:"none", color:"black", fontSize:"18px"}} to={"/register"}>Register</Link>
          </div>
        </form>
      </div>
    </div>  
    </>
  );
};

export default Login;