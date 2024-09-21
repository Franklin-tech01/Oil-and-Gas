/* eslint-disable react/no-unescaped-entities */

import React from 'react';

const Parallax = () => {
    return (
        <section className='px-4 py-8 lg:py-16 bg-gray-100'>
            {/* Section Header */}
            <div className='text-center mb-12'>
                <h2 className='text-3xl lg:text-5xl font-bold text-gray-800 mb-4'>Our Commitment</h2>
                <p className='text-lg lg:text-xl text-gray-600'>
                    Delivering sustainable solutions in Oil and Gas with integrity and innovation.
                </p>
            </div>

            {/* Content Sections */}
            <div className='space-y-12'>
                {/* Our Value Section */}
                <div className='flex flex-col lg:flex-row items-start gap-8'>
                    <div className='w-full lg:w-1/3'>
                        <h3 className='text-2xl font-bold text-gray-700'>Our Value</h3>
                    </div>
                    <div className='w-full lg:w-2/3'>
                        <p className='text-base text-gray-600'>
                            In performing our functions as a group, we will:
                            <ul className='list-disc ml-6'>
                                <li>Comply with applicable laws and regulations of any country where we operate.</li>
                                <li>Maintain high integrity and ethics expected of our industry.</li>
                                <li>Deliver quality products and services.</li>
                            </ul>
                            <p className='mt-4'>
                                We have the resources and capabilities to source all items/services required to deliver
                                clients' project requirements. With exclusive partnerships and a track record of
                                successful project material deliveries, we focus on quality, schedule, and price.
                            </p>
                        </p>
                    </div>
                </div>

                {/* Vision Section */}
                <div className='flex flex-col lg:flex-row items-start gap-8'>
                    <div className='w-full lg:w-1/3'>
                        <h3 className='text-2xl font-bold text-gray-700'>Vision</h3>
                    </div>
                    <div className='w-full lg:w-2/3'>
                        <p className='text-base text-gray-600'>
                            To be recognized globally as a leader in Oil and Gas infrastructure development, improving
                            quality of life and sustaining economic growth.
                        </p>
                    </div>
                </div>

                {/* Mission Section */}
                <div className='flex flex-col lg:flex-row items-start gap-8'>
                    <div className='w-full lg:w-1/3'>
                        <h3 className='text-2xl font-bold text-gray-700'>Mission</h3>
                    </div>
                    <div className='w-full lg:w-2/3'>
                        <p className='text-base text-gray-600'>
                            We aim to deploy our innovative products and services in an environmentally friendly
                            manner, reducing wastage and increasing savings. Through wise development, we seek to grow
                            in the Oil and Gas market, providing added value to our clients and confidence to our
                            stakeholders.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Parallax;
