import React from 'react';
import { Slide } from 'react-slideshow-image';

const slideImages = [
  "img/firstSlide.jpg",
  "img/homeScreen.jpg",
  "img/thirdSlide.jpg",
  "img/slideimg.jpg",
  "img/fifthSlide.jpg",
  "img/sixthSlide.jpg",
  "img/pixlr.jpg"
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
    <Slide {...properties}>
      <div className="each-slide">
        <div style={{
          'backgroundImage': `url(${slideImages[0]})`, 'backgroundRepeat': 'no-repeat',
          'backgroundPosition': 'center', 'height': `400px`
        }}>
        </div>
      </div>
      <div className="each-slide">
        <div style={{
          'backgroundImage': `url(${slideImages[1]})`, 'backgroundRepeat': 'no-repeat',
          'backgroundPosition': 'center', 'backgroundSize': 'cover', 'height': `400px`
        }}>
        </div>
      </div>
      <div className="each-slide">
        <div style={{
          'backgroundImage': `url(${slideImages[2]})`, 'backgroundRepeat': 'no-repeat',
          'backgroundPosition': 'center', 'backgroundSize': 'cover', 'height': `400px`
        }}>
        </div>
      </div>
      <div className="each-slide">
        <div style={{
          'backgroundImage': `url(${slideImages[3]})`, 'backgroundRepeat': 'no-repeat',
          'backgroundPosition': 'center', 'backgroundSize': 'cover', 'height': `400px`
        }}>
        </div>
      </div>
      <div className="each-slide">
        <div style={{
          'backgroundImage': `url(${slideImages[4]})`, 'backgroundRepeat': 'no-repeat',
          'backgroundPosition': 'center', 'backgroundSize': 'cover', 'height': `400px`
        }}>
        </div>
      </div>
      <div className="each-slide">
        <div style={{
          'backgroundImage': `url(${slideImages[5]})`, 'backgroundRepeat': 'no-repeat',
          'backgroundPosition': 'center', 'backgroundSize': 'cover', 'height': `400px`
        }}>
        </div>
      </div>
      <div className="each-slide">
        <div style={{
          'backgroundImage': `url(${slideImages[6]})`, 'backgroundRepeat': 'no-repeat',
          'backgroundPosition': 'center', 'backgroundSize': 'cover', 'height': `400px`
        }}>
        </div>
      </div>
    </Slide>
  )
}
export default Slideshow;