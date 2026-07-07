import React from 'react'

const ShowText = ({title, subtitle}) => {
  return (
   <>
    <div className='flex flex-col items-center justify-center space-y-3'>
        <h2 className='text-2xl sm:text-4xl md:text-5xl font-[400]  text-amber-800 '>
        {title}
      </h2>

      <p className='font-[600] whitespace-pre-line text-center max-w-2xl mx-auto mb-1 text-[0.6rem] sm:text-[1rem] leading-normal text-gray-700 '>
        {subtitle}
      </p>
    </div>
   </>
  )
}

export default ShowText
