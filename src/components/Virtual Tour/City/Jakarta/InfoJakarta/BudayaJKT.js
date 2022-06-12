import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Spinner } from "loading-animations-react";
import CardCompt3 from "../../../../CardComponent/CardCompt3";
import "./../../../../Info Pariwisata/InfoPariwisata.css";

function BudayaJKT() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      let response = await axios.get(
        "https://vitour-backend.herokuapp.com/api/city/cultures"
      );
      setUsers(response.data.data);
      setLoading(false);
    } catch (e) {
      setLoading(true);
      console.log(e.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Container className="infoContainer">
      <div className="title">
        <h1>Budaya</h1>
        <h3>DKI Jakarta</h3>
    </div>
    {
        loading ? <Spinner className="spin-loading" color1="#003bfd" color2="#fff"/> :
         users.map(user => {
            if(user.city_id == 24)
              {console.log(user.images)}
              var gambar = [];
              var counter = 0;
              user.images.map(link =>{
                {console.log(link.images_link)}
                gambar[counter++] = link.images_link;
                            
              })
                return(
                    <CardCompt3 title={user.nama_budaya} desc={user.deskripsi_budaya} image={gambar[0]}/>
                )
              })
       }       
    </Container>
  );
}
export default BudayaJKT;
