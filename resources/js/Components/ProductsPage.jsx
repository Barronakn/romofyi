import { Link } from '@inertiajs/react';
import React from 'react';
import product_1 from '../../../public/assets/images/shoes1.png';
import product_2 from '../../../public/assets/images/shoes2.png';
import product_3 from '../../../public/assets/images/shoes3.png';
import product_4 from '../../../public/assets/images/shoes4.png';
import product_5 from '../../../public/assets/images/shoes5.png';
import product_6 from '../../../public/assets/images/tisat1.png';
import product_7 from '../../../public/assets/images/tisat2.png';
import product_8 from '../../../public/assets/images/tisat3.png';
import product_9 from '../../../public/assets/images/tisat4.png';
import product_10 from '../../../public/assets/images/tisat5.png';
import product_11 from '../../../public/assets/images/mix1.png';
import product_12 from '../../../public/assets/images/mix2.png';
import product_13 from '../../../public/assets/images/mix3.png';
import product_14 from '../../../public/assets/images/mix4.png';
import product_15 from '../../../public/assets/images/mix5.png';

const ProductsPage = () => {
    const products = [
        {
            image: product_1,
            name: "Short Openwork Cardigan",
            price: 120.00,
        },
        {
            image: product_2,
            name: "Short Openwork Cardigan",
            price: 120.00,
        },
        {
            image: product_3,
            name: "Short Openwork Cardigan",
            price: 120.00,
        },
        {
            image: product_4,
            name: "Short Openwork Cardigan",
            price: 120.00,
        },
        {
            image: product_5,
            name: "Short Openwork Cardigan",
            price: 120.00,
        },
        {
            image: product_6,
            name: "Short Openwork Cardigan",
            price: 120.00,
        },
        {
            image: product_7,
            name: "Short Openwork Cardigan",
            price: 120.00,
        },
        {
            image: product_8,
            name: "Short Openwork Cardigan",
            price: 120.00,
        },
        {
            image: product_9,
            name: "Short Openwork Cardigan",
            price: 120.00,
        },
        {
            image: product_10,
            name: "Short Openwork Cardigan",
            price: 120.00,
        },
        {
            image: product_11,
            name: "Short Openwork Cardigan",
            price: 120.00,
        },
        {
            image: product_12,
            name: "Short Openwork Cardigan",
            price: 120.00,
        },
        {
            image: product_13,
            name: "Short Openwork Cardigan",
            price: 120.00,
        },
        {
            image: product_14,
            name: "Short Openwork Cardigan",
            price: 120.00,
        },
        {
            image: product_15,
            name: "Short Openwork Cardigan",
            price: 120.00,
        },
    ]

    return (
        <section className='px-32 product_bg max-[1024px]:px-20 max-[768px]:px-10 max-[425px]:px-4'>
            <div className='grid grid-cols-5 max-[1024px]:grid-cols-4 max-[768px]:grid-cols-4 max-[600px]:grid-cols-2 max-[425px]:grid-cols-1 gap-10 my-10'>
                {
                    products.map((product, index) => (
                        <div key={index}>
                            <img loading='lazy' className='bg-gray-100 pointer-events-none max-[425px]:w-full py-14 px-5' src={product.image} alt={"product-" + index} />
                            <h4>{product.name}</h4>
                            <p>${product.price}</p>
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-center items-center mb-10'>
                <Link className='bg-sky-950 px-12 py-3 rounded-3xl text-white hover:bg-yellow-400 hover:text-black' href='#'>See More
                </Link>
            </div>
        </section>
    );
};

export default ProductsPage;
