import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
       <video className='h-full w-full object-cover' 
       autoPlay 
       loop 
       muted
       playsInline
       src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756658540~exp=1756662140~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=43d41ed5c446d9b1e0bf4076334cdcc748a873b60f143db5f7272e53d5e50d94&r=dXMtd2VzdDE%3D"></video>
    </div>
  )
}

export default Video