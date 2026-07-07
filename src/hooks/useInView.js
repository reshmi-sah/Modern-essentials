import React, { useEffect, useRef, useState } from 'react'

const useInView = (threshold = 0.2) => {

    const ref = useRef(null)
    
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting)
            },
            { threshold }
        )

        const currentRef = ref.current

        if(currentRef) {
            observer.observe(currentRef)
        }

        return() => {
            if(currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [threshold])

  return {
   ref, 
   isVisible
  }
}

export default useInView
