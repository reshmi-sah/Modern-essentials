import React from 'react'
import useInView from '../../hooks/useInView'

const ScrollReveal = ({
    children,
    className= '',
    direction = 'up',
    duration = 0.8,
    delay = 0,
    threshold = 0.4,
    fade = true
}) => {

    const {
        ref, isVisible
    } = useInView(threshold)

    const hiddenStyles = {
        up: {
            transform: 'translateY(80px)'
        },
        down: {
            transform: 'translateY(-80px)'
        },
        left: {
        transform: 'translateX(80px)'
        },

       right: {
       transform: 'translateX(-80px)'
      },
       fade:{
        opacity: 0
      }
    }

    const visibleStyle = {
        opacity: 1,
        transform: 'translateX(0) translateY(0)',

        transition: `all ${duration}s ease-out ${delay}s `
    }

    const hiddenStyle = {
        ...hiddenStyles[direction],
        opacity: fade ? 0 : 1, 
    }

  return (
    <div
    ref={ref}
    className={`overflow-hidden ${className}`}
    style={isVisible ? visibleStyle : hiddenStyle}
    >
      {children}
    </div>
  )
}

export default ScrollReveal
