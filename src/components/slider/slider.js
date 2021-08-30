import React, {useState} from 'react';





import SliderButton from './slider-button/slider-button';

import back1 from '../../img/slider-back-1.png'
import back2 from '../../img/slider-back-2.png'
import back3 from '../../img/slider-back-3.jpg'
import back4 from '../../img/slider-back-4.png'

import './slider.scss';


const Slider = () => {
  
  const [slideIndex, setSlideIndex] = useState(1);
  
  const bgImg = [
    back1, 
    back2,
    back3,
    back4
  ];
  
  const sliderData= bgImg;

  const nextSlide = () => {
    if(slideIndex !== sliderData.length){
      setSlideIndex(slideIndex+1)
    }
    else if(slideIndex === sliderData.length){
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if(slideIndex !== 1) {
      setSlideIndex(slideIndex-1)
    }
    else if (slideIndex === 1) {
      setSlideIndex(sliderData.length)
    }
  }

  const moveDot = index => {
    setSlideIndex(index)
  }

  



  

  return (
    <div className="slider">
      {
        sliderData.map((obj, index) => {
          return(
            <div key={index+1} className={slideIndex === index + 1 ? "bg" : "hidden"} style={{ backgroundImage: `url(${obj})` }}>
              
            </div>
            
          )
        })
      }  
      
      <SliderButton 
        direction="left"
        moveSlide={prevSlide}/>
      <SliderButton 
        direction="right"
        moveSlide={nextSlide}/>
      <ul className="slider_breadcrumbs-list">
        {
          sliderData.map((obj, index) => {
            return(
              <li 
                key={index+1}
                className={slideIndex === index+1 ? "slider_breadcrumb-item_active" : "slider_breadcrumb-item"}
                onClick={()=>moveDot(index+1)}>

              </li>
                
            )
          })
        }
      </ul>
    </div>
  );
}

export default Slider;
