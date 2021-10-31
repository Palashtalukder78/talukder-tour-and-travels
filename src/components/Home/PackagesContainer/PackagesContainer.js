import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import SinglePackage from '../SinglePackage/SinglePackage';
import './PacakagesContainer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
const PackagesContainer = () => {
    const { allPackage } = useAuth();
    const { packages } = allPackage;
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <div className="container mt-4" style={{ overflowX: "hidden" }}>
                <h3 className="text-center section-title my-3">PACKAGES</h3>
                <div className="row">
                    {!packages.length > 0 ?
                        <div className="text-center my-spinner">
                            <Spinner animation="border" variant="primary" />
                        </div>
                        :
                        packages.map(singlePackage => <SinglePackage
                            key={singlePackage._id}
                            singlePackage={singlePackage}
                        ></SinglePackage>)
                    }
                </div>
            </div>
        </div>
    );
};

export default PackagesContainer;