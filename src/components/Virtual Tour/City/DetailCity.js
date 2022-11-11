import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Dots } from "loading-animations-react";
import ImageDefault from "./../../Component/CardComponent/default-2.jpg";
import CardCompt2 from "../../Component/CardComponent/CardCompt2";
import { CardCompt6 } from "../../Component/CardComponent/CardCompt6";
import Image from "../../../assets/images/pict (3).png";
import Empty from "../../../assets/images/empty.jpg";
import "./city.css";

function DetailCity(props) {
  //mengambil data dari page sebelumnya
  const location = useLocation();
  const [cities, setCities] = useState([]);
  const [destinasi, setDestination] = useState([]);
  const [cityImage, setCityImage] = useState([]);
  const [culture, setCulture] = useState("");
  const [loading, setLoading] = useState(false);
  const [empty, isEmpty] = useState(false);

  // console.log(location);

  const dummy = [1, 2, 3, 4, 5, 6, 7, 8];
  const city_id = location.state.id;
  const city_name = location.state.nama_kota;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchCityByID = async () => {
      setLoading(true);
      axios
        // .get(`https://vitour-backend.herokuapp.com/api/cities/${city_id}`)
        .get(
          `https://vitour-backend.herokuapp.com/api/cities?filter=${city_name}&type_gambar=gambar_kota`
        )
        .then((res) => {
          // console.log("result :", res.data.data[0]);
          // console.log("Image1 :", res.data.data[0].images);
          setCityImage(res.data.data[0].images[1]);
          setCities(res.data.data[0]);
          setLoading(false);
          isEmpty(true);
        });
    };
    const fetchDestination = async () => {
      setLoading(true);
      axios
        .get(`https://vitour-backend.herokuapp.com/api/city/destinations`)
        .then((res) => {
          console.log("Destination :", res.data.data);
          setDestination(res.data.data);
          setLoading(false);
          isEmpty(true);
        });
    };

    fetchDestination();
    fetchCityByID();
  }, []);

  //handler untuk navigasi ke page destination
  const handleDestination = (id, nama_destinasi) => {
    navigate(`/destination/${id}`, {
      state: { id: id, nama_destinasi: nama_destinasi },
    });
    console.log("success");
  };
  let getDestinationData = () => {
    if (loading) {
      return (
        <div className="wrap_loading">
          <Dots className="spin-loading" color1="#003bfd" color2="#fff" />
        </div>
      );
    } else {
      return (
        <>
          <h1 className="title_detailcity_destination">
            Tempat wisata di {cities.nama_kota}
          </h1>
          <div className="detailcity_destination_content">
            {destinasi
              .filter((filterData) => filterData.city_id === city_id)
              .map((data) => {
                return data != null ? (
                  <div
                    className="ctm-card-container2"
                    key={data.destination_id}
                  >
                    <img
                      src="https://picsum.photos/400/200"
                      alt=""
                      className="card-img"
                    />
                    <h2 className="title-card">{data.nama_destinasi}</h2>
                    <p className="description-card">
                      {data.deskripsi_destinasi}
                    </p>
                    <div
                      className="discover"
                      onClick={() =>
                        handleDestination(
                          data.destination_id,
                          data.nama_destinasi
                        )
                      }
                    >
                      <a className="link-crs">Discover</a>
                    </div>
                  </div>
                ) : (
                  <h2 className="alert">Kosong</h2>
                );
              })}
          </div>
        </>
      );
    }
  };
  // const Image1 = cities.images[0].images_link;
  return (
    <>
      <section className="header_detailcity">
        <div className="img_wrap">
          <img
            src={cityImage.images_link}
            alt=""
            className="header_background"
          />
        </div>
        <div className="header_content_detailcity">
          <h1 className="title_detailcity">{cities.nama_kota}</h1>
          <p className="desc_detailcity">{cities.informasi_kota}</p>
        </div>
      </section>
      <section className="detailcity_destination">
        {getDestinationData()}
      </section>
      <section className="city_info">
        <h1 className="city_info_title">Informasi Daerah</h1>
        <div className="city_info_content">
          <CardCompt2
            header="Kuliner"
            image="https://www.astronauts.id/blog/wp-content/uploads/2022/08/Makanan-Khas-Daerah-tiap-Provinsi-di-Indonesia-Serta-Daerah-Asalnya.jpg"
            sendId={city_id}
            title={city_name}
            address={"culinary"}
          ></CardCompt2>
          <CardCompt2
            header="Budaya"
            image="https://sumbernesia.com/wp-content/uploads/2019/01/Keragaman-Kebudayaan-Indonesia.jpg"
            sendId={city_id}
            title={city_name}
            address={"culture"}
            // goToCulture={handleCulture(city_id)}
          ></CardCompt2>
          <CardCompt2
            header="Merch"
            image="https://lpem.baznas.go.id/wp-content/uploads/2021/01/BAZNAS-Zakat-LPEM-26-Jan-2b.jpeg"
          ></CardCompt2>
        </div>
      </section>
    </>
  );
}

export default DetailCity;
