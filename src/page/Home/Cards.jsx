import React from 'react'
import Carddata from '../../data/card/Carddata'

function Cards() {
  return (
    <div className='  bg-primary w-full h-auto py-10 md:py-20 lg:py-16'>
    <div className='card_maindiv'>
       {
        Carddata.map((itme)=>(
            <div className=' card_childdiv' key={itme.id}>
                <img src={itme.img} alt="" />
                <h3 className='card_title '>{itme.title}</h3>
                <p className='card_p'>{itme.description}</p>
            </div>
        ))
       }
    </div>

    </div>
  )
}

export default Cards