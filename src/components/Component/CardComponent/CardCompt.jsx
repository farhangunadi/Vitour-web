import React from "react";
import "./CardCompt.css";
import Image from "./default-2.jpg";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const CardCompt = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="" className="card-img" />
      <div className="card-content">
        <h1 className="card-header"> {props.header} </h1>{" "}
        <p className="card-text">
          <FaMapMarkerAlt /> {props.text}{" "}
        </p>{" "}
        <Link to={props.to} className="buttonExplore">
          <button className="card-btn"> Explore Now </button>{" "}
        </Link>{" "}
      </div>{" "}
    </div>
  );
};

CardCompt.defaultProps = {
  header: "Lorem Ipsum",
  text: "Lorem Ipsum",
  image: Image,
  to: "/",
};

export default CardCompt;
