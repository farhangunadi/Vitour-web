import React from 'react';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import CardCompt from '../../../CardComponent/CardCompt';
import CardCompt2 from '../../../CardComponent/CardCompt2';
import CarouselCompt from '../../../CarouselCompt/CarouselCompt';
import ImageDefault from './../../CardComponent/default-2.jpg';
import './bandung.css'

function cityCompt(props) {
  return (
    <>
        <Container className="container-city">
        <div className="title">
            <h1>{props.kota}</h1>
            <h2>{props.provinsi}</h2>
        </div>
        <div className="img-wrap">
            <img src={props.image} alt="" />
        </div>
        <div className="description">
            <p>{props.desc}</p>
        </div>
        </Container>
    </>
  )
}

cityCompt.defaultProps = {
    kota: "Kota",
    provinsi: "Provinsi",
    image: ImageDefault,
    desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis porro, unde atque necessitatibus commodi totam quia rerum iusto accusamus dignissimos vero debitis incidunt excepturi error a, nihil optio accusantium in.",
}

export default cityCompt