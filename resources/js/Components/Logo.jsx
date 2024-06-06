import React from 'react';
import logo from "../../../public/assets/images/logo.png"
import { Link } from '@inertiajs/react';

const Logo = () => {
    return (
        <div className='logo'>
            <Link href='/'><img className='pointer-events-none sm:w-auto w-24 sm:h-auto h-10' loading='lazy' src={logo} alt="logo-icon" /></Link>
        </div>
    );
};

export default Logo;
