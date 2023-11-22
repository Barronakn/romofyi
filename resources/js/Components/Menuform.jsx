import React from 'react';
import search from "../../../public/assets/images/search_icon.png"

const Menuform = () => {
    return (
        <form className='flex items-center justify-center bg-white rounded-3xl p-4 h-2 max-[821px]:mx-10 max-[600px]:w-full max-[600px]:mx-0 max-[535px]:w-80 max-[535px]:gap-10 max-[425px]:w-64 max-[425px]:justify-center max-[425px]:gap-0 max-[425px]:mx-2' action="#">
            <input className='bg-transparent border-none' type="search" name="search" id="search" placeholder='Search' />
            <input type="image" src={search} alt="search-icon" id="btn-icon" />
        </form>
    );
};

export default Menuform;
