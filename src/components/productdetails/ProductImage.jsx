import React from 'react'

const ProductImage = ({ product, mainImage, setMainImage }) => {

  return (
    <>
        <div className='flex flex-col-reverse lg:flex-row gap-5'>
<div className='flex flex-row flex-shrink-0 lg:flex-col gap-2 overflow-x-auto p-2'>

            {
              product.thumbnails?.map((img, index) => (

                <img
                  key={index}
                  src={img}
                  alt="thumb"
                  onClick={() => setMainImage(img)}
                  className={` w-14 h-20 sm:w-24 sm:h-24 flex-shrink-0 object-cover rounded-xl cursor-pointer border-[1px] transition-all duration-200 active:scale-95
                     ${
                        mainImage === img
                        ? 'border-violet-600 scale-105'
                        : ' border-gray-100 hover:border-violet-500'
                     }
                    `}
                />

              ))
            }

          </div>
          
          {/* MAIN IMAGE */}
          <img
            src={mainImage}
            alt={product.title}
            className='w-full flex-1 h-[400px] lg:h-[650px] object-cover rounded-2xl'
          />


          

        </div>
    </>
  )
}

export default ProductImage
