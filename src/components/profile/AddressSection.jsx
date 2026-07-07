import React, { useContext, useState } from 'react'
import { AddressContext } from '../../context/AddressContext'
import AddressForm from '../checkout/AddressForm'
import AddressManager from './AddressManager'

const AddressSection = () => {

  const { addresses, addAddress, updateAddress, setAddresses } = useContext(AddressContext)

  const defaultAddress = addresses.find(a => a.isDefault)

  const [mode, setMode] = useState('view')

  const handleSaveEdit = (updatedData) => {
    updateAddress(defaultAddress.id, updatedData)
   setMode('view') 
  }


  const handleAddNewAddress = (newAddress) => {
    const updatedAddresses = addresses.map(addr => ({
      ...addr,
      isDefault: false
    }))
    
    const newAddressWithId = {
      ...newAddress,
      id: Date.now(),
      isDefault: true
    }
    
    setAddresses([newAddressWithId, ...updatedAddresses])
    setMode('view')
  }


  return (
    <div className="p-2 sm:p-5 ">

      {mode === 'edit' && (
        <div className="mb-8  rounded-lg p-6 bg-gray-50">
          <h3 className="text-sm font-semibold">Edit Address</h3>
          <AddressManager
            initialData={defaultAddress}
            onSubmit={handleSaveEdit}
            onCancel={() => setMode('view')}
            buttonText="Save Changes"
          />
        </div>
      )}

      {mode === 'add' &&  (
        <div className="mb-8 rounded-lg p-6 bg-gray-50">
          <h3 className="text-sm font-semibold">Add New Address</h3>
          <AddressManager
            initialData={{}}
            onSubmit={handleAddNewAddress}
            onCancel={() => setMode('view')}
            buttonText="Save New Address"
          />
        </div>
      )}
       
       {mode === 'view' && defaultAddress && (
         <>
           <div className="mb-6">
            <AddressForm
              initialData={defaultAddress}
              isProfilePage={true}
              isDisabled={true}
            />
           <div className='flex items-center mt-5 sm:mt-10 gap-8 '>
             <button
              onClick={() => setMode('edit')}
              className="sm:px-6 sm:py-2 px-3 py-2 text-sm cursor-pointer bg-pink-800 text-white rounded hover:bg-pink-700 transition-colors"
            >
              Edit Address
            </button>

             <button
          onClick={() => setMode('add')}
          className="sm:px-6 sm:py-2 px-3 py-2 text-sm cursor-pointer bg-green-700 text-white rounded hover:bg-green-600 transition-colors "
        >
          + Add New Address
        </button>   
           </div>
          </div>
         </>        
      )}
     
    </div>
  )
}

export default AddressSection