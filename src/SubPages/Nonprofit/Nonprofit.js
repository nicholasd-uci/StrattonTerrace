import React from 'react'
import './Nonprofit.css'
import { Row, Col } from 'reactstrap';
import Nonprofit0 from '../../Assets/Images/Nonprofit-header.png'
import Nonprofit1 from '../../Assets/Images/Nonprofit1.png'
import Services from '../../Components/Services/Services'


function Nonprofit() {
    return (
        <div className="Nonprofit">

    <div className = "Nonprofit__intro" >
    <h1 className = "Nonprofit__h1">Non Profit Advertising 501(C)(3)</h1>
    <a href = "#What-is-Nonprofit">
    <img id = "Nonprofit__img" src={Nonprofit0} alt="Nonprofit art"/> </a>
    </div>
    <div id = "What-is-Nonprofit">
    </div>
                <Services />


                <Row className="Nonprofit__row1" >
<Col id="Nonprofit__R1__col1" xl="4">
       <img id = "Nonprofit__img__body" src={Nonprofit1} alt="Digital Advertising"/>
        </Col>
        <Col>
  
        <h4 className="Nonprofit__h4">
        What Is Non Profit Advertising?
        </h4>
        <p className="Nonprofit__p">
        We maximize AdWords results for many approved Google Grantees and continue to help qualified 501(c)(3) organizations apply for approval. 
        Our experienced Google Grant experts have gone through this process many times and understand what it takes to get approval and achieve success with nonprofit advertising.
        Did you know that your 501(c)(3) organization qualify for $10,000 per month in FREE nonprofit advertising at Google?  </p>
        <h4 className="Nonprofit__h4">
        Google Ad Grants Nonprofit Advertising Program Details
        </h4>
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
    )
}

export default Nonprofit
