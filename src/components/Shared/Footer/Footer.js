import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    const linkdin = "https://www.linkedin.com/in/md-ariful-islam-palash/";
    const facebook = "https://www.facebook.com/profile.php?id=100009430642663";
    const youtube = "https://www.youtube.com/channel/UCbP3eGSZ3j7rqJcLdk6DLrw";
    return (
        <div className="footer mt-5">
            <div className="container">
                <div className="row text-light pt-5 pb-3">
                    <div className="col-md-4">
                        <h2>Talukder Tour and Travel</h2>
                        <p>Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane, ship or other means, with or without luggage, and can be one way or round trip</p>
                    </div>
                    <div className="col-md-4 text-center">
                        <h2>Important Link</h2>
                        <NavLink style={{ marginLeft: "23px", textDecoration: "none", color: "#fff", fontSize: "16px" }} to="/home" activeStyle={{
                            fontWeight: "bold",
                        }} >
                            HOME
                        </NavLink>
                        <NavLink style={{ marginLeft: "23px", textDecoration: "none", color: "#fff", fontSize: "16px" }} to="/my-package" activeStyle={{
                            fontWeight: "bold",
                        }} >
                            MY PACKAGES
                        </NavLink>

                        <div className="social-icon">
                            <a href={linkdin} target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>

                            <a href={facebook} target="_blank" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>

                            <a href={youtube} target="_blank" rel="noreferrer"><i className="fab fa-youtube-square"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h2 >Contact US</h2>
                        <div >
                            <div className="footer-address">
                                <i className="fas fa-home"></i>
                                <span>Savar, Dhaka</span>
                            </div>
                            <div className="footer-address">
                                <i className="fa fa-envelope"></i>
                                <span>talukder.tourandtravel@gmail.com</span>
                            </div>
                            <div className="footer-address">
                                <i className="fa fa-phone"></i>
                                <span>+880-1990524105</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-light text-center copy-right">
                <p className="m-0 py-2">Copyright &copy; 2021 || Developed by Md Ariful islam Palash</p>
            </div>
        </div>
    );
};

export default Footer;