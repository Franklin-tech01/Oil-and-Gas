import React from 'react';

const Parallax = () => {
    return (
        <section className='px-[20px]'>
            {/* <p>Preserve and conserve</p> */}
            {/* <p className='text-[24px]'>A Vital Energy Resource For A Better Tomorrow</p> */}
            {/* <p className='text-[12px]'>Cubilia scelerisque ultricies at cras tempus phasellus primis habitant. Penatibus pulvinar at vel cursus dignissim sem condimentum molestie. Lobortis hac aenean posuere justo letius laoreet augue.</p> */}
            {/* <Button text='DISCOVER MORE' /> */}
            <div className='flex'>
                {/* <img src="arrow" alt="" /> */}
                <div className='flex flex-col'>
                    <p className='font-bold text-[24px]'>Our Value</p>
                    <p className='text-[12px] text-justify'>In performing our functions as a group, we will:
                        • Comply with applicable laws and regulations of any country where we maintain
                        business operations.
                        • Operate with the high integrity and ethics expected of our industry.
                        • Deliver quality products and services.
                        4
                        Procurement Services
                        We have the resources and capabilities to source all items/services required to deliver clients
                        project requirements. We have exclusive partnerships with major EOMs in the oil and gas
                        sector.
                        With track record of several successful project materials delivery for our clients. Hen &
                        Associates is a leader in providing turnkey procurement solutions. We have selected
                        suppliers and vendors who are passionate about excellence and primarily focus on quality,
                        schedule, and price.
                        In summary, the procurement and supply department of Hen & Associates focuses on the
                        following lines of product:</p>
                </div>
            </div>
            <div className='flex'>
                {/* <img src="arrow" alt="" /> */}
                <div className='flex flex-col'>
                    <p className='font-bold text-[24px]'>Vision</p>
                    <p className='text-[12px] text-justify' >To be recognized globally as a leader in Oil and Gas infrastructure development,
                        improving quality of life and sustaining economic growth</p>
                </div>
            </div>
            <div className='flex'>
                {/* <img src="arrow" alt="" /> */}
                <div className='flex flex-col'>
                    <p className='font-bold text-[24px]'>Mission</p>
                    <p className='text-[12px] text-justify'>To deploy our innovative products and services in the most environmentally friendly way,
                        fulfilling our role in the international effort to reduce wastage and increase savings.
                        By developing our opportunities wisely, we seek to grow within the challenging Oil and Gas
                        market by offering added value to our clients and unshakable confidence to our stakeholders.</p>
                </div>
            </div>
        </section>
    );
};

export default Parallax;