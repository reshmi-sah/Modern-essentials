import React, {useContext} from 'react'
import { CartContext } from '../context/CartContext'
import { toast } from 'react-toastify'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { errorToast, successToast } from '../utils/toast'

const ProductCart = ({ product }) => {

    const navigate = useNavigate()

    const { addToCart } = useContext(CartContext)

    const { user } = useContext(AuthContext)

    const handleAddToCart = (e) => {
      e.stopPropagation()

      if(!user) {
        errorToast("Please login first")
          navigate('/auth')
          return
        }

      if(!product.selectedSize) {
        errorToast("Please select a size")
         navigate(`/product/${product.id}`)
          return
        }
        addToCart(product)
        successToast("Added to cart")
    }

  return (
    <>
        <button 
  onClick={handleAddToCart}

  className='
    px-4 py-2 text-sm rounded-md text-white font-semibold

    bg-gradient-to-r
    from-gray-700 via-gray-400 to-gray-700
    bg-[length:200%_100%]
    bg-left

    hover:from-pink-700
    hover:via-purple-700
    hover:to-cyan-700
    hover:bg-right

    transition-all duration-700 ease-in-out cursor-pointer
  '
>
  Add To Cart
</button>
    </>
  )
}

export default ProductCart
