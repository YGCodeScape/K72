import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full'>
       <video className='h-full w-full object-cover'
       autoPlay 
       loop 
       muted
       playsInline
       src="https://download-video-ak.vimeocdn.com/v3-1/playback/a278bb9c-996c-4760-8ca1-dd0abff308f7/83c745cf?__token__=st=1756739147~exp=1756742747~acl=%2Fv3-1%2Fplayback%2Fa278bb9c-996c-4760-8ca1-dd0abff308f7%2F83c745cf%2A~hmac=2ddb6b256005ac715513c1aa41256aeee9b728382b42d91f76a252b3840c49a2&r=dXMtd2VzdDE%3D"></video>
    </div>
  )
}

export default Video