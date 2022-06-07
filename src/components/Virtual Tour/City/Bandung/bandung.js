import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import CardCompt from "../../../CardComponent/CardCompt";
import CardCompt2 from "../../../CardComponent/CardCompt2";
import bdgIMG from "./bdg1.jpg";
import "./../city.css";
import KulinerImg from "./../../../../assets/images/kuliner.jpg";
import MerchImg from "./../../../../assets/images/merch.jpg";
import BudayaImg from "./../../../../assets/images/budaya.png";
import asiaAfrika from "./Foto/asiaafrika.jpg";
import alun2 from "./Foto/alun-alun-bandung-profile1639354810.png";
import kawahPutih from "./Foto/5ee5d42ba7d43.jpg";
import tegalega from "./Foto/tegalega.jpg";
import { Footer } from "../../../LandingPageCompt/Footer/Footer";

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
            <p>
              Kota Bandung merupakan kota metropolitan terbesar di Provinsi Jawa
              Barat,sekaligus menjadi ibu kota provinsi tersebut. Kota ini
              merupakan kota terbesar ketigadi Indonesia setelah Jakarta dan
              Surabaya menurut jumlah penduduk. Selain itu, KotaBandung juga
              merupakan kota terbesar di wilayah Pulau Jawa bagian
              selatan.Sedangkan wilayah Bandung Raya wilayah metropolitan
              Bandung merupakan metropolitan terbesar ketiga di Indonesia
              setelah Jabodetabek dan gerbang kertosusila.
              <hr></hr>
              Kota kembang merupakan sebutan lain untuk kota ini, karena pada
              1aman dulu kotaini dinilai sangat cantik dengan banyaknya
              pohon-pohon dan bunga-bunga yangtumbuh di sana. Selain itu Bandung
              dahulunya disebut juga dengan Parijs van Javakarena keindahannya.
              Selain itu kota Bandung juga dikenal sebagai kota belanja,dengan
              mall dan factory outlet yang banyak tersebar di kota ini, dan saat
              ini berangsur-angsur kota Bandung juga menjadi kota wisata
              kuliner-an pada tahun2003, British council menjadikan kota Bandung
              sebagai pilot project kota terkreatif se-asia timur. Saat ini kota
              Bandung merupakan salah satu kota tujuan utama pariwisata dan
              pendidikan
            </p>
          </div>
          <h2>Tempat Wisata</h2>
          <Row>
            <Col>
              <CardCompt
                header="Alun-alun bandung"
                text="Bandung, Jawa Barat"
                image={alun2}
                to={"/virtualtour/bandung/alun-alun"}
              />
            </Col>
            <Col>
              <CardCompt
                header="Asia Afrika"
                text="Bandung, Jawa Barat"
                image={asiaAfrika}
                to="/comingsoon"
              />
            </Col>
            <Col>
              <CardCompt
                header="Kawah Putih"
                text="Bandung, Jawa Barat"
                image={kawahPutih}
                to={"/virtualtour/bandung/kawah-putih"}
              />
            </Col>
            <Col>
              <CardCompt
                header="Tegalega"
                text="Bandung, Jawa Barat"
                image={tegalega}
                to="/comingsoon"
              />
            </Col>
          </Row>
          <h2>Informasi Daerah</h2>
          <Row>
            <Col>
              <CardCompt2
                header="Kuliner"
                to={"/virtualtour/bandung/kuliner"}
                image={KulinerImg}
              />
            </Col>
            <Col>
              <CardCompt2
                header="Toko Merch"
                to={"/virtualtour/bandung/merchstore"}
                image={MerchImg}
              />
            </Col>
            <Col>
              <CardCompt2
                header="Budaya"
                to={"/virtualtour/bandung/budaya"}
                image={BudayaImg}
              />
            </Col>
          </Row>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export default bandung;
