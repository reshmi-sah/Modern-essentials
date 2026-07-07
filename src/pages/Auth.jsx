import React, { useState } from 'react'
import LoginForm from '../components/login/LoginForm'
import SignupForm from '../components/login/SignupForm'
import Authimage from '../assets/auth.png'


const Auth = () => {

  const [isLogin, setIsLogin] = useState(true)

  return (

    <div
      className=' min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat'
      style={{backgroundImage: `url(${Authimage})`}}
    >
       <div className="absolute inset-0 bg-black/10"></div>

      <div className=' w-full max-w-md bg-white/10 backdrop-blur-sm border border-white/30 rounded-3xl px-8 py-5 shadow-xl z-50'
      >

        <h1
          className=' text-4xl font-bold text-center mb-5 leading-normal
          bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent '
        >
          {
            isLogin
            ? 'Login'
            : 'Signup'
          }
        </h1>

        {
          isLogin
          ? (
            <LoginForm setIsLogin={setIsLogin} />
          )
          : (
            <SignupForm setIsLogin={setIsLogin} />

          )
        }

      </div>

    </div>

  )

}

export default Auth