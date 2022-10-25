import React from "react";
import { Container } from "react-bootstrap";
import { Footer } from "../../LandingPageCompt/Footer/Footer";
import ImageDefault from "./../../CardComponent/default-2.jpg";
import "./bandung.css";
import { CardCompt } from "../../CardComponent/CardCompt5";

function DetailCity(props) {
  return (
    <>
      <section className="header_detailcity">
        <img src="#" alt="" className="header_background" />
        <div className="header_content_detailcity">
          <h1 className="title_detailcity"></h1>
          <p className="desc_detailcity"></p>
        </div>
      </section>
      <section className="detailcity_destination">
        <h1 className="title_detailcity_destination"></h1>
        <div className="detailcity_destination_content">
          <CardCompt></CardCompt>
        </div>
      </section>
    </>
  );
}

cityCompt.defaultProps = {
  kota: "Kota",
  provinsi: "Provinsi",
  image: ImageDefault,
  desc:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis porro, unde atque necessitatibus commodi totam quia rerum iusto accusamus dignissimos vero debitis incidunt excepturi error a, nihil optio accusantium in.",
};

export default cityCompt;
