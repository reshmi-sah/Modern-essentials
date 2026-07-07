import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [ user, setUser ] = useState(null)

    useEffect(() => {
        const savedUser = JSON.parse(
            localStorage.getItem('loggedUser')
        )

        if(savedUser) {
            setUser(savedUser)
        }
    }, [])

    //login
    const login = (email, password) => {
        const users = JSON.parse(localStorage.getItem('users')
        ) || []

        const savedUser= users.find(
            (user) => user.email.toLowerCase() === email.toLowerCase()
        )

        if(!savedUser) {
            return{
                success: false,
                message: 'No account found. Please sign up first.'
            }
        }

        if(savedUser.email !== email) {
            return {
                success: false,
                message: 'Email not found'
            }
        }

        if(savedUser.password !== password) {
            return {
                success: false,
                message: 'Incorrect password'
            }
        }

        localStorage.setItem(
            'loggedUser',
            JSON.stringify(savedUser)
        )
        
        setUser(savedUser)

        return {
            success: true
        }
    }

    //signup
        const signup = (data) => {
            const users = JSON.parse(
                localStorage.getItem('users')
            ) || []

            const existingUser = users.find(
                (user) =>  user.email.toLowerCase() ===  data.email.toLowerCase()
            )

            if(existingUser) {
                return {
                    success: false,
                    message: 'Email already registerd'
                }
            }

            const newUser = {
                name: data.name,
                email: data.email,
                password: data.password
            }

            users.push(newUser)

            localStorage.setItem(
                'users',
                JSON.stringify(users)
            )

            setUser({
                name: newUser.name,
                email: newUser.email
            })

            return{
                success: true,
                message: 'Signup successful'
            }
        }

    

        const logout = () => {
            localStorage.removeItem('loggedUser')
            localStorage.removeItem('cart')
            localStorage.removeItem('wishlist')
            localStorage.removeItem('address')

            setUser(null)
        }
    

  return (
         
    <AuthContext.Provider
       value={{
        user,
        login,
        signup,
        logout
       }}
    >
        { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider
