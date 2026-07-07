import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import QuantityButton from './QuantityButton'
import { useNavigate } from 'react-router-dom'
import Remove from './Remove'

const CartItem = ({ item, isCheckout = false, status }) => {

  const navigate = useNavigate()

    const { removeFromCart } = useContext(CartContext)

    const handleQuantity = (e) => {
      e.stopPropagation()
    }

  return (
    <>
  <div className='flex flex-wrap justify-between bg-white p-2 sm:p-7 rounded-2xl shadow '>
     <div className='flex flex-col '>

 <div className='flex gap-5 sm:gap-8' >
   <div
    onClick={() => navigate(`/product/${item.id}`)}
    className='w-10 sm:w-14 md:w-20 h-10 sm:h-14 md:h-20 cursor-pointer space-y-4'
  >
    <img
      src={item.image}
      alt={item.title}
      className='w-full h-full object-cover '
    />

   <div onClick={(e) => e.stopPropagation()}>
  <QuantityButton 
  item={item} 
  isCheckout={isCheckout}
  />
</div>
  </div>


  <div className='space-y-1'>

    <h2 className='text-[0.5rem] sm:text-[1rem] md:text-lg font-semibold'>
      {item.title}
    </h2>

    {
      item.selectedSize && (
        <p className='text-[0.5rem] sm:text-[0.7rem] md:text-sm text-gray-500'>
          Size: {item.selectedSize}
        </p>
      )
    }

<div className='flex gap-3 items-center'>
  <span className='text-gray-600 line-through text-[0.6rem] sm:text-[0.7rem] md:text-[1.1rem] '> {item.price} </span>
    <p className='font-semibold text-[0.6rem] sm:text-[0.7rem] md:text-[1.1rem] '>
    ₹{item.offerPrice * item.quantity}
  </p>
</div>

   <p className='text-green-700 font-semibold text-[0.6rem] sm:text-[0.7rem] md:text-[1rem] '> {item.deliveryDate} </p>

    </div>

 </div>

 <div className='mt-4 sm:mt-7'>
    <Remove
  item={item}
  isCheckout={isCheckout}
  removeFromCart={removeFromCart}
/>
 </div>
 
</div>

{
  status && (
    <div className="flex items-start">
      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 border-[1px] border-green-500 text-xs sm:text-sm font-medium">
        {status}
      </span>
    </div>
  )
}
  </div>
    </>
  )
}

export default CartItem
