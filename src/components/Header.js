import React from 'react';
import './Header.css';
import {Carousel, Button} from 'react-bootstrap';
import Image1 from './../assets/images/pict (1).png';
import Image2 from './../assets/images/pict (2).png';
import Image3 from './../assets/images/pict (3).png';


function Header() {
  return (
    <Carousel fade={true} interval={5000} controls={false}>
    <Carousel.Item>
    <div className="overlay"></div>
      <img
        className="d-block w-100"
        src={Image1}
        alt="First slide"
        width={900}
        height="auto"
      />
      <Carousel.Caption>
        <h2>Kenali tempat wisata favoritmu bersama kami dengan video informasi yang menarik</h2>
        <p>Kami berkolaborasi dengan warga lokal untuk pengambilan video jelajah kami</p>
        <Button variant="primary" size={'lg'} className="button1"><p className='textButton1'>Mulai Virtual Tour</p> <i className="fas fa-solid fa-angle-right"></i></Button>
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
        <h2>Kenali tempat wisata favoritmu bersama kami dengan video informasi yang menarik</h2>
        <p>Kami berkolaborasi dengan warga lokal untuk pengambilan video jelajah kami</p>
        <Button variant="primary" size={'lg'} className="button1"><p className='textButton1'>Mulai Virtual Tour</p> <i className="fas fa-solid fa-angle-right"></i></Button>
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
        <h2>Kenali tempat wisata favoritmu bersama kami dengan video informasi yang menarik</h2>
        <p>Kami berkolaborasi dengan warga lokal untuk pengambilan video jelajah kami</p>
        <Button variant="primary" size={'lg'} className="button1"><p className='textButton1'>Mulai Virtual Tour</p> <i className="fas fa-solid fa-angle-right"></i></Button>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel> 
  );
}

export default Header