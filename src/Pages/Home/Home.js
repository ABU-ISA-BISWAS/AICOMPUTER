import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Footer from './Footer';
import HomeLogin from './HomeLogin';
import HomeReview from './HomeReview';
import Review from './Review';
import Tools from './Tools';
import './Home.css';

const Home = () => {
    return (
        <div className='home '>
            <Banner></Banner>
            <Tools></Tools>
            <Review></Review>
            <HomeReview></HomeReview>
            <BusinessSummary></BusinessSummary>
            
            <HomeLogin></HomeLogin>
            <Footer></Footer>
        </div>
    );
};

export default Home;