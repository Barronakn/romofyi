import React from 'react';
import news_1 from "../../../public/assets/images/news_img1.jpg"
import news_2 from "../../../public/assets/images/news_img2.jpg"
import news_3 from "../../../public/assets/images/news_img3.jpg"

const NewsPage = () => {
    return (
        <section className='news lg:mx-32 mx-10 my-20'>
            <div className='new flex lg:flex-row flex-col gap-12 items-center lg:gap-8 justify-between'>
                <div className='lg:w-1/3 w-full'>
                    <img className='pointer-events-none' loading='lazy' src={news_1} alt="news-1-img" />
                </div>
                <div className='lg:w-2/3 w-full flex flex-col gap-10 justify-between'>
                    <h2 className='text-2xl font-bold'>Specimen book. It has survived not only five</h2>
                    <div className='details flex items-center justify-between'>
                        <div>
                            <h4>7 July 2019</h4>
                            <div className='bg-yellow-500 h-1'></div>
                        </div>
                        <div>
                            <h4>Like Comment</h4>
                            <div className='bg-yellow-500 h-1'></div>
                        </div>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>

            <div className='new flex lg:flex-row flex-col lg:gap-12 gap-8 my-10 justify-between'>
                <div className='lg:w-1/3 w-[510px] max-w-full'>
                    <img className='pointer-events-none w-full' loading='lazy' src={news_2} alt="news-1-img" />
                </div>
                <div className='lg:w-2/3 w-full flex flex-col gap-10 justify-between'>
                    <h2 className='text-2xl font-bold'>Specimen book. It has survived not only five</h2>
                    <div className='details flex items-center justify-between'>
                        <div>
                            <h4>7 July 2019</h4>
                            <div className='bg-yellow-500 h-1'></div>
                        </div>
                        <div>
                            <h4>Like Comment</h4>
                            <div className='bg-yellow-500 h-1'></div>
                        </div>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>

            <div className='new flex lg:flex-row flex-col lg:gap-12 items-center gap-8 justify-between'>
                <div className='lg:w-1/3 w-full'>
                    <img className='pointer-events-none' loading='lazy' src={news_3} alt="news-1-img" />
                </div>
                <div className='lg:w-2/3 w-full flex flex-col gap-10 justify-between'>
                    <h2 className='text-2xl font-bold'>Specimen book. It has survived not only five</h2>
                    <div className='details flex items-center justify-between'>
                        <div>
                            <h4>7 July 2019</h4>
                            <div className='bg-yellow-500 h-1'></div>
                        </div>
                        <div>
                            <h4>Like Comment</h4>
                            <div className='bg-yellow-500 h-1'></div>
                        </div>
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NewsPage;
