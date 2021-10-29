import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png'
const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" variant="light">
            <Container>
                <Navbar.Brand>
                    <div>
                        <img style={{ width: "130px" }} className="img-fluid" src={logo} alt="" />
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto" style={{ alignItems: "center" }}>
                        <NavLink style={{ marginLeft: "23px", textDecoration: "none", color: "gray", fontSize: "16px" }} to="/home" activeStyle={{
                            fontWeight: "bold",
                        }} >
                            HOME
                        </NavLink>
                        <NavLink style={{ marginLeft: "23px", textDecoration: "none", color: "gray", fontSize: "16px" }} to="/About" activeStyle={{
                            fontWeight: "bold",
                        }} >
                            ABOUT
                        </NavLink>
                        <NavLink style={{ marginLeft: "23px", textDecoration: "none", color: "gray", fontSize: "16px" }} to="/login">
                            <button className="btn btn-sm btn-primary">LOGIN</button>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;