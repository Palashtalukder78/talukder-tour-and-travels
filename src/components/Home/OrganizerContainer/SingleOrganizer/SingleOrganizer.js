import React from 'react';
import './SingleOrganizer.css'
const SingleOrganizer = ({ organizer }) => {
    const { name, position, about, photo, facebook, linkdin } = organizer;
    return (
        <div className="col-md-6 my-3">
            <div className="single-organizer shadow">
                <div className="single-organizer-photo">
                    <img src={photo} alt="" />
                </div>
                <div className="single-organizer-content">
                    <h3>{name}</h3>
                    <h5 className="p-0,m-0">{position}</h5>
                    <p>{about.slice(0, 90)}...</p>
                    <div>
                        <a href={facebook} target="_blank" rel="noreferrer"><i class="fab fa-facebook-square"></i></a>
                        <a href={linkdin} target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleOrganizer;