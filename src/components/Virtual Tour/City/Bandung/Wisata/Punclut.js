import React from 'react';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import './Punclut.css';

function Punclut() {
  return (
    <Container className='container-wisata'>
        <h2>Punclut, Bandung</h2>
        <div className="iframe-container">
            <iframe src="https://www.youtube.com/embed/OgQtDFRWai8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </Container>
  )
}

export default Punclut