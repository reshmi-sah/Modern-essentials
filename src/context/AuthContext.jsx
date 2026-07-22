import React, { createContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from '../firebase/firebase'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    const [ user, setUser ] = useState(null)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [])

    //login
    // const login = (email, password) => {
    //     const users = JSON.parse(localStorage.getItem('users')
    //     ) || []

    //     const savedUser= users.find(
    //         (user) => user.email.toLowerCase() === email.toLowerCase()
    //     )

    //     if(!savedUser) {
    //         return{
    //             success: false,
    //             message: 'No account found. Please sign up first.'
    //         }
    //     }

    //     if(savedUser.email !== email) {
    //         return {
    //             success: false,
    //             message: 'Email not found'
    //         }
    //     }

    //     if(savedUser.password !== password) {
    //         return {
    //             success: false,
    //             message: 'Incorrect password'
    //         }
    //     }

    //     localStorage.setItem(
    //         'loggedUser',
    //         JSON.stringify(savedUser)
    //     )
        
    //     setUser(savedUser)

    //     return {
    //         success: true
    //     }
    // }

    const login = async (email, password) => {
        try{
            const userCredential = await signInWithEmailAndPassword(
                auth, 
                email, 
                password
            );
            setUser(userCredential.user);

            return {
                success: true, 
                message: 'Login successful',
            };
        } catch(error) {
            let message;

           switch (error.code) {
            case "auth/invalid-credential":
                message = "Invalid email or password.";
                break;

            case "auth/user-not-found":
                message = "No account found with this email.";
                break;

            case "auth/wrong-password":
                message = "Incorrect password.";
                break;

            case "auth/invalid-email":
                message = "Please enter a valid email address.";
                break;

            default:
                message = "Something went wrong. Please try again.";
        }
        return {
            success: false,
            message,
        };
        }
    };

    //signup
        // const signup = (data) => {
        //     const users = JSON.parse(
        //         localStorage.getItem('users')
        //     ) || []

        //     const existingUser = users.find(
        //         (user) =>  user.email.toLowerCase() ===  data.email.toLowerCase()
        //     )

        //     if(existingUser) {
        //         return {
        //             success: false,
        //             message: 'Email already registerd'
        //         }
        //     }

        //     const newUser = {
        //         name: data.name,
        //         email: data.email,
        //         password: data.password
        //     }

        //     users.push(newUser)

        //     localStorage.setItem(
        //         'users',
        //         JSON.stringify(users)
        //     )

        //     setUser({
        //         name: newUser.name,
        //         email: newUser.email
        //     })

        //     return{
        //         success: true,
        //         message: 'Signup successful'
        //     }
        // }

        const signup = async (data) => {
            try {
                const userCredential = await createUserWithEmailAndPassword(
                    auth, 
                    data.email, 
                    data.password
                );

                //save the username in farebase
                await updateProfile(userCredential.user, {
                    displayName: data.name, 
                } );

                setUser(userCredential.user);
                return {
                    success: true, 
                    message: "Signup successful"
                };
            }catch(error) {
                let message;
                
                switch (error.code) {
        case "auth/email-already-in-use":
            message = "This email is already registered.";
            break;

        case "auth/invalid-email":
            message = "Please enter a valid email address.";
            break;

        default:
            message = "Something went wrong. Please try again.";
    }
                return {
                    success: false,
                    message,
                };
            }
        };

        //forget password
        const forgotPassword = async (email) => {
            try {
                await sendPasswordResetEmail(auth, email);

                return {
                    success: true, 
                    message: "If an account exists with this email, a password reset link has been sent.",
                };
            } catch (error) {
                let message;

               switch (error.code) {
      case "auth/user-not-found":
        message = "No account found with this email.";
        break;

      case "auth/invalid-email":
        message = "Please enter a valid email address.";
        break;

      default:
        message = "Something went wrong. Please try again.";
    }

         return {
            success: false, 
            message, 
         };
     }
};
    
// logout
        const logout = async () => {
           try {
            await signOut(auth);

            localStorage.removeItem('cart')
            localStorage.removeItem('wishlist')
            localStorage.removeItem('address')

           }catch(error) {
            console.log(error);
           }
        }
    

  return (
         
    <AuthContext.Provider
       value={{
        user,
        login,
        signup,
        forgotPassword,
        logout
       }}
    >
        { children }
    </AuthContext.Provider>
  )
}

export default AuthProvider
