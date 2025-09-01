import React from 'react'
import Video from './video'

const HomeHeroText = () => {
  return (
    <div className="hero-t pt-2 text-center">
        <div className='text-[8.5vw] leading-[8vw] flex items-center justify-center' >
           The spark for
        </div>
        <div className='text-[8.5vw] leading-[8vw] flex items-center justify-center' >
           all 
           <div className='h-[7vw] w-[14vw] rounded-full overflow-hidden'> <Video /> </div> 
           things
        </div>
        <div className='text-[8.5vw] leading-[8vw] flex items-center justify-center' >
            creative
        </div>
    </div>
  )
}

export default HomeHeroText 