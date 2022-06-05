import React from 'react';
import customer from '../../assets/images/customer.png';
import revenue from '../../assets/images/revenue.png';
import review from '../../assets/images/review.png';
import tools from '../../assets/images/tools.png';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactVisibilitySensor from 'react-visibility-sensor';

const BusinessSummary = () => {
    return (
        <section className='my-10 font-serif'>
            <h1 className='text-4xl text-secondary font-bold mb-10'> Business Summary</h1>

            <div>

                <div >
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                        <div class="stat place-items-center">
                            <div class="stat-title"><svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg></div>
                            <div class="font-extrabold text-5xl mb-2"> <CountUp  end={180} redraw={true}>
                                {({ countUpRef, start }) => (
                                    <ReactVisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </ReactVisibilitySensor>
                                )}
                            </CountUp> </div>
                            <div class=" text-secondary text-xl font-bold">Customers</div>
                        </div>

                        <div class="stat place-items-center">
                            <div class="stat-title"><svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg></div>
                            <div class="font-extrabold text-5xl mb-2"><CountUp  end={1500} redraw={true}>
                                {({ countUpRef, start }) => (
                                    <ReactVisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </ReactVisibilitySensor>
                                )}
                            </CountUp></div>
                            <div class=" text-secondary text-xl font-bold">Reviews</div>
                        </div>
                        <div class="stat place-items-center">
                            <div class="stat-title  "><svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg></div>
                            <div class="font-extrabold text-5xl "> <CountUp  end={50} redraw={true}>
                                {({ countUpRef, start }) => (
                                    <ReactVisibilitySensor onChange={start} delayedCall>
                                        <span ref={countUpRef} />
                                    </ReactVisibilitySensor>
                                )}
                            </CountUp></div>
                            <div class=" text-secondary text-xl font-bold">Tools</div>
                        </div>




                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessSummary;