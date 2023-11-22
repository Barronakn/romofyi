import AboutPage from '@/Components/AboutPage';
import Footer from '@/Components/Footer';
import Menu from '@/Components/Menu';
import Navbar from '@/Components/Navbar';
import React from 'react';

const About = () => {
    return (
        <section>
            <Menu />
            <Navbar />
            <div className='bg-yellow-500 py-10'>
                <h2 className='text-white text-4xl  max-[425px]:text-2xl font-bold text-center'>About</h2>
            </div>
            <AboutPage />
            <Footer />
        </section>
    );
};

export default About;
