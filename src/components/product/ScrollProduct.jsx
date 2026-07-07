import React, { useRef }  from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { products } from '../../data/products'
import ProductCard from './ProductCard'
import Heading from '../common/Heading'

const ScrollProduct = () => {

  const scrollRef = useRef(null)

  
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -250,
      behavior: 'smooth'
    })
  }

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 250,
      behavior: 'smooth'
    })
  }
  
  const scrollProduct = products.filter(
    (item) => item.category === 'scrollproducts'
  )
  
  return (
    <>
     <section className='flex flex-col items-center mt-10 sm:mt-28'>
            <Heading>
        Fashion Picks
      </Heading>
      <div className='relative w-full  mt-8 sm:mt-10 bg-white scroll-smooth '>
           <button
            onClick={scrollLeft}
              className='absolute left-2 top-1/2 -translate-y-1/2 z-10
                bg-white shadow-lg rounded-full p-2 sm:p-3
      bg-gradient-to-r
    from-gray-700 via-gray-400 to-gray-700
    bg-[length:200%_100%]
    bg-left

    hover:from-pink-700
    hover:via-purple-700
    hover:to-cyan-700
    hover:bg-right

    transition-all duration-700 ease-in-out cursor-pointer'
           >
            <FaChevronLeft />
           </button>

           <button
        onClick={scrollRight}
        className='absolute right-2 top-1/2 -translate-y-1/2 z-10
         shadow-lg rounded-full p-2 sm:p-3 text-black
         bg-gradient-to-r from-gray-700 via-gray-400 to-gray-700
    bg-[length:200%_100%]
    bg-left

    hover:from-pink-700
    hover:via-purple-700
    hover:to-cyan-700
    hover:bg-right

    transition-all duration-700 ease-in-out cursor-pointer'
      >
        <FaChevronRight />
      </button>
          
       <div
        ref={scrollRef}
        className='flex gap-10 sm:gap-20 overflow-x-auto scrollbar-hide scroll-smooth px-8 sm:px-14 py-4'
      >
        {
            scrollProduct.map((products) => (
                <div
            key={products.id}
            className='w-fit flex-shrink-0'
          >

            <ProductCard 
            key={products.id}
              products={products}
              type='scroll'
            />

          </div>
            ))
        }
    </div>
     </div>
     </section>
    </>
  )
}

export default ScrollProduct
