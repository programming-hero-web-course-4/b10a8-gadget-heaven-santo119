

import React from 'react';
import banner from '../../assets/banner.jpg'

const Banner = () => {
    return (
        <div className='text-center  items-center justify-center mt-12 my-4 text-white bg-[#9538E2] p-4 rounded-xl'>
           <h1 className='text-4xl p-4'>Upgrade Your Tech Accessorize with <br />
            Gadget Heaven Accessories</h1>
            <p>Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
             the coolest accessories, we have it all!</p>
             <button className='btn text-[#9538E2] bg-base-300 rounded-full p-3 m-5'>Shop Now</button>
             <div className='backdrop-blur-xl  p-4 flex justify-center items-center h-screen  '>
             <img className='rounded-xl lg:pl-28 lg:max-h-[400px] items-center justify-center' src={banner} alt="" />
             </div>
        </div>
    );
};

export default Banner;
