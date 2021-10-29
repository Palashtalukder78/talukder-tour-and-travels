import { getAuth, signOut } from '@firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import swal from 'sweetalert';
const Header = () => {
    const auth = getAuth();
    const history = useHistory();
    const { allFirebase } = useAuth();
    const { user, setUser, setIsLoading } = allFirebase;
    const handleLogout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser('');
            history.push('/home')
            swal("Good job!", "Logout Successfully!", "success");
        }).catch((error) => {
            console.log("Logout korte problem hosse");
        })
            .finally(() => setIsLoading(false))
    }
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
                        <NavLink style={{ marginLeft: "23px", textDecoration: "none", color: "gray", fontSize: "16px" }} to="/my-package" activeStyle={{
                            fontWeight: "bold",
                        }} >
                            My Package
                        </NavLink>
                        {user?.photoURL ?
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <NavLink style={{ marginLeft: "23px", textDecoration: "none", color: "gray", fontSize: "16px" }} to="/add-package" activeStyle={{
                                    fontWeight: "bold",
                                }} >
                                    Add Package
                                </NavLink>
                                <img className="img-fluid" style={{ width: "40px", height: "40px", borderRadius: "50%", marginLeft: "23px" }} src={user?.photoURL} alt="" />
                                <i onClick={handleLogout} title="Logout" style={{ marginLeft: "23px", fontSize: "20px", backgroundColor: "blue", padding: "7px", color: "#fff", borderRadius: "20%", cursor: "pointer" }} class="fas fa-sign-out-alt"></i>
                            </div>
                            :
                            <NavLink style={{ marginLeft: "23px", textDecoration: "none", color: "gray", fontSize: "16px" }} to="/login">
                                <button className="btn btn-sm btn-primary">LOGIN</button>
                            </NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;