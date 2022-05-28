import React from 'react';
import henry from '../../assets/images/henry-nicholls.png';
import blundell from '../../assets/images/tom-blundell.png';
import latham from '../../assets/images/tom-latham.png';

const Review = ({ review }) => {
    const reviews = [
        {
            _id: 1,
            name: 'Tom Latham',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Stockhome',
            img: latham
        },

        {
            _id: 2,
            name: 'Tom Blundell',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Stockhome',
            img: blundell
        },

        {
            _id: 3,
            name: 'Henry Nicholls ',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Stockhome',
            img: henry
        }
    ];
    return (
        <section>
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