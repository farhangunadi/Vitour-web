import React from 'react';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import CardCompt from '../../../CardComponent/CardCompt';
import CardCompt2 from '../../../CardComponent/CardCompt2';
import bdgIMG from './bdg1.jpg';
import './../city.css';
import KulinerImg from './../../../../assets/images/kuliner.jpg';
import MerchImg from './../../../../assets/images/merch.jpg';
import BudayaImg from './../../../../assets/images/budaya.png';

function bandung() {
  return (
    <>
        <Container className="container-city">
        <div className="title">
            <h1>Bandung </h1>
            <h2>Jawa Barat</h2>
        </div>
        <div className="img-wrap">
            <img src={bdgIMG} alt="" />
        </div>
        <div className="content">
            <div className="description">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem justo, porttitor ac vestibulum nec, mattis a turpis. Integer sit amet elit ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sollicitudin consectetur vestibulum. Pellentesque finibus in erat eu lacinia. Nam quis orci lorem. Praesent mi felis, euismod eu nunc id, ultricies finibus neque. Fusce eget gravida risus. Quisque a vehicula magna. Pellentesque mattis eu urna ac finibus. Nullam sit amet leo ut ipsum gravida posuere. Duis volutpat urna in neque malesuada euismod. Praesent vitae mi eget ligula accumsan efficitur. Vestibulum molestie tempus odio, ut dapibus felis finibus sit amet. Etiam id lacus sed dui scelerisque volutpat ac nec diam. Donec augue ipsum, auctor nec velit dapibus, malesuada dignissim ligula.</p>
            </div>
            <h2>Tempat Wisata</h2>
            <Row>
                <Col>
                    <CardCompt header="Punclut"  to={"/virtualtour/bandung/punclut"}/>
                </Col>
                <Col>
                    <CardCompt header="Asia Afrika" to="/comingsoon"/>
                </Col>
                <Col>
                    <CardCompt header="Curug Pelangi" to="/comingsoon"/>
                </Col>
                <Col>
                    <CardCompt header="Tegalega" to="/comingsoon"/>
                </Col>
            </Row>
            <h2>Informasi Daerah</h2>
            <Row>
                <Col>
                    <CardCompt2 header="Kuliner"  to={"/virtualtour/bandung/kuliner"} image={KulinerImg}/>
                </Col>
                <Col>
                    <CardCompt2 header="Toko Merch" to={"/virtualtour/bandung/merchstore"} image={MerchImg}/>
                </Col>
                <Col>
                    <CardCompt2 header="Budaya" to={"/virtualtour/bandung/budaya"} image={BudayaImg}/>
                </Col>
            </Row>
        </div>
        </Container>
        
        
    </>
    
    
  )
}

export default bandung