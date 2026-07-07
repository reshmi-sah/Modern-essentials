import React from 'react'
import product1 from '../../assets/product1.png'
import product2 from '../../assets/product2.png'
import ScrollReveal from './ScrollReveal'
import ShowText from '../common/ShowText'


const ScrollLuxury = () => {
  return (
   <>
     <div className='mt-20 mb-20  mx-auto '>
     
   <ShowText
         title='New legacy for luxury'
  subtitle={`Brands like Yves Saint Laurent or 
Cartier rely on delicate cursive or handwriting-style fonts for an elevated signature look.`}
/>

       <div className='bg-gray-50 px-4 py-5 sm:px-15 sm:py-15'>
        <div className='place-items-end text-[0.4rem] sm:text-sm font-[500] mb-2 text-gray-800 '>
            <p className=' '>Effortless Luxury</p>
                <p className=' '>Short phrases that focus on quality and timelessness.</p>
        </div>
        <div className='flex flex-col items-center lg:flex-row  justify-between gap-2'>

            <div className='flex flex-row items-center gap-5 md:gap-5 lg:flex-col justify-between lg:h-[32rem] '>
                 <ScrollReveal 
                    direction='right'
        fade={true}
         delay={0.5}
         duration={4}
                 >
                    <p className='text-xl sm:text-2xl md:text-5xl lg:text-7xl uppercase font-[500] text-gray-700 '>A <span className='text-amber-800'>LUXURY</span> <br /> everyone <br /> can afford</p>
                 </ScrollReveal>

                <ScrollReveal 
                  direction='left'
        fade={true}
         delay={0.5}
         duration={4}
                >
                     <p className='text-[0.4rem] sm:text-[0.5rem] md:text-[0.7rem] font-[500] text-gray-800 max-w-32 sm:max-w-80 md:max-w-96 '> Elevate your clothing brand with concise, evocative text that highlights quality and exclusivity. Use phrases like "Timeless Craftsmanship," "Limited Edition," "Exquisite Comfort," or simply a single word like "Signature." Pair these with premium typography—like elegant serifs or clean, modern sans-serifs—to instantly communicate value.</p>
                </ScrollReveal>
            </div>

            <div className=' flex gap-4 mt-5 '>
                 <div className='overflow-hidden w-[12rem]  sm:w-[22rem] h-[13rem]  sm:h-[28rem] bg-gray-200 flex items-center rounded-tl-[5rem] sm:rounded-tl-[10rem] rounded-br-[5rem] sm:rounded-br-[10rem] '>
                    <ScrollReveal
                      direction='up'
        fade={true}
         delay={0.5}
         duration={4}
                    >
                        <img src={product1}
                  alt="product"
                  className='w-36 sm:w-72 h-auto '
                />
                    </ScrollReveal>
                </div>

                <div className='overflow-hidden w-[7rem] sm:w-44 h-[7rem] sm:h-[13rem] flex items-center bg-gray-200 flex items-center '>
                    <ScrollReveal
                       direction='up'
        fade={true}
         delay={0.5}
         duration={4}
                    >
                        <img src={product2}
                  alt="product"
                  className='w-20 sm:w-36 h-auto '
                />
                    </ScrollReveal>
                </div>


            </div>
        </div>
       </div>
     </div>
   </>
  )
}

export default ScrollLuxury
