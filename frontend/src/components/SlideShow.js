import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import bc1 from '../logo.svg'

const slideImages = [
  bc1,
  bc1,
  bc1
];

const Slideshow = () => {
    return (
      <div className="slide-container" wdith='100px'>
        <Slide>
          <div className="each-slide">
            <div >
              <img style={{'backgroundImage': `url(${slideImages[0]})`, 'wdith': '720px', 'height': '100px'}} src={slideImages[0]} alt='sdfsd'></img>
            </div>
          </div>
          <div className="each-slide">
            <div>
            <img style={{'backgroundImage': `url(${slideImages[1]})`, 'wdith': '720px', 'height': '100px'}} src={slideImages[1]} alt='sdfsd'></img>
            </div>
          </div>
          <div className="each-slide">
            <div>
            <img style={{'backgroundImage': `url(${slideImages[2]})`, 'wdith': '720px', 'height': '100px'}} src={slideImages[2]} alt='sdfsd'></img>
            </div>
          </div>
        </Slide>
      </div>
    )
}
export default Slideshow