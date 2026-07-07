import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { AddressContext } from '../../context/AddressContext'

const PriceDetails = ({ buttonText, onButtonClick}) => {

    const { subtotal, deliveryCharge, totalAmount, originalPrice } = useContext(CartContext)

  return (
   <>
    <div className='sticky top-24 w-full lg:w-[400px] h-fit bg-white p-3 sm:p-6 rounded-2xl shadow space-y-2 sm:space-y-5'>

      <h2 className='text-[1rem] sm:text-2xl font-bold text-gray-800'>
        Price Details
      </h2>

       <div className='flex justify-between bg-gray-100 py-1 px-2 rounded-sm  '>

          <div>
    <span className='text-[0.8rem] sm:text-[1rem] '>MRP (incl.of all taxes)</span>

    <div className="border-b border-dotted border-gray-800"></div>
  </div>

        <span className='text-[0.8rem] sm:text-[1.1rem] font-[500] '>₹{subtotal}</span>

      </div>

       <div className='flex justify-between bg-gray-100 py-1 px-2 rounded-sm '>

        <span className='text-[0.8rem] sm:text-[1rem]'>Delivery</span>

        <span className='text-[0.8rem] sm:text-[1.1rem] font-[500]'>₹{deliveryCharge}</span>

      </div>

      <div className='flex justify-between bg-gray-100 py-1 px-2 rounded-sm '>
        <span className='text-[0.8rem] sm:text-[1rem]'>Total discount</span>
        <span className='text-[0.8rem] sm:text-[1.1rem] font-[500]'> {originalPrice} </span>
      </div>


      <div className='flex justify-between text-xl font-bold  border-t pt-3'>

        <span className='text-[0.8rem] sm:text-[1rem]'>Total</span>

        <span className='text-[0.9rem] sm:text-[1.1rem] font-[500]'>₹{totalAmount}</span>

      </div>

        <button
        onClick={onButtonClick}
        className='w-full py-3 rounded-xl bg-violet-600 text-white cursor-pointer hover:opacity-90'
      >
        {buttonText}
      </button>

   </div>
   </>
  )
}

export default PriceDetails 
