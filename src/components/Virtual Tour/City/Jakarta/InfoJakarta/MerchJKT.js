import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Spinner } from "loading-animations-react";
import CardCompt3 from "../../../../CardComponent/CardCompt3";
import "./../../../../Info Pariwisata/InfoPariwisata.css";

export const MerchJKT = (props) => {
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
        <h3>DKI Jakarta</h3>
<<<<<<< HEAD
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
                            <CardCompt3 title={user.nama_merchandise} desc={user.deskripsi_merchandise} image={gambar[0]} buttonText="Find Merch"/>
                        )
                })
            }   
=======
      </div>
      {loading ? (
        <Spinner className="spin-loading" color1="#003bfd" color2="#fff" />
      ) : (
        users.map((user) => {
          if (user.city_id == 24)
            return (
              <CardCompt3
                title={user.nama_merchandise}
                desc={user.deskripsi_merchandise}
                buttonText="Find Merch"
              />
            );
        })
      )}
>>>>>>> 269cfe182a0a9dbfa9b9f74e3cb965a671548482
    </Container>
  );
};

export default MerchJKT;
