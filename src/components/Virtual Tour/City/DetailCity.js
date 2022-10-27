import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ImageDefault from "./../../CardComponent/default-2.jpg";
import CardCompt2 from "../../CardComponent/CardCompt2";
import { CardCompt6 } from "../../CardComponent/CardCompt6";
import Image from "../../../assets/images/pict (3).png";

function DetailCity(props) {
  //mengambil data dari page sebelumnya
  const location = useLocation();
  const [cities, setCities] = useState([]);
  const [destinasi, setDestination] = useState([]);
  const [cityImage, setCityImage] = useState([]);

  // console.log(location);

  const dummy = [1, 2, 3, 4, 5, 6, 7, 8];
  const city_id = location.state.id;
  const city_name = location.state.nama_kota;

  useEffect(() => {
    const fetchCityByID = async () => {
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
        });
    };
    const fetchDestination = async () => {
      axios
        .get(`https://vitour-backend.herokuapp.com/api/city/destinations`)
        .then((res) => {
          // console.log("Destination :", res.data.data);
          setDestination(res.data.data);
        });
    };

    const fetchCityPicture = async () => {
      axios.get();
    };

    fetchDestination();
    fetchCityByID();
  }, []);

  let getDestinationData = () => {
    return destinasi
      .filter((filterData) => filterData.city_id === city_id)
      .map((data) => {
        console.log("data map:", data.length);
        return data != null ? (
          <CardCompt6
            title={data.nama_destinasi}
            desc={data.deskripsi_destinasi}
          ></CardCompt6>
        ) : (
          <h2 className="alert">Kosong</h2>
        );
      });
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
        <h1 className="title_detailcity_destination">
          Tempat wisata di {cities.nama_kota}
        </h1>
        <div className="detailcity_destination_content">
          {getDestinationData()}
        </div>
      </section>
      <section className="city_info">
        <h1 className="city_info_title">Informasi Daerah</h1>
        <div className="city_info_content">
          <CardCompt2
            header="Kuliner"
            image="https://www.astronauts.id/blog/wp-content/uploads/2022/08/Makanan-Khas-Daerah-tiap-Provinsi-di-Indonesia-Serta-Daerah-Asalnya.jpg"
          ></CardCompt2>
          <CardCompt2
            header="Budaya"
            image="https://sumbernesia.com/wp-content/uploads/2019/01/Keragaman-Kebudayaan-Indonesia.jpg"
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
