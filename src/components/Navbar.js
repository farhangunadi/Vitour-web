import React from 'react';
import {Nav, Navlink, Bars, NavMenu} from './NavbarComponent';

const Navbar = () => {
  return (
    <>
        <Nav className="navbar">
            <Navlink to='/'>
                <h1 className="logo">
                    Vitour
                </h1>
            </Navlink>
            <Bars />
            <NavMenu className="nav-menu">
                <Navlink to="/home" activeStyle>
                    Home
                </Navlink>
                <Navlink to="/virtual-tour" activeStyle>
                    Virtual Tour
                </Navlink>
                <Navlink to="/recommendation" activeStyle>
                    Recommendation
                </Navlink>
                <Navlink to="/about-us" activeStyle>
                    About us
                </Navlink>
            </NavMenu>
        </Nav>
    </>
  )
}

export default Navbar