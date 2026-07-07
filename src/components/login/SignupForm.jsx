import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import AuthInput from './AuthInput'
import AuthButton from './AuthButton'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { errorToast, infoToast, successToast } from '../../utils/toast'

const SignupForm = ({ setIsLogin }) => {
    
    const {signup} = useContext(AuthContext)
    const navigate = useNavigate()

    const methods = useForm()
    const { handleSubmit, formState: {errors}, watch} = methods

    const onSubmit = (data) => {
        const result = signup(data)

         if(result.success) {
        successToast(result.message)
        
        setTimeout(() => {
            setIsLogin(true)
        }, 1000);
    } else {
        errorToast(result.message)
    }
}  

const preventPaste = (e) => {
    e.preventDefault() 
    infoToast("Paste is not allowed")
}

   

  return (
    <>
      <FormProvider {...methods}>
         <form
       onSubmit={handleSubmit(onSubmit)}
       className='space-y-3'
       >

        <AuthInput
        type='text'
        name='name'
        label='Username'
        register={methods.register}
                error={errors.name?.message}
                validation={{
                    required: 'Name is required'
                }}
            />

       <AuthInput
        type='email'
        name='email'
        label='Email'
        register={methods.register}
                error={errors.email?.message}
                validation={{
                    required: 'Email is required',
                    pattern: {
    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address'
}
                }}
            />

     <AuthInput
    type='password'
    name='password'
    label='Password'
    register={methods.register}
    error={errors.password?.message}
    onPaste = {preventPaste}
    validation={{
        required: 'Password is required',
        minLength: {
            value: 8,
            message: 'Password must be at least 8 characters'
        },
        pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            message: 'Password must contain at least 1 uppercase, 1 lowercase, 1 number, and 1 special character (@$!%*?&)'
        }
    }}
/>

       <AuthInput
        type='password'
        name='confirmPassword'
        label='ConfirmPassword'
        onPaste = {preventPaste}
         register={methods.register}
                error={errors.confirmPassword?.message}
                validation={{
                    required: 'Please confirm your password',
                    validate: (value) => 
                        value === watch('password') || 'Password do not match'
                }}
            />

      <AuthButton text='Signup' />

       <p className='text-center text-sm'>

        Already Have Account?

        <span 
         onClick={() => setIsLogin(true)}
         className='text-violet-600 cursor-pointer ml-1'
        >
            Login
        </span>

      </p>

       </form>  
      </FormProvider> 
    </>
  )
}

export default SignupForm
