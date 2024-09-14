import React, { useContext, useState } from 'react'
import { Link,useNavigate,Navigate } from 'react-router-dom';


const Register = () => {

  const [firstname,setFirstname]=useState("");
  const [lastname,setLastname]=useState("");
  const [PhoneNumber,setPhoneNumber]=useState("");
  const [dob,setDOB]=useState("");
  const [gender,setGender]=useState("");
  const [password,setPassword]=useState("");
  const [Email,setEmail]=useState("");



  return (
    <>
    <div className="login-page" >
      <div className="login-form" style={{height:"80vh"}}>
        <h2>Sign Up</h2>

        <form className="form-component">
          
          <div className="input-box">
            <input
              type="text"
              placeholder="First Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>

          <div className="input-box">
            <input
            type="text"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-box">
            <select value={gender} onChange={(e)=>setGender(e.target.value)}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <input
              
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="input-box">
            <input
              type="Date"
              placeholder="Date of Birth"
              value={dob}
              onChange={(e) => setDOB(e.target.value)}
            />
            <input 
              type="number" 
              placeholder='Phone Number'
              value={PhoneNumber}
              onChange={(e)=>setPhoneNumber(e.target.value)}
              />
          </div>

          <button type="submit" className='login-page-btn'>Register</button>
          <div className='not-register'>
            <h6>Already have an account?</h6>
            <Link style={{textDecoration:"none", color:"black", fontSize:"18px"}} to={"/login"}>Login</Link>
          </div>
        </form>
      </div>
    </div>  
    </>
  )
};

export default Register;