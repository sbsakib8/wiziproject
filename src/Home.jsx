import React from 'react'
import Hero from './page/Home/Hero'
import Partners from './page/Home/Partners'
import Cards from './page/Home/Cards'
import Train from './page/Home/Train'
import Sliders from './page/Home/Slider'
import Allocate from './page/Home/Allocate'
import Embrace from './page/Home/Embrace'
import Footer from './page/Home/Footer'

function Home() {
  return (
    <div>
        
        <Hero/>
        <Partners/>
        <Cards/>
        <Train/>
        <Sliders/>
        <Allocate/>
        <Embrace/>
        <Footer/>

    </div>
  )
}

export default Home