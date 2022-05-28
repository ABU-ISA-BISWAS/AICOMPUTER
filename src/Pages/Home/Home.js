import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Footer from './Footer';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <Review></Review>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>
        </div>
    );
};

export default Home;