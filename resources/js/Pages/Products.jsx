import Footer from '@/Components/Footer';
import Menu from '@/Components/Menu';
import Navbar from '@/Components/Navbar';
import ProductsPage from '@/Components/ProductsPage';
import React from 'react';

const Products = () => {
    return (
        <section>
            <Menu />
            <Navbar />
            <div className='bg-yellow-500 py-10'>
                <h2 className='text-white text-4xl  max-[425px]:text-2xl font-bold text-center'>Products</h2>
            </div>
            <ProductsPage />
            <Footer />
        </section>
    );
};

export default Products;
