import React from 'react';
import './Body.css';
import { CardCompt } from '../../CardComponent/CardCompt';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import Logo from './../../../assets/images/logo2.png';
import Monas from './../../Virtual Tour/City/Jakarta/Foto/monas.jpg'
import gbk from './../../Virtual Tour/City/Jakarta/Foto/gbk.jpg'
import AsiaAfrika from './../../Virtual Tour/City/Bandung/Foto/asiaafrika.jpg'
import Tegalega from './../../Virtual Tour/City/Bandung/Foto/tegalega.jpg'


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
                <CardCompt className='cardCompt' image={Monas} header="Monas"/>
                <CardCompt className='cardCompt' image={gbk} header="Stadion GBK" />
                <CardCompt className='cardCompt' image={AsiaAfrika} header="Asia Afrika" />
                <CardCompt className='cardCompt' image={Tegalega} header="Tegalega" />
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