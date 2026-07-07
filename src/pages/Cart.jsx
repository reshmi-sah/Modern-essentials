import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import EmptyCart from '../components/cart/EmptyCart'
import CartItem from '../components/cart/CartItem'
import CartSummary from '../components/cart/CartSummary'
import EmptyText from '../components/common/EmptyText'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const navigate = useNavigate()

  const { cartItems } = useContext(CartContext)

  return (
    <>
     <div className=' mx-auto p-5 mt-20 lg:mt-12 bg-gray-100 min-h-screen'>

     <EmptyText > Shopping cart </EmptyText>

       {
        cartItems.length === 0
        ? <EmptyCart />
        : (
         <div className='flex flex-wrap gap-10'>

              <div className='flex-1 space-y-5'>
                
              {
                cartItems.map((item) => (
                  <CartItem 
                     key={item.id}
                     item={item}
                  />
                ))
              }
            </div>
            <CartSummary />
            
          </div>
        )
       }

     </div>

     


    </>
  )
}

export default Cart
