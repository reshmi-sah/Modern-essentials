import React, { useContext } from 'react'
import { AddressContext } from '../../../context/AddressContext'
import { useNavigate } from 'react-router-dom'

const DeliveryAddress = () => {

    const { addresses } = useContext(AddressContext)

    const defaultAddress = addresses.find(
        address => address.isDefault
    )

    if(!defaultAddress) return null

    const navigate = useNavigate()

  return (
    <>
     <div className='shadow-md rounded-lg bg-white p-3 mb-5'>
          <div className='flex justify-between items-center mb-3'>
            <h2 className="font-[600] text-xl">
          Delivery Address
        </h2>

        <button 
        onClick={() => navigate('/Profilepage')}
        className='bg-blue-800 text-white px-2.5 py-1.5 text-[1rem] rounded cursor-pointer '>Change
        </button>
 
          </div>

          <p className='text-[1rem] font-[400] '> {defaultAddress.fullName} </p>
          <p className='text-[1rem] font-[400] '> {defaultAddress.phone} </p>
          <p className='text-[1rem] font-[400] '> {defaultAddress.address} </p>
      
     </div>
    </>
  )
}

export default DeliveryAddress
