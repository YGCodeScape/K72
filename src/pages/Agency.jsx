import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agency = () => {

  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)

  useGSAP(function() {
    gsap.to(imageDivRef.current, {
       scrollTrigger: {
          trigger: imageDivRef.current,
          markers:true,
          start: "top 20%",
          end: "top -170%",
          pin: true,
          scrub: true
       }
    })
  })



  return (
    <div className="ag-p1-container">
        <div className='ag-p1-sec-1'>
            <div ref={imageDivRef} className="ag-p1-img-div h-70 w-52 absolute top-[20%] left-[30%] rounded-[1rem] overflow-hidden">
               <img className='h-full w-full object-cover' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
            </div>
            <div className="ag-p1-text relative">
                <div className=" mt-[50vh]">
                    <h1 className='text-[19.5vw] uppercase leading-[16.5vw] text-center font-[700]'>Soixan7t <br/>Twelve
                    </h1>
                </div>
                <div className='mt-[2rem]'>
                   <p className='text-[3.1rem] font-[500] w-[60%] ml-[40%] leading-[10vh]'>
                      &emsp;&emsp;&emsp;&emsp;&emsp; Our curiosity fuels our creativity. 
                      We remain humble and say no to big egos, 
                      even yours. A brand is alive. She has values,
                      a personality, a history. If we forget that, we 
                      can make good numbers in the short term, but we 
                      kill it in the long term. This is why we are 
                      committed to giving perspective, to building 
                      influential brands.
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