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
          Whether your business is large or small — with one location or many — your customers are talking about you online. And the viral nature of today’s 
          information can create or destroy your reputation in minutes. A solid online reputation also has tremendous impact on your bottom line. Recent research by Reputation.com 
          found that online-sourced sales for businesses who have ORM programs in place grew 24% faster than for those not actively engaged in ORM activities.
          By engaging in essential ORM activities — managing online reviews, maintaining accurate business listings, engaging with local communities and target audiences on social media,
          conducting customer surveys and acting on feedback — you can help ensure your organization’s success in today’s digital business environment.
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
