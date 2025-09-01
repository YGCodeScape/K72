import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex items-center justify-center gap-2'>
      <Link className= " home-b-text text-[5.6vw] uppercase border-4 border-white rounded-full px-5 leading-[6vw] " >works</Link>
      <Link className= " home-b-text text-[5.6vw] uppercase border-4 border-white rounded-full px-5 leading-[6vw] " >Agence</Link>
    </div>
  )
}

export default HomeBottomText