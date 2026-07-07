import React from 'react'

const ProductAbout = ({ product }) => {
  return (
    <>
       <div className='felx flex-col space-y-5'>
        {
              product.hotdeal && (
                <p className='cursor-pointer text-sm text-sky-700 underline '> {product.hotdeal} </p>
              )
            }

        {
            product.title && (
              <h1 className='text-xl sm:text-3xl md:text-4xl font-bold'>
            {product.title}
          </h1>
            )
          }

          {
            product.description && (
              <p className='text-xl md:text-2xl text-gray-500 '>
            {product.description}
          </p>
            )
          }
       </div>
    </>
  )
}

export default ProductAbout
