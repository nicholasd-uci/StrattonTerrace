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
          A web hosting service is a type of Internet hosting service that hosts websites for clients, i.e. it offers the facilities required for them to create 
          and maintain a site and makes it accessible on the World Wide Web. Companies providing web hosting services are sometimes called web hosts.
          </p>
          <h4 className="Hosting__h4">
          Our Hosting Maintenance has
          </h4>
          <p className="Hosting__p">
          24/7 online support. Prevention of malware, spam attacks and hacking. SSL certificate is installed and activated!
          </p>
          <p className="Hosting__p">
          Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor Lorem ipsum dolor
          </p>
        
          
        </Col>
        </Row>
                <Card />


      
        </div>
    )
}

export default Hosting
