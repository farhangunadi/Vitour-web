import React, { useState, useEffect } from "react";
import Image from "../../assets/images/kuliner.jpg";
import "./Store.css";

function Store() {
  const [dummy, setDummy] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <div className="store_container">
      <div className="store_header">
        <h1 className="store_header_title">
          Find Some Merch From UMKM in Several Destination
        </h1>
      </div>
      <div className="store_content_container">
        <div className="store_sidebar_menu"></div>
        <div className="store_item_list">
          {dummy.map((post) => {
            return (
              <div key={post} className="store_card_item_container">
                <div className="store_card_item_image_wrap">
                  <img src={Image} alt="" className="store_card_item_image" />
                </div>
                <h2 className="store_card_item_title">Lorem Ipsum</h2>
                <p className="store_card_item_desc">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
                  dolorem deleniti veniam, fuga maiores dolorum ab.
                </p>
                <h2 className="item_price">Rp 150.000</h2>
                <div className="store_card_item_btn_wrap">
                  <a className="item_btn">Add to Cart</a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Store;
