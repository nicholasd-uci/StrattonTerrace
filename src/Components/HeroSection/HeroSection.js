import React from 'react'
import { Button } from '../Button/Button'
import './HeroSection.css'
import background from '../../Assets/videos/video-1.mp4'

function HeroSection() {
  return (
    <div className='hero-container'>

      <video
        autoPlay loop muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transform: 'translate(- 50%, -50%)',
          zIndex: '-1'
        }}
      >
        <source src={background} type='video/mp4' />
      </video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
