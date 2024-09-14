import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";



const Navbar = ({ logo }) => {


  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };

  const goToSignup = () => {
    navigateTo("/signup");
  };

  return (
    <div class="container2">
      <header>
      <nav>
        <input type='checkbox' id='check'></input>
        <label for="check" className='checkbtn'>
          <GiHamburgerMenu/>
        </label>
        <div class="logo">
          <img className="logo-img" src="/logo.webp"></img>
        </div>

      
    
      <div style={{ flexGrow: 1, marginRight: "30px" }}>
        <input 
          type="text" 
          placeholder="Search..." 
          className='searchbar'
        />
      </div>
        <ul>
          <li className='links'>
            <Link to={"/"}>HOME</Link>
            <Link to={"/men"} >MENS</Link>
            <Link to={"/women"}>WOMENS</Link>
            <Link to={"/kid"}>KIDS</Link>
           
            <i class="fa-solid fa-cart-shopping"></i>
            <button className='btn logoutBtn' onClick={goToLogin}>LOGIN</button>
            <button className='btn logoutBtn' onClick={goToSignup}>SIGN UP</button>
          </li>
        </ul>
        
      </nav>
      </header>
    </div>

  );
};

export default Navbar;