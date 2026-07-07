import React, { createContext, useEffect, useState } from 'react'

export const AddressContext = createContext()

const AddressProvider = ({ children }) => {

    const [addresses, setAddresses] = useState([])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('addresses'))
        if(saved) {
            setAddresses(saved)
        }
    }, [])

    // save 
    useEffect(() => {
        localStorage.setItem(
            'addresses',
            JSON.stringify(addresses)
        )
    }, [addresses])

    // add address 
    const addAddress = (data) => {
        const newAddress = {
            id: Date.now(),
            ...data,
            isDefault: addresses.length === 0
        }
        setAddresses([...addresses, newAddress])
    }

    // update address 
    const updateAddress = (id, updateData) => {
                setAddresses(
            addresses.map(addr => 
                addr.id === id
                ? {...addr, ...updateData}
                : addr
            )
        )

    }

    // delete address 
    const deleteAddress = (id) => {
        setAddresses(
            addresses.filter(addr => addr.id !== id)
        )
    }

    // set default address 
    const setDefaultAddress = (id) => {
        setAddresses(
            addresses.map(addr => ({
                ...addr,
                isDefault: addr.id === id
            }))
        )
    }


  return (
    <AddressContext.Provider
     value={{
        addresses,
        addAddress,
        updateAddress,
        deleteAddress,
        setDefaultAddress
     }}
    >
        {children}
    </AddressContext.Provider>
  )
}

export default AddressProvider
