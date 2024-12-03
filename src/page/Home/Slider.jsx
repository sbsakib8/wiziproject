import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Sliderdata from './../../data/slider/Sliderdata';
function Sliders() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
      };
  return (
    <div className="slider_main">
    <div className=" w-[300px] sm:w-[327px] md:w-[500px] lg:w-[920px] text-center ">
    <Slider {...settings}>
      {
        Sliderdata.map((item) => (
            <div key={item.id} className='slider_main'>
           <div className=" flex justify-center my-8">
             <img className="  " src="img/Group 9.png" alt="" />
           </div>
            <div>
            <h4 className='slider_description ' >{item.title}</h4>
            <h3 className='text-secondary slider_custom'>{item.name}</h3>
            <p className=' text-white slider_custom '> {item.company}</p>
            </div>
         </div>
        ))
      }
     
      
    </Slider>
    </div>
    </div>
  );
}
export default Sliders