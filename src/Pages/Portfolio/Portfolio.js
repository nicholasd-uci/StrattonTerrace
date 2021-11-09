import React, { useState } from 'react'
import { Row, Col, Button } from 'reactstrap'
import './Portfolio.css'
import Video5 from '../../Assets/videos/video-5.mp4'
import Typewriter from 'typewriter-effect'
import CoastAutomotive from '../../Assets/Images/Portfolio/CoastAutomotive.png'
import PaJamieParties from '../../Assets/Images/Portfolio/PaJamieParties.png'
import TonyMacEntertainment from '../../Assets/Images/Portfolio/TonyMacEntertainment.png'
import Nova from '../../Assets/Images/Portfolio/Nova.png'
import Aviation from '../../Assets/Images/Portfolio/ClipperAviation.png'
import BrowsJungle from '../../Assets/Images/Portfolio/browsjungle.png'

function Portfolio() {
  const [clientsState] = useState({
    clients: [
      {
        name: 'Clipper Aviation',
        industry: 'Aviation',
        description: 'Clipper Aviation is a Flight school Located in Van Nuys airport.',
        site: 'https://www.clipperaviation.com//',
        image: Aviation
      },
      {
        name: 'Clipper Aviation',
        industry: 'Beauty Salon',
        description: 'Brows Jungle LLC is a beauty salon which provides Microblading, Powder Brows, Lip Blushing in Lake Elsinore. x3 certified, fully licensed and insured.',
        site: 'https://www.browsjungle.com/',
        image: BrowsJungle
      },
      {
        name: 'Coast Automotive',
        industry: 'Automotive',
        description: 'Coast Automotive is an auto repair shop in Costa Mesa, CA. In business for more than 20 years, they are a one-stop shop for automotive repairs and body work',
        site: 'https://www.coastautomotiveperformance.com/',
        image: CoastAutomotive
      },
      {
        name: 'PaJamie Parties',
        industry: 'Entertainment',
        description: 'PaJamie Parties is a party planning company that brings everything you need for the ultimate sleepover. Tents, mattresses, bedding, lighting, & decorative pillows.',
        site: 'https://www.pajamieparties.com/',
        image: PaJamieParties
      },
      {
        name: 'Tony Mac Entertainment',
        industry: 'Entertainment',
        description: 'Tony Mac Entertainment is a professional DJ/MC who provides his services to weddings, private events, corporate events, and more.',
        site: 'https://www.tmacevents.com/',
        image: TonyMacEntertainment
      },
      {
        name: 'NovaXS Biotech',
        industry: 'Medical',
        description: 'NovaXS Biotech is a smart medical device startup focused on advanced drug delivery and users’ long-term health. Our patent-pending technology, Telosis, is your one-stop destination to predict, prevent, and manage chronic conditions.',
        site: 'https://www.novaxs.co/',
        image: Nova
      },
   
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
              height: '60vh',
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
        <div className='background'>
          <div className='backgroundFilter'>
            <div className='clients'>
              <Row className='Portfolio__row'>
                {
                  clientsState.clients.map(client => (
                    <Col
                      className='client'
                      xl='4'
                      lg='6'
                      key={client.name}
                    >
                      <Button
                        className='clientBtn'
                        href={client.site}
                        target='_blank'
                      >
                        <img className='clientImg' src={client.image} alt={client.name} />
                        <div className='details'>
                          <h3 className='Portfolio__client__name'>
                            {client.name}
                          </h3>
                          <h6 className='Portfolio__client__industry'>
                            {client.industry} Industry
                          </h6>
                          <p className='Portfolio__client__description'>
                            {client.description}
                          </p>
                        </div>
                      </Button>
                    </Col>
                  ))
                }
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
