import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/images/banner.png';
import './Banner.css';

const Banner = () => {
    return (
        <div className="hero  min-h-screen font-serif banner mb-5" >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner} alt='' className="max-w-sm w-52 lg:w-80 rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl text-white font-bold">Your New Smile Start Here</h1>
                    <p className="text-white py-6">Computer Part Wholesalers. Post Sourcing Requests to Get Quality Quotations Today.</p>
                    <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to primary"><Link to="/blogs">Get Started</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;