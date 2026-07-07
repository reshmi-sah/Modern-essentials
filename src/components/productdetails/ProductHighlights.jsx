import React from 'react'

const ProductHighlights = ({ product }) => {
  return (
   <>
             <div className='mt-7 sm:mt-10'>

  <h2 className='text-xl sm:text-2xl font-[600] mb-4 sm:mb-6'>
    Top Highlights
  </h2>

  {
    product.highlights?.length > 0 && (
      <div className='space-y-1 sm:space-y-2'>

    {
      product.highlights.map((item, index) => (

        <div
          key={index}
          className='flex gap-3 sm:gap-20 text-[0.8rem] sm:text-[1rem] border-b border-gray-200 pb-2'
        >

          <p className='w-[180px]  font-semibold text-gray-800'>
            {item.title}
          </p>

          <p className='text-gray-600'>
            {item.value}
          </p>

        </div>

      ))
    }

  </div>
    )
  }

</div>
   </>
  )
}

export default ProductHighlights
