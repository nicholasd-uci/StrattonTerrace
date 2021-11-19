import React from 'react'
import './Social.css'
import { Row, Col } from 'reactstrap';
import Social0 from '../../Assets/Images/Social-Header.png'
import Social1 from '../../Assets/Images/Social1.png'
import Services from '../../Components/Services/Services'


function Social() {
    return (

      <div className="Social1">
      <div className = "Social__intro" >
      <h1 className = "Social__h1">Social Media Strategy<br/> Implementation</h1>
      <a href = "#What-is-Social">
      <img id = "Social__img" src={Social0} alt="Social art"/> </a>
      </div>
      <div id = "What-is-Social">
      </div>
      <Services />
      <Row className="Social__row1" >
  <Col id="Social__R1__col1" xl="4">
         <img id = "Social__img__body" src={Social1} alt="Digital Advertising"/>
          </Col>
          <Col>
          <h4 className="Social__h4">
          What Is Social Media Strategy Implementation?
          </h4>
          <p className="Social__p">
          consults our clients to have a better understanding on what social media is and how it can (or cannot) help your business is the key to utilizing this powerful public relations tool.  
          Stratton Terrace Marketing analyzes  your current social media situation and provide a complete analysis and detailed strategy for how your business can use social media.
        We make sure that your social media efforts are focused and engaged.  Entering a conversation with potential customers is a great opportunity to impact their decision making.  
        This service will make sure that the conversation about your business is always positive by using social media to shape the topics and support your goals.
          </p>
          <h4 className="Social__h4">
          Social Media Marketing and Management may be difficult for businesses to harness the power of social media.
          </h4>
          <ul className='Social__ul'>
        <li>
        FREE Social Media Account/Profile Creation (If needed)
        </li>
        <li>
        Ad Campaign(s)
        </li>
        <li>
        Organic Lead Generation
        </li>
        <li>
        Content Creation & Posting (3-5/ per Week Each Profile)
        </li>
        <li>
        Community Engagement (3-5 Posts / Week)
        </li>
        <li>
        Targeted Social Media Marketing
        </li>
        <li>
        250 plus New Followers gained/ per Week (Custom Solutions Available)
        </li>
        <li>
        Full Social Media Team
        </li>
         <li>
         No Spam Monitoring
        </li>
        <li>
        1 Analytic Report Per month
        </li>
        <li>
        1 Monthly Email Newsletter
        </li>
        <li>
        Custom Video Production and Viral Posting
        </li>
        <li>
        Ongoing Customer Reviews Posted
        </li>
        <li>
        3 Keywords (Guarantee Page 1 by month 6)
        </li>
        <li>
        24/7 email support & Monitoring (Savings over $3k monthly)
        </li>
       </ul>
        </Col>
        </Row>
          </div>
    )
}

export default Social
