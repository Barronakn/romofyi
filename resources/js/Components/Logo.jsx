import React from 'react';
import logo from "../../../public/assets/images/logo.png"
import { Link } from '@inertiajs/react';

const Logo = () => {
    return (
        <div className='logo'>
            <Link href='/'><img className='pointer-events-none max-[425px]:w-24 max-[425px]:h-10' loading='lazy' src={logo} alt="logo-icon" /></Link>
        </div>
    );
};

export default Logo;
