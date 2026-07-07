import React from 'react'
import Image from '../../assets/Model.png'
import ScrollReveal from './ScrollReveal'

const ScrollText = () => {
  return (
    <>
     <div className='flex  justify-between p-1 sm:p-4 mt-10 sm:mt-14  ' >
        <ScrollReveal
         direction='right'
         fade={true}
         delay={0.3}
         duration={1}
        
        >
            <div className='w-20 sm:w-40 md:w-72 lg:w-96 space-y-5 '>
            <p className='text-[0.8rem] sm:text-2xl md:text-4xl lg:text-6xl font-[600] text-gray-800 '>Bags <span className='text-amber-600 '>crafted</span> to move with <span className='text-amber-600 '>your</span> story</p>
        </div>
        </ScrollReveal>

        <ScrollReveal
        direction='up'
        fade={false}
         delay={0.6}
         duration={4}
        >
            <div className='w-32 sm:w-56 md:w-72 lg:w-96'>
            <img 
            src={Image}
            alt="Image"
             />
        </div>
        </ScrollReveal>

        <ScrollReveal
        className='self-center'
        direction='down'
        fade={true}
         delay={0.5}
         duration={4}
        >
            <div className='w-20 sm:w-40 md:w-64 lg:w-96 flex flex-col items-start justify-center space-y-1 sm:space-y-2 lg:space-y-5'>
            <p className='text-[5px] sm:text-[10px] md:text-[12px] lg:text-sm text-gray-600'>Love.ur</p>
            <p className='text-[5px] sm:text-[10px] md:text-[12px] lg:text-sm text-gray-600'>a piece of rope or string from which wet clothes are hung, usually outside, to dry: I'd hung the washing out on the clothes line. If it's not raining, use the clothes line to dry your clothes rather than the tumble dryer. He had been tied up with clothesline.</p>
            <p className='text-sm sm:text-xl md:text-3xl lg:text-5xl text-gray-700 mt-1 sm:mt-3 md:mt-6 font-[500]'>(01)</p>
        </div>
        </ScrollReveal>
     </div>
    </>
  )
}

export default ScrollText
