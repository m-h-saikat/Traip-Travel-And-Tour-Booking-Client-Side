import React from 'react';
import Banner from '../Banner/Banner';
import Offer from '../Offer/Offer';
import Partner from '../Partner/Partner';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
     
            <Services></Services>
            <Partner></Partner>
            <Review></Review>
        </div>
    );
};

export default Home;