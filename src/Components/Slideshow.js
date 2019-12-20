import React from 'react';
import { Slide } from 'react-slideshow-image';
import bg1 from '/Users/menghout/Documents/GitHub/Music-Website/soundlock/src/images/bg1.jpg';
import bg2 from '/Users/menghout/Documents/GitHub/Music-Website/soundlock/src/images/bg2.jpg';
import bg3 from '/Users/menghout/Documents/GitHub/Music-Website/soundlock/src/images/bg3.jpg';

import {Container, Row, Col} from 'reactstrap';

const slideImages = [
  'images/bg1.jpg',
  'images/bg2.jpg',
  'images/bg3.jpg'
];

 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide w-100">
            <img src={bg1} alt="img1"></img>
            </div>
          <div className="each-slide w-100">
            <img src={bg2} alt="img2"></img>
            </div>
          <div className="each-slide w-100">
            <img src={bg3} alt="img3"></img>
            </div>
        </Slide>
      </div>
    )
}

export default Slideshow;