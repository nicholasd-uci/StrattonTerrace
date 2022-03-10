import React, { useState } from 'react'
import { Row, Col, Button } from 'reactstrap'
import './Portfolio.css'
import Video5 from '../../Assets/videos/video-5.mp4'
import Typewriter from 'typewriter-effect'
import Aviation from '../../Assets/Images/Portfolio/Clipper-Aviation.png'
import BrowsJungle from '../../Assets/Images/Portfolio/Brows-jungle.png'
import CoastAutomotive from '../../Assets/Images/Portfolio/CoastAutomotive.png'
import OffRoaders from '../../Assets/Images/Portfolio/Off-Roaders.png'
import Federation from '../../Assets/Images/Portfolio/Federation.png'
import ADC from '../../Assets/Images/Portfolio/ADC.png'
import Healthy from '../../Assets/Images/Portfolio/Healthy-Wealthy-Life.png'
import Nova from '../../Assets/Images/Portfolio/Nova.png'



function Portfolio() {
  const [clientsState] = useState({
    clients: [
      {
        name: 'Clipper Aviation',
        industry: 'Aviation',
        description: 'Clipper Aviation is a Flight school Located in Van Nuys airport.',
        site: 'https://www.clipperaviation.com/',
        image: Aviation
      },
      {
        name: 'Brows Jungle',
        industry: 'Beauty Salon',
        description: 'Brows Jungle LLC is a beauty salon which provides Microblading, Powder Brows, Lip Blushing in Lake Elsinore. x3 certified, fully licensed and insured.',
        site: 'https://www.browsjungle.com/',
        image: BrowsJungle
      },
      {
        name: 'Federation Of Southern Cooperatives Land Assistance Fund',
        industry: 'Entertainment',
        description: 'Federation mission is to be a catalyst for the development of self-supporting communities through cooperative economic development, land retention, and advocacy. We envision sustainable rural communities that are supported by a network of farmers, landowners and cooperatives, which are all based on local control and leadership.',
        site: 'https://strattonterraceinf.editorx.io/coop',
        image: Federation
      },
    
      {
        name: 'NovaXS Biotech',
        industry: 'Medical',
        description: 'NovaXS Biotech is a smart medical device startup focused on advanced drug delivery and users’ long-term health. Our patent-pending technology, Telosis, is your one-stop destination to predict, prevent, and manage chronic conditions.',
        site: 'https://www.novaxs.co',
        image: Nova
      },
      {
        name: 'ADC Window Washers',
        industry: 'Cleaning Services',
        description: 'Est. in Oakland CA. We offer professional window cleaning services, pressure washing, gutter cleaning, and solar panel cleaning. Eco-friendly, honest, and attentive to detail.',
        site: 'https://www.adcwindowwashers.com',
        image: ADC
      },
    
      {
        name: 'Healthy Wealthy Life',
        industry: 'Personal financial planning Services',
        description: 'Creating a clear Financial vision with personal One on One guidance to build your financial house, empowering you to take more control of your financial future so you can live the life you want.',
        site: 'https://hraye17.wixsite.com/website',
        image: Healthy
      },
      {
        name: 'Off-Roaders',
        industry: 'Car Part Ecommerce Store',
        description: 'Off-Roaders LLC is a family owned off-road company. Whether it’s lifted trucks, Jeeps, or utility vehicles, we strive to bring you the best parts on the market for your rig. We want to make you happy knowing you got a quality product.',
        site: 'https://www.offroaderparts.com',
        image: OffRoaders
      },   
      {
        name: 'Coast Automotive',
        industry: 'Automotive',
        description: 'Coast Automotive is an auto repair shop in Costa Mesa, CA. In business for more than 20 years, they are a one-stop shop for automotive repairs and body work',
        site: 'https://www.coastautomotiveperformance.com',
        image: CoastAutomotive
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
                      xl='6'
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
