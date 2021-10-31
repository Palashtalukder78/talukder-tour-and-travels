import React, { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import './MyPackage.css';
import swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Spinner } from 'react-bootstrap';
const MyPackage = () => {
    const { allFirebase, allRegisteredTourist } = useAuth();
    const { user } = allFirebase;
    const { registeredTourists } = allRegisteredTourist;

    const currentUser = user.email;
    const myPackages = registeredTourists.filter(myPackage => myPackage.email === currentUser);
    useEffect(() => {
        AOS.init();
    }, []);
    const handleMyPackage = (id) => {
        swal("Do you want delete the User ?")
            .then(value => {
                if (value) {
                    const url = `https://fathomless-anchorage-91551.herokuapp.com/registered-tourist/${id}`;
                    fetch(url, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {
                                swal("Good Job!", "Deleted Successfully!", "success");
                            }
                        })
                }
            })
    }
    return (
        <div className="container">
            <div className="row my-4" data-aos="fade-down" data-aos-delay="500">
                <h3 className="text-center">My Packages: {myPackages.length}</h3>
                {!myPackages.length < 0 ?
                    <div className="text-center my-spinner">
                        <Spinner animation="border" variant="primary" />
                    </div>
                    :
                    myPackages.map(singlePackage => (
                        <div className="col-md-4 my-2" data-aos="fade-down" data-aos-delay="500">
                            <div className="my-single-package shadow">
                                <div>
                                    <img src={singlePackage.photo} alt="" />
                                </div>
                                <div>
                                    <h6>{singlePackage.selectedpackage}</h6>
                                    <p className="p-0 m-0">{singlePackage.place}</p>
                                    <p className="p-0 m-0">Date: {singlePackage.date}</p>
                                    <span><b>{singlePackage.status}</b></span>
                                </div>
                                <div>
                                    <i onClick={() => handleMyPackage(singlePackage._id)} className="fas fa-trash-alt delete-btn"></i>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div >
    );
};

export default MyPackage;