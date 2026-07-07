import React from 'react'

const PaymentInput = ({
    id, 
    value, 
    checked, 
    onChange, 
    label 
}) => {

  return (
   <>
     <label 
       htmlFor={id}
      className="flex items-center gap-3 shadow-lg hover:shadow-xl  p-4 rounded-lg cursor-pointer bg-white"
    >

        <input
        id={id}
         type="radio" 
         value={value}
         checked={checked}
         onChange={onChange}
         />

         <span> {label} </span>
     </label>
   </>
  )
}

export default PaymentInput
