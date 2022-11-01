import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

//style
import "./Destination.css";

//Image
import ImgHeader from "../../../assets/images/jakarta.jpg";

function Destination() {
  const location = useLocation();
  const id = location.state.id;
  console.log(location.state);
  const [destination, setDestination] = useState([]);

  useEffect(() => {
    const fetchDestination = async () => {
      axios
        .get(`https://vitour-backend.herokuapp.com/api/city/destinations/${id}`)
        .then((res) => {
          console.log("result :", res.data.data);
          setDestination(res.data.data[0]);
        });
    };

    fetchDestination();
  }, []);

  return (
    <>
      <section className="header_destination">
        <div className="img_wrap">
          <img
            src="https://ngonoo.com/engine/wp-content/uploads/2014/12/Indahnya-Alam-Wallpaper.jpg"
            alt=""
            className="header_background"
          />
        </div>
        <div className="header_content_destination">
          <h1 className="title_destination">{destination.nama_destinasi}</h1>
          <p className="desc_destination">{destination.deskripsi_destinasi}</p>
        </div>
      </section>
      <section className="wrap_video_destinasi">
        <iframe
          className="video_destinasi"
          width="946.67"
          height="420"
          src="https://www.youtube.com/embed/w7uaPX-YL0k"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen="allowfullscreen"
        ></iframe>
      </section>
      <section className="gallery_destinasi">
        <h1 className="title_gallery">Destination Photos</h1>
        <div className="grid_gallery">
          <img
            src="https://indonesiakaya.com/wp-content/uploads/2020/10/raja-ampat-surga1200.jpg"
            alt=""
            className="img_destination"
          />
          <img
            src="https://akcdn.detik.net.id/visual/2020/12/10/pulau-misool-raja-ampat-indonesia_169.jpeg?w=650"
            alt=""
            className="img_destination"
          />
          <img
            src="https://images3.alphacoders.com/676/thumb-1920-676171.jpg"
            alt=""
            className="img_destination"
          />
          <img
            src="https://wallup.net/wp-content/uploads/2016/04/06/348092-landscape-nature-island-tropical-sunset-sea-aerial_view-Eden-Raja_Ampat-Indonesia.jpg"
            alt=""
            className="img_destination"
          />
          <img
            src="https://wallpaperaccess.com/full/1564173.jpg"
            alt=""
            className="img_destination"
          />
          <img
            src="https://jurnalsecurity.com/go/wp-content/uploads/2018/11/raja-ampat.jpg"
            alt=""
            className="img_destination"
          />
        </div>
      </section>
    </>
  );
}

export default Destination;
