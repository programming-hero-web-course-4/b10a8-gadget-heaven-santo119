
import React, { useContext } from 'react';
import icon1 from '../../assets/icon.1.png'
import icon2 from '../../assets/icon.2.png'
import { Link, NavLink, useLocation } from 'react-router-dom';
import { addCartContext } from '../MainLayout/MainLayout';

const NavBar = () => {
    const location = useLocation()
    const isHomePage = location.pathname === '/' 
    const {cart} = useContext(addCartContext)
    return (
        <div className="navbar text-white bg-[#9538E2] px-4 mt-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}

                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                       
                      
              <Link to="/"
                className={location.pathname === "/" ? "btn btn-active btn-accent" : ""}>
                Home
              </Link>
             

              <Link to="/dashBoard"
                className={location.pathname === "/dashBoard" ? "btn btn-active btn-accent" : ""}>
                DashBoard
              </Link>

              <Link to="/statistics"
                className={location.pathname === "/statistics" ? "btn btn-active btn-accent" : ""}>
                Statistics
              </Link>

             

         
                    </ul>
                </div>
                
                <Link to="/"><button className='text-2xl font-thin'>Gadget Heaven</button></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-5 text-xl">

                <Link to="/"
                className={location.pathname === "/" ? "btn btn-active btn-accent" : ""}>
                Home
              </Link>

             

              <Link to="/dashBoard"
                className={location.pathname === "/dashBoard" ? "btn btn-active btn-accent" : ""}>
                DashBoard
              </Link>

              <Link to="/statistics"
                className={location.pathname === "/statistics" ? "btn btn-active btn-accent" : ""}>
                Statistics
              </Link>

             
                   
                </ul>
            </div>
            <div className="navbar-end gap-3">
                <div>     
                <Link to='/' className='btn btn-circle'>
               <div>
                <img src={icon1}  alt="" />
               </div>
                </Link>
                </div>

                <div>
                <Link to='/' className='btn btn-circle'>
                   <div >
                   
                   <img src={icon2} alt="" />
                   </div>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default NavBar;