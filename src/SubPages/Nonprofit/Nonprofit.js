import React from 'react'
import './Nonprofit.css'
import { Row, Col } from 'reactstrap';
import Card from '../../Components/Cards/Non-ProfitCard/Card'
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
        501(c)(3) nonprofit organizations can now maximize their AdWords results for free! Our experienced team has gone through this process many times and understands what it takes to get the approval, 
        run the AdWords, and achieve success within Google. Did ya’ll know that your non-profit qualifies for <b>FREE AD MONEY?</b>  
        <br></br>
        <br></br>
        We can help guide you through the process and make sure that you have an Ad budget that is solely for the purpose of growing your non-profit name. 
        The money that you would have spent on ads can now be allocated elsewhere in your business.</p>
        <h4 className="Nonprofit__h4">
        Google Ad Grants Nonprofit Advertising Program Details:
        </h4>
        <p className="Nonprofit__p">
        Google Ad Grantees receive free advertising on Google search result pages. They participate with the following restrictions for their nonprofit advertising:
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
      <Card />
        </div>
    )
}

export default Nonprofit
