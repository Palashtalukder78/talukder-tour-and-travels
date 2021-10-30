import React from 'react';
import notFound from '../../images/not-found.gif'
const NotFound = () => {
    return (
        <div className="page-not-found">
            <div className="text-center">
                <img style={{ width: "40%" }} className="img-fluid" src={notFound} alt="" />
                <h4>PAGE NOT FOUND</h4>
            </div>
        </div>
    );
};

export default NotFound;