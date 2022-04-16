import React from 'react';
import { Link } from "react-router-dom";
import './footer.css';

export const Footer = () => {
  return (
    <>
        <div className="footer">
            <ul className="flex-row">
               <li><a href="/beranda">Home</a></li>
               <li><a href="/virtualtour">Virtual Tour</a></li>
               <li><a href="/rekomendasi">Store</a></li>
               <li><a href="/about">About</a></li>
            </ul>
            <ul className="flex-row">
                <i className="fas fa-youtube"></i>
                <i className="fas fa-twitter"></i>
                <i className="fas fa-instagram"></i>
                <i className="fas fa-facebook"></i>
                <i className="fas fa-linkedin"></i>
            </ul>
            <p>&copy: 2022 Vitour</p>
        </div>
    </>
  )
}
