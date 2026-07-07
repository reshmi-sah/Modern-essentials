import React from 'react'

const Heading = ({children, className=""}) => {
  return (
    <>
      <div className={`relative inline-flex px-4 py-1  w-fit ${className} `}>
        <span className='absolute top-0 right-0 w-6 h-6  border-t-2 border-r-2 rounded-tr-lg border-amber-500 '> </span>
                <span className='absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2  rounded-bl-lg border-amber-500 '> </span>

        <p className='font-semibold text-xl sm:text-2xl'>
            {children}
        </p>
    </div> 
    </>
  )
}

export default Heading
