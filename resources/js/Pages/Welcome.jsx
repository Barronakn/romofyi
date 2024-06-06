import FashionPage from '@/Components/FashionPage';
import Footer from '@/Components/Footer';
import Head from '@/Components/Head';
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
            <Head title="Romofyi" description="Romofyi est un site de vente de vêtements et de chaussures. Une collection de vêtements et de chaussures de marque" keywords="Romofyi, vêtements, acessoires, chaussures, vente en ligne, achat en lignr, collection de vêtement, collection de chaussures, vêtements de marque, chaussure de marque" />
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
