import React from 'react'
import { FaCartShopping } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { products } from '../../data/products'
import ProductCart from '../ProductCart'
import ProductWishlist from '../wishlist/ProductWishlist'

const ProductCard = ({products, product, type}) => {
    
    const navigate = useNavigate()

  return (
    <>
    <div
    onClick={() => {
      navigate(`/product/${products.id}`)
      
    }}
     className={`bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 
       ${type === 'scroll'
         ? 'h-auto w-[200px] sm:w-[250px]  '
         : ' w-[250px] sm:w-[300px] min-h-[330px] lg:min-h-[440px]'
       }
      `}
    >

        <div className='relative overflow-hidden'>
            <img 
            className='w-full h-[180px] sm:h-[250px] object-contain cursor-pointer hover:scale-105 transition duration-500'
            src={products.image} 
            alt={products.title} 
            />
             
        </div>

        {/* content */}

        {
          type !== 'scroll' && (
            <div className='p-2 sm:p-4 flex flex-col flex-1 space-y-1 sm:space-y-2'>
           
           <div className='flex items-center justify-between'>
            {
              products.hotdeal && (
                <p className='cursor-pointer text-[0.6rem] sm:text-[0.7rem] text-sky-700 underline '> {products.hotdeal} </p>
              )
            }
            
            {
              products.brand && (
                <p className= 'text-[0.6rem] sm:text-[0.7rem] font-[500] text-black  '> {products.brand} </p>
              )
            }
            </div>  

         {
          products.title && (
            <h2 className='text-[0.7rem] sm:text-sm font-semibold '>
            {products.title}
        </h2>
          )
         }

        {
          products.shortNote && (
            <p className='text-gray-500 sm:text-sm text-[0.7rem]  cursor-pointer hover:text-sky-600 line-clamp-1 '>
          {products.shortNote}
        </p>
          )
        }

 <div className='flex items-center gap-3 flex-wrap mt-auto'>

          {
            products.offerPrice && (
              <span className='text-[0.8rem] sm:text-[1.1rem] font-bold text-cyan-800'>
            ₹{products.offerPrice}
          </span>
            )
          }

          {
            products.price && (
              <span className='text-[0.7rem] sm:text-[0.9rem] line-through text-gray-400'>
            ₹{products.price}
          </span>
            )
          }

         {
          products.discount && (
             <span className='text-green-600 text-[0.7rem] sm:text-sm'>
            {products.discount}
          </span>
          )
         }

        </div>

        <div className='flex items-center mt-auto justify-between '>
             <ProductCart product={products} />

           <ProductWishlist product={products} />

        </div>
        </div>
          )
        }

    </div>
    </>
  )
}

export default ProductCard
