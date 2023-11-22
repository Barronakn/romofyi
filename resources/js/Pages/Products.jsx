import Footer from '@/Components/Footer';
import Menu from '@/Components/Menu';
import Navbar from '@/Components/Navbar';
import ProductsPage from '@/Components/ProductsPage';
import React, { useLayoutEffect } from 'react';

const Products = () => {
    const title = "Products";
    useLayoutEffect(() => {
        document.title = `${title}`;
    }, [title]);
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
