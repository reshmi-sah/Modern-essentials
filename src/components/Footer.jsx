import React, { useEffect, useState } from 'react'
import useInView from '../hooks/useInView'

const Footer = () => {

  const { ref, isVisible } = useInView()
  const [ highlight, setHighlight] = useState(false)

  useEffect(() => {
    if(isVisible) {
      setHighlight(true)
      setTimeout(() => {
        setHighlight(false)
      }, 3000);
    }
  }, [isVisible])

  return (
    <>
    <footer className='mt-28 bg-gray-100 px-8 py-12'>

      {/* top */}
      <div className='flex flex-wrap justify-between gap-5 sm:gap-10 '>
       
            <div>
            <p className='text-sm font-[500] leading-6 text-gray-800'>Discover quality <br /> products at unbeatable prices.</p>
        </div>

        <div>
          <p className='text-sm font-[500] leading-6 text-gray-900'>Your one-stop destination  <br /> for fashion and lifestyle.</p>
        </div>

        <div className='max-w-lg space-y-5 sm:space-y-10 '>
            <p 
             ref={ref}
             className={`
               text-2xl sm:text-4xl font-[600]  leading-tight transition-all duration-1000 
               ${ highlight
                ? 'bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent '
                : 'text-gray-700'
               }
              `}
            >Selected by 203 Architecture <br /> Studios in 2026
            </p>
            <p className='text-[0.8rem] max-w-sm leading-6 text-gray-600 font-[400] '>in 2026, Discover the latest fashion trends with premium quality products, fast delivery, and a seamless shopping experience. Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and special discounts.Your one-stop destination for fashion and lifestyle. </p>
        </div>
      
    </div>


    {/* bottom  */}
  <div className='flex gap-5 mt-10 mb-10'>

  <div className='h-[1px] w-full bg-gray-600'></div>

  <div className='h-[1px] w-full bg-gray-600'></div>

</div>

      <div className='flex flex-wrap gap-2 justify-between items-center'>


        <p className='text-sm text-gray-500'>
          © 2026 Your Store. All rights reserved.
        </p>

        <div className='flex flex-wrap gap-8 text-sm text-gray-600'>

          <p className='cursor-pointer hover:text-black transition'>
            Cookies
          </p>

          <p className='cursor-pointer hover:text-black transition'>
            Privacy Policy
          </p>

          <p className='cursor-pointer hover:text-black transition'>
            Terms & Conditions
          </p>

        </div>

      </div>

    </footer>
    </>
  )
}

export default Footer
