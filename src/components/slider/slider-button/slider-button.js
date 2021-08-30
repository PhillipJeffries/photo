import React from 'react';
import leftArrow from "../../../img/left-arrow.svg";
import rightArrow from "../../../img/right-arrow.svg";

import '../slider.scss';


const SliderButton = ({direction, moveSlide}) => {
    return(
        <button 
            className={direction === "right" ? "slider-button right": "slider-button left"}
            onClick={moveSlide}>
            <img src={direction === "right" ? rightArrow : leftArrow} alt={direction ==="right" ? "right" : "left"} />
        </button>
    )
}

export default SliderButton;