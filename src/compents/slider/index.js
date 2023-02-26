import React, { useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";
import './slider-style.css'

const slideImages = [
    {
        url:'https://raw.githubusercontent.com/davidgamaserrate1/assets-my-applications/master/mrios/project1.png'      
    },
    {
        url:'https://raw.githubusercontent.com/davidgamaserrate1/assets-my-applications/master/mrios/project2.png'
        
    },
    {
        url:'https://raw.githubusercontent.com/davidgamaserrate1/assets-my-applications/master/mrios/project3.png'
         
    },
    {
        url:'https://raw.githubusercontent.com/davidgamaserrate1/assets-my-applications/master/mrios/project4.png'        
    },
    {
        url:'https://raw.githubusercontent.com/davidgamaserrate1/assets-my-applications/master/mrios/project5.png'
    }
]

 
const Slider = () =>{

    return (
        <div className='slide-container' >
            <SimpleImageSlider  
                style={{ margin: '20px auto', marginTop:'20px', borderRadius:'10px' }}
                width='60vw'
                height='50vh'
                images={slideImages}
                showBullets={true}
                showNavs={true}                               
            />
        </div>
  
      )
}

export default Slider