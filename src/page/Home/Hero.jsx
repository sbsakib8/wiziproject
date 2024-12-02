import React from 'react'
import Btn from '../../component/button/Btn'
import { HiOutlineArrowCircleRight } from "react-icons/hi";

function Hero() {
  return (
    <div className=' bg-hero-pattern bg-cover w-full h-[408px] md:[510px] lg:h-[573px]'>
     <div className=' container flex flex-col items-center justify-center md:items-start md:justify-center h-full space-y-6 md:space-y-4 lg:space-y-2'>
          <h4 className='hero_h4'>AI SDRs aiDRs</h4>
          <h1 className='text-center sm:text-start max-w-[601px] lg:h-[156px] h-[88px]font-Montserrat font-bold text-[40px] md:text-[55px] lg:text-[64px] leading-[44px] md:[66px] lg:leading-[78px] text-white '>More leads,less people.</h1>

          <p className='text-center  sm:text-start  font-worksans max-w-[450px] h-[78px] font-light text-[20px] leading-6 text-gray-300 text-wrap '>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
          <div className=' mt-64'>
          <Btn title='Sign Up for the Beta'icon={<HiOutlineArrowCircleRight />}/>
          </div>
     </div>
    </div>
  )
}

export default Hero