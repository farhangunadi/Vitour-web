import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "./../../Wisata.css";
import { Link } from "react-router-dom";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { Footer } from "../../../../LandingPageCompt/Footer/Footer";

function Alun2() {
  return (
    <div className="wrap-wisata">
      <Container className="container-wisata">
        <h2>Alun2, Bandung</h2>
        <div className="iframe-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/XML3xOymKKk"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
          ></iframe>
        </div>
        <div className="content">
          <p>
            Alun-alun Bandung telah menjadi magnet khusus untuk masyarakat lokal
            maupun masyarakat dari luar daerah. Baik siang maupun malam,
            Alun-alun Bandung menjadi tempat wisata yang menyenangkan. Sebagai
            kota yang dibangun dengan mempertimbangkan aspek kosmologi,
            alun-alun menjadi salah satu elemen pembentuk Kota Bandung sejak
            pusat pemerintahan Kabupaten Bandung pada 25 September 1810.
            Alun-alun Bandung mengalami perubahan dari titik batas ruang prafon
            dan ruang sakral menjadi ruang terbuka publik. Berdasarkan ketentuan
            Peraturan Daerah Nomor 18 tahun 2011 tentang Rencana Tata Ruang
            Wilayah Kota Bandung Tahun 2011-2031 Pasal 74 ayat (2) huruf a,
            perwujudan optimasi fungsi dan pelayanan pusat pelayanan kota
            dilaksanakan melalui penyusunan Rencana Tata Bangunan dan Lingkungan
            atau Panduan Rancang Kota.
          </p>
          <p>
            Kawasan pusat alun-alun merupakan kawasan strategis karena mempunyai
            pengaruh wilayah yang sangat penting terhadap wilayah yang lebih
            besar. Alun-alun Bandung sempat mengalami beberapa kali renovasi.
            Renovasi yang dilakukan terkait dengan estetika. Pada dekade 1950
            hingga 1960, Alun-alun Bandung dihiasi dengan berbagai jenis bunga.
            Tahun 1973, Alun-alun Bandung diperindah dengan kolam air mancur
            yang selama 10 tahun menjadi ikon Alun-alun Bandung. Pada 2018,
            Pemerintah Kota Bandung mengganti rumput sintetis. Alun-alun Kota
            Bandung merupakan bagian dari sejarah Bandung. Destinasi utama Kota
            Bandung ini masih menyisakan jejak-jejak masa lalu yang dapat
            ditelusuri.
          </p>
          <h2>Lokasi Objek Wisata</h2>
          <div className="LocNavigation">
            <button
              className="card-btn"
              onClick={() => {
                window.open(
                  "https://www.google.com/maps/place/Alun-Alun+Kota+Bandung/@-6.9218518,107.6048254,17z/data=!3m1!4b1!4m5!3m4!1s0x2e68e89dbe0ec231:0x177412aac90cd065!8m2!3d-6.9218571!4d107.6070141",
                  "_blank"
                );
              }}
            >
              Navigasi ke Objek Wisata
            </button>
          </div>
          {/* <Link to="/" className="LocNavigation">
              <button className="card-btn">Navigasi ke Objek Wisata</button>
          </Link> */}
          {/* <div className="maps-container">
             <Map
              className="map"
              google={this.props.google}
              zoom={8}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            >
            <Marker position={{ lat: 48.00, lng: -122.00}} />
          </Map>
          </div> */}
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBAjMh99Gr3x2uZT_91r5yiBE0HkYt1npE",
})(Alun2);
