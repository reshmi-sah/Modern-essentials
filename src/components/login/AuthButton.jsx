import React from 'react'

const AuthButton = ({ text }) => {
  return (
   <>
     <button
     className='w-full py-3 mt-2 rounded-xl text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-700 '
     >
       {text}
     </button>
   </>
  )
}

export default AuthButton
