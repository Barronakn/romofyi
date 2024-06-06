import React from 'react';

const ContactPage = () => {
    return (
        <form className='contact flex flex-col lg:mx-56 gap-6 md:mx-[100px] sm:mx-[50px] mx-5 my-20' action="#">
            <div className='flex justify-between gap-6 w-full'>
                <input className='w-full h-12 shadow-md' type="text" placeholder='Name' name="name" id="name" />
                <input className='w-full h-12 shadow-md' type="tel" placeholder='Phone number' name="phone" id="phone" />
            </div>
            <div className='flex justify-between gap-6'>
                <input className='w-full h-12 shadow-md' type="email" placeholder='Email' name="eamil" id="email" />
                <input className='w-full h-12 shadow-md' type="text" placeholder='Address' name="address" id="address" />
            </div>
            <textarea className='shadow-md' name="message" id="message" placeholder='Message' cols="30" rows="4"></textarea>
            <input className='bg-sky-950 px-10 py-3 w-40 cursor-pointer rounded-3xl text-white hover:bg-yellow-400 hover:text-black' type="submit" value="Send" />
        </form>
    );
};

export default ContactPage;
