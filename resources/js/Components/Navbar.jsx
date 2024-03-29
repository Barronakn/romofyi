import { Link, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import menu_btn from "../../../public/assets/images/menu_icon1.png"
import Logo from './Logo';
import Menuform from './Menuform';

const Navbar = () => {
    const { url } = usePage()
    const menu = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "About",
            link: "/about"
        },
        {
            name: "Products",
            link: "/products"
        },
        {
            name: "Fashion",
            link: "/fashion"
        },
        {
            name: "News",
            link: "/news"
        },
        {
            name: "Contact Us",
            link: "/contact_us"
        },
    ]

    const [visible, setVisible] = useState(false);

    return (

        <section className='navbar hidden max-[821px]:block'>
            <div className='flex items-center justify-between px-10 bg-slate-200'>
                <Logo />
                <div className='cursor-pointer'>
                    <img loading='lazy' className='menu_btn w-10 h-8' onClick={() => setVisible(!visible)} src={menu_btn} alt="menu_btn-img" />
                </div>
            </div>

            <div className='relative max-[600px]:px-20 max-[600px]:w-full bg-sky-900 max-[425px]:px-0'>
                <nav className='absolute bg-sky-900 w-full top-0 left-0 mx-0 my-auto text-white'>
                    {visible &&
                        <ul className='uppercase flex flex-col justify-center p-5 gap-6'>
                            {
                                menu.map((links, index) => (
                                    <Link className={url === links.link ? "text-yellow-400" : ""} key={index} href={links.link}>{links.name}</Link>
                                ))
                            }
                        </ul>
                    }
                </nav>
                <div className='bg-sky-900 w-full py-4'>
                    <Menuform />
                </div>
            </div>
        </section>
    );
};

export default Navbar;
