import React from 'react'
import Partnerdata from './../../data/partners/Partnerdata';

function Partners() {
  return (
    <div className='bg-[#07292F] w-full h-auto py-6 md:py-9 lg:py-16 '>
       <h4 className='partner_title'>our trusted partners</h4>
     <div className='partner_div'>
        
        {
            Partnerdata.map((item) => (
             <div key={item.id}>
                  <img  className=' w-[128px] h-[64px]' src={item.img} />
             </div>
            
             
            )) 
        }
     </div>
    

    </div>
  )
}

export default Partners