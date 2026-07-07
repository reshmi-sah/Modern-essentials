import React from 'react'
import { products } from '../data/products'
import ProductCard from '../components/product/ProductCard'
import { useLocation } from 'react-router-dom'
import { searchProducts } from '../utils/searchProducts'

const SearchPage = () => {
    
    const location = useLocation()

    const query = 
    new URLSearchParams(location.search).get('q') || ''
    const results = searchProducts(products , query)

  return (
    <div className='p-10 mt-28 md:mt-15'>
      <h1 className=' text-2xl md:text-3xl font-bold mb-10 '>
        Results for {query}
      </h1>

      <div className='flex items-center justify-center flex-wrap gap-16'>
        {results.length > 0 ? (
            results.map(product => (
                
              <ProductCard 
               key={product.id}
               products={product}
              />
            ))
        ) : (
            <p>No products fonund.</p>
        )}
      </div>
    </div>
  )
}

export default SearchPage
