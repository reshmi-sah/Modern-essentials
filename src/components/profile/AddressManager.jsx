import React from 'react'
import AddressForm from '../checkout/AddressForm'

const AddressManager = ({
    mode, 
    initialData,
    title, 
    onSubmit,
    onCancel, 
    buttonText
}) => {
  return (
    <>

    <AddressForm
      initialData={initialData}
      isProfilePage={true}
      onSubmit={onSubmit}
      onCancel={onCancel}
      buttonText={buttonText}
    />

    </>
  )
}

export default AddressManager
