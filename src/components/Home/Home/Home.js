import React from 'react';
import Banner from '../Banner/Banner';
import OrganizerContainer from '../OrganizerContainer/OrganizerContainer/OrganizerContainer';
import PackagesContainer from '../PackagesContainer/PackagesContainer';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PackagesContainer></PackagesContainer>
            <OrganizerContainer></OrganizerContainer>
        </div>
    );
};

export default Home;