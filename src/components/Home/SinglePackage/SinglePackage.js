import React from 'react';
import { Link } from 'react-router-dom';
import './SinglePackage.css'
const SinglePackage = ({ singlePackage }) => {
    const { title, place, duration, photo, description } = singlePackage;
    return (
        <div className="col-md-4 my-3">
            <div className="p-2 single-package p-4">
                <div>
                    <img style={{ width: "100%", height: "100%", borderRadius: "20px" }} className="img-fluid" src={photo} alt="" />
                </div>
                <div className="my-2">
                    <h4>{title}</h4>
                    <div className="place-duration my-2">
                        <h6 >{place}</h6>
                        <h6 ><i class="fas fa-calendar-alt"></i> {duration} Days</h6>
                    </div>
                    <p>{description.slice(0, 100)}...</p>
                    <Link to="/register">
                        <div className="d-grid">
                            <button className="btn my-btn btn-primary">Booking Now</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SinglePackage;