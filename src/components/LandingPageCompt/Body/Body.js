import React from 'react';
import './Body.css';
import { CardCompt } from '../../CardComponent/CardCompt';
import Logo from './../../../assets/images/logo2.png';
import Monas from './../../Virtual Tour/City/Jakarta/Foto/monas.jpg'
import gbk from './../../Virtual Tour/City/Jakarta/Foto/gbk.jpg'
import Alun2 from './../../Virtual Tour/City/Bandung/Foto/alun-alun-bandung-profile1639354810.png'
import Tegalega from './../../Virtual Tour/City/Bandung/Foto/tegalega.jpg'
import fiturImg1 from './../../../assets/images/fitur (1).png';
import fiturImg2 from './../../../assets/images/fitur (2).png';
import fiturImg3 from './../../../assets/images/fitur (3).png';
import {Carousel} from 'react-bootstrap';
import pakSandi from './../../../assets/images/pakSandi.jpg'
import ridwanKamil from './../../../assets/images/ridwanKamil.jpg'
import rektorUnpad from './../../../assets/images/rektorUnpad.jpeg'
import { CardCompt5 } from '../../CardComponent/CardCompt5';


function Body() {
  return (
    <>
         <div className="banner-fitur">
                <div className="banner">
                    <div className="banner-img-wrap">
                        <img src={fiturImg3} alt="" className='banner-img'/>
                    </div>
                    <p>Virtual Tour</p>
                </div>
                <div className="banner">
                    <div className="banner-img-wrap">
                        <img src={fiturImg2} alt="" className='banner-img'/>
                    </div>
                    <p>City Information</p>
                </div>
                <div className="banner">
                    <div className="banner-img-wrap">
                        <img src={fiturImg1} alt="" className='banner-img'/>
                    </div>
                    <p>Recommendation Store</p>
                </div>
        </div>
        <div className="container">
            <div className="title">
                <h2>Popular Destination</h2>
            </div>
            <div className="grid">
                <CardCompt className='cardCompt' image={Monas} header="Monas" to="/virtualtour/jakarta/monas"/>
                <CardCompt className='cardCompt' image={gbk} header="Stadion GBK" />
                <CardCompt className='cardCompt' image={Alun2} header="Alun-Alun Bandung" to={"/virtualtour/bandung/alun-alun"}/>
                <CardCompt className='cardCompt' image={Tegalega} header="Tegalega" />
            </div>
        </div>
        <div className="testimoni">
            <h2>Testimoni</h2>
                <Carousel fade={true} interval={5000} controls={false}>
                    <Carousel.Item>
                        <CardCompt5 
                            image={pakSandi}
                            subTitle="Menteri Pariwisata dan Ekonomi Kreatif"
                            title="Sandiaga Uno"
                            desc="Dibawah tangan-tangan ahli anak muda, bisa terciptalah suatu karya digital. Vitour merupakan salah satu platform pariwisata yang patut untuk untuk diapresiasi"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardCompt5 
                            image={ridwanKamil}
                            subTitle="Gubernur Jawa Barat"
                            title="Ridwan Kamil"
                            desc="Websitenya sangat bagus dan informatif. mengusung teknologi yang sedang hype di zaman sekarang dan bisa menjadi pusat informasi pariwisata"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <CardCompt5 
                            image={rektorUnpad}
                            subTitle="Rektor Unpad"
                            title="Prof. Dr. Rina Indiastuti, S.E., M.SIE."
                            desc="Perlunya sentralisasi informasi pariwisata menjadi salah satu solusi pelestarian budaya secara digital. Vitour menjadi salah satu dobrakan baru untuk menjadi pusat data pariwisata daerah"
                        />
                    </Carousel.Item>
                </Carousel> 
        </div>
    </>
  )
}

export default Body
            // <div className="search-wrapper">
            //     <div class="search_box">
            //         <input type="text" class="input" placeholder="search..."/>
            //         <div class="btn">
            //             <p>Search</p>
            //         </div>
			//     </div>
            // </div>