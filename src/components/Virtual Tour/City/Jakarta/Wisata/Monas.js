import React from 'react';
import {Container, Row, Col, Carousel} from 'react-bootstrap';
import './../../Wisata.css';
import { Link } from "react-router-dom";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Footer } from '../../../../LandingPageCompt/Footer/Footer';

function Punclut() {
  return (
    <div className="wrap-wisata">
    <Container className='container-wisata'>
        <h2>Monas, DKI Jakarta</h2>
        <div className="iframe-container">
            <iframe width="1120" height="630" src="https://www.youtube.com/embed/Tmmq6NCH7h0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div className="content">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sem justo, porttitor ac vestibulum nec, mattis a turpis. Integer sit amet elit ex. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec sollicitudin consectetur vestibulum. Pellentesque finibus in erat eu lacinia. Nam quis orci lorem. Praesent mi felis, euismod eu nunc id, ultricies finibus neque. Fusce eget gravida risus. Quisque a vehicula magna. Pellentesque mattis eu urna ac finibus. Nullam sit amet leo ut ipsum gravida posuere. Duis volutpat urna in neque malesuada euismod. Praesent vitae mi eget ligula accumsan efficitur. Vestibulum molestie tempus odio, ut dapibus felis finibus sit amet. Etiam id lacus sed dui scelerisque volutpat ac nec diam. Donec augue ipsum, auctor nec velit dapibus, malesuada dignissim ligula.</p>
          <h2>Lokasi Objek Wisata</h2>
          <div className="LocNavigation">
            <button className="card-btn" onClick={() => {
              window.open("https://www.google.com/maps/place/National+Monument/@-6.1714789,106.8074695,13.88z/data=!4m12!1m6!3m5!1s0x2e69f5d2e764b12d:0x3d2ad6e1e0e9bcc8!2sNational+Monument!8m2!3d-6.1753924!4d106.8271528!3m4!1s0x2e69f5d2e764b12d:0x3d2ad6e1e0e9bcc8!8m2!3d-6.1753924!4d106.8271528", "_blank");
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

export default GoogleApiWrapper({
  apiKey: ('AIzaSyBAjMh99Gr3x2uZT_91r5yiBE0HkYt1npE')
})(Punclut);