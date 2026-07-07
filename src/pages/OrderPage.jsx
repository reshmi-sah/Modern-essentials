import React, { useContext } from 'react'
import { OrderContext } from '../context/OrderContext'
import CartItem from '../components/cart/CartItem'

const OrderPage = () => {

  const { orders } = useContext(OrderContext)

  return (
  <>
     <div className='mt-12 bg-gray-100 min-h-screen space-y-5 p-10'>

      {orders.map(order => (

        <div 
        className='space-y-5'
        key={order.id}>

          {order.items?.map(item => (

            <CartItem
              key={item.id}
              item={item}
              isCheckout={true}
              status={order.status}
            />

          ))}

        </div>

      ))}

    </div>

  </>
  )
}

export default OrderPage
