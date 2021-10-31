import React, { useEffect, useRef } from 'react';
import './AddPackage.css';
import Table from 'react-bootstrap/Table';
import AOS from 'aos';
import 'aos/dist/aos.css';
import swal from 'sweetalert';
import useAuth from '../../hooks/useAuth';

const AddPackage = () => {
    const { allPackage } = useAuth();
    const { packages } = allPackage;

    const titleRef = useRef();
    const photoRef = useRef();
    const placeRef = useRef();
    const durationRef = useRef();
    const descriptionRef = useRef();
    const priceRef = useRef();

    const handleAddPackage = (e) => {
        const title = titleRef.current.value;
        const photo = photoRef.current.value;
        const place = placeRef.current.value;
        const duration = durationRef.current.value;
        const description = descriptionRef.current.value;
        const price = priceRef.current.value;
        const newPackage = { title: title, photo: photo, place: place, duration: duration, price: price, description: description };

        fetch('https://fathomless-anchorage-91551.herokuapp.com/add-package', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPackage)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    e.target.reset();
                    swal("Good job!", "Package Added Successfully!", "success");
                }
            })

        e.preventDefault();
    }

    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <div className="container" style={{ overflowX: "hidden" }}>
                <div className="row pt-5">
                    <div className="col-md-4 mb-3" data-aos="fade-right" data-aos-delay="500">
                        <div className="add-package-form">
                            <h2 className="text-center mb-3">Add Package</h2>
                            <form onSubmit={handleAddPackage}>
                                <input ref={titleRef} type="text" placeholder="Package Title" />
                                <input ref={placeRef} type="text" placeholder="Destination" />
                                <input ref={durationRef} type="number" placeholder="Enter Duration" />
                                <input ref={priceRef} type="number" placeholder="Enter Price" />
                                <input ref={photoRef} type="text" placeholder="Photo URL" />
                                <textarea ref={descriptionRef} placeholder="Short Description" cols="30" rows="3"></textarea>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">Add</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-8" data-aos="fade-left" data-aos-delay="500">
                        <div className="package-table">
                            <h5 className="text-center">Total Package: {packages.length}</h5>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>Package title</th>
                                        <th>Place</th>
                                        <th>Duration</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        packages.map(tourPackage => (
                                            <tr>
                                                <td>{tourPackage.title}</td>
                                                <td>{tourPackage.place}</td>
                                                <td>{tourPackage.duration} Days</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddPackage;