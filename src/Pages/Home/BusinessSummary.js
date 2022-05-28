import React from 'react';
import customer from '../../assets/images/customer.png';
import revenue from '../../assets/images/revenue.png';
import review from '../../assets/images/review.png';
import tools from '../../assets/images/tools.png';

const BusinessSummary = () => {
    return (
        <section className='mt-10 font-serif'>
            <h1 className='text-4xl text-secondary font-bold mb-10'> Business Summary</h1>
            
            <div>

                <div >
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>

                        <div class="stat place-items-center">
                            <div class="stat-title"><img src={customer} alt="" /></div>
                            <div class="font-extrabold text-5xl mb-2">100+</div>
                            <div class=" text-secondary text-xl font-bold">Customers</div>
                        </div>
                        <div class="stat place-items-center">
                            <div class="stat-title"><img style={{height:'135px'}} src={revenue} alt="" /></div>
                            <div class="font-extrabold text-5xl mb-2">120M+</div>
                            <div class=" text-secondary text-xl font-bold">Annual Revenue</div>
                        </div>
                        <div class="stat place-items-center">
                            <div class="stat-title"><img style={{height:'105px'}} src={review} alt="" /></div>
                            <div class="font-extrabold text-5xl mb-2">35K+</div>
                            <div class=" text-secondary text-xl font-bold">Reviews</div>
                        </div>
                        <div class="stat place-items-center">
                            <div class="stat-title "><img style={{height:'105px'}} className='' src={tools} alt="" /></div>
                            <div class="font-extrabold text-5xl mb-2">50+</div>
                            <div class=" text-secondary text-xl font-bold">Tools</div>
                        </div>

                       


                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;