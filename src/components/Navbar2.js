import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../assets/images/logo-white.png";
import "./Navbar.css";
function Navbar2() {
  const [isMobile, setIsMobile] = useState(false);
  const [stickyNav, setStickyNav] = useState(false);

  const changeNavbarBackground = () => {
    if (window.scrollY >= 100) {
      setStickyNav(true);
    } else {
      setStickyNav(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBackground);

  return (
    <nav className={stickyNav ? "navbar active" : "navbar"}>
      <div className="img-wrapper">
        <img src={Logo} alt="" className="logo" />
      </div>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <li>
          <a href="/" className="Home">
            Home
          </a>
        </li>
        <li>
          <a href="/item" className="Store">
            Store
          </a>
        </li>
        <li>
          <a href="/virtualtour" className="vTour">
            Virtual Tour
          </a>
        </li>
        <li>
          <a href="/about" className="about">
            About
          </a>
        </li>
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
