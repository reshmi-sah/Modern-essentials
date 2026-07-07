import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../../data/products'
import ProductImage from './ProductImage'
import ProductAbout from './ProductAbout'
import ProductPrice from './ProductPrice'
import ProductSize from './ProductSize'
import ProductHighlights from './ProductHighlights'
import ProductDescription from './ProductDescription'
import ProductCart from '../ProductCart'
import ProductWishlist from '../wishlist/ProductWishlist'

const ProductDetails = () => {

  const { id } = useParams()

  const product = products.find(
    (item) => item.id === Number(id)
  )

  const [mainImage, setMainImage] = useState(product.image)

  const [ selectedSize, setSelectedSize ] = useState('')

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  return (
   <>
    <div className='max-w-7xl mx-auto p-5 lg:p-10'>

      <div className='relative flex flex-col lg:flex-row gap-14 items-start'>

      <div className='w-full lg:w-[50%]'>
         <ProductImage
        product={product} 
        mainImage={mainImage}
        setMainImage={setMainImage}
        />
      </div>

        {/* RIGHT SIDE */}
        <div className='w-full lg:w-[50%] min-w-0 space-y-3'>

        <ProductAbout
         product={product}
        />
          
          <ProductPrice product={product} />
        
           <ProductSize 
           product={product}
           selectedSize={selectedSize}
           setSelectedSize={setSelectedSize}
            />

          <ProductHighlights product={product} />

          {
            product.deliveryDate && (
              <p className='mt-8 text-green-600 font-semibold'>
            {product.deliveryDate}
          </p>
            )
          }

          {/* BUTTONS */}
          <div className='fixed bottom-5 right-10 flex gap-4'>

            <ProductCart
  product={{
    ...product,
    selectedSize
  }}
/>

          <ProductWishlist product={product} />
         
          </div>

        </div>

      </div>

       <ProductDescription product={product} />
    </div>
   </>
  )
}

export default ProductDetails