import ContactPage from '@/Components/ContactPage';
import Footer from '@/Components/Footer';
import Menu from '@/Components/Menu';
import Navbar from '@/Components/Navbar';
import React from 'react';

const Contact = () => {
    return (
        <section>
            <Menu />
            <Navbar />
            <div className='bg-yellow-500 py-10'>
                <h2 className='text-white text-4xl  max-[425px]:text-2xl font-bold text-center'>Contact Us</h2>
            </div>
            <ContactPage />
            <Footer />
        </section>
    );
};

export default Contact;
