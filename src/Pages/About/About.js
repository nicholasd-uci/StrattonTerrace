import React from 'react'
import './About.css'
import Typewriter from 'typewriter-effect'
import background from '../../Assets/videos/video-2.mp4'
import Team from '../OurTeam/OurTeam'
import AboutBanner from '../../Components/AboutBanner/AboutBanner'

function About() {
  return (
    <>
      <AboutBanner />
      <Team />
      <div className='About-container'>

        {/* <video
          autoPlay loop muted
          style={{
            position: 'absolute',
            width: '100%',
            height: '100',
            objectFit: 'cover',
            transform: 'translate(- 50%, -50%)',
            zIndex: '-1'
          }}
        >
          <source src={background} type='video/mp4' />
        </video> */}
        <h1>OUR MISSION</h1>

        {/* option 1 */}
        {/* <p className='Typewriter'>
          <span style={{ color: '#f7cf36' }}>WE WILL</span>
          <br />
          create custom website design for your business,
          <br />
          identify valuable marketing strategies,
          <br />
          implement marketing solutions for you,
          <br />
          help you monitor results and optimize campaigns,
          <br />
          integrate strategies for the best results, and
          <br />
          save you time and money by bundling services
        </p> */}

        {/* option 2 */}
        <p className='Typewriter'>
          We will create custom website design for your business, identify valuable marketing strategies, implement marketing solutions for you, help you monitor results and optimize campaigns, integrate strategies for the best results, and save you time and money by bundling services.
        </p>

        {/* option 3 */}
        {/* <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString('<span style="color: #FAFAFA;"></span>')
              .pauseFor(1000)
              .typeString('<span style="color: #f7cf36;">WE WILL</span>')
              .pauseFor(1000)
              .typeString('<span style="color: #FAFAFA;"><br>create custom website design for your business,</span>')
              .pauseFor(1000)
              .typeString('<span style="color: #FAFAFA;"><br>identify valuable marketing strategies,</span>')
              .pauseFor(1000)
              .typeString('<span style="color: #FAFAFA;"><br>implement marketing solutions for you,</span>')
              .pauseFor(1000)
              .typeString('<span style="color: #FAFAFA;"><br>help you monitor results and optimize campaigns,</span>')
              .pauseFor(1000)
              .typeString('<span style="color: #FAFAFA;"><br>integrate strategies for the best results,</span>')
              .pauseFor(500)
              .typeString('<span style="color: #FAFAFA;"> and</span>')
              .pauseFor(1000)
              .typeString('<span style="color: #FAFAFA;"><br>save you time and money by bundling services</span>')
              // .pauseFor(1000)
              // .typeString('<span style="color: #f7cf36;"><br>STRATTON TERRACE MARKETING</span>')
              .start()
          }}
        /> */}
      </div>
    </>
  )
}

export default About
