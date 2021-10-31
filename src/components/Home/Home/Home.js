import React from 'react';
import Banner from '../Banner/Banner';
import OrganizerContainer from '../OrganizerContainer/OrganizerContainer/OrganizerContainer';
import PackagesContainer from '../PackagesContainer/PackagesContainer';
import WeOfferTheBest from '../WeOfferTheBest/WeOfferTheBest';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PackagesContainer></PackagesContainer>
            <WeOfferTheBest></WeOfferTheBest>
            <OrganizerContainer></OrganizerContainer>
        </div>
    );
};

export default Home;