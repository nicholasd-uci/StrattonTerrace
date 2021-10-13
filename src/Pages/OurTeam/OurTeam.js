import React from 'react'
import Nicholas from '../../Assets/OurTeam/Nicholas.png'
import Lawrence from '../../Assets/OurTeam/Lawrence. png'

import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact'

function OurTeam () {
  return (
    <div className='OurTeam'>
      <MDBCard className='my-5 px-5 pb-1 text-center'>
        <MDBCardBody>
          <h2 className='h1-responsive font-weight-bold my-5'>
            Our Amazing Team
          </h2>
          <MDBRow className='text-md-left'>
            <MDBCol lg='6' md='12' className='mb-5'>
              <MDBCol md='4' lg='6' className='float-left'>
                <img
                  src={Nicholas}
                  className='mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid'
                  tag='img'
                  alt='Sample avatar'
                />
              </MDBCol>
              <MDBCol md='8' lg='6' className='float-right'>
                <h4 className='font-weight-bold mb-3'>Nicholas P. R. Dallas</h4>
                <h6 className='font-weight-bold grey-text mb-3'>
                  CEO and founder
                </h6>
                <p className='grey-text' />
                <a href='#!' className='p-2 fa-lg gplus-ic'>
                  <MDBIcon fab icon='google-plus-g' />
                </a>
                <a href='#!' className='p-2 fa-lg li-ic'>
                  <MDBIcon fab icon='linkedin-in' />
                </a>
                <a href='#!' className='p-2 fa-lg email-ic'>
                  <MDBIcon icon='envelope' />
                </a>
              </MDBCol>
            </MDBCol>

            <MDBCol lg='6' md='12' className='mb-5'>
              <MDBCol md='4' lg='6' className='float-left'>
                <img
                  src={Lawrence}
                  className='mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid'
                  tag='img'
                  alt='Sample avatar'
                />
              </MDBCol>
              <MDBCol md='8' lg='6' className='float-right'>
                <h4 className='font-weight-bold mb-3'>Laurynas Juzva</h4>
                <h6 className='font-weight-bold grey-text mb-3'>
                  Full stack web developer
                </h6>
                <p className='OurTeam__p'>
                  Laurynas is a full-stack Web Developer currently living in Los Angeles, CA. He has a Bachelor of Business administration, but his primary focus and inspiration is Web Development. He is driven, self-motivated, and constantly experimenting with new technologies and techniques. He very passionate about Web Development and strives to better himself as a developer, and the development community as a whole.
                </p>
                <a href='#!' className='p-2 fa-lg gplus-ic'>
                  <MDBIcon fab icon='google-plus-g' />
                </a>
                <a href='#!' className='p-2 fa-lg li-ic'>
                  <MDBIcon fab icon='linkedin-in' />
                </a>
                <a href='#!' className='p-2 fa-lg email-ic'>
                  <MDBIcon icon='envelope' />
                </a>
              </MDBCol>
            </MDBCol>
            <MDBCol xl='4' lg='6' md='12' className='mb-5'>
              <h4 className='font-weight-bold mb-3'>Pat Downer</h4>
              <h6 className='font-weight-bold grey-text mb-3'>
                Website Designer
              </h6>
            </MDBCol>
            <MDBCol xl='4' lg='6' md='12' className='mb-5'>
              <h4 className='font-weight-bold mb-3'>Abby Hulshof</h4>
              <h6 className='font-weight-bold grey-text mb-3'>
                Coordinator & Brand Marketing Specialist
              </h6>
            </MDBCol>
            <MDBCol xl='4' lg='6' md='12' className='mb-5'>
              <h4 className='font-weight-bold mb-3'>Jack O'Brien</h4>
              <h6 className='font-weight-bold grey-text mb-3'>
                Account Manager & Sales Rep
              </h6>
            </MDBCol>
            <MDBCol xl='4' lg='6' md='12' className='mb-5'>
              <h4 className='font-weight-bold mb-3'>Brendan Ryan</h4>
              <h6 className='font-weight-bold grey-text mb-3'>
                Account Manager
              </h6>
            </MDBCol>
            <MDBCol xl='4' lg='6' md='12' className='mb-5'>
              <h4 className='font-weight-bold mb-3'>Chris Campbell</h4>
              <h6 className='font-weight-bold grey-text mb-3'>
                Account Manager
              </h6>
            </MDBCol>
            <MDBCol xl='4' lg='6' md='12' className='mb-5'>
              <h4 className='font-weight-bold mb-3'>Nicholas Romig</h4>
              <h6 className='font-weight-bold grey-text mb-3'>
                Sales Director
              </h6>
            </MDBCol>
            <MDBCol xl='4' lg='6' md='12' className='mb-5'>
              <h4 className='font-weight-bold mb-3'>Vincent Mark</h4>
              <h6 className='font-weight-bold grey-text mb-3'>
                Professional Logo Designer
              </h6>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </div>
  )
}
export default OurTeam
