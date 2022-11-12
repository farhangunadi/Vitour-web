import React from 'react'
import { Navbar, Row, Col } from 'react-bootstrap'
import Logo from "./../../assets/images/logo-white.png";
import { Container } from "react-bootstrap";
import "./Login.css";
import { Link } from 'react-router-dom';

function LoginRegisterNavBar({pageName}) {
  return (
    <Container fluid={true} className="navbar-login-register">
        <Row>
        <Col md="auto" className="img-wrapper">
            <Link to="/"><img src={Logo} alt="" className="logo" /></Link> 
        </Col>
        <Col md="auto" className="page-name">
            <h2>{pageName}</h2>
        </Col>
        </Row>
        
    </Container>
  )
}

export default LoginRegisterNavBar