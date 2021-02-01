import React from 'react';
import '../../App.css' ;
import { Button } from '../buttons/Button';

import './HeroSection.css';




function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/speed.mp4' autoPlay loop muted />
      <h1>ONE STOP OF ALL YOUR NEEDS</h1>
      <p>CHOOSE FROM</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ACCESSORIES
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          MAINTAINANCE KIT <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
