import React, { useContext, useState, useRef } from 'react'
import { FaRegUser } from "react-icons/fa";
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useClickOutside } from '../hooks/useClickOutside';
import LogoutButton from './profile/LogoutButton';


const UesrMenu = () => {

     const navigate = useNavigate()
    const [showDropdown, setShowDropdown] = useState(false);
      const {user} = useContext(AuthContext)

      const menuRef = useRef(null)
      useClickOutside(
        menuRef, 
        () => setShowDropdown(false)
      )

  return (
    <>
    {
        user ? (
            <div
            ref={menuRef}
            className='relative'
           onClick={() => setShowDropdown(!showDropdown)}
            >
             <div className="font-[500] cursor-pointer flex items-center  sm:gap-2">
        <span className="text-sm active:scale-95">
          {user.displayName}
        </span>
        <FaRegUser className="text-xl text-purple-800" />
      </div>

        {showDropdown && (
            <div className="absolute -right-8 sm:right-0 top-8 w-32 sm:w-40 text-lg font-[500] bg-white shadow-xl rounded-lg z-50">
                 <button
            onClick={() => navigate("/Profilepage")}
            className="w-full text-left px-2 sm:px-4 py-2 sm:py-3 shadow-xl cursor-pointer hover:bg-gray-100"
          >
            Profile
          </button>

           <button
            onClick={() => navigate("/confirm/orderPage")}
            className="w-full text-left px-2 sm:px-4 py-2 sm:py-3  shadow-xl cursor-pointer hover:bg-gray-100"
          >
            Orders
          </button>

             <button
            className="w-full text-left px-2 sm:px-4 py-2 sm:py-3  text-red-500 shadow cursor-pointer hover:bg-gray-100"
          >
            <LogoutButton 
             text='Logout'
             className="w-full text-left  hover:bg-gray-100 text-red-500"
            />
          </button>
            </div>
        )}
         
            </div>

        ) : (
             <div
      onClick={() => navigate("/auth")}
      className="font-[500] cursor-pointer flex items-center gap-2 active:scale-95"
    >
      <span className="text-sm">
        Login 
      </span>

      <FaRegUser className="text-xl text-purple-800" />
    </div>
        )
    }
    </>
  )
}

export default UesrMenu
