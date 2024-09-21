import React from 'react';

const Projects = () => {
    return (
        <section className='mt-[24px] p-[24px]'>
            <p className='text-[24px] font-bold'>Procurement Services</p>
            <p className='text-justify '>We have the resources and capabilities to source all items/services required to deliver clients
                project requirements. We have exclusive partnerships with major EOMs in the oil and gas
                sector.
                With track record of several successful project materials delivery for our clients. Hen &
                Associates is a leader in providing turnkey procurement solutions. We have selected
                suppliers and vendors who are passionate about excellence and primarily focus on quality,
                schedule, and price.
                In summary, the procurement and supply department of Hen & Associates focuses on the
                following lines of product:</p>
            {/* <Button text='ALL PROJECT' /> */}

            {/* card component */}
            <div className='flex flex-col rounded border mt-[12px] p-[20px]'>
                <img src="" alt="" />
                <p>Equipment Supply</p>


            </div>
            <div className='flex flex-col rounded border mt-[12px] p-[20px]'>
                <img src="" alt="" />
                <p>Tools(Manual and Powered)</p>


            </div>
            <div className='flex flex-col rounded border mt-[12px] p-[20px]'>
                <img src="" alt="" />
                <p>Valves</p>


            </div>
            <div className='flex flex-col rounded border mt-[12px] p-[20px]'>
                <img src="" alt="" />
                <p>Pipes</p>


            </div>
            <div className='flex flex-col rounded border mt-[12px] p-[20px]'>
                <img src="" alt="" />
                <p>Pumps</p>


            </div>
            <div className='flex flex-col rounded border mt-[12px] p-[20px]'>
                <img src="" alt="" />
                <p>Materials and Consumables </p>


            </div>
            <div className='flex flex-col rounded border mt-[12px] p-[20px]'>
                <img src="" alt="" />
                <p>Chemicals </p>


            </div>
            <div className='flex flex-col rounded border mt-[12px] p-[20px]'>
                <img src="" alt="" />
                <p>OCTG </p>


            </div>
            <div className='flex flex-col rounded border mt-[12px] p-[20px]'>
                <img src="" alt="" />
                <p>Drill Bitts
                </p>

            </div>
            <p className='text-justify mt-[20px] '>With offices around the globe, our international procurement team is comprised of well qualified officers with many years of experience to provide timely and cost-effective solutions
                to our clients&apos; procurements.</p>

            <div className='flex flex-col borde border-green-500'>
                <p className='font-bold text-[24px]'>Our Clients:</p>
                <div className=' flex gap-[4px] justify-between borde border-orange-500'>

                    <div className='flex-col  items-center border-[2px] rounded'>
                        <img src="/assets/images/1.jpg" className='h-[200px] w-[200px]' alt="" />
                        <p className=' text-center p-[4px] font-bold text-[14px]' >Future OilField Service Limited
                        </p>
                    </div>
                    <div className='flex-col items-center border-[2px] rounded'>
                        <img src="/assets/images/2.jpg" className='h-[200px] w-[200px]' alt="" />
                        <p className=' p-[4px] text-center font-bold text-[14px]'>Total Energies
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col borde border-green-500'>
                <div className=' flex gap-[4px] justify-between borde border-orange-500'>

                    <div className='flex-col  items-center border-[2px] rounded'>
                        <img src="/assets/images/3.jpg" className='h-[200px] w-[200px]' alt="" />
                        <p className=' text-center p-[4px] font-bold text-[14px]' >RusselSmith
                        </p>
                    </div>
                    <div className='flex-col items-center border-[2px] rounded'>
                        <img src="/assets/images/4.jpg" className='h-[200px] w-[200px]' alt="" />
                        <p className=' p-[4px] text-center font-bold text-[14px]'>Dorman Long
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Projects;