import React from 'react'
import './Hosting.css'
import { Row, Col } from 'reactstrap';
import Card from '../../Components/Cards/HostingCard/Card'
import Hosting0 from '../../Assets/Images/Hosting-Header.png'
import Hosting1 from '../../Assets/Images/Hosting1.png'
import Services from '../../Components/Services/Services'


function Hosting() {
    return (
      <div className="Hosting1">
      <div className = "Hosting__intro" >
      <h1 className = "Hosting__h1">Everything For Your  <br/> Hosting Needs</h1>
      <a href = "#What-is-Hosting">
      <img id = "Hosting__img" src={Hosting0} alt="Hosting art"/> </a>
      </div>
      <div id = "What-is-Hosting">
      </div>         
                <Services />
                <Row className="Hosting__row1" >
  <Col id="Hosting__R1__col1" xl="4">
         <img id = "Hosting__img__body" src={Hosting1} alt="Digital Advertising"/>
          </Col>
          <Col>
          <h4 className="Hosting__h4">
            <br/>
          What is digital Hosting?
          </h4>
          <p className="Hosting__p">
          Web hosting services are a type of Internet-based software that hosts websites for clients. 
          It offers the facilities required to create and maintain your site as well as makes it accessible on the World Wide Web. 
          Companies leverage these Hosting Services to provide an online presence with ease!
          </p>
          <h4 className="Hosting__h4">
          Our Hosting Maintenance Plan!
          </h4>
          <p className="Hosting__p">
          Our U.S.-based team is dedicated to providing the best hosting experience for your website needs, with quick turnaround times and worry-free support that you can trust! 
          Our maintenance service ensures success in an ever changing landscape of technology by keeping all aspects up-to date on a daily basis so our clients are never left behind.
          Your website is the face of your business and maintaining it takes work. That's were we become apart of your team for a monthly fee and a write off for your business.
  </p>
</Col>
 </Row>
<Card />
        </div>
    )
}

export default Hosting
