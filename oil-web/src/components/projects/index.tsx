/* eslint-disable react/no-unescaped-entities */

import React from 'react';

const Projects = () => {
    return (
        <section className='mt-6 px-6 lg:px-12'>
            {/* Section Title */}
            <p className='text-[24px] lg:text-[32px] font-bold mb-4'>Procurement Services</p>

            {/* Description */}
            <p className='text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px] text-gray-700'>
                We have the resources and capabilities to source all items/services required to deliver clients'
                project requirements. We have exclusive partnerships with major EOMs in the oil and gas sector.
                With a track record of several successful project materials deliveries for our clients, Hen & Associates
                is a leader in providing turnkey procurement solutions. Our procurement and supply department focuses
                on the following lines of products:
            </p>

            {/* Product Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                {[
                    'Equipment Supply',
                    'Tools (Manual and Powered)',
                    'Valves',
                    'Pipes',
                    'Pumps',
                    'Materials and Consumables',
                    'Chemicals',
                    'OCTG',
                    'Drill Bitts'
                ].map((item, index) => (
                    <div key={index} className='p-4 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300'>
                        {/* <img src="" alt="" className='h-[150px] w-full object-cover rounded-lg mb-4' /> */}
                        <p className='text-lg font-semibold'>{item}</p>
                    </div>
                ))}
            </div>

            {/* Additional Information */}
            <p className='text-[14px] lg:text-[16px] leading-[24px] lg:leading-[28px] text-gray-700 mt-8'>
                With offices around the globe, our international procurement team is comprised of well-qualified
                officers with many years of experience to provide timely and cost-effective solutions to our clients' procurement needs.
            </p>

            {/* Clients Section */}
            <div className='my-12'>
                <p className='font-bold text-[24px] lg:text-[32px] mb-4'>Our Clients</p>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
                    {[
                        { name: 'Future OilField Service Limited', image: '/assets/images/1.jpg' },
                        { name: 'Total Energies', image: '/assets/images/2.jpg' },
                        { name: 'RusselSmith', image: '/assets/images/3.jpg' },
                        { name: 'Dorman Long', image: '/assets/images/4.jpg' }
                    ].map((client, index) => (
                        <div key={index} className='flex flex-col items-center p-4 bg-white shadow-md rounded-lg'>
                            <img src={client.image} alt={client.name} className='h-[150px] w-[150px] object-cover rounded-lg mb-4' />
                            <p className='text-center text-sm font-semibold'>{client.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
