import React from 'react';
import fashion_img from "../../../public/assets/images/fashion.jpg"

const FashionPage = () => {
    return (
        <section className='fashion'>
            <img className='pointer-events-none' loading='lazy' src={fashion_img} alt="fashion-img" />
        </section>
    );
};

export default FashionPage;
