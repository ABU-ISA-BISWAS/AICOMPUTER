import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/images/banner.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen font-serif ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} alt='' className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Start Here</h1>
                    <p className="py-6">Computer Part Wholesalers. Post Sourcing Requests to Get Quality Quotations Today.</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to primary"><Link to="/login">Get Started</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;