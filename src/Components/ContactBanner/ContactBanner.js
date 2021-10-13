import React from 'react'
// import { Button } from '../Button/Button'
import Typewriter from 'typewriter-effect'
import './ContactBanner.css'
import background from '../../Assets/videos/video-7.mp4'

function ContactBanner () {
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
      <h1>Contact Us</h1>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('<span style="color: #FAFAFA;"></span>')
            .pauseFor(1000)
            .deleteAll()
            .typeString('<span style="color: #FAFAFA;">Please Tell Us How We Can Help</span>')
            // .pauseFor(1000)
            // .deleteAll()
            // .typeString('<span style="color: #f7cf36;">STRATTON TERRACE MARKETING</span>')
            .start()
        }}
      />
    </div>
  )
}

export default ContactBanner
