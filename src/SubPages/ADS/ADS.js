import React from 'react'
import './ADS.css'
import { Row, Col } from 'reactstrap';
import Card from '../../Components/Cards/AdvertisingCard/Card'
import Ads0 from '../../Assets/Images/Ads-Header.png'
import Ads1 from '../../Assets/Images/Ads-2.png'
import Services from '../../Components/Services/Services'


function Ads() {
    return (
      <div className="Ads1">
      <div className = "Ads__intro" >
      <h1 className = "Ads__h1">We Can Help you Drive <br/> More Clients To Your Business</h1>
      <a href = "#What-is-Ads">
      <img id = "Ads__img" src={Ads0} alt="Ads art"/> </a>
      </div>
      <div id = "What-is-Ads">
      </div>
      <Services />
      <Row className="Ads__row1" >
  <Col id="Ads__R1__col1" xl="4">
         <img id = "Ads__img__body" src={Ads1} alt="Digital Advertising"/>
          </Col>
          <Col>
          <h4 className="Ads__h4">
            <br/>
          What is digital advertising?
          </h4>
          <p className="Ads__p">
          Digital advertising is the most popular form of marketing in today's world, and it can be your best tool to leverage. 
          Email ads will only bring you so far and so many leads! It targets a specific audiences while missing out on a majority of people who actually want your product or service.  
          This is were we come in and help you get more people to your website or certain products. 
          We guarantee that we will bring you to the top of most advertising channel's and get people to notice your business. 
          <br></br>
          <br></br>
          Call us today and take advantage of our team's knowledge! 
          </p>
        </Col>
        </Row>
        <Card />
          </div>
   )
}

export default Ads
