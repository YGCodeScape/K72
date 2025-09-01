import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
       <video className='h-full w-full object-cover'
       autoPlay 
       loop 
       muted
       playsInline
       src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756745141~exp=1756748741~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=2a36d98a4f7df80586aa1b01d7ce544b05dce59ba5ee4c234b2bda4edc663042&r=dXMtd2VzdDE%3D"></video>

    </div>
  )
}

// https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756745141~exp=1756748741~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=2a36d98a4f7df80586aa1b01d7ce544b05dce59ba5ee4c234b2bda4edc663042&r=dXMtd2VzdDE%3D
export default Video