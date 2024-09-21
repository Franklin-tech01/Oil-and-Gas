/* eslint-disable react/no-unescaped-entities */
// import React from 'react';

// const Parallax = () => {
//     return (
//         <section className='px-[20px] py-2'>
//             {/* <p>Preserve and conserve</p> */}
//             {/* <p className='text-[24px]'>A Vital Energy Resource For A Better Tomorrow</p> */}
//             {/* <p className='text-[12px]'>Cubilia scelerisque ultricies at cras tempus phasellus primis habitant. Penatibus pulvinar at vel cursus dignissim sem condimentum molestie. Lobortis hac aenean posuere justo letius laoreet augue.</p> */}
//             {/* <Button text='DISCOVER MORE' /> */}
//             <div className='flex my-2'>
//                 {/* <img src="arrow" alt="" /> */}
//                 <div className='flex flex-col gap-3'>
//                     <p className='font-bold text-[24px]'>Our Value</p>
//                     <p className='text-[12px] text-justify'>In performing our functions as a group, we will:
//                         • Comply with applicable laws and regulations of any country where we maintain
//                         business operations.
//                         • Operate with the high integrity and ethics expected of our industry.
//                         • Deliver quality products and services.
//                         4
//                         Procurement Services
//                         We have the resources and capabilities to source all items/services required to deliver clients
//                         project requirements. We have exclusive partnerships with major EOMs in the oil and gas
//                         sector.
//                         With track record of several successful project materials delivery for our clients. Hen &
//                         Associates is a leader in providing turnkey procurement solutions. We have selected
//                         suppliers and vendors who are passionate about excellence and primarily focus on quality,
//                         schedule, and price.
//                         In summary, the procurement and supply department of Hen & Associates focuses on the
//                         following lines of product:</p>
//                 </div>
//             </div>
//             <div className='flex my-2'>
//                 {/* <img src="arrow" alt="" /> */}
//                 <div className='flex flex-col gap-3'>
//                     <p className='font-bold text-[24px]'>Vision</p>
//                     <p className='text-[12px] text-justify' >To be recognized globally as a leader in Oil and Gas infrastructure development,
//                         improving quality of life and sustaining economic growth</p>
//                 </div>
//             </div>
//             <div className='flex my-2'>
//                 {/* <img src="arrow" alt="" /> */}
//                 <div className='flex flex-col gap-3'>
//                     <p className='font-bold text-[24px]'>Mission</p>
//                     <p className='text-[12px] text-justify'>To deploy our innovative products and services in the most environmentally friendly way,
//                         fulfilling our role in the international effort to reduce wastage and increase savings.
//                         By developing our opportunities wisely, we seek to grow within the challenging Oil and Gas
//                         market by offering added value to our clients and unshakable confidence to our stakeholders.</p>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Parallax;


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
