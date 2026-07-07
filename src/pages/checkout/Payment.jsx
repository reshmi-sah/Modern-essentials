import React, { useContext } from 'react'
import PaymentMethods from '../../components/checkout/payment/PaymentMethods'
import PriceDetails from '../../components/common/PriceDetails'
import { useNavigate } from 'react-router-dom'
import { OrderContext } from '../../context/OrderContext'
import { CartContext } from '../../context/CartContext'

const Payment = () => {

  const navigate = useNavigate()

  const {cartItems, totalAmount, clearCart } = useContext(CartContext)
  const { addOrder } = useContext(OrderContext)
  
  const handlePlaceOrder = () => {
    addOrder({
      items: cartItems,
      total: totalAmount
    })
    clearCart()
    navigate('/chekout/SuccessPage')
  }

  return (
    <div className='flex flex-wrap p-10 gap-5 bg-gray-100 min-h-screen '>
      <div className='flex-1'>
        <PaymentMethods />
      </div>

        <PriceDetails 
           buttonText="Proceed To Payment"
            onButtonClick={handlePlaceOrder}
        />
    </div>
  )
}

export default Payment
