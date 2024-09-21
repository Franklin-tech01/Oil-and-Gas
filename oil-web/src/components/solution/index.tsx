

import React from 'react';

const Solution = () => {
    return (
        <section className='p-6 bg-gradient-to-r from-gray-100 to-blue-100 min-h-screen'>
            <p className='text-3xl font-bold text-gray-900 mb-8'>Scope of Our Services</p>

            <div className='p-8 grid grid-cols-1 lg:grid-cols-3  gap-2 rounded-lg backdrop-blur-lg bg-white/30 border border-white/20 shadow-lg'>
                {/* Service 1 */}
                <div className='flex flex-col gap-4 p-6 rounded-lg bg-white/40 backdrop-blur-lg shadow-md mb-6 text-gray-900'>
                    <img src="/assets/images/worker.png" alt="Oil & Gas" className='h-24 w-24 object-cover rounded-lg' />
                    <p className='text-sm md:text-base leading-relaxed'>
                        <span className='font-semibold'>Oil & Gas Procurements:</span> As a vendor, we have successfully supplied upstream and downstream parts, equipment, and accessories to both international and indigenous oil and gas companies in Nigeria. With direct access to OEM distributors in the UK, Europe, North America, and Asia, we ensure the timely delivery of high-quality products. We have a proven track record with clients including Future oilfield, Total Energies Upstream, RusselSmith Group, Chevron, Navante Oil & Gas Company Ltd, and many more.
                    </p>
                    {/* <img src="" alt="" className='absolute top-4 right-4 h-12 w-12 opacity-10' /> */}
                </div>

                {/* Service 2 */}
                <div className='flex flex-col gap-4 p-6 rounded-lg bg-white/40 backdrop-blur-lg shadow-md mb-6 text-gray-900'>
                    <img src="/assets/images/technology.png" alt="Facility O&M" className='h-24 w-24 object-cover rounded-lg' />
                    <p className='text-sm md:text-base leading-relaxed'>
                        <span className='font-semibold'>Facility O&M:</span> Our services extend to Facility Operations and Maintenance, ensuring the seamless functioning of your oil and gas facilities. We specialize in providing marine services to support various aspects of the oil and gas industry. Additional services include Project Management, personal service sourcing locally and internationally, international representation, document collection, air cargo, freight shipping logistics, real-time data management, and logistics allied services.
                    </p>
                    {/* <img alt="" className='absolute top-4 right-4 h-12 w-12 opacity-10' /> */}
                </div>

                {/* Service 3 */}
                <div className='flex flex-col gap-4 p-6 rounded-lg lg:h-[400px] bg-white/40 backdrop-blur-lg shadow-md text-gray-900'>
                    <img src="/assets/images/engineering.png" alt="Global Presence" className='h-24 w-24 object-cover rounded-lg' />
                    <p className='text-sm md:text-base leading-relaxed'>
                        <span className='font-semibold'>Our Global Presence:</span> Our team has almost a decade of experience delivering world-class solutions in the Oil and Gas business. We leverage diverse national and international teams that provide long-term value and sustainable development. We ensure timely delivery of complex projects regardless of challenges. We also have offices in the UK and USA.
                    </p>
                    {/* <img src="" alt="" className='absolute top-4 right-4 h-12 w-12 opacity-10' /> */}
                </div>
            </div>
        </section>
    );
};

export default Solution;
