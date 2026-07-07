import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistContext'

const Remove = ({ item, isCheckout, removeFromCart }) => {

  const { toggleWishlist, isInWishlist } = useContext(WishlistContext)

  const handleSaveForLater = () => {

    if (!isInWishlist(item.id)) {
      toggleWishlist(item)
    }

    removeFromCart(item.id)
  }

  return (
    <div className='flex items-center justify-between gap-2'>

      {!isCheckout && (
        <>
          <button
            onClick={() => removeFromCart(item.id)}
            className='text-red-800 text-[0.6rem] sm:text-[0.7rem] md:text-sm font-[500] cursor-pointer'
          >
            Remove
          </button>

          <button
            onClick={handleSaveForLater}
            className='text-blue-700 text-[0.6rem] sm:text-[0.7rem] md:text-sm font-[500] cursor-pointer'
          >
            Save for Later
          </button>
        </>
      )}

    </div>
  )
}

export default Remove