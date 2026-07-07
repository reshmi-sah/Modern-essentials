import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'

const AuthInput = ({ type, name, register, validation, error, label, ...props}) => {
 const { watch } = useFormContext()
 const value = watch(name)

 const [showPassword, setShowPassword] = useState(false)

 const inputType = type === 'password' & showPassword ? 'text' : type

  return (
    <>
      <div className='relative '>
        <input
         type={inputType}
          name={name}
              className='peer w-full border-b-[1px] border-gray-800 p-3 pt-6 pb-2 rounded-t-lg outline-none focus:border-violet-500 transition'
              {...register(name, validation)}
              {...props}
          />

{/* eye */}
           {type === 'password' && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-800 hover:text-violet-600 z-10"
          >
            {showPassword ? (
              
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            ) : (
             
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            )}
          </button>
        )}

          <label
        className={`
          absolute left-3 transition-all duration-200 pointer-events-none
          ${value && value.length > 0
            ? 'text-xs top-2 text-violet-800' 
            : 'top-1/2 -translate-y-1/2 text-gray-800 text-base'
          }
          peer-focus:top-2
          peer-focus:text-xs 
          peer-focus:translate-y-0 
          peer-focus:text-violet-800
        `}
      >
        {label}
      </label>

          {
            error && (
              <p className='text-red-600 text-sm font-[600]'> {error} </p>
            )
          }
      </div>
    </>
  )
}

export default AuthInput
