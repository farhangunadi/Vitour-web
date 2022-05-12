import React from 'react';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import CardCompt from '../../../CardComponent/CardCompt';
import CardCompt2 from '../../../CardComponent/CardCompt2';
import jktIMG from './jkt.jpg';
import './../city.css';

function jakarta() {
  return (
    <>
        <Container className="container-city">
        <div className="title">
            <h1>Jakarta</h1>
            <h2>DKI Jakarta</h2>
        </div>
        <div className="img-wrap">
            <img src={jktIMG} alt="" />
        </div>
        <div className="content">
            <div className="description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem justo, porttitor ac vestibulum nec, mattis a turpis. Integer sit amet elit ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sollicitudin consectetur vestibulum. Pellentesque finibus in erat eu lacinia. Nam quis orci lorem. Praesent mi felis, euismod eu nunc id, ultricies finibus neque. Fusce eget gravida risus. Quisque a vehicula magna. Pellentesque mattis eu urna ac finibus. Nullam sit amet leo ut ipsum gravida posuere. Duis volutpat urna in neque malesuada euismod. Praesent vitae mi eget ligula accumsan efficitur. Vestibulum molestie tempus odio, ut dapibus felis finibus sit amet. Etiam id lacus sed dui scelerisque volutpat ac nec diam. Donec augue ipsum, auctor nec velit dapibus, malesuada dignissim ligula.</p>
            </div>
            <h2>Tempat Wisata</h2>
            <Row>
                <Col>
                    <CardCompt header="Monas"  to={""}/>
                </Col>
                <Col>
                    <CardCompt header="Ancol"/>
                </Col>
                <Col>
                    <CardCompt header="Blok M"/>
                </Col>
                <Col>
                    <CardCompt header="Stadion GBK" />
                </Col>
            </Row>
            <h2>Informasi Daerah</h2>
            <Row>
                <Col>
                    <CardCompt2 header="Kuliner"  to={"/virtualtour/jakarta/kuliner"}/>
                </Col>
                <Col>
                    <CardCompt2 header="Toko Merch" to={"/virtualtour/jakarta/merchstore"}/>
                </Col>
                <Col>
                    <CardCompt2 header="Budaya" to={"/virtualtour/jakarta/budaya"}/>
                </Col>
            </Row>
        </div>
        </Container> 
    </>
  )
}

export default jakarta