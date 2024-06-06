import React from 'react';

const Title = ({ title }) => {
    return (
        <div className='title px-10 sm:px-32 py-20'>
            <h1 className='sm:text-4xl text-2xl font-bold'>{title}</h1>
            <div className='bg-yellow-500 h-2 my-2'></div>
        </div>
    );
};

export default Title;
