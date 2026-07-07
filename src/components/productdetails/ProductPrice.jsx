import React from 'react'

const ProductPrice = ({ product }) => {
  return (
    <>
      <div className='flex items-center gap-4 mt-3 md:mt-6'>

           {
            product.offerPrice && (
               <span className='text-2xl sm:text-4xl font-bold text-violet-700'>
              ₹{product.offerPrice}
            </span>
            )
           }

            {
              product.price && (
                <span className='line-through text-gray-400 text-sm sm:text-xl'>
              ₹{product.price}
            </span>
              )
            }

            {
              product.discount && (
                <span className='text-green-600'>
              {product.discount}
            </span>
              )
            }

          </div>
    </>
  )
}

export default ProductPrice
