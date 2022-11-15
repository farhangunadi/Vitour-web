import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { Container, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import "./SearchDestination.css";
import "../City/city.css";

function SearchDestination() {
  const [destinasi, setDestination] = useState([]);

  useEffect(() => {
    const fetchDestination = async () => {
      axios
        .get(`https://vitour-backend.herokuapp.com/api/city/destinations`)
        .then((res) => {
          console.log("result :", res.data.data);
          setDestination(res.data.data);
        });
    };
    fetchDestination();
  }, []);

  const navigate = useNavigate();
  const handleDestination = (id, nama_destinasi) => {
    navigate(`/destination/${id}`, {
      state: { id: id, nama_destinasi: nama_destinasi },
    });
    console.log("success");
  };

  return (
    <div className="search_container vh-100 px-0" fluid={true}>
      <div className="search-bar">
        <input
          type="text"
          name="search-bar"
          id="search-bar"
          placeholder="Where do you want visit?"
        />
      </div>
      <Row className="filter_bar">
        <Col className="filter_cat">
          <DropdownButton id="dropdown-item-button" title="Dropdown button">
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
        </Col>
        <Col className="filter_city">
          <DropdownButton id="dropdown-item-button" title="Dropdown button">
            <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
            <Dropdown.Item as="button">Action</Dropdown.Item>
            <Dropdown.Item as="button">Another action</Dropdown.Item>
            <Dropdown.Item as="button">Something else</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <div className="detailcity_destination_content onSearch">
        {destinasi.map((data) => {
          return (
            <Col>
              <div className="ctm-card-container2" key={data.destination_id}>
                <img
                  src="https://picsum.photos/400/200"
                  alt=""
                  className="card-img"
                />
                <h2 className="title-card">{data.nama_destinasi}</h2>
                <p className="description-card">{data.deskripsi_destinasi}</p>
                <div
                  className="discover"
                  onClick={() =>
                    handleDestination(data.destination_id, data.nama_destinasi)
                  }
                >
                  <a className="link-crs">Discover</a>
                </div>
              </div>
            </Col>
          );
        })}
      </div>
    </div>
  );
}

export default SearchDestination;
