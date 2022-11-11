//library
import React, { useState, useEffect } from "react";
import "./Body.css";
import { Carousel } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Dots } from "loading-animations-react";

//component
import { CardCompt5 } from "../../Component/CardComponent/CardCompt5";
import { SliderCard } from "../../Component/CardComponent/SliderCard";
// import { CardCompt } from "../../CardComponent/CardCompt";

//image
import fiturImg1 from "./../../../assets/images/fitur (1).png";
import fiturImg2 from "./../../../assets/images/fitur (2).png";
import fiturImg3 from "./../../../assets/images/fitur (3).png";
import pakSandi from "./../../../assets/images/pakSandi.jpg";
import ridwanKamil from "./../../../assets/images/ridwanKamil.jpg";
import rektorUnpad from "./../../../assets/images/rektorUnpad.jpeg";
// import Logo from "./../../../assets/images/logo2.png";

function Body(props) {
  //get cities data
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostsCities = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://vitour-backend.herokuapp.com/api/cities"
      );
      setCities(res.data.data);
      setLoading(false);
      // console.log("HASIL :", res.data.data);
    };

    fetchPostsCities();
  }, []);

  //handler untuk navigasi ke page detail city
  const handleCityDetail = (id, nama_kota) => {
    navigate(`/city/${id}`, { state: { id: id, nama_kota: nama_kota } });
  };

  return (
    <>
      <div className="banner-fitur">
        <div className="banner">
          <div className="banner-img-wrap">
            <img src={fiturImg3} alt="" className="banner-img" />
          </div>
          <p>Virtual Tour</p>
        </div>
        <div className="banner">
          <div className="banner-img-wrap">
            <img src={fiturImg2} alt="" className="banner-img" />
          </div>
          <p>City Information</p>
        </div>
        <div className="banner">
          <div className="banner-img-wrap">
            <img src={fiturImg1} alt="" className="banner-img" />
          </div>
          <p>Recommendation Store</p>
        </div>
      </div>
      <div className="container-body">
        {loading ? (
          <div className="wrap_loading">
            <Dots className="spin-loading" color1="#003bfd" color2="#fff" />
          </div>
        ) : (
          <SliderCard data={cities} goDetail={handleCityDetail} />
        )}
        <div className="banner-merch">
          <div className="banner-merch-img-wrapper">
            <img
              src="https://statik.tempo.co/data/2021/10/17/id_1059371/1059371_720.jpg"
              alt=""
              className="img-banner-merch"
            />
          </div>
          <div className="banner-merch-content">
            <h1 className="banner-merch-title">
              Get Special Merch From Several Destination
            </h1>
            <p className="banner-merch-desc">
              Recommendation spesial merch from us only for you!
            </p>
            <Link to="/store">
              <button className="baner-merch-button">Find It</button>
            </Link>
          </div>
        </div>
        <div className="categories">
          <h1 className="category-title">Categories</h1>
          <p className="category-desc">Choose categories you want to see it!</p>
          <div className="category-container">
            <Link to="#">
              <div className="category-item">
                <svg
                  className="beach"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path d="M346.3 271.8l-60.1-21.9L214 448H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H282.1l64.1-176.2zm121.1-.2l-3.3 9.1 67.7 24.6c18.1 6.6 38-4.2 39.6-23.4c6.5-78.5-23.9-155.5-80.8-208.5c2 8 3.2 16.3 3.4 24.8l.2 6c1.8 57-7.3 113.8-26.8 167.4zM462 99.1c-1.1-34.4-22.5-64.8-54.4-77.4c-.9-.4-1.9-.7-2.8-1.1c-33-11.7-69.8-2.4-93.1 23.8l-4 4.5C272.4 88.3 245 134.2 226.8 184l-3.3 9.1L434 269.7l3.3-9.1c18.1-49.8 26.6-102.5 24.9-155.5l-.2-6zM107.2 112.9c-11.1 15.7-2.8 36.8 15.3 43.4l71 25.8 3.3-9.1c19.5-53.6 49.1-103 87.1-145.5l4-4.5c6.2-6.9 13.1-13 20.5-18.2c-79.6 2.5-154.7 42.2-201.2 108z" />
                </svg>
                <p className="category-item-title cat1">Beach</p>
              </div>
              <div className="category-item">
                <svg
                  className="mountain"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 32c12.5 0 24.1 6.4 30.7 17L503.4 394.4c5.6 8.9 8.6 19.2 8.6 29.7c0 30.9-25 55.9-55.9 55.9H55.9C25 480 0 455 0 424.1c0-10.5 3-20.8 8.6-29.7L225.2 49c6.6-10.6 18.3-17 30.8-17zm65 192L256 120.4 176.9 246.5 208 288l48-64h65z" />
                </svg>
                <p className="category-item-title cat2">Mountain</p>
              </div>
              <div className="category-item">
                <svg
                  className="city"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                >
                  <path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" />
                </svg>
                <p className="category-item-title cat3">City</p>
              </div>
              <div className="category-item">
                <svg
                  className="other"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM288 176c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 48.8 46.5 111.6 68.6 138.6c6 7.3 16.8 7.3 22.7 0c22.1-27 68.6-89.8 68.6-138.6zm-48 0c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z" />
                </svg>
                <p className="category-item-title cat4">Other</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="testimoni">
          <h2>Testimoni</h2>
          <Carousel fade={true} interval={3000} controls={false}>
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
      </div>
    </>
  );
}

export default Body;
// <div className="search-wrapper">
//     <div class="search_box">
//         <input type="text" class="input" placeholder="search..."/>
//         <div class="btn">
//             <p>Search</p>
//         </div>
//     </div>
// </div>
