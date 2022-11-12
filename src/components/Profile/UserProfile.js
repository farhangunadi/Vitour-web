import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { Container, Row, Col } from "react-bootstrap";
import PropTypes from 'prop-types'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import gambarLogin from "./../../assets/images/LoginRegister/login.png";
import gambarGoogle from "./../../assets/images/LoginRegister/google.png";
import gambarFacebook from "./../../assets/images/LoginRegister/facebook.png";
import gambarTwitter from "./../../assets/images/LoginRegister/twitter.png";
import "./UserProfile.css";
import { useNavigate } from 'react-router-dom';
import ridwanKamil from "./../../assets/images/ridwanKamil.jpg";

function Profile(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState('');
    let navigate = useNavigate();

    if (!sessionStorage.getItem('token')) {
        navigate("/login");
    }

    const handleEdit = async (e) => {
        e.preventDefault();

        try{

        } catch (error) {

        }
        axios.post(`https://vitour-backend.herokuapp.com/api/login`, { 
            email: email,
            password: password
        }, { withCredentials: false })
            .then(res => {
                console.log(res);
                console.log(res.data);
                console.log(res.data.data.token)
                if(res.status === 200){
                    alert('!LOGGED');
                    navigate('/');
                    return res.data;
                }
                
                // alert('!LOGGED');
                // navigate("/")
                
            })

        // setToken(res.data.token);
    }
    // console.log("saya aidil")

    useEffect(() => {
        // 👇 add class to body element
        document.body.classList.add('profile');
      
      
        return () => {
          // 👇️ removing classes from body element
          // when the component unmounts
          document.body.classList.remove('profile');
        }
      }, []);
  return (
    <Container className='profile'>
      <Row >
        <Col sm={4} className='left-col'>
            <Container className='profile-view'>
                <h5>Profile</h5>
                <img src={ridwanKamil} alt="photo-profile" className="photo-profile rowMid" />
                <h5 className="rowMid name-view">Raihan Fatoni</h5>
                <h5>Email</h5>
                <p>raihanfatoni@mail.com</p>

                <h5>Address</h5>
                <p>Jakarta</p>

                <h5>Birth date</h5>
                <p>10/10/2000</p>

                <h5>About</h5>
                <p>Lorem ipsum</p>

            </Container>
            
        </Col>
        <Col sm={8} className='right-col'>
            <Container className='profile-view'>
                <div className='form-edit'>
                    <p className="has-text-centered">{msg}</p>
                        <Form onSubmit={handleEdit}>
                            <div style={{borderBottom: "3px solid grey"}}>
                                <Row>
                                    <Col>
                                        <h3>Profile Setting</h3>
                                    </Col>
                                    <Col md={{ span: 4, offset: 4 }} className='edit-button'>
                                        <Row className="mb-3">
                                            <Col>
                                                <Button variant="outline-primary" className='ale'>
                                                    Cancel
                                                </Button>
                                            </Col>
                                            <Col>
                                            <Button variant="primary" type="submit">
                                                Login
                                            </Button>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </div>
                            <div className='mb-3'></div>
                            <Form.Group className="mb-3" controlId="Email" style={{fontWeight: "bold"}}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" value="raihanfatoni@mail.com" readOnly/>
                                {/* <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text> */}
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Name" style={{fontWeight: "bold"}}>
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" value="Raihan Fatoni"/>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Password" style={{fontWeight: "bold"}}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="Adress" style={{fontWeight: "bold"}}>
                                <Form.Label>Address</Form.Label>
                                <Form.Control type="text" placeholder="Address"/>
                            </Form.Group>
                            <div style={{marginBottom: "2vw"}}></div>
                            <Form.Group className="mb-3" controlId="AboutMe" style={{fontWeight: "bold"}}>
                                <Form.Label>About Me</Form.Label>
                                <div className='mb-3' style={{borderBottom: "3px solid grey"}}></div>
                                <Form.Control as="textarea" placeholder="About Me"/>
                            </Form.Group>

                    </Form>
                </div>
            </Container>
        </Col>
      </Row>
    </Container>
  )
}

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
//   };

export default Profile
