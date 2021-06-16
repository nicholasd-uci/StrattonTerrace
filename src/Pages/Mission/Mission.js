import React from 'react'
import './Mission.css'
import Typewriter from 'typewriter-effect';
import background from '../../Assets/videos/video-2.mp4'

function Mission() {
    return (
        <div className='Mission-container'>
  
        <video autoPlay loop muted 
                style={{
                  position: 'absolute',
                  width:'100%',
                  height: '100%',
                  objectFit: 'cover',
                  transform: 'translate(- 50%, -50%)',
                  zIndex: '-1'           
              }}>
            < source src={background} type="video/mp4" />
                </video>
                <h1>OUR MISSION</h1>
                <Typewriter 
         onInit = {(typewriter) => {
           typewriter
           .typeString('<span style="color: #FAFAFA;"></span>')
           .pauseFor(1000)
           .deleteAll()
           .typeString('<span style="color: #FAFAFA;">WE WILL</span>')
           .pauseFor(1000)
           .deleteAll()
           .typeString('<span style="color: #FAFAFA;">Create Custom website design for your business </span>')
           .pauseFor(1000)
           .deleteAll()
           .typeString('<span style="color: #FAFAFA;">Identify valuable marketing strategies</span>')
           .pauseFor(1000)
           .deleteAll()
           .typeString('<span style="color: #FAFAFA;">Implement marketing solutions for you</span>')
           .pauseFor(1000)
           .deleteAll()
           .typeString('<span style="color: #FAFAFA;">help you monitor results and optimize campaigns</span>')
           .pauseFor(1000)
           .deleteAll()
           .typeString('<span style="color: #FAFAFA;">integrate strategies for the best results</span>')
           .pauseFor(1000)
           .deleteAll()
           .typeString('<span style="color: #FAFAFA;">save you time and money by bundling services</span>')
           .pauseFor(1000)
           .deleteAll()
           .typeString('<span style="color: #f7cf36;">STRATTON TERRACE MARKETING</span>')
           .start()
         }}
         />           
          </div>
    )
}

export default Mission
