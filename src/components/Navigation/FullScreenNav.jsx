import React from 'react'

const FullScreenNav = () => {
  return (
    <div className="full-nav h-screen w-full absolute bg-black overflow-hidden">
        <div className="cross-d flex w-full justify-between item-start border-2 relative">
             <div className=' p-2 '>
                <div className=' w-24'>
                    <svg className=' w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                        <path fill="white" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                    </svg>
                </div>
            </div>
            <div className='h-30 w-30 bg-amber-50 absolute top-0 right-0 cursor-pointer'>
                <div></div>
                <div></div>
            </div>
        </div>
        <div className="fn-tags py-7">
            <div className="Fn-tag relative cursor-pointer border-t-1 border-gray-300">
                 <h1 className='text-[6.5rem] uppercase font-[600] text-white leading-26 text-center'>work</h1>
                 <div className='fn-slider absolute flex top-0 bg-[#D3FD50]'>
                     <div className="moveX tag-slider flex items-center">
                         <h2 className='text-[6.5rem] uppercase font-[600] text-black leading-26 text-center whitespace-nowrap' >See everything</h2>
                         <img className=' h-[13vh] shrink-0 w-[18vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                         <h2 className='text-[6.5rem] uppercase font-[600] text-black leading-26 text-center whitespace-nowrap' >See everything</h2>
                         <img className=' h-[13vh] shrink-0 w-[18vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                     </div>
                     <div className="moveX tag-slider flex items-center">
                         <h2 className='text-[6.5rem] uppercase font-[600] text-black leading-26 text-center whitespace-nowrap' >See everything</h2>
                         <img className=' h-[13vh] shrink-0 w-[18vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                         <h2 className='text-[6.5rem] uppercase font-[600] text-black leading-26 text-center whitespace-nowrap' >See everything</h2>
                         <img className=' h-[13vh] shrink-0 w-[18vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                     </div>
                 </div>
            </div>
            <div className="Fn-tag relative cursor-pointer border-t-1 border-gray-300">
                 <h1 className='text-[6.5rem] uppercase font-[600] text-white leading-26 text-center'>agency</h1>
                 <div className='fn-slider absolute flex top-0 bg-[#D3FD50]'>
                     <div className="moveX tag-slider flex items-center">
                         <h2 className='text-[6.5rem] uppercase font-[600] text-black leading-26 text-center whitespace-nowrap' >See everything</h2>
                         <img className=' h-[13vh] shrink-0 w-[18vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                         <h2 className='text-[6.5rem] uppercase font-[600] text-black leading-26 text-center whitespace-nowrap' >See everything</h2>
                         <img className=' h-[13vh] shrink-0 w-[18vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                     </div>
                     <div className="moveX tag-slider flex items-center">
                         <h2 className='text-[6.5rem] uppercase font-[600] text-black leading-26 text-center whitespace-nowrap' >See everything</h2>
                         <img className=' h-[13vh] shrink-0 w-[18vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                         <h2 className='text-[6.5rem] uppercase font-[600] text-black leading-26 text-center whitespace-nowrap' >See everything</h2>
                         <img className=' h-[13vh] shrink-0 w-[18vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                     </div>
                 </div>
            </div>
            <div className="Fn-tag relative cursor-pointer border-t-1 border-gray-300">
                 <h1 className='text-[6.5rem] uppercase font-[600] text-white leading-26 text-center'>contact</h1>
                 <div className='fn-slider absolute flex top-0 bg-[#D3FD50]'>
                     <div className="moveX tag-slider flex items-center">
                         <h2 className='text-[6.5rem] uppercase font-[600] text-black leading-26 text-center whitespace-nowrap' >See everything</h2>
                         <img className=' h-[13vh] shrink-0 w-[18vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                         <h2 className='text-[6.5rem] uppercase font-[600] text-black leading-26 text-center whitespace-nowrap' >See everything</h2>
                         <img className=' h-[13vh] shrink-0 w-[18vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                     </div>
                     <div className="moveX tag-slider flex items-center">
                         <h2 className='text-[6.5rem] uppercase font-[600] text-black leading-26 text-center whitespace-nowrap' >See everything</h2>
                         <img className=' h-[13vh] shrink-0 w-[18vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                         <h2 className='text-[6.5rem] uppercase font-[600] text-black leading-26 text-center whitespace-nowrap' >See everything</h2>
                         <img className=' h-[13vh] shrink-0 w-[18vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                     </div>
                 </div>
            </div>
            <div className="Fn-tag relative cursor-pointer border-y-1 border-gray-300">
                 <h1 className='text-[6.5rem] uppercase font-[600] text-white leading-26 text-center'>blog</h1>
                 <div className='fn-slider absolute flex top-0 bg-[#D3FD50]'>
                     <div className="moveX tag-slider flex items-center">
                         <h2 className='text-[6.5rem] uppercase font-[600] text-black leading-26 text-center whitespace-nowrap' >See everything</h2>
                         <img className=' h-[13vh] shrink-0 w-[18vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                         <h2 className='text-[6.5rem] uppercase font-[600] text-black leading-26 text-center whitespace-nowrap' >See everything</h2>
                         <img className=' h-[13vh] shrink-0 w-[18vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                     </div>
                     <div className="moveX tag-slider flex items-center">
                         <h2 className='text-[6.5rem] uppercase font-[600] text-black leading-26 text-center whitespace-nowrap' >See everything</h2>
                         <img className=' h-[13vh] shrink-0 w-[18vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                         <h2 className='text-[6.5rem] uppercase font-[600] text-black leading-26 text-center whitespace-nowrap' >See everything</h2>
                         <img className=' h-[13vh] shrink-0 w-[18vw] rounded-full object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                     </div>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default FullScreenNav