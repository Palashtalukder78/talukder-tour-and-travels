import React, { useEffect } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';
import SingleOrganizer from '../SingleOrganizer/SingleOrganizer';
import AOS from 'aos';
import 'aos/dist/aos.css';
const OrganizerContainer = () => {
    const { allOrganizer } = useAuth();
    const { organizers } = allOrganizer;
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <Container className="my-5" data-aos="fade-right" data-aos-delay="500">
            <h3 className="text-center section-title my-3">MEET OUR TRIP ORGANIZER</h3>
            <div className="row ">
                {!organizers.length > 0 ?
                    <div className="text-center my-spinner">
                        <Spinner animation="border" variant="primary" />
                    </div>
                    :
                    organizers.map(organizer => <SingleOrganizer
                        key={organizer.id}
                        organizer={organizer}
                    ></SingleOrganizer>)
                }
            </div>
        </Container>
    );
};

export default OrganizerContainer;