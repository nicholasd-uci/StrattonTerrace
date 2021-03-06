import React from 'react'
import { Row, Col } from 'reactstrap'
import './Solutions.css'
import Video1 from '../../Assets/videos/video-3.mp4'
import Typewriter from 'typewriter-effect'
import website from '../../Assets/Icons/Website.png'
import Analytics from '../../Assets/Icons/Analytics.png'
import Email from '../../Assets/Icons/Email.png'
import Integration from '../../Assets/Icons/Integration.png'
import Optimization from '../../Assets/Icons/Optimization.png'
import Seo from '../../Assets/Icons/Seo.png'
import Services from '../../Components/Services/Services'

function Solutions() {
  return (
    <div className='Solutions'>
      <div className='Solutions__background'>
        <div className='Solutions-container'>
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
            <source src={Video1} type='video/mp4' />
          </video>
          <h1>SOLUTIONS</h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('<span style="color: #FAFAFA;"></span>')
                .pauseFor(1000)
                .deleteAll()
                .typeString('<span style="color: #FAFAFA;">Full Stack Digital Marketing Solutions</span>')
                .start()
            }}
          />
        </div>
        <div className='Solutions-services'>
          <Services />
        </div>
        <Row className='Solutions__row'>
          <Col id='Solutions__R1__col1'>
            <img className='Solutions__icons' src={website} alt='website' />
            <h3 className='Solutions__h3__Black'>
              Website Design
            </h3>
            <p className='Solutions__p__black'> 
              In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.
            </p>
          </Col>
          <Col id='Solutions__R1__col2'>
            <img className='Solutions__icons' src={Analytics} alt='Analytics' />
            <h3 className='Solutions__h3__White'>
              Analytics
            </h3>
            <p>
              Google Analytics and supplementary solutions help you collect tons of information. Our experts help you install such tools, measure and interpret all the touchpoints and get actionable insights from the mess.
            </p>
          </Col>
        </Row>
        <Row className='Solutions__row'>
        <Col id='Solutions__R2__col1'>
            <img className='Solutions__icons' src={Email} alt='Email' />
            <h3 className='Solutions__h3__White'>
              Email Marketing
            </h3>
            <p className='Solutions__p__white'>
              Email is one of the cheapest and most effective online marketing tools. We help you grow and monetize your database enables you to retarget your prospects, profile your customers, create lookalike audiences.
            </p>
          </Col>
          <Col id='Solutions__R2__col2'>
            <img className='Solutions__icons' src={Integration} alt='Integration' />
            <h3 className='Solutions__h3__Black'>
              Integration
            </h3>
            <p className='Solutions__p__black'>
              Forget last click attribution. You need a holistic approach to your offline and online marketing channels. Some tend to convert better, whereas other raise awareness. We help you achieve your business goals with the right channels.
            </p>
          </Col>
        </Row>
        <Row className='Solutions__row'>
        <Col id='Solutions__R3__col1'>
            <img className='Solutions__icons' src={Optimization} alt='Optimization' />
            <h3 className='Solutions__h3__Black'>
              Conversion Rate Optimization
            </h3>
            <p className='Solutions__p__black'>
              Bringing prospects is the easy part. Converting them is the hard one. We help you optimise your website towards your business goals, thus reducing your cost per acquisition.
            </p>
          </Col>
          <Col id='Solutions__R3__col2'>
            <img className='Solutions__icons' src={Seo} alt='Seo' />
            <h3 className='Solutions__h3__White'>
              Content Marketing & SEO
            </h3>
            <p>
              From content creation to technical, On-Page and Off-Page SEO, we can help you generate free by default traffic, which can increase your brand recognition and supplement your paid advertising efforts.
            </p>
          </Col>
        </Row>
      </div>
    </div>

    
  )
}

export default Solutions
