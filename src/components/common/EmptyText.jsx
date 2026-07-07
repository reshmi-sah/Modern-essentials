import React from 'react'

const EmptyText = ({ children }) => {
  return (
    <>
 <div>
     <h1 className='text-2xl sm:text-3xl  md:text-4xl font-bold leading-normal mb-2 sm:mb-5 md:mb-7 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent'>
        {children}
      </h1>
 </div>
    </>
  )
}

export default EmptyText
