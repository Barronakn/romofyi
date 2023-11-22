import Footer from '@/Components/Footer';
import Menu from '@/Components/Menu';
import Navbar from '@/Components/Navbar';
import NewsPage from '@/Components/NewsPage';
import React from 'react';

const News = () => {
    return (
        <section>
            <Menu />
            <Navbar />
            <div className='bg-yellow-500 py-10'>
                <h2 className='text-white text-4xl  max-[425px]:text-2xl font-bold text-center'>News</h2>
            </div>
            <NewsPage />
            <Footer />
        </section>
    );
};

export default News;
