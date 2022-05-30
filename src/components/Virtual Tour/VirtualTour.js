import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import { CardCompt } from '../CardComponent/CardCompt';
import './VirtualTour.css';
import bandungIMG from './../../assets/images/bandung.jpg';
import jakartaIMG from './../../assets/images/jakarta.jpg';
import pwkIMG from './../../assets/images/pwk.jpg';

function VirtualTour() {
  return (
    <div className="wrap">
      <Container className='containerVT'>
        <div className="title">
          <h1>Choose City</h1>
        </div>
        <Row className='city-wrap'>
          <Col>
            <CardCompt className="city" header="Bandung" image={bandungIMG} text="Indonesia" to={"/virtualtour/bandung"}/>
          </Col>
          <Col>
            <CardCompt header="Jakarta" image={jakartaIMG} text="Indonesia" to={"/virtualtour/jakarta"}/>
          </Col>
          <Col>
            <CardCompt header="Purwakarta" image={pwkIMG} text="Indonesia" to={"/virtualtour/purwakarta"}/>
          </Col>
        </Row>
      </Container>
    </div>
   
  )
}

export default VirtualTour