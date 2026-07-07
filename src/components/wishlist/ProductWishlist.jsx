import React, { useContext } from 'react'
import { FaHeart } from "react-icons/fa"
import { FaRegHeart } from "react-icons/fa6"
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { WishlistContext } from '../../context/WishlistContext'
import { AuthContext } from '../../context/AuthContext'
import {  useNavigate } from 'react-router-dom'
import { errorToast, successToast } from '../../utils/toast'

const ProductWishlist = ({ product }) => {

  const navigate = useNavigate()
  
  const {toggleWishlist, isInWishlist} = useContext(WishlistContext)
  const { user } = useContext(AuthContext)

  const active = isInWishlist(product.id)

  // Notification
  const handleWishlist = (e) => {
    e.stopPropagation()

    if(!user) {
      errorToast("Please login first ")
      navigate('/auth')
      return
    }
    toggleWishlist(product)
    if(active) {
      errorToast("Removed from wishlist")
    } else {
      successToast("Added to wishlist")
    }
  }

  return (

    <motion.button
    whileTap={{ scale: 0.8 }}

      onClick={handleWishlist}

      className='p-1 rounded-xl cursor-pointer  '

    >

    <motion.div

       animate={{ scale: active ? [1, 1.3, 1] : 1}}

       transition={{ duration: 0.6 }}

       >

       {
        active
        ? (
            <FaHeart
            className='text-2xl text-violet-600 '
          />
        ) : (
            <FaRegHeart
            className='text-2xl text-violet-600'
          />
        )
      }
    </motion.div>

    </motion.button>

  )

}

export default ProductWishlist