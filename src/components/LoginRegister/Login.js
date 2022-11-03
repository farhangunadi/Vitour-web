import React, { useState } from 'react'
import axios from 'axios';

import { Container, Row, Col } from "react-bootstrap";
import PropTypes from 'prop-types'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import gambarLogin from "../../assets/images/LoginRegister/login.png";
import gambarGoogle from "../../assets/images/LoginRegister/google.png";
import gambarFacebook from "../../assets/images/LoginRegister/facebook.png";
import gambarTwitter from "../../assets/images/LoginRegister/twitter.png";
import "./Login.css";

function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState('');

    const handleLogin = async (e) => {
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
                // setToken(res.data.token)
            })

        // setToken(res.data.token);
    }
    // console.log("saya aidil")
  return (
    <Container className="vh-100 px-0" fluid={true}>
      <Row >
        <Col style={{ backgroundImage: `url(${gambarLogin}`}} id='gambar'>
        <div className="section-kiri">
            <h3 className="h3" style={{color:"white"}}>Explore Your Places</h3>
            <h5 className="subtitle1">Visit Indonesia</h5>
        </div>
        </Col>
        <Col id="form-section">
            <Container>
            <p className="has-text-centered">{msg}</p>
                <Form onSubmit={handleLogin}>
                    
                        <Form.Group className="mb-3" controlId="formBasicEmail" style={{fontWeight: "bold"}}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email"  onChange={e => setEmail(e.target.value)} />
                            {/* <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text> */}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" style={{fontWeight: "bold"}}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                        </Form.Group>
                        <Row className="mb-3">
                            <Col>
                            <Button variant="primary" type="submit" style={{marginRight:50}}>
                                Login
                            </Button>
                            </Col>
                            
                            <Col>
                            <a href='/register'>
                            <Button md="3" variant="primary" style={{paddingRight:50, paddingLeft:50}}>
                                Register
                            </Button>
                            </a>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Form.Group as={Col} className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                            <Col style={{padding:8}}><a href='#'>Forget Password</a></Col>
                        </Row>
                        <div className="via">
                            <h3 className="subtitle1">Sign in via</h3>
                        </div>
                        <div className="alternate-login row">
                            <div className="col-sm-auto component">
                            <Image src={gambarGoogle} className="img-google" />
                            </div>
                            <div className="col-sm-auto component">
                            <Image src={gambarFacebook} className="img-facebook" />
                            </div>
                            <div className="col-sm-auto component">
                            <Image src={gambarTwitter} className="img-twitter" />
                            </div>
                        </div>
                </Form>
            </Container>
            
        </Col>
      </Row>
    </Container>
  )
}

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
//   };

export default Login
