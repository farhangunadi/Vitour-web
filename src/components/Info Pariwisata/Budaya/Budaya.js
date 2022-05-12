import React from 'react';
import { Container } from 'react-bootstrap';
import { CardCompt3 } from './../../CardComponent/CardCompt3';
import "./../InfoPariwisata.css"

function Budaya(props) {
  return (
    <Container className="infoContainer">
    <div className="title">
        <h1>Budaya</h1>
        <h3>{props.loc}</h3>
    </div>
        <CardCompt3 />
    </Container>
  )
}
Budaya.defaultProps = {
    loc : "Kota, Provinsi"
}
export default Budaya