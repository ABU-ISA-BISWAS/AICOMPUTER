import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import cm from '../../assets/images/cm.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
const HomeReview = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])
    return (
      
        
        <div data-aos="slide-right" class="card w-72 lg:w-96 mx-auto my-10 bg-base-100 shadow-xl image-full">
            <figure className='w-72 lg:w-96'><img src={cm} alt="Shoes" /></figure>
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