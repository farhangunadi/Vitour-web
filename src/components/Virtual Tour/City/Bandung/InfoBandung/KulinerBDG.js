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
<<<<<<< HEAD
     <Container className="infoContainer">
        <div className="title">
            <h1>Kuliner</h1>
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
                            <CardCompt3 title={user.nama_kuliner} desc={user.deskripsi_kuliner} image={gambar} />
                        )
                })
            }       
=======
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
                loc="https://www.google.com/maps/search/kuliner+bandung/@-6.9177567,107.5832697,13z/data=!3m1!4b1"
              />
            );
        })
      )}
>>>>>>> 269cfe182a0a9dbfa9b9f74e3cb965a671548482
    </Container>
  );
}

export default KulinerBDG;
// https://jsonplaceholder.typicode.com/users
// https://vitour-backend.herokuapp.com/api/city/culinaries
