import React from 'react'
import Video from './video'

const HomeHeroText = () => {
  return (
    <div className="hero-t pt-2 text-center text-white">
        <div className='text-[8.5vw] leading-[8vw] flex items-center justify-center' >
           The spark
        </div>
        <div className='text-[8.5vw] leading-[8vw] flex items-center justify-center' >
           who
           <div className='h-[6.7vw] w-[16vw] rounded-full overflow-hidden'> <Video /> </div> 
        </div>
        <div className='text-[8.5vw] leading-[8vw] flex items-center justify-center' >
            generated
        </div>
        <div className='text-[8.5vw] leading-[8vw] flex items-center justify-center' >
            there
        </div>
        <div className='text-[8.5vw] leading-[8vw] flex items-center justify-center' >
            creativity
        </div>
    </div>
  )
}

export default HomeHeroText 