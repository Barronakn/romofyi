import { Link, usePage } from '@inertiajs/react';
import React from 'react';
import mail from "../../../public/assets/images/email.png"
import shop from "../../../public/assets/images/shopping.png"
import Logo from './Logo';
import Menuform from './Menuform';

const Menu = () => {
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

    return (
        <section className='nav max-[821px]:hidden'>
            <div className='flex items-center justify-around py-6 bg-slate-200'>
                <div className='max-[600px]:hidden flex items-center gap-5'>
                    <Link href='#'><img className='pointer-events-none' loading='lazy' src={mail} alt="email-icon" /></Link>
                    <Link href='#'>demo@gmail.com</Link>
                </div>

                <Logo />

                <div className='max-[600px]:hidden flex items-center gap-5'>
                    <Link href='#'><img className='pointer-events-none' loading='lazy' src={shop} alt="shop-icon" /></Link>
                    <Link href='#'>Order Now</Link>
                </div>
            </div>

            <div className='nav-bar flex max-[1104px]:flex-wrap max-[1104px]:py-2  items-center justify-around bg-sky-900'>
                <nav>
                    <ul className='uppercase flex items-center justify-center gap-6 text-white'>
                        {
                            menu.map((links, index) => (
                                <Link className={url === links.link ? "bg-yellow-400 p-6" : "p-6"} key={index} href={links.link}>{links.name}</Link>
                            ))
                        }
                    </ul>
                </nav>
                <Menuform />
            </div>
        </section>
    );
};

export default Menu;
