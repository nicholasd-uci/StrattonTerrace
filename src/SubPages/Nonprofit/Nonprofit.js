import React from 'react'
import './Nonprofit.css'
import { Row, Col } from 'reactstrap';
import Nonprofit1 from '../../Assets/Images/Nonprofit1.jpg'
import Nonprofit2 from '../../Assets/Images/Nonprofit2.jpg'


const styles = {
    image: {
        boxShadow: "5px 5px 20px -5px black",
        borderRadius: "25px",

    
    },
    }


function Nonprofit() {
    return (
        <div className="Nonprofit">
        <div className="Nonprofit__background"> 
        <Row>
        <Col id="Nonprofit__R1__col1" xl="6">
        <h3 className="Nonprofit__h3">
        Non Profit Advertising 501(C)(3)
        </h3>
        <h4 className="Nonprofit__h4">
        What Is Non Profit Advertising?
        </h4>
        <p className="Nonprofit__p">
        Nonprofit marketing refers to the tactics and strategies nonprofit organizations use to raise donations and spread their message. Nonprofit marketing includes a wide range of activities, such as direct mail marketing, mobile marketing, content marketing, and social media marketing.
        </p>
         </Col>
        <Col id="Nonprofit__R1__col2" xl="4">
       <img className="img-fluid mb-xl-5" src={Nonprofit1} alt="Digital Advertising"  style={styles.image} />
        </Col>
      </Row>
      <Row>
        <Col id="Nonprofit__R1__col2" xl="6">
       <img className="img-fluid mb-xl-5" src={Nonprofit2} alt="Digital" style={styles.image} />
        </Col>
        <Col id="Nonprofit__R1__col1" xl="6">
        <h3 className="Nonprofit__h3">
        Google Ad Grants Nonprofit Advertising Program Details
        </h3>
       <p className="Nonprofit__p">
       Google Ad Grantees receive free AdWords advertising on Google search result pages. Ad Grantees participate with the following restrictions for their nonprofit advertising on AdWords:
       </p>
       <ul className='Nonprofit__ul'>
        <li>
        A daily AdWords budget set to $329, which is equivalent to about $10,000 USD per month
        </li>
        <li>
        Set a maximum cost-per-click (CPC) limit of $2.00 USD
        </li>
        <li>
        Approved nonprofit advertising accounts can only run keyword-targeted AdWords campaigns
        </li>
        <li>
        Ads can only appear on Google Search results pages
        </li>
        <li>
        Nonprofit advertisers can only run AdWords text ads
        </li>
       </ul>
        </Col>
      </Row>
      </div>
        </div>
    )
}

export default Nonprofit
