/* eslint-disable react/no-unescaped-entities */


import React from 'react';
import Button from '@/components/global/Button';

const GetTogether = () => {
    return (
        <section id='Hero' className='flex relative justify-center mt-0'>
            {/* Background Image and Content */}
            <div
                style={{ backgroundImage: `url('/assets/images/Hero1-1.jpeg')`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
                className='relative shadow-lg overflow-hidden w-full max-w-[1920px] h-[400px] lg:h-[668px] flex flex-col justify-center items-start px-6 md:px-[80px] xl:px-[300px]'
            >
                {/* Overlay for better text visibility */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>

                {/* Text Content */}
                <div className="relative z-10">
                    <h2 className='text-white text-[24px] md:text-[40px] lg:text-[80px] font-bold font-unbounded'>
                        Let's be great together
                        <span className='block lg:leading-[80px] font-medium mt-2 lg:mt-4'>
                            Experience The Creativity And Togetherness
                        </span>
                    </h2>
                    <h3 className='text-white mt-2 lg:mt-4 text-[12px] md:text-[16px] lg:text-[24px] leading-[20px]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </h3>

                    {/* Button */}
                    <Button
                        link='/involved'
                        text='JOB OPPORTUNITY'
                        fontType='font-unbounded'
                        className='bg-black text-white mt-4 lg:mt-6  transition-all duration-300'
                    />
                </div>
            </div>
        </section>
    );
};

export default GetTogether;
