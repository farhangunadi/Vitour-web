import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import "./DetailItem.css";
import Img from "../../assets/images/karedok.jpg";

export const DetailItem = () => {
  const location = useLocation();
  const id = location.state;
  //   console.log(id);
  const [item, setItem] = useState([]);
  const [img, setImage] = useState("");

  useEffect(() => {
    const fetchItem = async () => {
      axios
        .get(`https://vitour-backend.herokuapp.com/api/city/merchandises/${id}`)
        .then((res) => {
          console.log(res.data.data[0]);
          setImage(res.data.data[0].images[0]);
          setItem(res.data.data[0]);
        });
    };
    fetchItem();
  }, []);
  return (
    <>
      <div className="container_merch_detail">
        <div className="merch_img_wrap">
          <img src={img.images_link} alt="" />
        </div>
        <div className="merch_detail">
          <h1 className="merch_name">{item.nama_merchandise}</h1>
          <p className="merch_desc">{item.deskripsi_merchandise}</p>
          <h3 className="price">Rp{item.price}</h3>
          <div className="merch_btn_wrap">
            <div className="buy_btn_wrap">
              <a href="/" className="buy_button">
                Buy
              </a>
            </div>
            <div className="add_cart_wrap">
              <a href="/" className="add_to_cart">
                Add to Cart
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
