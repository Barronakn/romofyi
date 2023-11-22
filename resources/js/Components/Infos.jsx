import React from 'react';
import icon_mony from '../../../public/assets/images/icon_mony.png';
import icon_gift from '../../../public/assets/images/icon_gift.png';
import icon_car from '../../../public/assets/images/icon_car.png';

const Infos = () => {
    return (
        <section className='infos'>
            <div className='flex max-[920px]:flex-col items-center gap-8 justify-between px-32 max-[768px]:px-10 pb-20'>
                <div className='w-1/2 max-[920px]:w-full'>
                    <h1 className='text-4xl max-[425px]:text-2xl font-bold'>Subscribe To The Newsletter</h1>
                </div>
                <form className='flex flex-col justify-end items-end w-1/2 max-[920px]:w-full' action="#">
                    <input className='rounded-3xl w-full' type="email" name="mail" id="mail" placeholder='Enter your email' />
                    <input className=' bg-sky-950 w-52 uppercase px-14 py-3 rounded-3xl text-white hover:bg-yellow-400 hover:text-black' type="submit" value="Subscribe" />
                </form>
            </div>

            <div className='bg-sky-900 px-32 py-10 flex gap-32 max-[1024px]:gap-10 max-[768px]:flex-wrap justify-center items-center max-[425px]:px-10'>
                <div className='bg-white shadow-2xl w-80 h-40 flex flex-col rounded-xl justify-center items-center'>
                    <img loading='lazy' src={icon_mony} alt="icon_mony" />
                    <p>Money Back</p>
                </div>
                <div className='bg-white shadow-2xl w-80 h-40 flex flex-col rounded-xl justify-center items-center'>
                    <img loading='lazy' src={icon_gift} alt="icon_gift" />
                    <p>Special Gift</p>
                </div>
                <div className='bg-white shadow-2xl w-80 h-40 flex flex-col rounded-xl justify-center items-center'>
                    <img loading='lazy' src={icon_car} alt="icon_car" />
                    <p>Free Shipping</p>
                </div>
            </div>
        </section>
    );
};

export default Infos;
