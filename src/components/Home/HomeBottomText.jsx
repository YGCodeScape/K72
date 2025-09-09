import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex items-center justify-center gap-3 text-white mt-[220px]'>
      <div className='border-4 border-white rounded-full uppercase flex items-center hover:border-[#D3FD50] hover:text-[#D3FD50] '>
          <Link className= " home-b-text text-[5.6vw] px-5 leading-[6vw] " to='/Projects' >Projects</Link>
      </div>
      <div className='border-4 border-white rounded-full uppercase flex items-center hover:border-[#D3FD50] hover:text-[#D3FD50] '>
          <Link className= " home-b-text text-[5.6vw] px-5 leading-[6vw] " to='/Agency' >Agency</Link>
      </div>  
    </div>
  )
}

export default HomeBottomText