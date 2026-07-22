import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { WishlistContext } from '../../context/WishlistContext'

const LogoutButton = ({ 
  text = "Logout",
  className = ""
}) => {

    const { logout } = useContext(AuthContext)
    const { clearCart } = useContext(CartContext)
    const { clearWishlist} = useContext(WishlistContext)
    const navigate = useNavigate()

    const handleLogout = async () => {
      clearCart()
      clearWishlist()
      
       await logout()
        navigate('/auth')
    }

  return (
    <>
     <button 
     className={className}
      onClick={handleLogout}
     >
        {text}
     </button>
    </>
  )
}

export default LogoutButton
