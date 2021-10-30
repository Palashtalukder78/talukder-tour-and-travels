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
                    const url = `http://localhost:5000/registered-tourist/${id}`;
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
        console.log(id);
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
                                {!registeredTourists?.length > 0 ?
                                    <div className="my-spinner text-center">
                                        <Spinner animation="border" variant="secondary" />
                                    </div>
                                    :
                                    registeredTourists.map(registeredTourist => (
                                        <tr>
                                            <td>{registeredTourist.name}</td>
                                            <td>{registeredTourist.email}</td>
                                            <td>{registeredTourist.selectedpackage}, {registeredTourist.place}</td>
                                            <td>{registeredTourist.status}</td>
                                            <td className="text-center">
                                                <ButtonGroup aria-label="Basic example">
                                                    <Button onClick={() => handleOrderActive(registeredTourist._id)} className="btn-sm" variant="primary">Active</Button>
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