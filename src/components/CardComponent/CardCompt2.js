import React from "react";
import "./CardCompt2.css";
import Image from "./default-2.jpg";
import { Link } from "react-router-dom";

export const CardCompt = (props) => {
  return (
    <a href="http://" class="card">
      <img src={props.image} alt="" class="img" />
      <span class="overlay"></span>
      <div class="card__overlay">
        <div class="card__header">
          <div class="card__header-text">
            <h3 class="card__title">{props.header}</h3>
          </div>
        </div>
        <p class="card__description">{props.text}</p>
        <div class="btn-wrap">
          <button href="http://" class="btn-method">
            Discover
          </button>
        </div>
      </div>
    </a>
  );
};

CardCompt.defaultProps = {
  header: "Lorem Ipsum",
  text:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, nisi blanditiis cum repudiandae eius architecto autem.",
  image: Image,
  to: "/",
};

export default CardCompt;
