import React from 'react'
import { HiCheckCircle } from "react-icons/hi";
function Train() {
  return (
    <div className='  bg-primary w-full h-auto py-16 lg:py-12 flex flex-1 justify-center'>
        {/* main div */}
        <div className='train_main' >
           {/* child 1 */}
           <div className=' space-y-3'>
            <h3 className='train_title'>Train your aiDR on your...</h3>
             <h4 className='train_h4'>prefered email st|</h4>

             <p className='train_description'>You're in control. Train your aiDR on elements of your Marketing strategy.</p>
           </div>
           {/* child 2 */}
           <div className=' grid md:grid-cols-2 gap-6 md:gap-3 '>
           <p className='train_p'><HiCheckCircle /> Quick to ramp</p>

           <p className=' train_p'><HiCheckCircle /> Quick to scale up</p>

           <p className=' train_p'><HiCheckCircle /> Easy to optimize</p>

           <p className='train_p'><HiCheckCircle /> Works with all your existing tools</p>
           </div>
           
        </div>
    </div>
  )
}

export default Train