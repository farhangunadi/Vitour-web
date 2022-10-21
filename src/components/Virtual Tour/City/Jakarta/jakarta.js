import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardCompt from "../../../CardComponent/CardCompt";
import CardCompt2 from "../../../CardComponent/CardCompt2";
import jktIMG from "./jkt.jpg";
import "./../city.css";
import KulinerImg from "./../../../../assets/images/kuliner.jpg";
import MerchImg from "./../../../../assets/images/merch.jpg";
import BudayaImg from "./../../../../assets/images/budaya.png";
import Monas from "./Foto/monas.jpg";
import Ancol from "./Foto/ancol.jpeg";
import BlokM from "./Foto/blokm.jpg";
import GBK from "./Foto/gbk.jpg";
import { Footer } from "../../../LandingPageCompt/Footer/Footer";

function jakarta() {
  return (
    <>
      <Container className="container-city">
        <div className="title">
          <h1>Jakarta</h1>
          <h2>DKI Jakarta</h2>
        </div>
        <div className="img-wrap">
          <img src={jktIMG} alt="" />
        </div>
        <div className="content">
          <div className="description">
            <p>
              Daerah Khusus Ibukota Jakarta (DKI Jakarta) adalah ibu kota negara
              dan kota terbesar di Indonesia. Jakarta merupakan satu-satunya
              kota di Indonesia yang memiliki status setingkat provinsi. Jakarta
              terletak di pesisir bagian barat laut Pulau Jawa. Dahulu pernah
              dikenal dengan beberapa nama di antaranya Sunda Kelapa, Jayakarta,
              dan Batavia. Di dunia internasional Jakarta juga mempunyai julukan
              J-Town, atau lebih populer lagi The Big Durian karena dianggap
              kota yang sebanding New York City (Big Apple) di Indonesia.
              Jakarta memiliki luas sekitar 661,52 km² (lautan: 6.977,5 km²),
              dengan penduduk berjumlah 10.187.595 jiwa (2011). Wilayah
              metropolitan Jakarta (Jabodetabek) yang berpenduduk sekitar 28
              juta jiwa, merupakan metropolitan terbesar di Asia Tenggara atau
              urutan kedua di dunia. Sebagai pusat bisnis, politik, dan
              kebudayaan, Jakarta merupakan tempat berdirinya kantor-kantor
              pusat BUMN, perusahaan swasta, dan perusahaan asing. Kota ini juga
              menjadi tempat kedudukan lembaga-lembaga pemerintahan dan kantor
              sekretariat ASEAN.{" "}
            </p>
          </div>
          <h2>Tempat Wisata</h2>
          <Row>
            <Col>
              <CardCompt
                header="Monas"
                to="/virtualtour/jakarta/monas"
                image={Monas}
              />
            </Col>
            <Col>
              <CardCompt
                header="Ancol"
                image={Ancol}
                to="/comingsoon"
                text="Jakarta"
              />
            </Col>
            <Col>
              <CardCompt
                header="Blok M"
                image={BlokM}
                to="/comingsoon"
                text="Jakarta"
              />
            </Col>
            <Col>
              <CardCompt
                header="Stadion GBK"
                image={GBK}
                to="/comingsoon"
                text="Jakarta"
              />
            </Col>
          </Row>
          <h2>Informasi Daerah</h2>
          <Row>
            <Col>
              <CardCompt2
                header="Kuliner"
                to={"/virtualtour/jakarta/kuliner"}
                image={KulinerImg}
              />
            </Col>
            <Col>
              <CardCompt2
                header="Toko Merch"
                to={"/virtualtour/jakarta/merch"}
                image={MerchImg}
              />
            </Col>
            <Col>
              <CardCompt2
                header="Budaya"
                to={"/virtualtour/jakarta/budaya"}
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

export default jakarta;
