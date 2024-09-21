import React from 'react';
import Button from '@/components/global/Button';

const AboutUs = () => {
  return (
    <section className='borde p-[40px] flex items-center flex-col '>
      {/* <div className='font-bold'>Trusted by 30,000 world-class brands and organizations of all sizes
      </div> */}

      <div className='bg-grey-500 p-[20px] flex flex-col lg:flex-row justify-between rounded'>
        <div className='lg:w-[500px] mr-5'>
          <p className='font-bold text-[30px]'>About <span className='text-blue-500'>Us</span></p>
          {/* <p>Providing affordable and reliable energy</p> */}
          <p className='text-start'>Our company showcases
            the comprehensive
            services we offer in the
            realm of strategic oil and
            gas procurements,
            drilling, and well
            intervention services.
            Hen and Associates, our commitment to delivering innovative products and solutions is
            matched only by our dedication to providing cost-effective and reliable services. We pride
            ourselves on the simplicity and efficiency of our designs, tailored to meet the unique needs
            of our customers.
          </p>

          {/* <div className='flex bg-white'>
          <img src="award" alt="" />
          <p>We&apos;re No.1 Oil & Gas Company</p>
        </div> */}
          {/* <div className='pb-[20px]'>
          <div><p>Clean energy for a bright future</p></div>
          <div><p>Sustainable development</p></div>
          <div><p>Improving access to energy</p></div>
        </div> */}
          <div className='mt-[20px]'>
            <Button text='READ MORE' className='bg-[black] w-[300px] lg:hover:!text-black' />
          </div>
        </div>

        <img src="/assets/images/Hero1-3.jpg" className='mt-[20px] rounded-[20px] w-[400px]  overflow-hidden border' alt="" />
        {/* <div>
          <p className='text-[24px]'>We Spread Around The World</p>
          <p className='text-[12px]'>Our company showcases
            the comprehensive
            services we offer in the
            realm of strategic oil and
            gas procurements,
            drilling, and well
            intervention services.
            Hen and Associates, our commitment to delivering innovative products and solutions is
            matched only by our dedication to providing cost-effective and reliable services. We pride
            ourselves on the simplicity and efficiency of our designs, tailored to meet the unique needs
            of our customers.
            Scope of Our Services:
            Oil & Gas Procurements: As a vendor, we have successfully supplied upstream and
            downstream parts, equipment, and accessories to both international and indigenous oil
            and gas companies in Nigeria. With direct access to OEM distributors in the UK, Europe,
            North America, and Asia, we ensure the timely delivery of high-quality products. We have
            a proven track record with clients including Future oilfield, Total Energies Upstream,
            RusselSmith Group, Chevron, Navante Oil & Gas Company Ltd and many more.
            Well Intervention Services: Our expertise includes Gyroscopic surveying and a range of
            well intervention activities such as Slickline, Coil Tubing, Re-Perforation, Sand Cleanout,
            RST, Well Head Maintenance, and GLVCO.</p>
          <div className='flex flex-row'>
            <div className='flex flex-col'>
              <p>25+</p>
              <p>Years of Experience</p>
            </div>
            <div className='flex flex-col'>
              <p>77+</p>
              <p>Years of Experience</p>
            </div>
            <div className='flex flex-col'>
              <p>38k+</p>
              <p>Years of Experience</p>
            </div>
          </div>
          <img src="world" alt="" />
        </div> */}
      </div>
    </section>
  );
};

export default AboutUs;