import React, { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import useAuth from '../../hooks/useAuth';
import './ManagePackages.css';
import Spinner from 'react-bootstrap/Spinner';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css';
const ManagePackages = () => {
    const { allRegisteredTourist } = useAuth();
    const { registeredTourists } = allRegisteredTourist;

    useEffect(() => {
        AOS.init();
    }, []);
    const handlePackageDelete = (id) => {
        swal("Do you want delete the User ?")
            .then((value) => {
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
    const handleOrderActive = (id) => {
        // const selectedTourist = registeredTourists.find(registeredTourist => registeredTourist._id === id);
        swal("Do you want to active this User for the Package ?")
            .then(value => {
                if (value) {
                    const url = `https://fathomless-anchorage-91551.herokuapp.com/registered-tourist/${id}`;
                    fetch(url, {
                        method: "PUT",
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(registeredTourists)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                        })
                }
            })
    }
    return (
        <div className="container">
            <div className="row my-3">
                <div className="col-md-12" data-aos="fade-down" data-aos-delay="500">
                    <div className="manage-table">
                        <h3 className="section-title text-center">Manage Packages : {registeredTourists.length}</h3>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>Tourist</th>
                                    <th>Email</th>
                                    <th>Booked Package</th>
                                    <th>Status</th>
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    registeredTourists.map(registeredTourist => (
                                        <tr>
                                            <td>{registeredTourist.name}</td>
                                            <td>{registeredTourist.email}</td>
                                            <td>{registeredTourist.selectedpackage}, {registeredTourist.place}</td>
                                            <td>{registeredTourist.status}</td>
                                            <td className="text-center">
                                                <ButtonGroup aria-label="Basic example">
                                                    {registeredTourist?.status === 'Pending...' &&
                                                        <Button onClick={() => handleOrderActive(registeredTourist._id)} className="btn-sm" variant="primary">Active</Button>
                                                    }
                                                    <Button className="btn-sm" onClick={() => handlePackageDelete(registeredTourist._id)} variant="danger">
                                                        <i className="fas fa-trash-alt delete-btn"></i>
                                                    </Button>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagePackages;