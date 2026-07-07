
import React, { useContext } from 'react'
import { AddressContext } from '../../context/AddressContext'
import { useNavigate } from 'react-router-dom'
import PriceDetails from '../common/PriceDetails'

const CartSummary = () => {
  
  const { addresses } = useContext(AddressContext)

  const hasAddress = addresses.length > 0

  const handleCheckout = () => {
  if (hasAddress) {
    navigate('/checkout/summaryPage')
  } else {
    navigate('/checkout/addressPage')
  }
}

const navigate = useNavigate()
  
  return (
    <div>

      <PriceDetails 
      buttonText="Proceed To Checkout"
  onButtonClick={handleCheckout}
      />
      
    </div>
  )
}

export default CartSummary
