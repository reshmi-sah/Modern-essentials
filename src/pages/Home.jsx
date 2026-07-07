import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/home/Hero'
import TopBrands from '../components/product/TopBrands'
import ScrollProduct from '../components/product/ScrollProduct'
import ScrollText from '../components/scrollpart/ScrollText'
import ScrollModel from '../components/scrollpart/ScrollModel'
import Footer from '../components/Footer'
import ScrollLuxury from '../components/scrollpart/ScrollLuxury'


const Home = () => {
  return (
    <>
      <div className='overflow-hidden'>
        <Navbar />
        <Hero />
        <ScrollText />
        <TopBrands />
        <ScrollModel />
        <ScrollProduct />
        <ScrollLuxury />
        <Footer />
      </div>
    </>
  )
}

export default Home
