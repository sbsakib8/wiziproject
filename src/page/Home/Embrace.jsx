import React from 'react'
import Btn from '../../component/button/Btn'
import { HiOutlineArrowCircleRight } from "react-icons/hi";
function Embrace() {
  return (
    <div className='embrace_main'>
        <div className=' container flex flex-col justify-center items-center gap-7 '>
       <h4 className='embrace_h4'>GET STARTED</h4>
       <h3 className='embrace_title'>Embrace the new era of outbound.</h3>
       <p className='embrace_description'>Wizia lets you train, activate, and optimize aiDRs. 
       Take your outbound to new levels of performance and efficiency.</p>
       <div className=''>
          <Btn title='Sign Up for the Beta'icon={<HiOutlineArrowCircleRight />}/>
         </div>
    </div>
    </div>
  )
}

export default Embrace