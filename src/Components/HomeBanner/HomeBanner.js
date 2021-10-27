import React from 'react'
import './HomeBanner.css'
import Typewriter from 'typewriter-effect'
import background from '../../Assets/videos/video-4a.mp4'

function HomeBanner() {
  return (
    <div className='home-container'>

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
      <h1>STRATTON TERRACE</h1>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString('<span style="color: #FAFAFA;"></span>')
            .pauseFor(500)
            .deleteAll()
            .typeString('<span style="color: #FAFAFA;"> Personalize | Analyze | Deliver </span>')
            .start()
        }}
      />
    </div>
  )
}

export default HomeBanner
