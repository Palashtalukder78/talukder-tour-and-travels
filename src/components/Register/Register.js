import React, { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './Register.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import swal from 'sweetalert';
import { useHistory } from 'react-router';
const Register = () => {
    const { id } = useParams();
    const { allFirebase } = useAuth();
    const { user } = allFirebase;
    const [selectedpackage, setSelectedpackage] = useState([]);
    const history = useHistory();
    const url = `https://fathomless-anchorage-91551.herokuapp.com/packages/${id}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setSelectedpackage(data))
    }, []);
    useEffect(() => {
        AOS.init();
    }, []);

    const nameRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();
    const addressRef = useRef();
    const selectPackageRef = useRef();
    const selectPlaceRef = useRef();
    const actionRef = useRef();
    const photoRef = useRef();
    // const priceRef = useRef();
    const dateRef = useRef();

    const handleRegisteredTourist = (e) => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;
        const address = addressRef.current.value;
        const selectedpackage = selectPackageRef.current.value;
        const place = selectPlaceRef.current.value;
        const photo = photoRef.current.value;
        const status = actionRef.current.value;
        // const price = priceRef.current.value;
        const date = dateRef.current.value;

        const registeredInfo = { name: name, email: email, phone: phone, address: address, date: date, selectedpackage: selectedpackage, place: place, photo: photo, status: status }

        fetch('https://fathomless-anchorage-91551.herokuapp.com/registered-tourist', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(registeredInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    history.push('/my-package')
                    swal("Get Ready!", "Register Successfully!", "success");
                }
            })

        e.preventDefault();
    }
    return (
        <Container>
            <div className="row my-3 register-container">
                <div className="col-md-5 mb-2" data-aos="slide-right" data-aos-delay="300">
                    <div className="register-form">
                        <form onSubmit={handleRegisteredTourist}>
                            <div className="user-info">
                                <h6 className="text-center">Your Info</h6>
                                <input ref={nameRef} type="text" defaultValue={user.displayName} />
                                <input ref={emailRef} title="You can't change your Email Address" type="email" defaultValue={user.email} disabled />
                                <input ref={phoneRef} type="number" placeholder="PhoneNumber" required />
                                <input ref={addressRef} type="text" placeholder="Address" required />
                                <input ref={dateRef} type="date" placeholder="Date Here" required />

                            </div>
                            <div className="package-info">
                                <h6 className="text-center p-0 m-0">Package Details</h6>
                                <span className="text-center d-block mb-2">You can't change the Package details</span>
                                <input ref={selectPackageRef} title="You can't changes Package details" type="text" defaultValue={selectedpackage.title} disabled />
                                <input ref={selectPlaceRef} title="You can't changes Package details" type="text" defaultValue={selectedpackage.place} disabled />
                                {/* <input ref={priceRef} title="You can't changes Package details" type="number" defaultValue={selectedpackage.price} disabled /> */}
                                <input ref={photoRef} title="You can't changes Package details" type="hidden" defaultValue={selectedpackage.photo} />
                                <input ref={actionRef} type="hidden" value="Pending..." />
                            </div>
                            <div className="d-grid mt-2">
                                <button className="btn my-btn" style={{ backgroundColor: "darkblue", color: "#fff" }} type="submit">Register for the Package</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-7 mx-auto" data-aos="slide-left" data-aos-delay="500">
                    <div>
                        <div className="row">
                            <div className="col-md-8 mx-auto">
                                <div className="selectedInfo shadow">
                                    <div className="text-center">
                                        <img src={selectedpackage.photo} alt="" />
                                    </div>
                                    <div>
                                        <h4 className="text-center my-2">{selectedpackage.title}</h4>
                                        <div>
                                            <div className="place-duration my-2">
                                                <h6 >{selectedpackage.place}</h6>
                                                <h6 ><i class="fas fa-calendar-alt"></i> {selectedpackage.duration} Days</h6>
                                            </div>
                                        </div>
                                        <p>{selectedpackage.description}</p>
                                        <h4>Cost: ${selectedpackage.price}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Register;