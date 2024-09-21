import React from 'react';

const Footer = () => {
    return (
        <section className='flex flex-col lg:flex-row p-[24px] bg-black text-white'>
            <div className='flex flex-col'>
                <p className='text-[20px]'>Home</p>
                <p>About Us</p>
                <p>Our Values</p>
                <p>Vision</p>
                <p>Mission</p>
                <p>Contact Us</p>
                <p>Our Growing Clients</p>
            </div>

            {/* company logo ish  */}
            <div className='flex flex-col p-[20px]'>
                {/* <p>Sem et quisque dis fermentum vitae mauris sit orci ante. Porttitor facilisis lorem venenatis sollicitudin cursus sapien ultricies pretium.</p> */}
                <div className=''>
                    <img src="/asset/icons/logo.svg" alt="" />
                    <p>UK: 5, Price of Wales Terrace,London W8 5PG.</p>
                    <p>USA: 18531 Greenwood Meadow Trail, Richmond 77407 Texas.</p>
                    <p>NIGERIA: 44, Ofada Street, Lagos State, Nigeria</p>

                    <p>Email: info@henassociate.com</p>
                </div>
            </div>
            <div className='bg-white p-[0.1px] mb-[20px]'>
                {/* footer footer  */}


            </div>
            <div className='flex flex-col lg:flex-row  lg:items-center'>
                <div className='p-[2px] flex flex-row justify-between text-[12px] '>
                    <p>Term of Use</p>
                    <p>Cookies</p>
                    <p>privacy Policy</p>
                </div>
                <p className='text-[12px]'>Copyright © 2024 Hen&Associate, All rights reserved. Powered by MoxCreative</p>
            </div>
        </section>
    );
};

export default Footer;