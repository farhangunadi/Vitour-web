import React from 'react';
import './CardCompt.css';
import Image from './punclut.jpg';
import { FaMapMarkerAlt } from "react-icons/fa";

export const CardCompt = (props) => {
  return (
    <div className="card">
           <img src={Image} alt="" className="card-img" />
           <div className="card-content">
               <h1 className="card-header">Punclut</h1>
               <p className="card-text">
                <FaMapMarkerAlt /> Bandung, Jawa Barat
               </p>
               <button className="card-btn">Explore Now</button>
           </div>
       </div>   
  )
}
