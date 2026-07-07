import React, { useContext } from 'react'
import { FaHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { WishlistContext } from '../context/WishlistContext';

const WishlistButton = () => {
    const navigate = useNavigate()

    const { wishlistItems } = useContext(WishlistContext)
    const wishlistCount = wishlistItems.length

  return (
    <>
    
        <div
      onClick={() => navigate('/wishlist')}
    className='relative text-[1.7rem] cursor-pointer active:scale-95 text-red-900'>
       <FaHeart />
       <span className='absolute -top-1 -right-3 bg-white text-black px-1.5 py-0.5 text-[0.6rem] font-[700] rounded-full'> {wishlistCount} </span>
    </div>
    
    </>
  )
}

export default WishlistButton
