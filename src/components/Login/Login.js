
import { getAuth, GoogleAuthProvider, signInWithPopup } from '@firebase/auth';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import googleLogo from '../../images/google-logo.png';
import './Login.css';
import swal from 'sweetalert';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Login = () => {
    const auth = getAuth();
    const { allFirebase } = useAuth();
    const { setIsLoading } = allFirebase;

    const handleGoogleLogin = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                swal("Good job!", "Logout Successfully!", "success");
            })
            .catch((error) => {
                console.log("Kono Genjam ase");
            })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <Container>
            <div className="row my-5" data-aos="zoom-in-up" data-aos-delay="300">
                <div className="col-md-5 mx-auto h-100">
                    <div className="login" >
                        <div>
                            <h5 className="text-center mb-3">Login with</h5>
                            <div onClick={handleGoogleLogin} className="google-button">
                                <div>
                                    <img style={{ width: "30px" }} className="img-fluid" src={googleLogo} alt="" />
                                </div>
                                <div className="mx-5">
                                    <h6 className="mb-0">Continue With Google</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Login;