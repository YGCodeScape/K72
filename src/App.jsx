import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Agency from './pages/Agency'
import Projects from './pages/Projects'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'

const App = () => {

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
    <div>

      <div ref={stairParentRef} className="loader-holder h-screen w-full fixed z-10 top-0">
           <div className="lod-boxes h-screen w-full flex">
             <div className="stairs h-full w-1/5 bg-black"></div>
             <div className="stairs h-full w-1/5 bg-black"></div>
             <div className="stairs h-full w-1/5 bg-black"></div>
             <div className="stairs h-full w-1/5 bg-black"></div>
             <div className="stairs h-full w-1/5 bg-black"></div>
           </div>
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