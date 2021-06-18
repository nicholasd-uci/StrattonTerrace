import React from 'react'
import './Social.css'
import { Row, Col } from 'reactstrap';
import Social1 from '../../Assets/Images/Social1.jpg'
import Social2 from '../../Assets/Images/Social2.jpg'

const styles = {
    image: {
        boxShadow: "5px 5px 20px -5px black",
        borderRadius: "25px",
    
    },
    }
function Social() {
    return (
        <div className="Social">
        <div className="Social__background"> 
        <Row>
        <Col id="Social__R1__col2" xl="6">
       <img className="img-fluid mb-xl-5" src={Social1} alt="Digital" style={styles.image} />
        </Col>
        <Col id="Social__R1__col1" xl="6">
        <h3 className="Social__h3">
        Social Media Strategy Implementation
        </h3>
        <h4 className="Social__h4">
        Stratton Terrace Marketing
        </h4>
        <p className="Social__p">
        consults our clients to have a better understanding on what social media is and how it can (or cannot) help your business is the key to utilizing this powerful public relations tool.  
        I Win Marketing analyzes  your current social media situation and provide a complete analysis and detailed strategy for how your business can use social media.
        We make sure that your social media efforts are focused and engaged.  Entering a conversation with potential customers is a great opportunity to impact their decision making.  
        This service will make sure that the conversation about your business is always positive by using social media to shape the topics and support your goals.
        </p>
        </Col>
      </Row>
        <Row>
        <Col id="Social__R1__col1" xl="6">
        <h3 className="Social__h3">
        Social Media Marketing and Management may be difficult for businesses to harness the power of social media.
        </h3>
       <p className="Social__p">
       Here is the most enhanced package that we offer:
        </p>
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
        <Col id="Social__R1__col2" xl="4">
       <img className="img-fluid mb-xl-5" src={Social2} alt="Digital Advertising"  style={styles.image} />
        </Col>
      </Row>
     
      </div>
        </div>
    )
}

export default Social
