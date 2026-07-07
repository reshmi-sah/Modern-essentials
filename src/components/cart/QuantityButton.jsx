import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { motion, AnimatePresence  } from 'framer-motion'

const QuantityButton = ({ item, isCheckout }) => {
    
    const { increaseQuantity, decreaseQuantity } = useContext(CartContext)

  return (
    <>
     {!isCheckout && (
       <div className='flex items-center gap-1 md:gap-2'>
     
       <motion.button
      whileTap={{ scale: 0.9 }}
        onClick={() => decreaseQuantity(item.id)}
        className='h-3 w-5 sm:h-6 sm:w-6 flex items-center justify-center text-[0.8rem] sm:text-[1.3rem] bg-gray-300 transition-all ease-in-out duration-700 cursor-pointer rounded'
      >
        -
      </motion.button>
  

      <motion.p className='font-semibold text-[0.6rem] sm:text-[1rem]'
  key={item.quantity}

  initial={{ y: 10, opacity: 0 }}

  animate={{ y: 0, opacity: 1 }}

  transition={{ duration: 0.5 }}
>
  {item.quantity}
</motion.p>


        <motion.button
      whileTap={{ scale: 0.9 }}
      onClick={() => increaseQuantity(item.id)}
        className='cursor-pointer h-3 w-5 sm:h-6 sm:w-6 flex items-center justify-center text-[0.7rem] md:text-[1.2rem] bg-gray-300 rounded transition-all duration-700 ease-in-out'
      >
        +
      </motion.button>

      </div>
     )}
    </>
  )
}

export default QuantityButton
