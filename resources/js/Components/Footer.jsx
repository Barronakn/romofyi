import { Link } from '@inertiajs/react';
import React from 'react';

const Footer = () => {
    return (
        <footer className='py-4 text-center text-xl max-[425px]:text-lg bg-slate-200 max-[425px]:px-10'>
            <p>© 2019 All Rights Reserved. Design by
                <Link className='hover:text-yellow-400' href='#'> Upper Thrill Tech</Link>
            </p>
        </footer>
    );
};

export default Footer;
