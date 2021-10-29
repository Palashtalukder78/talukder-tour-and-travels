import React from 'react';
import './Banner.css'
const Banner = () => {
    return (
        <div className="banner">
            <div className="container">
                <div className="row" style={{ padding: "80px 0" }}>
                    <div className="col-md-6 banner-content ">
                        <div className="text-lg-end py-5">
                            <h4 style={{ fontSize: "40px", color: "rgb(27, 116, 0)" }}><b>Plan your</b></h4>
                            <h3 style={{ fontSize: "60px", color: "rgb(2, 2, 77)", fontWeight: "700" }}>Road Trip</h3>
                            <h4 style={{ fontSize: "40px", color: "rgb(1, 39, 39)" }}>Around the Glob</h4>
                            <button className="btn btn-primary btn-lg">Contact Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Banner;