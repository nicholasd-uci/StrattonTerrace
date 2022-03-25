import React from 'react'
import { Row, Col } from 'reactstrap'
import './WixCustomer.css'
import Video6 from '../../Assets/videos/video-6.mp4'
import Logo  from '../../Assets/Logo/WixLogo.png'



function WixCustomer() {

  return (
    <div className='WixCustomer'>
      <div className='WixCustomer__background'>
        <div className='WixCustomer-container'>
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
            <source src={Video6} type='video/mp4' />
          </video>        
        </div>



        <div className='background'>
    
          <div className='backgroundFilter'>
            <div className='clients'>
            <Row className='WixCustomer__row__1'>
            <img  src={Logo} className="wix__logo" alt="Logo"/>
              </Row>
              <Row className='WixCustomer__row__2'>
              <h1 className="WixCustomer__h1">Skip The Wait And Call Now! </h1>
              </Row>
              <Row className='WixCustomer__row__3'>
              <Col href="facetime:16578779300" target='_blank' alt='Button' ><button id='wix_button'>
             Call Us</button>
              </Col>
            <Col href='https://calendly.com/strattonterrace/30min' target='_blank' alt='Button' ><button id='wix_button'>
             Email Us</button>
              </Col>
              </Row>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WixCustomer
