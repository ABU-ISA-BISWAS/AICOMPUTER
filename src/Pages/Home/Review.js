import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Aos from 'aos';
import 'aos/dist/aos.css';


const Review = ({ review }) => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])
    const {data:reviews,isLoading,refetch}=useQuery('reviews',()=>fetch(`https://sheltered-bayou-65908.herokuapp.com/reviews`)
    .then(res=> res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
  
    return (
        <section className='w-11/12 mx-auto'>
            <h1 data-aos="fade-down" className='my-5 font-serif text-4xl text-secondary font-bold'>What Our Customer Say</h1>
            <div className=' font-serif grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <div data-aos="fade-up" className="card w-68 mx-auto lg:w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        
                        <p>{review.review}</p>
                        <div className="flex items-center ">
                            <div className="avatar">
                                <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                    <img src={review.img} alt="" />
                                </div>
                            </div>
                            <div>
                                <h4 className='text-xl'>{review.name}</h4>
                                <p>{review.location}</p>
                            </div>
                        </div>
                    </div>
                </div>)
                }
            </div>

        </section>
    );
};

export default Review;