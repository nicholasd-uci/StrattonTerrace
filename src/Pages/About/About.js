import React from 'react'
import './About.css'
import AboutBanner from '../../Components/AboutBanner/AboutBanner'
import Nicholas from '../../Assets/OurTeam/Nicholas.png'
import Lawrence from '../../Assets/OurTeam/Lawrence.jpg'
import Jack from '../../Assets/OurTeam/OBrien_Jack.png'
import Abby from '../../Assets/OurTeam/Abby_Hulshof.jpeg'
import { MDBRow, MDBCol, MDBCard, MDBCardBody } from 'mdbreact'

function About () {
  return (

    <div className='About'>
            <AboutBanner />
      <MDBCard className='px-5 text-center'>
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
                <p className='About__p'>
                Nicholas Dallas is the founder of STM LLC. However, he is also blessed to own a California-registered 501(c)3 non-profit - Huntington Beach Lacrosse Club. Nicholas holds a Global Business Management degree and a minor in Economics from Regis College in Weston, MA. He is also a Full Stack Web Developer and loves helping business owners achieve self-growth.                </p>
                <a href='https://www.linkedin.com/in/nicholas-dallas-54b5b097/' target='_blank' rel="noreferrer"  className='p-2 fa-lg li-ic'>
                <i className="fab fa-linkedin-in"></i>
                </a>
                <a href='mailto:info@strattonterrace.com' target='_blank' rel="noreferrer"  className='p-2 fa-lg email-ic'>
                <i className="far fa-envelope"></i>
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
                <h4 className='font-weight-bold mb-3'>Lawrence Juzva</h4>
                <h6 className='font-weight-bold grey-text mb-3'>
                  Full stack web developer
                </h6>
                <p className='About__p'>
                Lawrence is a full-stack Web Developer. He has a Bachelor of Business administration, but his primary focus and inspiration are Web Development. He is driven, self-motivated, and constantly experimenting with new technologies and techniques. He is very passionate about Web Development and strives to better himself as a developer, and the development community as a whole.
                </p>
                <a href='https://www.linkedin.com/in/lawerence-j/' target='_blank' rel="noreferrer"  className='p-2 fa-lg li-ic'>
                <i class="fab fa-linkedin-in"></i>
                </a>
                <a href='mailto:laurynas@strattonterrace.com' target='_blank' rel="noreferrer"  className='p-2 fa-lg email-ic'>
                <i class="far fa-envelope"></i>
                </a>
              </MDBCol>
            </MDBCol>
            <MDBCol lg='6' md='12' className='mb-5'>
            <MDBCol md='4' lg='6' className='float-left'>
                <img
                  src={Jack}
                  className='mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid'
                  tag='img'
                  alt='Sample avatar'
                />
              </MDBCol>
              <MDBCol md='8' lg='6' className='float-right'>
                <h4 className='font-weight-bold mb-3'>Jack O'Brien</h4>
                <h6 className='font-weight-bold grey-text mb-3'>
                Account Manager & Sales Rep
                </h6>
                <p className='About__p'>
                Nicholas Dallas is the founder of STM LLC. However, he is also blessed to own a California-registered 501(c)3 non-profit - Huntington Beach Lacrosse Club. Nicholas holds a Global Business Management degree and a minor in Economics from Regis College in Weston, MA. He is also a Full Stack Web Developer and loves helping business owners achieve self-growth.                </p>
                <a href='https://www.linkedin.com/in/nicholas-dallas-54b5b097/' target='_blank' rel="noreferrer"  className='p-2 fa-lg li-ic'>
                <i className="fab fa-linkedin-in"></i>
                </a>
                <a href='mailto:jack@strattonterrace.com' target='_blank' rel="noreferrer"  className='p-2 fa-lg email-ic'>
                <i className="far fa-envelope"></i>
                </a>
                </MDBCol>
            </MDBCol>
            <MDBCol lg='6' md='12' className='mb-5'>
              <MDBCol md='4' lg='6' className='float-left'>
                <img
                  src={Abby}
                  className='mx-auto mb-md-0 mb-4 rounded z-depth-1 img-fluid'
                  tag='img'
                  alt='Sample avatar'
                />
              </MDBCol>
              <MDBCol md='8' lg='6' className='float-right'>
                <h4 className='font-weight-bold mb-3'>Abby Hulshof</h4>
                <h6 className='font-weight-bold grey-text mb-3'>
                Coordinator & Brand Marketing Specialist
                </h6>
                <p className='About__p'>
                Abby is Coordinator & Brand Marketing Specialist </p>
                <a href='https://www.linkedin.com/in/abby-hulshof-92258619a' target='_blank' rel="noreferrer"  className='p-2 fa-lg li-ic'>
                <i class="fab fa-linkedin-in"></i>
                </a>
                <a href='mailto:abby.hulshof1@gmail.com' target='_blank' rel="noreferrer"  className='p-2 fa-lg email-ic'>
                <i class="far fa-envelope"></i>
                </a>
              </MDBCol>
            </MDBCol>
              </MDBRow>
            {/* <MDBCol xl='4' lg='6' md='12' className='mb-5'>
              <h4 className='font-weight-bold mb-3'>Pat Downer</h4>
              <h6 className='font-weight-bold grey-text mb-3'>
                Website Designer
              </h6>
            </MDBCol> */}
            {/* <MDBCol xl='4' lg='6' md='12' className='mb-5'>
              <h4 className='font-weight-bold mb-3'>Jack O'Brien</h4>
              <h6 className='font-weight-bold grey-text mb-3'>
                Account Manager & Sales Rep
              </h6>
            </MDBCol> */}
            {/* <MDBCol xl='4' lg='6' md='12' className='mb-5'>
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
              Graphic Designer
              </h6>
            </MDBCol> */}
        </MDBCardBody>
      </MDBCard>
 
    </div>
  )
}



export default About
