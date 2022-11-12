import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/images/logo-white.png";
import Logout from "./LoginRegister/Logout"
import "./Navbar.css";

function isLogged() {

  const logout = () => {
    sessionStorage.clear();
    window.location.reload(true);
  };
  
  return (
    <div className="auth logged-in" >
      <li>
        <Link to="/my-cart" className="login">
          My Cart
        </Link>
      </li>
      <li>
        <Link to="/profile" className="login">
          Profile
        </Link>
      </li>
      <li>
        <Link to="/" onClickCapture={logout} className="logout">
          Logout
        </Link>
      </li>
    </div>
  )
}

function isNotLogged() {
  return (
    <div className="auth">
      <li>
        <Link to="/login" className="login">
          Login
        </Link>
      </li>
      <li>
        <Link to="/register" className="register">
          Register
        </Link>
      </li>
    </div>
  )
}

function Navbar2() {
  const [isMobile, setIsMobile] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);
  const [rightButton, setRightButton] = useState(isNotLogged);

  const changeNavbarBackground = () => {
    if (window.scrollY >= 100) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBackground);
  
  

  useEffect(() => {
    if(sessionStorage.getItem('token')) {
      // console.log(sessionStorage.getItem('token'))
      setRightButton(isLogged)
      // window.location.reload(true);
    }
  }, [])

  return (
    <nav className={stickyNav ? "navbar active" : "navbar"}>
      <div className="img-wrapper">
        <Link to="/"><img src={Logo} alt="" className="logo" /></Link>
      </div>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <Link to="/" className="Home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/store" className="Store">
            Store
          </Link>
        </li>
        <li>
          <Link to="/virtualtour" className="vTour">
            Virtual Tour
          </Link>
        </li>
        <li>
          <Link to="/about" className="about">
            About
          </Link>
        </li>
        <div>
          {rightButton}
        </div>
        

        
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </button>
    </nav>
  );
}

export default Navbar2;
