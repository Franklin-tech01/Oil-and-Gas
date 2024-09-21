import React from 'react';
import Button from '@/components/global/Button';


const Hero = () => {
    return (
        <section id='Hero' className='flex relative border-blue-500 justify-center mt-0'>
            <div
                style={{
                    backgroundImage: `url('/assets/images/Hero1-2.jpg')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center", // Ensures the image is centered
                    backgroundAttachment: "scroll", // Keep it scrollable or use 'fixed' if you want it to stay while scrolling
                }}
                className='border-red-500 shadow-lg  overflow-hidden flex flex-col items-start px-[80px] xl:px-[300px] w-full max-w-[1920px] h-[353px] lg:h-[668px] xl:h-[668px]'
            >
                <h2 className='text-[28px] lg:text-[72px] font-semibold mt-[80px] lg:mt-[180px] font-unbounded text-white text-left leading-tight lg:leading-[1.2]'>
                    Unlocking Efficient Energy Solutions <br className="hidden lg:block" /> with Hen & Associates
                </h2>
                {/* <h2 className="text-[28px] lg:text-[72px] lg:ml-[-80px] lg:w-[300px] font-semibold mt-[80px] lg:mt-[180px] ] font-unbounded text-white text-left leading-tight lg:leading-[1.2] typewriter">
                    Unlocking Efficient Energy Solutions <br className="hidden lg:block" /> with Hen & Associates
                </h2> */}
                <Button
                    hidden='hidden'
                    link='/involved'
                    text='Get Involved'
                    fontType='font-unbounded'
                    className='!border-0 bg-black text-white rounded-full w-[145px] lg:w-[200px]  my-2 hover:!text-black'
                    textColor={'text-primary'}
                    hoverBG='hover:bg-[#fff]'
                />
            </div>
        </section>


    );
};

export default Hero;
