import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Spinner } from "loading-animations-react";
import CardCompt3 from "../../../../CardComponent/CardCompt3";
import "./../../../../Info Pariwisata/InfoPariwisata.css";

export const MerchBDG = (props) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      let response = await axios.get(
        "https://vitour-backend.herokuapp.com/api/city/merchandises"
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
        <h1>Merch</h1>
        <h3>Bandung, Jawa Barat</h3>
    </div>
         {
             loading ? <Spinner className="spin-loading" color1="#003bfd" color2="#fff"/> :
                users.map(user => {
                    if(user.city_id == 4)
                        var gambar;

                        user.images.map(link =>{
                            {console.log(link.images_link)}
                            gambar = link.images_link;
                            
                        })
                        return(
                            <CardCompt3 title={user.nama_merchandise} desc={user.deskripsi_merchandise} image={gambar} buttonText="Find Merch"/>
                        )
                })
            }   
    </Container>
  );
};

export default MerchBDG;
