import React from 'react'

const EmptyState = ({ title, subtitle }) => {
  return (
    <>
       <div className='flex flex-col items-center justify-center py-20'>

      <h2 className='text-2xl sm:text-3xl font-bold animate-ping text-gray-800 '>
        {title}
      </h2>

      <p className='font-[600] text-xl mt-3 leading-normal bg-gradient-to-r from-purple-800 via-pink-800 to-blue-800 bg-clip-text text-transparent'>
        {subtitle}
      </p>

    </div>
    </>
  )
}

export default EmptyState
