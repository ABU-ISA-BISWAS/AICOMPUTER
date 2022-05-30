import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';


const Review = ({ review }) => {
    const {data:reviews,isLoading,refetch}=useQuery('reviews',()=>fetch(`http://localhost:5000/reviews`)
    .then(res=> res.json()))

    if(isLoading){
        return <Loading></Loading>
    }
  
    return (
        <section className='w-10/12 mx-auto'>
            <h1 className='font-serif text-4xl text-secondary font-bold'>What Our Customer Say</h1>
            <div className='font-serif grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        
                        <p>{review.review}</p>
                        <div className="flex items-center">
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