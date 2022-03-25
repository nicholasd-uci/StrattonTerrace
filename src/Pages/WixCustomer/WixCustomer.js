import React from 'react'
import { Row, Col, Button } from 'reactstrap'
import './WixCustomer.css'
import Video6 from '../../Assets/videos/video-6.mp4'


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
              <Row className='WixCustomer__row__2'>
              <h1 className="WixCustomer__h1">Skip the wait and call now! </h1>
              </Row>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WixCustomer
