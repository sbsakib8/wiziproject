import React from 'react'
import Btn from '../../component/button/Btn'
import { HiOutlineArrowCircleRight } from "react-icons/hi";

function Hero() {
  return (
    <div className=' bg-hero-pattern bg-cover w-full h-[408px] md:[510px] lg:h-[573px]'>
     <div className='hero_div'>
          <h4 className='hero_h4'>AI SDRs aiDRs</h4>
          <h1 className='hero_title'>More leads,less people.</h1>

          <p className='hero_p'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
          <div className=' mt-64'>
          <Btn title='Sign Up for the Beta'icon={<HiOutlineArrowCircleRight />}/>
          </div>
     </div>
    </div>
  )
}

export default Hero