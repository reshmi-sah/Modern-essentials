import React from 'react'
import { products } from '../../data/products'
import ProductCard from './ProductCard'
import Heading from '../common/Heading'

const TopBrands = () => {

  const topBrands = products.filter(
    (item) => item.category === 'topbrands'
  )

  return (
    <>
    <section className='flex flex-col items-center justify-center mt-20 mb-20'>
      <Heading > Top Brands </Heading>

      <div className=' flex items-center justify-center gap-15 flex-wrap mt-20 '>
        {
          topBrands.map((products) => (
            <ProductCard 
            key={products.id}
              products={products}
              type="full"
            />
          ))
        }
      </div>
    </section>


    
    </>
  )
}

export default TopBrands
