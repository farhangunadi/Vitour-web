import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Dots } from "loading-animations-react";
import Image from "../../assets/images/kuliner.jpg";
import "./Store.css";

function Store() {
  const [dummy, setDummy] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [search, setSearch] = useState("");
  const [filterCity, setFilterCity] = useState("");
  const [merch, setMerch] = useState([]);
  const [city, setCity] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMerch = async () => {
      setLoading(true);
      axios
        .get(`https://vitour-backend.herokuapp.com/api/city/merchandises`)
        .then((res) => {
          setMerch(res.data.data);
          setLoading(false);
        });
    };
    const fetchCity = async () => {
      axios
        .get(`https://vitour-backend.herokuapp.com/api/cities`)
        .then((res) => {
          setCity(res.data.data);
        });
    };

    fetchCity();
    fetchMerch();
  }, []);

  return (
    <div className="store_container">
      <div className="store_header">
        <h1 className="store_header_title">
          Find Some Merch From UMKM in Several Destination
        </h1>
        <div className="filter_search">
          <input
            type="text"
            className="inputFilter2"
            placeholder="Search..."
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="store_content_container">
        <div className="store_sidebar_menu">
          <div className="category_menu">
            <h2 className="menu_title">Category</h2>
            <hr />
            <div className="menu_cat">
              <input type="radio" name="category" id="category" value="All" />
              <span className="cat_2">All</span>
            </div>
            <div className="menu_cat">
              <input type="radio" name="category" id="category" value="Shirt" />
              <span className="cat_1">Shirt</span>
            </div>
            <div className="menu_cat">
              <input
                type="radio"
                name="category"
                id="category"
                value="Accessories"
              />
              <span className="cat_2">Accessories</span>
            </div>
            <div className="menu_cat">
              <input type="radio" name="category" id="category" value="Food" />
              <span className="cat_3">Food</span>
            </div>
          </div>
          <div className="city_menu">
            <h2 className="city_menu_title">City</h2>
            <hr />
            <select name="city_select" id="city_select">
              {city.map((option) => {
                return (
                  <option value={option.city_id}>{option.nama_kota}</option>
                );
              })}
            </select>
          </div>
          <div className="menu_btn_wrap">
            <a className="apply_filter">Apply Filter</a>
          </div>
        </div>
        <div className="store_item_list">
          {loading ? (
            <div className="wrap_loading">
              <Dots className="spin-loading" color1="#003bfd" color2="#fff" />
            </div>
          ) : (
            merch
              .filter((value) => {
                if (search === " ") {
                  return value;
                } else if (
                  value.nama_merchandise
                    .toLowerCase()
                    .includes(search.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((post) => {
                return (
                  <Link
                    className="item_link"
                    to={`/store/item/${post.merchandise_id}`}
                  >
                    <div key={post} className="store_card_item_container">
                      <div className="store_card_item_image_wrap">
                        {post.images.slice(0, 1).map((image, index) => {
                          return (
                            <img
                              src={image.images_link}
                              alt=""
                              className="store_card_item_image"
                            />
                          );
                        })}
                      </div>
                      <h2 className="store_card_item_title">
                        {post.nama_merchandise}
                      </h2>
                      <div className="location_merch">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 384 512"
                        >
                          <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z" />
                        </svg>
                        <p className="store_card_item_desc">
                          {post.alamat_toko}
                        </p>
                      </div>
                      <h2 className="item_price">Rp{post.price}</h2>
                      {/* <div className="store_card_item_btn_wrap">
                      <a className="item_btn">Add to Cart</a>
                    </div> */}
                    </div>
                  </Link>
                );
              })
          )}
        </div>
      </div>
    </div>
  );
}

export default Store;
