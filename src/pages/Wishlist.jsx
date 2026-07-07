import React, { useContext } from 'react'
import { WishlistContext } from '../context/WishlistContext'
import ProductCard from '../components/product/ProductCard'
import EmptyWishlist from '../components/wishlist/EmptyWishlist'
import EmptyText from '../components/common/EmptyText'


const Wishlist = () => {

const { wishlistItems } = useContext(WishlistContext)
  return (

    <div className=' p-10 mt-16 lg:mt-12 bg-gray-100 min-h-screen'>

      <EmptyText > Wishlist </EmptyText>

      {
        wishlistItems.length === 0

        ? (

          <EmptyWishlist />

        )

        : (

          <div className='flex flex-wrap items-center justify-center gap-15'>

            {
              wishlistItems.map((item) => (

                <ProductCard
                  key={item.id}
                  products={item}
                />

              ))
            }

          </div>

        )
      }

    </div>

  )

}

export default Wishlist