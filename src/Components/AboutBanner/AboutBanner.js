import React from 'react'
// import { Button } from '../Button/Button'
import Typewriter from 'typewriter-effect'
import './AboutBanner.css'
import background from '../../Assets/videos/video-6.mp4'

function AboutBanner() {
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
      <h1>About Us</h1>
    </div>
  )
}

export default AboutBanner
