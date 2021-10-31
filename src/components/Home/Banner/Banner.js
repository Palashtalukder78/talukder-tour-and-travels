import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 banner-content" >
                        <div className="text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column", height: "470px" }}>
                            <h4 style={{ fontSize: "40px", color: "#fff" }}><b>Plan your</b></h4>
                            <h3 style={{ fontSize: "50px", color: "#fff", fontWeight: "700", margin: "0" }}>Road Trip Around the Glob</h3>
                            <Link to="/manage-packages">
                                <button className="btn btn-lg btn-info text-dark mt-2">Manage All Packages</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;