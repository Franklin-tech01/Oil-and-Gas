// import React from 'react';

// const Footer = () => {
//     return (
//         <section className='flex flex-col lg:flex-row p-[24px] bg-black text-white'>
//             <div className='flex flex-col'>
//                 <p className='text-[20px]'>Home</p>
//                 <p>About Us</p>
//                 <p>Our Values</p>
//                 <p>Vision</p>
//                 <p>Mission</p>
//                 <p>Contact Us</p>
//                 <p>Our Growing Clients</p>
//             </div>

//             {/* company logo ish  */}
//             <div className='flex flex-col p-[20px]'>
//                 {/* <p>Sem et quisque dis fermentum vitae mauris sit orci ante. Porttitor facilisis lorem venenatis sollicitudin cursus sapien ultricies pretium.</p> */}
//                 <div className=''>
//                     <img src="/asset/icons/logo.svg" alt="" />
//                     <p>UK: 5, Price of Wales Terrace,London W8 5PG.</p>
//                     <p>USA: 18531 Greenwood Meadow Trail, Richmond 77407 Texas.</p>
//                     <p>NIGERIA: 44, Ofada Street, Lagos State, Nigeria</p>

//                     <p>Email: info@henassociate.com</p>
//                 </div>
//             </div>
//             <div className='bg-white p-[0.1px] mb-[20px]'>
//                 {/* footer footer  */}


//             </div>
//             <div className='flex flex-col lg:flex-row  lg:items-center'>
//                 <div className='p-[2px] flex flex-row justify-between text-[12px] '>
//                     <p>Term of Use</p>
//                     <p>Cookies</p>
//                     <p>privacy Policy</p>
//                 </div>
//                 <p className='text-[12px]'>Copyright © 2024 Hen&Associate, All rights reserved. Powered by MoxCreative</p>
//             </div>
//         </section>
//     );
// };

// export default Footer;


import React from 'react';

const Footer = () => {
    return (
        <footer className='flex flex-col lg:flex-row justify-between px-6 py-12 bg-black text-white'>
            {/* Navigation Links */}
            <div className='mb-8 lg:mb-0'>
                <h3 className='text-[24px] font-semibold mb-4'>Quick Links</h3>
                <ul className='space-y-2'>
                    <li><a href="#home" className='hover:text-gray-400 transition-colors'>Home</a></li>
                    <li><a href="#about" className='hover:text-gray-400 transition-colors'>About Us</a></li>
                    <li><a href="#values" className='hover:text-gray-400 transition-colors'>Our Values</a></li>
                    <li><a href="#vision" className='hover:text-gray-400 transition-colors'>Vision</a></li>
                    <li><a href="#mission" className='hover:text-gray-400 transition-colors'>Mission</a></li>
                    <li><a href="#contact" className='hover:text-gray-400 transition-colors'>Contact Us</a></li>
                    <li><a href="#clients" className='hover:text-gray-400 transition-colors'>Our Growing Clients</a></li>
                </ul>
            </div>

            {/* Company Information */}
            <div className='mb-8 lg:mb-0'>
                <h3 className='text-[24px] font-semibold mb-4'>Contact Information</h3>
                <div className='space-y-2'>
                    <img src="/assets/icons/logo.svg" alt="Company Logo" className='mb-4 h-[60px] w-[160px] object-contain' />
                    <p>UK: 5, Price of Wales Terrace, London W8 5PG</p>
                    <p>USA: 18531 Greenwood Meadow Trail, Richmond, Texas 77407</p>
                    <p>Nigeria: 44, Ofada Street, Lagos State, Nigeria</p>
                    <p>Email: <a href="mailto:info@henassociate.com" className='text-primary hover:underline'>info@henassociate.com</a></p>
                </div>
            </div>

            {/* Terms and Copyright */}
            <div className='flex flex-col justify-between lg:items-end'>
                <div className='mb-4'>
                    <h3 className='text-[24px] font-semibold mb-4'>Legal</h3>
                    <ul className='space-y-2 text-sm'>
                        <li><a href="#terms" className='hover:text-gray-400 transition-colors'>Terms of Use</a></li>
                        <li><a href="#cookies" className='hover:text-gray-400 transition-colors'>Cookies</a></li>
                        <li><a href="#privacy" className='hover:text-gray-400 transition-colors'>Privacy Policy</a></li>
                    </ul>
                </div>
                <p className='text-[12px] text-gray-500 mt-4 lg:mt-0'>
                    Copyright © 2024 Hen & Associate, All rights reserved. <br />
                    Powered by MoxCreative
                </p>
            </div>
        </footer>
    );
};

export default Footer;
