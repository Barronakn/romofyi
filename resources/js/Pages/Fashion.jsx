import FashionPage from '@/Components/FashionPage';
import Footer from '@/Components/Footer';
import Menu from '@/Components/Menu';
import Navbar from '@/Components/Navbar';
import React from 'react';

const Fashion = () => {
    return (
        <section>
            <Menu />
            <Navbar />
            <div className='bg-yellow-500 py-10'>
                <h2 className='text-white text-4xl max-[425px]:text-2xl font-bold text-center'>Fashion</h2>
            </div>
            <FashionPage />
            <Footer />
        </section>
    );
};

export default Fashion;
