import React from 'react';
import { Link } from 'react-router-dom';
import cm from '../../assets/images/cm.png';

const HomeReview = () => {
    return (
      
        
        <div class="card w-96 mx-auto py-5 bg-base-100 shadow-xl image-full">
            <figure><img src={cm} alt="Shoes" /></figure>
            <div class="card-body">
               
                <p className='text-2xl font-semibold font-serif'>Please Add a Review</p>
                <div class="card-actions justify-center">
                    <button class="btn bg-gradient-to-r from-secondary to primary"><Link to="/dashboard/review">Add Review</Link></button>
                </div>
            </div>
        </div>

    );
};

export default HomeReview;