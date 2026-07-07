import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import Cart from '../pages/Cart'
import ProductInfo from '../pages/ProductInfo'
import Navbar from '../components/Navbar'
import Wishlist from '../pages/Wishlist'
import Auth from '../pages/Auth'
import SearchPage from '../pages/SearchPage'
import AddressPage from '../pages/checkout/AddressPage'
import Profile from '../pages/Profile'
import OrderSummaryPage from '../pages/checkout/OrderSummaryPage'
import Payment from '../pages/checkout/Payment'
import OrderSuccess from '../pages/checkout/OrderSuccess'
import OrderPage from '../pages/OrderPage'

const AppRoutes = () => {

  const location = useLocation()

  const hideNavbar = 
  location.pathname === '/checkout/addressPage' ||
  location.pathname === '/checkout/summaryPage' ||
  location.pathname === '/checkout/paymentPage' ||
  location.pathname === '/chekout/SuccessPage' ||
  location.pathname === '/auth' 

  return (
    <>

    { !hideNavbar &&  <Navbar /> }
     <Routes>
        <Route path='/'  element={<Home />} />
        <Route path='/cart' element={<Cart />} />
           <Route
        path='/product/:id'
        element={<ProductInfo />}
      />
      <Route path='/wishlist' element={<Wishlist />} />

      <Route path='/auth' element={<Auth />} />

      <Route path='/search' element={<SearchPage />} />

      <Route path='/Profilepage' element={<Profile />} />

      <Route path='/checkout/addressPage' element={<AddressPage />} />
      <Route path='/checkout/summaryPage' element={<OrderSummaryPage />} />
      <Route path='/checkout/paymentPage' element={<Payment />} />
      <Route path='/chekout/SuccessPage' element={<OrderSuccess />} />
      <Route path='/confirm/orderPage' element={<OrderPage />} />

     </Routes>
    </>
  )
}

export default AppRoutes
