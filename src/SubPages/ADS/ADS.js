import React from 'react'
import './ADS.css'
import { Row, Col } from 'reactstrap';
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
          Digital advertising is the most popular form of marketing in today's world, and it can be found on many different channels. 
          Email ads will bring your message to specific audiences while also targeting them by interest or location based off their browsing 
          history when they opened emails previously from companies like yours too! There are even apps for smartphones that allow people with common 
          interests organize themselves so you'll know what type of content would best suit all tastes - which could lead down an interesting rabbit hole if left unchecked.
          </p>
          <h4 className="Ads__h4">
          Types of digital advertising
          </h4>
          <h4 className="Ads__h4">
          Companies can also take advantage of digital advertising on Ads media networks, which include:
          </h4>
          <ul className='Ads__ul'>
        <li>
        Facebook
        </li>
        <li>
        Instagram
        </li>
        <li>
        LinkedIn
        </li>
        <li>
        Twitter
        </li>
        <li>
        Pinterest
        </li>
        <li>
        TikTok
        </li>
       </ul>
        </Col>
        </Row>
          </div>
   )
}

export default Ads
