import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Agency from './pages/Agency'
import Projects from './pages/Projects'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const App = () => {

  useGSAP(function(){
    const tl = gsap.timeline()

    tl.from('.stairs', {
      height: 0,
      stagger: {
        amount: -0.3
      }
    })
  })


  return (
    <div>

      <div className="loading-Ani h-screen w-full flex fixed z-10 top-0">
        <div className="stairs h-full w-1/5 bg-black"></div>
        <div className="stairs h-full w-1/5 bg-black"></div>
        <div className="stairs h-full w-1/5 bg-black"></div>
        <div className="stairs h-full w-1/5 bg-black"></div>
        <div className="stairs h-full w-1/5 bg-black"></div>
      </div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agency' element={<Agency />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  )
}

export default App