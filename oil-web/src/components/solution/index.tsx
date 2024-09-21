// import React from 'react';

// const Solution = () => {
//     return (
//         <section className='p-[20px] '>
//             <p className='text-[24px] font-bold'>SCOPE OF OUR SERVICES</p>
//             {/* <p className='text-[12px]'>Ultricies purus commodo arcu pellentesque sapien. Porta platea efficitur neque inceptos natoque quam curabitur. Suspendisse montes torquent luctus sagittis blandit nisl cubilia. Libero mattis nibh consequat class nunc.</p> */}
//             <div className='p-[24px] rounded-md mt-[20px] bg-[#69a2b08e]'>


//                 <div className='flex flex-col   p-[24px] relative text-white'>
//                     <img src="" alt="" />
//                     <p className='text-[12px] text-justify'>Oil & Gas Procurements: As a vendor, we have successfully supplied upstream and
//                         downstream parts, equipment, and accessories to both international and indigenous oil
//                         and gas companies in Nigeria. With direct access to OEM distributors in the UK, Europe,
//                         North America, and Asia, we ensure the timely delivery of high-quality products. We have
//                         a proven track record with clients including Future oilfield, Total Energies Upstream,
//                         RusselSmith Group, Chevron, Navante Oil & Gas Company Ltd and many more.
//                         Well Intervention Services: Our expertise includes Gyroscopic surveying and a range of
//                         well intervention activities such as Slickline, Coil Tubing, Re-Perforation, Sand Cleanout,
//                         RST, Well Head Maintenance, and GLVCO</p>
//                     <img src="" alt="" className='absolute top-0 right-0' />
//                 </div>
//                 <div className='flex flex-col  p-[24px] relative text-white'>
//                     <img src="" alt="" />
//                     <p className='text-[12px] text-justify'>Facility O&M: Our services extend to Facility Operations and Maintenance, ensuring the
//                         seamless functioning of your oil and gas facilities.
//                         Marine Services: We specialize in providing marine services to support various aspects of
//                         the oil and gas industry. Additional Services:
//                         In addition to the core services mentioned above, we offer a range of supplementary
//                         services to meet the diverse needs of our clients. These include Project Management,
//                         personal service sourcing locally and internationally, international representation,
//                         document collection, air cargo, freight shipping logistics, real-time data management, and
//                         logistics allied services.
//                         Our reputation in the industry speaks for itself, and we are confident in our ability to
//                         provide exceptional service to your esteemed organization.
//                     </p>
//                     <img src="" alt="" className='absolute top-0 right-0' />
//                 </div>
//                 <div className='flex flex-col  p-[24px] relative text-white'>
//                     <img src="" alt="" />
//                     <p className='text-[12px] text-justify'>Our team has experience of almost a decade of delivering world-class solutions and
//                         exceptional value in the Oil and Gas business and is committed to global best practices.
//                         We leverage on diverse national and international team that is rich in talents and innovative
//                         ideas to provide long term value creation and sustainable development for the Communities
//                         in which we operate. Hence, our excellent performance and timely delivery of complex
//                         projects, regardless of the challenges.
//                         We have offices in the UK and USA.</p>
//                     <img src="" alt="" className='absolute top-0 right-0' />
//                 </div>
//             </div>
//             {/* <div className='mt-[24px]'>
//                 <p>Why Choose Us</p>
//                 <p>Promoting responsible use of petroleum resources</p>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
//                 <div className='flex flex-col mt-[24px]'>
//                     <div className='flex  rounded flex-col borde'>
//                         <div className='flex flex-row justify-between'>
//                             <p>Cleaner</p>
//                             <p>90%</p>
//                         </div>
//                         <div className='bg-yellow-600 p-[2px]'>

//                         </div>
//                     </div>
//                     <div className='flex flex-col borde'>
//                         <div className='flex flex-row justify-between'>
//                             <p>Stronger</p>
//                             <p>80%</p>
//                         </div>
//                         <div className='bg-yellow-600 p-[2px]'>

//                         </div>
//                     </div>
//                     <div className='flex flex-col rounded borde'>
//                         <div className='flex flex-row justify-between'>
//                             <p>Better</p>
//                             <p>75%</p>
//                         </div>
//                         <div className='bg-yellow-600 p-[2px]'>

//                         </div>
//                     </div>
//                 </div>

//                 <div>
//                     <img src="" alt="" className='relative' />
//                     <img src="" alt="" className='absolute bottom-[-30px] right-[-30px]' />
//                 </div>
//             </div> */}
//         </section>
//     );
// };

// export default Solution;


import React from 'react';

const Solution = () => {
    return (
        <section className='p-6 bg-gradient-to-r from-gray-100 to-blue-100 min-h-screen'>
            <p className='text-3xl font-bold text-gray-900 mb-8'>Scope of Our Services</p>

            <div className='p-8 rounded-lg backdrop-blur-lg bg-white/30 border border-white/20 shadow-lg'>
                {/* Service 1 */}
                <div className='flex flex-col gap-4 p-6 rounded-lg bg-white/40 backdrop-blur-lg shadow-md mb-6 text-gray-900'>
                    <img src="/assets/images/worker.png" alt="Oil & Gas" className='h-24 w-24 object-cover rounded-lg' />
                    <p className='text-sm md:text-base leading-relaxed'>
                        <span className='font-semibold'>Oil & Gas Procurements:</span> As a vendor, we have successfully supplied upstream and downstream parts, equipment, and accessories to both international and indigenous oil and gas companies in Nigeria. With direct access to OEM distributors in the UK, Europe, North America, and Asia, we ensure the timely delivery of high-quality products. We have a proven track record with clients including Future oilfield, Total Energies Upstream, RusselSmith Group, Chevron, Navante Oil & Gas Company Ltd, and many more.
                    </p>
                    <img src="" alt="" className='absolute top-4 right-4 h-12 w-12 opacity-10' />
                </div>

                {/* Service 2 */}
                <div className='flex flex-col gap-4 p-6 rounded-lg bg-white/40 backdrop-blur-lg shadow-md mb-6 text-gray-900'>
                    <img src="/assets/images/technology.png" alt="Facility O&M" className='h-24 w-24 object-cover rounded-lg' />
                    <p className='text-sm md:text-base leading-relaxed'>
                        <span className='font-semibold'>Facility O&M:</span> Our services extend to Facility Operations and Maintenance, ensuring the seamless functioning of your oil and gas facilities. We specialize in providing marine services to support various aspects of the oil and gas industry. Additional services include Project Management, personal service sourcing locally and internationally, international representation, document collection, air cargo, freight shipping logistics, real-time data management, and logistics allied services.
                    </p>
                    <img alt="" className='absolute top-4 right-4 h-12 w-12 opacity-10' />
                </div>

                {/* Service 3 */}
                <div className='flex flex-col gap-4 p-6 rounded-lg bg-white/40 backdrop-blur-lg shadow-md text-gray-900'>
                    <img src="/assets/images/engineering.png" alt="Global Presence" className='h-24 w-24 object-cover rounded-lg' />
                    <p className='text-sm md:text-base leading-relaxed'>
                        <span className='font-semibold'>Our Global Presence:</span> Our team has almost a decade of experience delivering world-class solutions in the Oil and Gas business. We leverage diverse national and international teams that provide long-term value and sustainable development. We ensure timely delivery of complex projects regardless of challenges. We also have offices in the UK and USA.
                    </p>
                    <img src="" alt="" className='absolute top-4 right-4 h-12 w-12 opacity-10' />
                </div>
            </div>
        </section>
    );
};

export default Solution;
