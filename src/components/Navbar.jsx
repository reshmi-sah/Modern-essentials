import React, { useContext } from 'react'
import Logo from "../assets/Logo.png"
import SearchBar from './search/SearchBar'
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import CartButton from './CartButton';
import WishlistButton from './WishlistButton';
import { AuthContext } from '../context/AuthContext';
import UesrMenu from './UesrMenu';

const Navbar = () => {
  const navigate = useNavigate()

  const { user } = useContext(AuthContext)
    
  return (
    <>
    <div className='fixed top-0 left-0 w-full z-50 flex flex-wrap items-center justify-between lg:justify-evenly px-6  gap-3 md:gap-5 bg-gradient-to-r from-purple-100 via-pink-50 to-blue-50 py-2'>

    <div 
    onClick={() =>{
       navigate('/')

       window.scrollTo({
        top:0,
        behavior: 'smooth'
       })
    }}
    className='order-1 w-[3rem] sm:w-[4.4rem]  h-full cursor-pointer active:scale-95'>
        <img 
      className='w-full h-full object-contain'
      src={Logo} alt="" />
    </div>


   <div className='order-2 flex items-center justify-end gap-5 sm:gap-10 '>
     <UesrMenu />

    <WishlistButton />
 
      <CartButton />
   </div>

    
       <div className='w-full order-3 lg:order-1 lg:w-auto lg:flex-1 lg:mx-6'>
      <SearchBar />
    </div>
    </div>


    </>
  )
}

export default Navbar
