import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import CardCompt3 from '../../../../CardComponent/CardCompt3'
import { Kuliner } from '../../../../Info Pariwisata/Kuliner/Kuliner'
import './../../../../Info Pariwisata/InfoPariwisata.css'

function KulinerBDG() {
    const [users, setUsers] = useState([])

    const getData = async () => {
        try{
            let response = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch(e) {
            console.log(e.message);
        }
    }

    useEffect(() => {
        getData();
    }, [])
  return (
     <Container className="infoContainer">
        <div className="title">
            <h1>Kuliner</h1>
            <h3>DKI Jakarta</h3>
        </div>
            {
                users.map(user => {
                    return(
                        <CardCompt3 title={user.name}/>
                    )
                })
            }
            
    </Container>
  )
}

export default KulinerBDG