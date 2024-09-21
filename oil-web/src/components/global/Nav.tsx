'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import ButtonDark from './ButtonDark';

const Nav = () => {
    const [navBarOpen, setNavBarOpen] = useState(false);
    return (
        <div className=' px-[32px] borde border-orange-500 bg-transparent absolute top-0  w-full z-20  xl:mx-auto'>
            {/* Nav container */}
            <nav className=' border-red-500 '>

                <div className=' border-blue-500 borde bg-transparent flex justify-between items-center py-[12px]'>
                    {/* itdt logo and name  */}
                    <a href='/' className='  border-green-500  items-center cursor-pointer flex flex-col'>
                        <Image
                            className=' border-green-500 w-[57.33px] h-[53.9px]'
                            src={'assets/icons/logo.svg'}
                            alt='Company Logo'
                            width={57.33}
                            height={53.9}
                        />
                        <p className='text-white text-[8px] lg:text-[14px]'>Hen and Associate</p>
                    </a>
                    {/* Mobile Hamburger */}
                    {
                        !navBarOpen ? (
                            <button onClick={() => setNavBarOpen(true)}>
                                <Image
                                    className=' border-green-500 w-[20px] h-[20px] md:hidden'
                                    src={'assets/icons/ham.svg'}
                                    alt='Company Logo'
                                    width={57.33}
                                    height={75.4}
                                />
                            </button>
                        ) :
                            null

                    }

                    {/* large screen menu */}
                    <div className=' items-center  hidden md:flex gap-[16px]'>
                        <a className='p-[8px] text-white text-[16px] leading-[19.8px] cursor-pointer hover:underline font-unbounded' href='/contact'>Home</a>
                        <a className='p-[8px] text-white text-[16px] leading-[19.8px] cursor-pointer hover:underline font-unbounded' href='/contact'>About Us</a>
                        <a className='p-[8px] text-white text-[16px] leading-[19.8px] cursor-pointer hover:underline font-unbounded' href='/contact'>Our Values</a>
                        <a className='p-[8px] text-white text-[16px] leading-[19.8px] cursor-pointer hover:underline font-unbounded' href='/contact'>Vision</a>
                        <a className='p-[8px] text-white text-[16px] leading-[19.8px] cursor-pointer  hover:underline font-unbounded ' href='/about' >Mission</a>
                        <a className='p-[8px] text-white text-[16px] leading-[19.8px] cursor-pointer  hover:underline font-unbounded ' href='/about' >Our Growing Client</a>
                        <a className='p-[8px] text-white text-[16px] leading-[19.8px] cursor-pointer  hover:underline font-unbounded ' href='/about' >Contact Us</a>
                        <ButtonDark text={'Get Involved'} hidden='hidden' fontType={'font-unbounded'} link='/involved' />
                    </div>
                </div>

            </nav>
            {
                navBarOpen ?
                    <nav className='border-red-500 origin-left   bg-white fixed z-20 top-0 left-0 w-[300px] md:hidden hover:opacity90  animate-open-menu2  flex flex-col '>

                        <div className=' border-blue-500   '>

                            <div className='flex items-center justify-between mx-[32px]'>
                                <a href='/' className=' mt-[24px] border-green-500 items-center cursor-pointer flex flex-col'>
                                    <Image
                                        className=' border-green-500 w-[57.33px] h-[53.9px]'
                                        src={'assets/icons/logo.svg'}
                                        alt='Company Logo'
                                        width={57.33}
                                        height={53.9}
                                    />
                                    {/* <Image
                                        className=' border-green-500 w-[39px] h-[17px]'
                                        src={'assets/icons/itdt.svg'}
                                        alt='Company Logo'
                                        width={39}
                                        height={17}
                                    /> */}
                                </a>
                                {/* Mobile X icon */}

                                <a onClick={() => setNavBarOpen(false)}>
                                    <Image
                                        className=' border-green-500 w-[20px] h-[20px] lg:hidden'
                                        src={'assets/icons/multiplyBlack.svg'}
                                        alt='Company Logo'
                                        width={57.33}
                                        height={75.4}
                                    />
                                </a>
                            </div>
                            {/* mobile screen menu container */}
                            <div className=' items-start flex flex-col min-h-screen  mx-[16px] gap-[16px]'>
                                {/* mobile screen menu */}
                                <div className=' items-start flex flex-col   h-fit mt-[40px] gap-[24px]'>
                                    <a className='p-[8px] text-primary text-black text-[16px]  leading-[19.8px] cursor-pointer font-unbounded' onClick={() => setNavBarOpen(false)} href='/#Hero'>Home</a>
                                    <a className='p-[8px] text-primary text-black text-[16px] leading-[19.8px] cursor-pointer  font-unbounded' onClick={() => setNavBarOpen(false)} href='/about'>About Us</a>
                                    <a className='p-[8px] text-primary  text-black text-[16px] leading-[19.8px] cursor-pointer  font-unbounded' onClick={() => setNavBarOpen(false)} href='/about'>Scope of Services</a>
                                    <a className='p-[8px] text-primary text-black text-[16px] leading-[19.8px] cursor-pointer font-unbounded' onClick={() => setNavBarOpen(false)} href='/contact'>Our Values</a>
                                    <a className='p-[8px] text-primary text-black text-[16px] leading-[19.8px] cursor-pointer font-unbounded' onClick={() => setNavBarOpen(false)} href='/involved'>Vision</a>
                                    <a className='p-[8px] text-primary text-black text-[16px] leading-[19.8px] cursor-pointer font-unbounded' onClick={() => setNavBarOpen(false)} href='/involved'>Mission</a>
                                    <a className='p-[8px] text-primary text-black text-[16px] leading-[19.8px] cursor-pointer font-unbounded' onClick={() => setNavBarOpen(false)} href='/involved'>Our Growing Client</a>
                                    <a className='p-[8px] text-primary text-black text-[16px] leading-[19.8px] cursor-pointer font-unbounded' onClick={() => setNavBarOpen(false)} href='/involved'>Contact Us</a>
                                </div>
                                <div className='border-[#0B1F20] border my-[40px] w-full'></div>
                                {/* <h2 className='text-primary font-unbounded font-normal text-[24px] text-center leading-[29.7px]'>Rooted To Impact</h2> */}
                                <div className=' flex gap-[16px] cursor-pointer'>
                                    <Image
                                        src={'/assets/icons/facebook.svg'}
                                        alt='address'
                                        height={20}
                                        width={20}
                                        className=''
                                    />
                                    <Image
                                        src={'/assets/icons/blogger.svg'}
                                        alt='address'
                                        height={20}
                                        width={20}
                                        className=''
                                    />
                                    <Image
                                        src={'/assets/icons/whatsapp.svg'}
                                        alt='address'
                                        height={20}
                                        width={20}
                                        className=''
                                    />
                                </div>
                            </div>

                        </div>

                    </nav>
                    : null
            }


        </div>
    );
};

export default Nav;


// max - w - screen - 2xl