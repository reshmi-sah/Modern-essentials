import React, { useContext, useState } from 'react'
import {AuthContext} from '../../context/AuthContext'
import AuthInput from './AuthInput'
import AuthButton from './AuthButton'
import { useNavigate } from 'react-router-dom'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { errorToast, infoToast, successToast } from '../../utils/toast'

const LoginForm = ({ setIsLogin, setIsForgot }) => {

    const navigate = useNavigate()
    const { login } = useContext(AuthContext)
    const [message, setMessage] = useState('')

    const methods = useForm()

    const { handleSubmit, formState: {errors}} = methods

     const onSubmit = async (data) => {
        const result = await login(data.email, data.password)
     
        if(result.success) {
           infoToast("Login successful")

          setTimeout(() => {
             navigate('/ProfilePage')
          }, 1300);
        }

        else {
            errorToast(result.message)

            if(result.message.toLowerCase().includes('Password')){
                setShowPasswordError(true)
            }
        }
    }


  return (
    <>
      <FormProvider {...methods}>
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className='space-y-5'
      >

        <AuthInput
          type='email'
          name='email'
          label='Email'
          register={methods.register}
           error={errors.email?.message}
                validation={{
                    required: 'Email is required',
                    pattern: {
    value: /^[^\s@]+@[^\s@]+/,
    message: 'Invalid Email'
}
                }}
            />

        <AuthInput
           type='password'
           name='password'
           label='Password'
           register={methods.register}
                error={errors.password?.message}
                validation={{
                    required: 'Password is required'
                }}
            />

        {
            message && (
                <p className='text-center text-sm text-violet-600'>
                    {message}
                </p>
            )
        }

        <AuthButton text='Login' />


        <p className='text-center text-sm'>
            New User ? 
            <span
            onClick={() => setIsLogin(false)}
             className='text-violet-600 cursor-pointer ml-1'
            >
                Signup
            </span>
        </p>

        <p
  className="text-right text-sm text-violet-600 cursor-pointer"
  onClick={() => setIsForgot(true)}
>
  Forgot Password?
</p>


      </form>
      </FormProvider>
    </>
  )
}

export default LoginForm
