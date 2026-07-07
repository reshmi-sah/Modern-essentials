import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import CartItem from '../../cart/CartItem'

const OrderItems = () => {

    const { cartItems } = useContext(CartContext)

  return (
    <>
    <div className=' rounded-lg p-5 mb-5'>
             <h2 className="font-[600] text-xl mb-2">
        Order Items
      </h2>

     <div className='space-y-5'>
       {
        cartItems.map(item => (
           <CartItem
            key={item.id}
            item={item}
            isCheckout={true}
           />
        ))
      }
     </div>
    </div>
    </>
  )
}

export default OrderItems
