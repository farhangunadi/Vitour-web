import React from 'react';
import food from './../../assets/images/karedok.jpg';
import Image from './default-2.jpg';
import {Row, Col} from 'react-bootstrap';
import "./CardCompt3.css";
import { Link } from "react-router-dom";

export const CardCompt3 = (props) => {
  return (
    <div className="card3-container">
        <Row>
            <Col className='deskripsi'>
                <h3>{props.title}</h3>
                <p>{props.desc}</p>
                <div className="RestoNavigation">
                <button className="card-btn" onClick={() => {
                window.open("https://www.google.com/maps/search/penjual+karedok+di+bandung/@-6.917931,107.6097062,15z/data=!3m1!4b1", "_blank");
                }}>Find Resto</button>
          </div>
            </Col>
            <Col>
                <img src={props.image} alt="" />
            </Col>
        </Row>
    </div>
  )
}

CardCompt3.defaultProps = {
  title : 'Lorem Ipsum',
  desc : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis porro, unde atque necessitatibus commodi totam quia rerum iusto accusamus dignissimos vero debitis incidunt excepturi error a, nihil optio accusantium in.",
  image : Image ,
}

export default CardCompt3;
