
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import icon1 from '../assets/icon.1.png'
import icon2 from '../assets/icon.2.png'
import { addCartContext, WishCartContext } from '../componets/MainLayout/MainLayout';
import toast from 'react-hot-toast';

const Products = () => {
    const { id } = useParams();
    const data = useLoaderData()
   const gadget = data.find(( (gadget) => gadget.product_id.toString() === id))

   const {addToCart} = useContext(addCartContext)
   const {addWishCart} = useContext(WishCartContext)

   if (!gadget) {
    return <div>Gadget not found</div>;
  }
    
    return (
       <div>
            <div className='text-center text-white rounded-xl items-end justify-center mt-6 m-5 p-5 bg-[#9538E2]'>
                <h2 className="text-3xl  font-bold">Product Details</h2>
                <p className=" text-center ">
                    Explore the latest gadgets that will take your experience to the next
                    level. From smart devices to the coolest accessories, we have it all!
                </p>
            </div>
            {/* cart */}
            <div className="hero bg-base-200 min-h-screen my-5 gap-5 space-x-5">
                <div className="hero-content flex-col lg:flex-row gap-5">
                    <img
                    src={gadget.product_image}
                    className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='my-5 m-5 p-4 space-y-3'>
                    <h2 className="text-2xl font-bold ">{gadget.product_title}</h2>
                    <h3>Price: ${gadget.price}</h3>
                    <h4>{gadget.description}</h4>
                         <div
                        className={`badge ${
                        gadget.availability ? "badge-warning p-4" : "badge-secondary p-4"
                        }`}>
                        {gadget.availability ? "In stock" : "Not available"}
                    </div>
                    <div>
                        <h2 className='text-xl'>Specification:</h2>
                        <ol className='list-disc'>
                        {gadget.specification.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                               
                        </ol>
                    </div>

                    <div>
                        <h1 className='text-xl'>Ratings:</h1>
                        <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" defaultChecked  />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <p className='ml-3'>{gadget.rating}</p>
                    </div>
                    </div>
                    {/* button */}
                    <div className='flex items-center justify-start'>
                    <button
                            className={`${
                            gadget.availability ? "" : "btn-disabled"
                            } btn mr-2 my-2 bg-[#9538E2] w-[193px] text-white rounded-xl`}
                            onClick={() => {
                                addToCart(gadget);
                                toast.success("added to addToCart")
                            
                            }} 
                        >
                            Add to cart <img src={icon1} className="w-[24px]" />
                        </button>
                        <button
                            className="btn h-13 bg-slate-500 rounded-full"
                            onClick={() => {
                                addWishCart(gadget);
                            toast.success("Added to addWishListCart");
                            }}>
                            <img src={icon2} className="w-[24px]"></img>
                        </button>
                    </div>
                    
                    
                    </div>
                </div>
                </div>
       </div>
    );
};

export default Products;