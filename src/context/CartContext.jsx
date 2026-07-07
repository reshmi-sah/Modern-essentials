import React, { createContext, useEffect, useState} from 'react'
import { saveToStorage, getFromStorage } from '../utils/localStorage'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
 
    // localStorage
    const [cartItems, setCartItems] = useState(
        getFromStorage('cart') || []
    )

    // save localStorage 
    useEffect(() => {
        saveToStorage('cart', cartItems)
    }, [cartItems])

    // add 
    const addToCart = (product) => {
        const existingProduct = cartItems.find(
            (item) => item.id  === product.id
        )

        if (existingProduct) {
            setCartItems (
                cartItems.map((item) => 
                item.id === product.id
                ? {
                    ...item, 
                    quantity: item.quantity + 1
                }
                : item
            )
            )
        }
        else {
        setCartItems([
            ...cartItems,
            {
                ...product, 
                quantity: 1
            }
        ])
    }
 }

//  increase quantity 
const increaseQuantity = (id) => {
    setCartItems(
        cartItems.map((item) => 
         item.id === id
        ? {
            ...item, 
            quantity: item.quantity + 1
        }
        : item
        )
    )
}

//  decrease quantity 
const decreaseQuantity = (id) => {
    setCartItems(
        cartItems.map((item) => 
         item.id === id
        ? {
            ...item, 
            quantity: item.quantity - 1
        }
        : item
        )
        .filter((item) => item.quantity > 0)
    )
}

// Remove 
const removeFromCart = (id) => {
    setCartItems(
        cartItems.filter(
            (item) => item.id !== id
        )
    )
}

// calculate subtotal
const subtotal = cartItems.reduce(
    (total, item) => 
        total + item.offerPrice * item.quantity, 0
)

// Delivery 
const deliveryCharge = subtotal > 0 ? 99 : 0

// total amount 
const totalAmount = subtotal + deliveryCharge

//originalprice
const originalPrice = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
)

//cart count
const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
)

// clearcart 
const clearCart = () => {
    setCartItems([])
}


  return (
     <CartContext.Provider
       value={{
        cartItems, 
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        subtotal,
        deliveryCharge,
        totalAmount,
        originalPrice,
        cartCount,
        clearCart
       }}
     >
        {children}

     </CartContext.Provider>
  )
}

export default CartProvider
