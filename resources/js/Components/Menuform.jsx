import React from 'react';
import search from "../../../public/assets/images/search_icon.png"

const Menuform = () => {
    return (
        <form className='flex items-center justify-center bg-white rounded-3xl p-4 h-2 md:mx-auto sm:mx-10 sm:w-80 mx-2 w-64 gap-0' action="#">
            <input className='bg-transparent border-none' type="search" name="search" id="search" placeholder='Search' />
            <input type="image" src={search} alt="search-icon" id="btn-icon" />
        </form>
    );
};

export default Menuform;
