import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Works from './pages/Works'

const App = () => {
  return (
    <div>
      {/* <Link to='/'>Home</Link>
      <Link to='/agence'>Agence</Link>
      <Link to='/projects'>Projects</Link> */}
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/agence' element={<Agence />} />
        <Route path='/works' element={<Works />} />
      </Routes>
    </div>
  )
}

export default App