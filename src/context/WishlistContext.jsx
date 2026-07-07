import React, {
  createContext,
  useEffect,
  useState
} from 'react'

import {
  saveToStorage,
  getFromStorage
} from '../utils/localStorage'

export const WishlistContext = createContext()

const WishlistProvider = ({ children }) => {

  const [wishlistItems, setWishlistItems] = useState(
    getFromStorage('wishlist') || []
  )

  useEffect(() => {

    saveToStorage('wishlist', wishlistItems)

  }, [wishlistItems])

  // ADD / REMOVE
  const toggleWishlist = (product) => {

    const exists = wishlistItems.find(
      (item) => item.id === product.id
    )

    if (exists) {

      setWishlistItems(
        wishlistItems.filter(
          (item) => item.id !== product.id
        )
      )

    } else {

      setWishlistItems([
        ...wishlistItems,
        product
      ])

    }

  }

  // CHECK
  const isInWishlist = (id) => {

    return wishlistItems.some(
      (item) => item.id === id
    )

  }

  // COUNT
  const wishlistCount = wishlistItems.length

  const clearWishlist = () => {
  setWishlistItems([])
}

  return (

    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isInWishlist,
        wishlistCount,
        clearWishlist
      }}
    >

      {children}

    </WishlistContext.Provider>

  )

}

export default WishlistProvider