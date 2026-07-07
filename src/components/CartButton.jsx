import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { FaCartArrowDown } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const CartButton = () => {
    
  const navigate = useNavigate()

    const { cartCount } = useContext(CartContext)

  return (
    <>
     <div 
         onClick={() => navigate('/cart')}
        className='relative  active:scale-95 items-end cursor-pointer'>
          <FaCartArrowDown className='text-[2rem] font-[500] ' />
          <span className='absolute -top-1 -right-2 bg-white text-black font-[700] text-[0.6rem] px-1.5 py-0.5 rounded-full'>
           {cartCount}
    </span>
        </div>
    </>
  )
}

export default CartButton
