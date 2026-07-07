import React, { createContext, useEffect, useState } from 'react'
import { getFromStorage, saveToStorage } from '../utils/localStorage'

export const OrderContext = createContext()

const OrderProvider = ({ children }) => {

    const [orders, setOrders ] = useState(getFromStorage('orders') || [])

    useEffect(() => {
        saveToStorage('orders', orders)
    }, [orders])

    const addOrder = (orderData) => {
        const newOrder = {
            id: Date.now(), 
            ...orderData,
            status: 'Processing', 
            orderData: new Date().toLocaleDateString()
        }
        setOrders(prev => [newOrder, ...prev])
    }

  return (
       <OrderContext.Provider
          value={{
            orders, 
            addOrder
          }}
       >
        {children}
       </OrderContext.Provider>
  )
}

export default OrderProvider
