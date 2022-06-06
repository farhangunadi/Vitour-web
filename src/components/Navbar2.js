import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Logo from "./../assets/images/logo 1.png"
import "./Navbar.css";
function Navbar2() {
    const [isMobile, setIsMobile] = useState(false);
    return (
        <nav className="navbar">
            <div className="img-wrapper">
                <img src={Logo} alt="" className='logo'/>
            </div>
            <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
                <Link to="/" className="Home">
                    <li>Home</li>
                </Link>
                <Link to="/item" className="Store">
                    <li>Store</li>
                </Link>
                <Link to="/virtualtour" className="vTour">
                    <li>Virtual Tour</li>
                </Link>
                <Link to="/about" className="about">
                    <li>About</li>
                </Link>
            </ul>
            <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
            </button>
        </nav>
    )
}

export default Navbar2