import { Link } from '@inertiajs/react';
import React from 'react';
import header from "../../../public/assets/images/ban_img.png"
import shoes from "../../../public/assets/images/shoes.png"
import underwear from "../../../public/assets/images/underwear.png"
import pent from "../../../public/assets/images/pent.png"
import t_shart from "../../../public/assets/images/t_shart.png"
import jakit from "../../../public/assets/images/jakit.png"
import helbet from "../../../public/assets/images/helbet.png"

const Header = () => {
    return (
        <header>
            <section className='header-banner max-[1024px]:pt-20 flex max-[768px]:flex-col items-center justify-between'>
                <div className='mx-32 max-[768px]:mx-14 flex flex-col gap-6'>
                    <h1 className='text-7xl max-[768px]:text-5xl max-[425px]:text-3xl text-sky-950 font-serif'>Romofyi</h1>
                    <h3 className='text-8xl max-[768px]:text-6xl max-[425px]:text-4xl text-yellow-400'>Trands 2019</h3>
                    <p className='text-2xl'>A huge fashion collection for ever</p>
                    <Link className='max-[425px]:px-7 max-[425px]:py-3 max-[425px]:w-40 bg-blue-700 w-52 uppercase px-14 py-4 rounded-3xl my-8 text-white hover:bg-yellow-400 hover:text-black' href='#'>Shop Now</Link>
                </div>
                <div>
                    <img loading='lazy' src={header} alt="header-icon" />
                </div>
            </section>
            <section className='flex max-[1024px]:flex-wrap justify-center items-center text-center'>
                <div className='p-12 w-60 h-60 flex items-center flex-col justify-center bg-yellow-500'>
                    <img loading='lazy' src={shoes} alt="shoes-img" />
                    <h3 className="text-white font-bold uppercase text-base">Shoes</h3>
                </div>
                <div className='p-12 w-60 h-60 flex items-center flex-col justify-center bg-sky-950'>
                    <img loading='lazy' src={underwear} alt="underwear-img" />
                    <h3 className="text-white font-bold uppercase text-base">Underwear</h3>
                </div>
                <div className='p-12 w-60 h-60 flex items-center flex-col justify-center bg-yellow-500'>
                    <img loading='lazy' src={pent} alt="pent-img" />
                    <h3 className="text-white font-bold uppercase text-base">Pante & Socks</h3>
                </div>
                <div className='p-12 w-60 h-60 flex items-center flex-col justify-center bg-sky-950'>
                    <img loading='lazy' src={t_shart} alt="t_shart-img" />
                    <h3 className="text-white font-bold uppercase text-base">T-shirt & tankstop</h3>
                </div>
                <div className='p-12 w-60 h-60 flex items-center flex-col justify-center bg-yellow-500'>
                    <img loading='lazy' src={jakit} alt="jakit-img" />
                    <h3 className="text-white font-bold uppercase text-base">Cardigans & jumpers</h3>
                </div>
                <div className='p-12 w-60 h-60 flex items-center flex-col justify-center bg-sky-950'>
                    <img loading='lazy' src={helbet} alt="helbet-img" />
                    <h3 className="text-white font-bold uppercase text-base">Top & hat</h3>
                </div>
            </section>
        </header>
    );
};

export default Header;
