import React from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'


export const Stairs = () => {
    
    const currentPath = useLocation().pathname

  const stairParentRef = useRef(null)

  useGSAP(function(){
    const tl = gsap.timeline()

    tl.to(stairParentRef.current, {
       display: "block"
    })
    tl.from('.stairs', {
      height: 0,
      stagger: {
        amount: -0.3
      }
    })
    tl.to('.stairs', {
      y: '100%',
      stagger: {
        amount: -0.3
      }
    })
    tl.to(stairParentRef.current, {
      display: "none"
    })
    tl.to('.stairs', {
      y: '0%',
    })
  })


  return (
        <div ref={stairParentRef} className="loader-holder h-screen w-full fixed z-10 top-0">
          <div className="lod-boxes h-screen w-full flex">
              <div className="stairs h-full w-1/5 bg-black"></div>
              <div className="stairs h-full w-1/5 bg-black"></div>
              <div className="stairs h-full w-1/5 bg-black"></div>
              <div className="stairs h-full w-1/5 bg-black"></div>
              <div className="stairs h-full w-1/5 bg-black"></div>
         </div>
      </div>
  )
}
