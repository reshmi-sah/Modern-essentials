import React, { useState } from 'react'
import PaymentInput from './PaymentInput'
import EmptyText from '../../common/EmptyText'

const PaymentMethods = () => {

    const [ method, setMethod ] = useState("cod")

  return (
    <>
     <div className=''>
         <EmptyText> Payment  </EmptyText>

      <div className='space-y-4 '>

        <PaymentInput 
          id="cod"
          value="cod"
          label="Cash On Delivery"
          checked={method === "cod"}
          onChange={(e) => setMethod(e.target.value)}
         />

         <PaymentInput 
          id="upi"
          value="upi"
          label="UPI Payment"
          checked={method === "upi"}
          onChange={(e) => setMethod(e.target.value)}
         />

         <PaymentInput 
          id="card"
          value="card"
          label="Credit / Debit Card"
          checked={method === "card"}
          onChange={(e) => setMethod(e.target.value)}
         />

      </div>

     </div>
    </>
  )
}

export default PaymentMethods
