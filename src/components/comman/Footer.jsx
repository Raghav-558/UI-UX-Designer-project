import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);

    return (
        <div data-aos="fade-right" className='flex items-center justify-center'>
            <div className='pb-10 pt-10 max-md:pt-5 max-md:pb-5  max-sm:pt-3 max-sm:pb-3'>
                <p className='font-worksans text-black text-xl font-medium max-sm:text-base'>© Copyright ChiranjitH.com</p>
            </div>
        </div>
    )
}

export default Footer