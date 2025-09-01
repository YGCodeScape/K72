import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex items-center justify-center gap-2 bg-red-600'>
      <Link className= "text-[5.6vw] uppercase border-4 border-white rounded-full px-6 " >Projects</Link>
      <Link className= "text-[5.6vw] uppercase border-4 border-white rounded-full px-6 " >Agence</Link>
    </div>
  )
}

export default HomeBottomText