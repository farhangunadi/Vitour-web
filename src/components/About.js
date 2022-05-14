import React from 'react';
import './LandingPageCompt/Body/Body.css'
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import Logo from '../assets/images/logo2.png';
import { Footer } from './LandingPageCompt/Footer/Footer'
import AboutCard from './AboutCard';

function About() {
  return (
    <div>
      <div className='container'>
      <h1>Our Team</h1>
      <AboutCard/>
      </div>
        <div className="aboutus">
            <h2>About us</h2>
                <Row>
                    <Col>
                        <p>Vitour merupakan website pariwisata berbasis virtual yang memudahkan orang untuk berpergian mengunjungi tempat wisata tanpa harus mendatanginya serta didukung informasi tentang kebudayaan di tiap daerah di Indonesia</p>
                        <p>VITOUR akan menjadi solusi alternatif bagi anda yang ingin melakukan rekreasi tanpa khawatir akan keterbatasan waktu, biaya dan tempat. 
                           Dalam jangka panjang VITOUR juga dapat meningkatkan pengetahuan masyarakat mengenai pariwisata lokal.</p>
                    </Col>
                    <Col>
                        <div className="img-wrap">
                            <img src={Logo} alt="" />
                        </div>
                    </Col>
                </Row>
            </div>
        <Footer />
    </div>
  )
}

export default About