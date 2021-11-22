import React from 'react'
import './Orm.css'
import { Row, Col } from 'reactstrap';
import ORM0 from '../../Assets/Images/ORM-header.png'
import ORM1 from '../../Assets/Images/ORM1.png'
import Services from '../../Components/Services/Services'

function Orm() {
    return (
      <div className="Orm">
      <div className = "Orm__intro" >
      <h1 className = "Orm__h1">Online Reputation Management</h1>
      <a href = "#What-is-Orm">
      <img id = "Orm__img" src={ORM0} alt="Orm art"/> </a>
      </div>
      <div id = "What-is-Orm">
      </div>
      <Services />
      <Row className="Orm__row1" >
  <Col id="Orm__R1__col1" xl="4">
         <img id = "Orm__img__body" src={ORM1} alt="Digital Advertising"/>
          </Col>
          <Col>
          <h4 className="Orm__h4">
          What Is Online Reputation Management?
          </h4>
          <p className="Orm__p">
          Online reviews and recommendations are becoming increasingly important in today’s market. Business owners need to take steps now, 
          before their competitors do so! Recent research by Reputation Management identifies that 24% of sales growth is due solely from online-sourced 
          interactions for businesses who have ORM programs in place—and this doesn't even include the other benefits such as customer service improvement or less 
          time spent on marketing campaigns overall because they can focus where people spend most: online interacting with brands instead of them directly through physical storefront locations
          Do you want be left behind while everyone else takes advantage?
          There are a number of steps you can take to ensure your organization’s success in today's digital business environment. Engage with ORM activities including managing online reviews, 
          maintaining accurate listings and engaging with target audiences on social media or conduct customer surveys for feedback from those who have been served by the company already!
</p>
          <h4 className="Orm__h4">
          ORM
          </h4>
          <p className="Orm__p">
          Stratton Terrace Marketing company will explain how ORM works and provides tips and strategies for getting started with an ORM program in your organization. You’ll learn:
         </p>
         <ul className='Orm__ul'>
        <li>
        What is Online Reputation Management?
        </li>
        <li>
        What are the three key components of ORM?
        </li>
        <li>
        How to launch an ORM program in your organization
        </li>
       </ul>
        </Col>
        </Row>
          </div>
    )
}

export default Orm
