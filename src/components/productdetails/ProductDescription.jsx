import React from 'react'

const ProductDescription = ({product}) => {
  return (
    <>
        {
  Array.isArray(product.about) && (

    <div className='mt-5 space-y-3'>

      {
        product.about.map((item, index) => (

          <p
            key={index}
            className='text-sm sm:text-lg text-gray-600'
          >
            {item}
          </p>

        ))
      }

    </div>

  )
}
    </>
  )
}

export default ProductDescription
