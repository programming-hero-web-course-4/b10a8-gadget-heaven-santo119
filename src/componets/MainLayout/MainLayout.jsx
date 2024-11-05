import { createContext, useState } from "react";
import NavBar from '../NavBar/NavBar'
import { Outlet } from "react-router-dom";
import Footer from '../Footer/Footer'


export const addCartContext = createContext()
export const WishCartContext = createContext()

const MainLayout = () => {
    const [cart, setCart] = useState([])
    const [wishCart, setWishCart] = useState([])

    const addToCart = item =>{
        setCart((previousCart) => [...previousCart, item])
    }

    const addWishCart = item => {
        setWishCart((previousCart) => [...previousCart, item])
    }

    return (
        <div>
            <WishCartContext.Provider value={{wishCart, addWishCart,setWishCart}}>
                <addCartContext.Provider value={{cart, setCart,addToCart}}>
                    <div>
                       <NavBar></NavBar>
                       <div className='min-h-[calc(100vh-232px)] container mx-auto px-8'>
                        <Outlet></Outlet>
                        </div>
                       <Footer></Footer>
                    </div>

                </addCartContext.Provider>
            </WishCartContext.Provider>
           
        </div>
    );
};

export default MainLayout;