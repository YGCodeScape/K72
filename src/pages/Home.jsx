import React from 'react'
import Video from '../components/Home/video'
import HomeHeroText from '../components/Home/HomeHeroText'
import HomeBottomText from '../components/Home/HomeBottomText'

const Home = () => {
  return (
    <div>
       <div className="h-screen w-screen fixed bg-black">
        <Video />
       </div>
       <div className=" w-screen h-screen relative flex flex-col justify-between">
         <HomeHeroText />
         <HomeBottomText />
       </div>
    </div>
  )
}

export default Home