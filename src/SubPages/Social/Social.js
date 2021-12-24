import React from 'react'
import './Social.css'
import { Row, Col } from 'reactstrap';
import Card from '../../Components/Cards/SocialMediaCard/Card'
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
          Consult with our team to find out if social media is right for you and we'll help design the perfect strategy. 
          Social Media Consultations include: analyzing your current situation, providing a detailed analysis of how it can be used most effectively in regards 
          to company goals or objectives; developing an individualized campaign plan based on client needs that includes research-backed best practices from experts 
          who have been doing this kind work long enough not only know what they're talking about but also understand human psychology as well!<br/><br/>
          Being in control of your conversational conversations with customers is a great way to build trust and influence them. <br/><br/>
          We can help you by using social media, either through posts or messages on Facebook ads that are tailored towards what they want- so it's always positive!
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
        <Card />
          </div>
    )
}

export default Social
