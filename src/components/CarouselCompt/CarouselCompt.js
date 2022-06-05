import React from 'react';
import {Carousel} from 'react-bootstrap';
import Image from './../../assets/images/bandung.jpg'


const CarouselCompt = (props) => {
  return (
<Carousel fade={true} interval={5000} controls={false}>
    <Carousel.Item>
      <div className="overlay-container">
        <div className="overlay"></div>
      </div>
      <img
        className="d-block w-100"
        src={props.image1}
        alt="First slide"
        width={900}
        height="auto"
      />
      <Carousel.Caption>
        <h2>Explore your dream tourist spot virtually</h2>
        <p>Find a tourist spot you want to visit then enjoy the sensation of traveling virtually</p>
        {/* <Link to="/virtualtour" className="buttonVitour">
          <button className="button1">Start Virtual Tour</button>
        </Link> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <div className="overlay"></div>
      <img
        className="d-block w-100"
        src={props.image2}
        alt="Second slide"
        width={900}
        height="auto"
      />

      <Carousel.Caption>
        <h2>Explore your dream tourist spot virtually</h2>
        <p>Find a tourist spot you want to visit then enjoy the sensation of traveling virtually</p>
        {/* <Link to="/virtualtour" className="buttonExplore">
          <button className="button1">Start Virtual Tour</button>
        </Link> */}
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <div className="overlay"></div>
      <img
        className="d-block w-100"
        src={props.image3}
        alt="Third slide"
        width={900}
        height="auto"
      />

      <Carousel.Caption>
        <h2>Explore your dream tourist spot virtually</h2>
        <p>Find a tourist spot you want to visit then enjoy the sensation of traveling virtually</p>
        {/* <Link to="/virtualtour" className="buttonExplore">
          <button className="button1">Start Virtual Tour</button>
        </Link> */}
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel> 
  )
}

CarouselCompt.defaultProps = {
  image1 : Image,
  image2 : Image,
  image3 : Image
}

export default CarouselCompt