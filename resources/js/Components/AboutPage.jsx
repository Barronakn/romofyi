import React from 'react';
import black_red from '../../../public/assets/images/black-red.png';
import { Link } from '@inertiajs/react';
const AboutPage = () => {
    return (
        <section className='about flex justify-between mx-32 my-20 max-[768px]:flex-col max-[768px]:gap-20 max-[768px]:mx-10'>
            <div className='w-1/2 max-[768px]:w-full'>
                <h1 className='text-sky-900 text-4xl max-[425px]:text-2xl'>The standard Lorem Ipsum</h1>
                <p className='py-10'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <Link className=' bg-sky-950 w-52 uppercase px-10 py-4 rounded-3xl my-8 text-white hover:bg-yellow-400 hover:text-black' href='#'>Shop Now</Link>
            </div>
            <div className='w-1/2 max-[768px]:w-full'>
                <img loading='lazy' src={black_red} alt="black-red" />
            </div>
        </section>
    );
};

export default AboutPage;
