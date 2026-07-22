import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import LogoutButton from './LogoutButton'
import { FaRegUserCircle } from "react-icons/fa";

const UserInfo = () => {
 
    const {user} = useContext(AuthContext)
 
    return (
   <>
  <div className='p-3 sm:p-5 rounded flex flex-col justify-between min-h-[30rem] bg-white '>
     <div className=" flex items-center  gap-2 ">
      <FaRegUserCircle className='text-3xl text-sky-900' />
   <div className='text-[0.8rem] text-black font-[400]  '>
     <p> {user?.displayName} </p>
    <p> {user?.email} </p>
   </div>
   </div>

   
           <LogoutButton
           className='p-2 bg-red-700 font-[600] text-white rounded cursor-pointer'
            /> 
         
  </div>
   </>
  )
}

export default UserInfo
