import React from "react";
import "./Header.css";
import { Carousel, Button } from "react-bootstrap";
import Image1 from "./../../../assets/images/pict (1).png";
import Image2 from "./../../../assets/images/pict (2).png";
import Image3 from "./../../../assets/images/pict (3).png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Carousel fade={true} interval={5000} controls={false}>
      <Carousel.Item>
        <div className="overlay-container">
          <div className="overlay"></div>
        </div>
        <img
          className="d-block w-100"
          src={Image1}
          alt="First slide"
          width={900}
          height="auto"
        />
        <Carousel.Caption>
          <h2>Explore your dream tourist spot virtually</h2>
          <p>
            Find a tourist spot you want to visit then enjoy the sensation of
            traveling virtually
          </p>
          {/* <Link to="/virtualtour" className="buttonVitour">
          <button className="button1">Start Virtual Tour</button>
        </Link> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="overlay"></div>
        <img
          className="d-block w-100"
          src={Image2}
          alt="Second slide"
          width={900}
          height="auto"
        />

        <Carousel.Caption>
          <h2>Explore your dream tourist spot virtually</h2>
          <p>
            Find a tourist spot you want to visit then enjoy the sensation of
            traveling virtually
          </p>
          {/* <Link to="/virtualtour" className="buttonExplore">
          <button className="button1">Start Virtual Tour</button>
        </Link> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="overlay"></div>
        <img
          className="d-block w-100"
          src={Image3}
          alt="Third slide"
          width={900}
          height="auto"
        />

        <Carousel.Caption>
          <h2>Explore your dream tourist spot virtually</h2>
          <p>
            Find a tourist spot you want to visit then enjoy the sensation of
            traveling virtually
          </p>
          {/* <Link to="/virtualtour" className="buttonExplore">
          <button className="button1">Start Virtual Tour</button>
        </Link> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Header;
