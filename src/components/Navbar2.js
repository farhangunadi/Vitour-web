import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";
function Navbar2() {
    const[isMobile, setIsMobile] = useState(false);
  return (
      <nav className="navbar">
          <h3 className="logo">VITOUR</h3>
          <ul className={isMobile? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
            <Link to="/beranda" className="beranda">
                <li>Beranda</li>
            </Link>
            <Link to="/Rekomendasi" className="rekomendasi">
                <li>Rekomendasi</li>
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