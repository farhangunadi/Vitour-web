import React from 'react'
import './CardCompt.css';
import Image from './default-2.jpg';
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const CardCompt4 = (props) => {
  return (
        <div className="card">
           <img src={props.image} alt="" className="card-img" />
           <div className="card-content">
               <h1 className="card-header">{props.header}</h1>
               <p className="card-desc">{props.desc}</p>
               <p className="card-text">
                <FaMapMarkerAlt /> {props.loc}
               </p>
               <Link to={props.to} className="buttonExplore">
                  <button className="card-btn">Send Message</button>
               </Link>
           </div>
       </div>  
  )
}

CardCompt4.defaultProps = {
  header : 'Lorem Ipsum',
  desc : 'Lorem Ipsum',
  loc : 'Jawa Barat' ,
  image : Image,
  to : '/'

}

export default CardCompt4;
