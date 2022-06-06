import React from 'react';
import {Container} from 'react-bootstrap';
import { Footer } from '../../LandingPageCompt/Footer/Footer';
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
        <Footer />
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