import Footer from '@/Components/Footer';
import Head from '@/Components/Head';
import Menu from '@/Components/Menu';
import Navbar from '@/Components/Navbar';
import ProductsPage from '@/Components/ProductsPage';
import React from 'react';

const Products = () => {
    const title = "Products";
    return (
        <section>
            <Head title="Romofyi - Products" description="Romofyi est un site de vente de vêtements et de chaussures. Une collection de vêtements et de chaussures de marque" keywords="Romofyi, vêtements, acessoires, chaussures, vente en ligne, achat en lignr, collection de vêtement, collection de chaussures, vêtements de marque, chaussure de marque" />
            <Menu />
            <Navbar />
            <div className='bg-yellow-500 py-10'>
                <h2 className='text-white sm:text-4xl text-2xl font-bold text-center'>Products</h2>
            </div>
            <ProductsPage />
            <Footer />
        </section>
    );
};

export default Products;
