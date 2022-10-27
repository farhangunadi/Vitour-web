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

export class SliderCard extends Component {
  slider() {
    return (
      this.props.data &&
      this.props.data.map((post) => {
        return (
          <div>
            <div
              className="card_container"
              onClick={() => this.props.goDetail(post.city_id, post.nama_kota)}
              key={post.city_id}
            >
              <img src={Monas} alt="" className="card_img" />
              <div className="card_content">
                <h2 className="card_title">{post.nama_kota}</h2>
                <p className="card_desc">Indonesia</p>
                <div className="card_btn_wrap">
                  <button
                    onClick={() => this.props.goDetail(post.city_id)}
                    className="card-btn"
                  >
                    Discover
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })
    );
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
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
        <Slider {...settings}>{this.slider()}</Slider>
      </div>
    );
  }
}
