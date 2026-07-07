import React from 'react'

const ProductSize = ({ product, selectedSize, setSelectedSize }) => {
  return (
    <>
<div className='mt-5'>

            <h2 className='font-semibold text-lg'>
              Select Size
            </h2>

            <div className='flex gap-3 mt-4'>

              {
                product.sizes.map((size, index) => (

                   <button
              key={index}
              onClick={() => setSelectedSize(size)}
              className={`
                px-4 sm:px-5 py-1 sm:py-2
                border rounded-xl transition

                ${
                  selectedSize === size
                    ? 'border-violet-600 bg-violet-600 text-white'
                    : 'hover:border-violet-500'
                }
              `}
            >
                    {size}
                  </button>

                ))
              }

            </div>

          </div>
    </>
  )
}

export default ProductSize
