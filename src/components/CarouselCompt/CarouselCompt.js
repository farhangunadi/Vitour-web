import React from 'react';
import {Carousel} from 'react-bootstrap';
import Image from './../../assets/images/bandung.jpg'


const CarouselCompt = (props) => {
  return (
    <Carousel fade={true} interval={5000} controls={false}>
        <Carousel.Item>
            <img className="d-block w-100" src={props.image1} alt="" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={props.image2} alt="" />
        </Carousel.Item>
        <Carousel.Item>
            <img className="d-block w-100" src={props.image3} alt="" />
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