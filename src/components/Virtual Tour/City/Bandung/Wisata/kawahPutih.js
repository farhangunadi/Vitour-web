import React from 'react';
import {Container} from 'react-bootstrap';
import './../../Wisata.css';

import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Footer } from '../../../../LandingPageCompt/Footer/Footer';

function kawahPutih() {
  return (
    <div className="wrap-wisata">
    <Container className='container-wisata'>
        <h2>Kawah Putih, Bandung</h2>
        <div className="iframe-container">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/znlDVhzWppU" title="YouTube video player" allowfullscreen="true" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>        </div>
        <div className="content">
          <p>
            Kawah Putih adalah sebuah tempat wisata di Jawa Barat yang terletak di Desa Alam Endah, Kecamatan Rancabali, Kabupaten Bandung Jawa Barat yang terletak di kaki Gunung Patuha. Kawah putih merupakan sebuah danau yang terbentuk dari letusan Gunung Patuha. Tanah yang bercampur belerang di sekitar kawah ini berwarna putih, lalu warna air yang berada di kawah ini berwarna putih kehijauan, yang unik dari kawah ini adalah airnya kadang berubah warna. Danau Kawah Putih sendiri berada pada ketinggian 2194 m tapi luas total Danau Kawah Putih 25 ha yang dipakai wisata 5 ha dan lokasi kawah sendiri 3 ha.          </p>
          <p>
            Perairannya yang berwarna biru kristal berubah dengan kondisi cuaca, dan dilapisi dengan pasir putih halus, memberikan pengunjung pengalaman dunia lain. Bahkan vegetasi di sekitar area ini sangat berbeda dengan yang di bawah.         </p>
          <h2>Lokasi Objek Wisata</h2>
          <div className="LocNavigation">
            <button className="card-btn" onClick={() => {
              window.open("https://www.google.com/maps/place/White+Crater/@-7.166154,107.4010453,18z/data=!3m1!4b1!4m5!3m4!1s0x2e688c1383dc510f:0xfab41bb8e4a3a83e!8m2!3d-7.1662039!4d107.4021256", "_blank");
            }}>Navigasi ke Objek Wisata</button>
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
  )
}

export default kawahPutih