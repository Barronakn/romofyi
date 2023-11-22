import FashionPage from '@/Components/FashionPage';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Infos from '@/Components/Infos';
import Menu from '@/Components/Menu';
import Navbar from '@/Components/Navbar';
import NewsPage from '@/Components/NewsPage';
import ProductsPage from '@/Components/ProductsPage';
import Title from '@/Components/Title';
import React from 'react';

const Welcome = () => {
    return (
        <div>
            <Menu />
            <Navbar />
            <Header />
            <Title title="Featured Products" />
            <ProductsPage />
            <FashionPage />
            <Title title="Latest News" />
            <NewsPage />
            <Infos />
            <Footer />
        </div>
    );
};

export default Welcome;
