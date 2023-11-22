import React from 'react';

const Title = ({ title }) => {
    return (
        <div className='title max-[425px]:px-10 max-[425px]:text-2xl px-32 py-20'>
            <h1 className='text-4xl max-[425px]:text-2xl font-bold'>{title}</h1>
            <div className='bg-yellow-500 h-2 my-2'></div>
        </div>
    );
};

export default Title;
