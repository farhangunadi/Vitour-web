import React from 'react';
import './Body.css';
import { CardCompt } from '../../CardComponent/CardCompt';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import Logo from './../../../assets/images/logo2.png';

function Body() {
  return (
    <>
        <div className="container">
            <div className="search-wrapper">
                <div class="search_box">
				<input type="text" class="input" placeholder="search..."/>
				<div class="btn">
					<p>Search</p>
				</div>
			</div>
            </div>
            <div className="title">
                <h2>Popular Destination</h2>
            </div>
            <div className="grid">
                <CardCompt className='cardCompt' />
                <CardCompt className='cardCompt' />
                <CardCompt className='cardCompt' />
                <CardCompt className='cardCompt' />
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
        </div>
    </>
  )
}

export default Body