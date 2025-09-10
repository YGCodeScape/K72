import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agency = () => {

  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'http://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useGSAP(function() {
    gsap.to(imageDivRef.current, {
       scrollTrigger: {
          trigger: imageDivRef.current,
          markers:true,
          start: "top 20%",
          end: "top -170%",
          pin: true,
          onUpdate:(elem)=>  {
             const imageIndex = Math.floor(elem.progress * imageArray.length)
             console.log(imageArray[imageIndex])
             imageRef.current.src = imageArray[imageIndex]
          }
       }
    })
  })


  return (
    <div className="ag-p1-container">
        <div className='ag-p1-sec-1'>
            <div ref={imageDivRef} className="ag-p1-img-div h-70 w-52 absolute top-[20%] left-[30%] rounded-[1rem] overflow-hidden">
               <img ref={imageRef} className='h-full w-full object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
            </div>
            <div className="ag-p1-text relative">
                <div className=" mt-[50vh]">
                    <h1 className='text-[21vw] uppercase leading-[17vw] text-center font-[600]'>SEVEN7Y <br/>Two</h1>
                </div>
                <div className='mt-[2rem]'>
                   <p className='text-[3.5rem] font-[500] w-[58%] ml-[41%] leading-[10vh]'>
                      &emsp;&emsp;&emsp;&emsp;&emsp;We're inquisitive and open-minded, and we make sure creativity crowds out ego
                      from every corner. A brand is a living thing, with values, a personality and a story.
                      If we ignore that, we can achieve short-term success, but not influence that goes the distance.
                      We bring that perspective to every brand story we help tell.
                   </p>
                </div>
            </div>
        </div>

        <div className='ag-p1-sec-2 h-screen'>

        </div>
    </div>
  )
}

export default Agency