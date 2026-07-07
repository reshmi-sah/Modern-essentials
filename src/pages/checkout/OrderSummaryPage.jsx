import React from 'react'
import DeliveryAddress from '../../components/checkout/ordersummary/DeliveryAddress'
import OrderItems from '../../components/checkout/ordersummary/OrderItems'
import EmptyText from '../../components/common/EmptyText'
import PriceDetails from '../../components/common/PriceDetails'
import { useNavigate } from 'react-router-dom'

const OrderSummaryPage = () => {

  const navigate = useNavigate()

  return (
  <>
   <div className='bg-gray-100 mx-auto p-10'>
   <EmptyText> Summary </EmptyText>


    <div className='flex flex-col lg:flex-row gap-8 '>
    <div className='flex-1 space-y-6'>
        <DeliveryAddress />
    <OrderItems />
    </div>

 
     <div className='sticky top-24'>
        <PriceDetails 
         buttonText="Proceed To Payment"
  onButtonClick={() => navigate('/checkout/paymentPage')}
        />
     </div>
   
    </div>

   </div>
  </>
  )
}

export default OrderSummaryPage
