import React from 'react'
import Model1 from "../../assets/Model1.png"
import Model2 from "../../assets/Model2.png"
import ScrollReveal from './ScrollReveal'
import ShowText from '../common/ShowText'


const ScrollModel = () => {
  return (
   <>
   
  <div className='mt-20 '>
      <ShowText
         title='Signature look.'
  subtitle= 'Cartier rely on delicate cursive or handwriting-style '
/>
       <div className=' min-h-[300px]  sm:min-h-[500px] overflow-hidden flex items-center justify-center gap-2 sm:gap-16'>
         <div className=' w-[50%] flex flex-col items-center justify-center space-y-7 sm:space-y-20'>
       <ScrollReveal
       direction='right'
        fade={true}
         delay={0.5}
         duration={4}
       >
        <img 
       className='w-16 sm:w-36 h-auto bg-gray-300'
        src={Model2} alt="" 
        />
       </ScrollReveal>
          
          <ScrollReveal
             direction='down'
        fade={true}
         delay={0.5}
         duration={4}
          >
             <div className='flex items-center justify-between w-full gap-4 sm:gap-8  font-[500]'>
            <p className='text-[0.5rem] sm:text-[0.8rem] max-w-[220px] text-gray-700'>a measure of female representation requiring that a movie features at least two named women </p>
            <p className='text-[0.5rem] sm:text-[1.2rem] whitespace-nowrap text-red-900 '>© 2026</p>
           </div>
          </ScrollReveal>
         </div>

        
         
         <div className='w-[40%]'>
         <ScrollReveal>
       <img className='w-[450px] h-auto'
        src={Model1} alt="" 
        />

         </ScrollReveal>
         </div>
     </div>
  </div>
   </>
  )
}

export default ScrollModel
