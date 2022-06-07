import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Spinner } from "loading-animations-react";
import CardCompt3 from "../../../../CardComponent/CardCompt3";
import { Kuliner } from "../../../../Info Pariwisata/Kuliner/Kuliner";
import "./../../../../Info Pariwisata/InfoPariwisata.css";

function KulinerBDG() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      let response = await axios.get(
        "https://vitour-backend.herokuapp.com/api/city/culinaries"
      );
      setUsers(response.data.data);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
      setLoading(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container className="infoContainer">
      <div className="title">
        <h1>Kuliner</h1>
        <h3>Bandung, Jawa Barat</h3>
      </div>
      {loading ? (
        <Spinner className="spin-loading" color1="#003bfd" color2="#fff" />
      ) : (
        users.map((user) => {
          if (user.city_id == 4)
            return (
              <CardCompt3
                title={user.nama_kuliner}
                desc={user.deskripsi_kuliner}
              />
            );
        })
      )}
    </Container>
  );
}

export default KulinerBDG;
// https://jsonplaceholder.typicode.com/users
// https://vitour-backend.herokuapp.com/api/city/culinaries
