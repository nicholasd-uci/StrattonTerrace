import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import './Portfolio.css'
import Video5 from '../../Assets/videos/video-5.mp4'
import Typewriter from 'typewriter-effect'
import website from '../../Assets/Icons/Website.png'
import Analytics from '../../Assets/Icons/Analytics.png'
import Email from '../../Assets/Icons/Email.png'
import Integration from '../../Assets/Icons/Integration.png'
import Optimization from '../../Assets/Icons/Optimization.png'
import Seo from '../../Assets/Icons/Seo.png'
import CoastAutomotive from '../../Assets/Images/Portfolio/CoastAutomotive.png'
import PaJamieParties from '../../Assets/Images/Portfolio/PaJamieParties.png'

function Portfolio () {
  const [clientsState, setClientsState] = useState({
    clients: [
      {
        name: 'Coast Automotive',
        industry: 'Automotive',
        description: 'Coast Automotive is an auto repair shop in Costa Mesa, CA. In business for more than 20 years, they are a one-stop shop for automotive repairs and body work',
        site: 'https://www.coastautomotiveperformance.com/',
        image: CoastAutomotive
      },
      {
        name: 'PaJamie Parties',
        industry: 'events',
        description: 'PaJamie Parties is a party planning company that brings everything you need for the ultimate sleepover. Tents, mattresses, bedding, lighting, & decorative pillows.',
        site: 'https://www.pajamieparties.com/',
        image: PaJamieParties
      }
    ]
  })

  return (
    <div className='Portfolio'>
      <div className='Portfolio__background'>
        <div className='Portfolio-container'>
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
            <source src={Video5} type='video/mp4' />
          </video>
          <h1>PORTFOLIO</h1>
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('<span style="color: #FAFAFA;"></span>')
                .pauseFor(1000)
                .deleteAll()
                .typeString('<span style="color: #FAFAFA;">View Our Work</span>')
                .pauseFor(1000)
                .deleteAll()
                .typeString('<span style="color: #FAFAFA;">We Have a History of Quality</span>')
                // .pauseFor(1000)
                // .deleteAll()
                // .typeString('<span style="color: #f7cf36;">STRATTON TERRACE MARKETING</span>')
                .start()
            }}
          />
        </div>
        <Row className='Portfolio__row'>
          {
            clientsState.clients.map(client => (
              <Col id='Portfolio__R1__col1' xl='4' key={client.name}>
                <img className='Portfolio__icons' src={client.image} alt={client.name} />
                <h3 className='Portfolio__h3'>
                  {client.name}
                </h3>
                <p>
                  {client.description}
                </p>
              </Col>
            ))
          }
          <Col id='Portfolio__R1__col3' xl='4'>
            <img className='Portfolio__icons' src={Email} alt='Email' />
            <h3 className='Portfolio__h3'>
              Email Marketing
            </h3>
            <p>
              Email is one of the cheapest and most effective online marketing tools. We help you grow and monetize your database enables you to retarget your prospects, profile your customers, create lookalike audiences.
            </p>
          </Col>
        </Row>
        <Row className='Portfolio__row'>
          <Col id='Portfolio__R2__col1' xl='4'>
            <img className='Portfolio__icons' src={Integration} alt='Integration' />
            <h3 className='Portfolio__h3'>
              Integration
            </h3>
            <p>
              Forget last click attribution. You need a holistic approach to your offline and online marketing channels. Some tend to convert better, whereas other raise awareness. We help you achieve your business goals with the right channels.
            </p>
          </Col>
          <Col id='Portfolio__R2__col2' xl='4'>
            <img className='Portfolio__icons' src={Optimization} alt='Optimization' />
            <h3 className='Portfolio__h3'>
              Conversion Rate Optimization
            </h3>
            <p>
              Bringing prospects is the easy part. Converting them is the hard one. We help you optimise your website towards your business goals, thus reducing your cost per acquisition.
            </p>
          </Col>
          <Col id='Portfolio__R2__col3' xl='4'>
            <img className='Portfolio__icons' src={Seo} alt='Seo' />
            <h3 className='Portfolio__h3'>
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

export default Portfolio
