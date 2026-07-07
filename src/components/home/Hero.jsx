import React, { useEffect, useState } from 'react'
import hero1 from '../../assets/Hero1.png'
import hero2 from '../../assets/Hero2.png'
import hero3 from '../../assets/Hero3.png'


const Hero = () => {

  const [ index, setIndex ] = useState(0)
  const [fade, setFade] = useState(true)

  const images = [hero1, hero2, hero3]

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false)
       setTimeout(() => {
         setIndex((prev) => (prev + 1) % images.length)
        setFade(true) 
       }, 500);
    }, 3000);
    
    return () => clearInterval(interval)
  }, [])

  return (
    <>
     <div className='relative w-full h-[350px] sm:h-[450px] md:h-[600px] overflow-hidden mt-14 md:mt-8'>
        
        <img
            src={images[index]}
            alt="heroImage"
            className={`
              w-full h-full object-cover
               transition-all duration-[1400ms] ease-in-out
              ${fade
                ? 'opacity-100 '
                : 'opacity-30'
              }
            `}
          />

<div className='absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white via-white/80 to-transparent' />
{/* for dots  */}
         <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2'>
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full cursor-pointer transition-all
              ${index === i ? 'bg-gray-300 scale-125' : 'bg-gray-400'}
            `}
          />
        ))}
      </div>

     </div>
    </>
  )
}

export default Hero


