import React from 'react'
import './About.css'
import Nicholas from '../../Assets/OurTeam/Nicholas.png'
import Lawrence from '../../Assets/OurTeam/Lawrence.jpg'
import Jack from '../../Assets/OurTeam/OBrien_Jack.png'
import Abby from '../../Assets/OurTeam/Abby_Hulshof.jpeg'


function About () {
  return (
    <div className='About'>
            <div className="About__container">
    <h1 className="heading"><span>meet</span>Our Team</h1>

    <div className="profiles">
      <div className="profile">
        <img  src={Nicholas} className="profile-img" alt="Nicholas P. R. Dallas"/>

        <h3 className="user-name">Nicholas P. R. Dallas</h3>
        <h5>CEO and founder</h5>
        <p>Nicholas Dallas is the founder of STM LLC. However, he is also blessed to own a California-registered 501(c)3 non-profit - Huntington Beach Lacrosse Club. Nicholas holds a Global Business Management degree and a minor in Economics from Regis College in Weston, MA. He is also a Full Stack Web Developer and loves helping business owners achieve self-growth.
        </p>
        <a href='https://www.linkedin.com/in/nicholas-dallas-54b5b097/' target='_blank' rel="noreferrer"  className='p-2 fa-lg li-ic'>
                <i className="fab fa-linkedin-in"></i>
                </a>
                <a href='mailto:info@strattonterrace.com' target='_blank' rel="noreferrer"  className='p-2 fa-lg email-ic'>
                <i className="far fa-envelope"></i>
                </a>
      </div>
      <div className="profile">
        <img  src={Lawrence} className="profile-img" alt="Lawrence Juzva"/>

        <h3 className="user-name">Lawrence Juzva</h3>
        <h5>Full stack web developer</h5>
        <p>Lawrence is a full-stack Web Developer. He has a Bachelor of Business administration, but his primary focus and inspiration are Web Development. He is driven, self-motivated, and constantly experimenting with new technologies and techniques. He is very passionate about Web Development and strives to better himself as a developer, and the development community as a whole.
                </p>
                <a href='https://www.linkedin.com/in/lawerence-j/' target='_blank' rel="noreferrer"  className='p-2 fa-lg li-ic'>
                <i class="fab fa-linkedin-in"></i>
                </a>
                <a href='mailto:laurynas@strattonterrace.com' target='_blank' rel="noreferrer"  className='p-2 fa-lg email-ic'>
                <i class="far fa-envelope"></i>
                </a>
      </div>
      
    </div>
    
  </div>
  <div className="About__container">
    <div className="profiles">
    <div className="profile">
        <img  src={Jack} className="profile-img" alt="Jack O'Brien" />

        <h3 className="user-name">Jack O'Brien</h3>
        <h5>Account Manager & Sales Representative</h5>
        <p>Jack O'Brien is Account Manager & Sales Representative</p>
        <a href='https://www.linkedin.com/in/jack-o-brien-351619133' target='_blank' rel="noreferrer"  className='p-2 fa-lg li-ic'>
                <i className="fab fa-linkedin-in"></i>
                </a>
                <a href='mailto:jack@strattonterrace.com' target='_blank' rel="noreferrer"  className='p-2 fa-lg email-ic'>
                <i className="far fa-envelope"></i>
                </a>
      </div>
      <div className="profile">
        <img  src={Abby} className="profile-img" alt="Abby Hulshof"/>

        <h3 className="user-name">Abby Hulshof</h3>
        <h5>Coordinator & Brand Marketing Specialist</h5>
        <p>Abby is Coordinator & Brand Marketing Specialist</p>
        <a href='https://www.linkedin.com/in/abby-hulshof-92258619a' target='_blank' rel="noreferrer"  className='p-2 fa-lg li-ic'>
                <i class="fab fa-linkedin-in"></i>
                </a>
                <a href='mailto:abby.hulshof1@gmail.com' target='_blank' rel="noreferrer"  className='p-2 fa-lg email-ic'>
                <i class="far fa-envelope"></i>
                </a>
      </div>
      <div className="profile">
        <img  src={Lawrence} className="profile-img" alt="Pat Downer"/>

        <h3 className="user-name">Pat Downer</h3>
        <h5>Website Designer</h5>
        <p>Pat Downer is a Website Designer</p>
                <a href='https://www.linkedin.com/in/lawerence-j/' target='_blank' rel="noreferrer"  className='p-2 fa-lg li-ic'>
                <i class="fab fa-linkedin-in"></i>
                </a>
                <a href='mailto:laurynas@strattonterrace.com' target='_blank' rel="noreferrer"  className='p-2 fa-lg email-ic'>
                <i class="far fa-envelope"></i>
                </a>
      </div>
     
    </div>
    
  </div>
  </div>
  )
}



export default About



{/* 
           
               
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
        {/* </MDBCardBody>
      </MDBCard> */}