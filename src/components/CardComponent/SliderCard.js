import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import CardCompt from "./CardCompt4";
import "./SliderCard.css";
import Monas from "./../Virtual Tour/City/Jakarta/Foto/monas.jpg";
// import gbk from "./../Virtual Tour/City/Jakarta/Foto/gbk.jpg";
// import Alun2 from "./../Virtual Tour/City/Bandung/Foto/alun-alun-bandung-profile1639354810.png";
// import Tegalega from "./../Virtual Tour/City/Bandung/Foto/tegalega.jpg";

export default class SliderCard extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <div className="slider-container">
        <h2 className="title_slider">Popular Destination</h2>
        <Slider {...settings}>
          <div>
            <div className="card_container">
              <img src={Monas} alt="" className="card_img" />
              <div className="card_content">
                <h2 className="card_title">Monas</h2>
                <p className="card_desc">Jakarta, Indonesia</p>
                <div className="card_btn_wrap">
                  <button
                    onClick={() => {
                      window.open(
                        "https://api.whatsapp.com/send?phone=628989040798",
                        "_blank"
                      );
                    }}
                    className="card-btn"
                  >
                    Discover
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card_container">
              <img src={Monas} alt="" className="card_img" />
              <div className="card_content">
                <h2 className="card_title">Monas</h2>
                <p className="card_desc">Jakarta, Indonesia</p>
                <div className="card_btn_wrap">
                  <button
                    onClick={() => {
                      window.open(
                        "https://api.whatsapp.com/send?phone=628989040798",
                        "_blank"
                      );
                    }}
                    className="card-btn"
                  >
                    Discover
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card_container">
              <img src={Monas} alt="" className="card_img" />
              <div className="card_content">
                <h2 className="card_title">Monas</h2>
                <p className="card_desc">Jakarta, Indonesia</p>
                <div className="card_btn_wrap">
                  <button
                    onClick={() => {
                      window.open(
                        "https://api.whatsapp.com/send?phone=628989040798",
                        "_blank"
                      );
                    }}
                    className="card-btn"
                  >
                    Discover
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card_container">
              <img src={Monas} alt="" className="card_img" />
              <div className="card_content">
                <h2 className="card_title">Monas</h2>
                <p className="card_desc">Jakarta, Indonesia</p>
                <div className="card_btn_wrap">
                  <button
                    onClick={() => {
                      window.open(
                        "https://api.whatsapp.com/send?phone=628989040798",
                        "_blank"
                      );
                    }}
                    className="card-btn"
                  >
                    Discover
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="card_container">
              <img src={Monas} alt="" className="card_img" />
              <div className="card_content">
                <h2 className="card_title">Monas</h2>
                <p className="card_desc">Jakarta, Indonesia</p>
                <div className="card_btn_wrap">
                  <button
                    onClick={() => {
                      window.open(
                        "https://api.whatsapp.com/send?phone=628989040798",
                        "_blank"
                      );
                    }}
                    className="card-btn"
                  >
                    Discover
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <div>
            <CardCompt
              className="cardCompt"
              image={Monas}
              header="Monas"
              to="/virtualtour/jakarta/monas"
              text="Jakarta"
            />
          </div> */}
        </Slider>
      </div>
    );
  }
}
