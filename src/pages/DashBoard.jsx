
import React, { useContext, useEffect, useState } from 'react';
import { addCartContext, WishCartContext } from '../componets/MainLayout/MainLayout';
import close from '../assets/close.png'
import frame from '../assets/frame.png'
import toast from 'react-hot-toast';


const DashBoard = () => {

    const [wishlist, setWishlist]  = useState(false)
    const {cart, setCart} = useContext(addCartContext)
    const {wishCart, setWishCart} = useContext(WishCartContext)
    const [total, setTotal] =useState(0)

    useEffect(() => {
        document.title = "Gadget Heaven | Dashboard ";
      }, []);

      useEffect(() => {
        const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
        setTotal(totalPrice);
      }, [cart]);

        
    const purchaseProducts = () => {
        notify("Products purchased successfully");
        setTotal(0);
        setCart([]);
    };

    const removeFromWishlist = (index) => {
        toast.success("Item removed from wishlist");
        setWishCart((previouswishCart) => previouswishCart.filter((_, i) => i !== index));
      };

      const sortByPrice = () => {
        toast.success("Sorting by price");
        console.log("Before sorting:", cart);
        setCart((prevCart) => {
          const sortedCart = [...prevCart].sort((a, b) => b.price - a.price);
          console.log("After sorting:", sortedCart);
          return sortedCart;
        });
      };

      const removeFromCart = (index) => {
        toast.success("Item removed from cart");
        setCart((prevCart) => prevCart.filter((_, i) => i !== index));
      };

      const addToCart = (item) => {
        toast.success("Item added to cart");
        console.log(item);
        setCart((prevCart) => [...prevCart, item]);
        removeFromWishlist(wishCart.indexOf(item));
      };


    return (
        <>
        <div className='text-center items-center justify-center text-white bg-[#9538E2] mt-7 p-4 rounded-xl '>
            <h2 className='text-center text-3xl p-4'>DashBoard</h2>
            <p >Explore the latest gadgets that will take your experience to the next level. From smart devices to <br />
             the coolest accessories, we have it all!</p>
             <div>
          <button
            className={`btn mr-2 w-[170px] rounded-2xl ${
              wishlist ? "" : "bg-[#9538E2]"
            }`}
            onClick={() => setWishlist(false)}>
            Cart
          </button>
          <button
            className={`btn w-[170px] rounded-2xl ${
              wishlist ? "bg-[#9538E2] text-white" : ""
            }`}
            onClick={() => setWishlist(true)}>
            Wishlist
          </button>
        </div>
        </div>
       {/* cart */}
      
       <div
        className={`${
          wishlist ? "hidden" : "flex flex-col items-center my-4 justify-center"
        }`}>
        <div className="container mx-auto my-2">
          <div className="flex flex-row justify-between items-center">
            <div>
              <h1>Cart</h1>
            </div>
            <div className="flex flex-row justify-end items-center">
              <h2>Total Cost : {total}</h2>
              <button
                className=" btn mx-1 border border-primary rounded-full flex items-center"
                onClick={sortByPrice}>
                Sort by price
                <img
                  className="w-[36px] h-[36px] rounded-full mx-2 flex items-center justify-center ml-1"
                  src={frame}
                />
              </button>
              <button
                className={`${
                  cart.length === 0 ? "btn-disabled" : null
                } btn mx-1 bg-[#8332C5] text-white rounded-3xl`}
                onClick={purchaseProducts}>
                Purchase
              </button>
            </div>
          </div>
        </div>
       </div>
       <div
          className={`${
            wishlist ? "hidden" : "flex flex-col items-center"
          } w-full container mx-auto rounded-xl p-6`}>
          <div className="w-full max-w-3xl">
            {cart.length === 0 ? (
              <p className="text-center">Your cart is empty</p>
            ) : (
              cart.map((item, index) => (
                <div
                  key={index}
                  className="card card-side bg-base-100 shadow-xl w-full container mx-auto rounded-xl p-6 mb-4">
                  <figure>
                    <img src={item.product_image} alt={item.product_title} />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{item.product_title}</h2>
                    <p>
                      <span className="font-bold">Description:</span>{" "}
                      {item.description}
                    </p>
                    <p className="font-bold text-lg">Price: ${item.price}</p>
                    <div className="card-actions justify-end">
                      <button
                        className="btn btn-primary"
                        onClick={() => removeFromCart(index)}>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
         
        </div>
        <div
        className={`${
          wishlist ? "flex flex-col items-center" : "hidden"
        } bg-gray-100 p-6`}>
        <h2 className="text-2xl font-bold mb-4">WishList</h2>
        <div className="w-full max-w-3xl">
          {wishCart.length === 0 ? (
            <p className="text-center">Your wishlist is empty</p>
          ) : (
            wishCart.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-4 mb-4 flex items-center relative">
                <img
                  src={item.product_image}
                  alt={item.product_title}
                  className="w-24 h-24 object-cover rounded-lg mr-4"
                />
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold">
                    {item.product_title}
                  </h3>
                  <p className="text-gray-600">
                    <span className="font-bold">Description:</span>{" "}
                    {item.description}
                  </p>
                  <p className="font-bold text-lg">Price: ${item.price}</p>
                </div>
                <button
                  className={`${
                    item.availability
                      ? "bg-purple-500"
                      : "btn-disabled bg-grey-300"
                  } w-[169px] text-white px-4  rounded-full font-semibold ml-4 py-2`}
                  onClick={() => {
                    addToCart(item);

                    removeFromWishlist(index);
                  }}>
                  Add to Cart
                </button>
                {item.availability ? null : (
                  <p className="text-red-500">Out of stock</p>
                )}
                <button
                  className="absolute top-2 right-2 text-red-500 hover:text-red-700"
                  onClick={() => removeFromWishlist(index)}>
                  <img src={close} className="w-[36px]" />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
     
       
        </>
    );
};

export default DashBoard;