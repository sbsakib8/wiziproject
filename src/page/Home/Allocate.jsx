import React from 'react'

function Allocate() {
  return (
    <div className=' bg-primary w-full'>
        {/* main div */}
       <div className=' container bg-hero-pattern w-full h-auto py-20 space-y-28'>
         {/* child 1 */}
        <div className=' space-y-4'>
            <h3 className=' max-w-[591px] allocated_title'>Allocate effort where your reps make an inpact.</h3>
            <h4 className='allocated_h4'>Let us handle the rest.</h4>
            <p className='allocated_description'>Keep your reps in the air  out in the field and on the phone where they can build relationships.</p>
        </div>
            {/* child 2 */}
        <div className='allocated_child2'>

          <div>
          <span className='allocated_h4 font-bold'>32%</span>
          <p className='allocated_p'>Improvement in Open Rates</p>
          </div>
          <div>

          <span className='allocated_h4 font-bold'>75%</span>
          <p className='allocated_p'>Improvement in Ramp Time</p>
          </div>

          <div>
          <span className='allocated_h4 font-bold'>35%</span>
          <p className='allocated_p'>Improvement in Meetings Booked</p>
          </div>

        </div>

       </div>
    </div>
  )
}

export default Allocate