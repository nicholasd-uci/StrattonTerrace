import React from 'react'
import './Ecommerce.css'
import { Row, Col } from 'reactstrap';
import Ecommerce0 from '../../Assets/Images/Ecommerce-header.png'
import Ecommerce1 from '../../Assets/Images/Ecommerce1.png'
import Services from '../../Components/Services/Services'



function Ecommerce() {
    return (
      <div className="Ecommerce1">
      <div className = "Ecommerce__intro" >
      <h1 className = "Ecommerce__h1">We Can Help you open<br/> your own E-commerce! </h1>
      <a href = "#What-is-Ecommerce">
      <img id = "Ecommerce__img" src={Ecommerce0} alt="Ecommerce art"/> </a>
      </div>
      <div id = "What-is-Ecommerce">
      </div>
      <Services />
  
      <Row className="Ecommerce__row1" >
  <Col id="Ecommerce__R1__col1" xl="4">
         <img id = "Ecommerce__img__body" src={Ecommerce1} alt="Digital Advertising"/>
          </Col>
          <Col>
          <h4 className="Ecommerce__h4">
          What is  E-commerce?
          </h4>
          <p className="Ecommerce__p">
          E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. 
          These business transactions occur either as business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer or consumer-to-business.        
          </p>
          <h4 className="Ecommerce__h4">
          Types of e-commerce
          </h4>
          <p className="Ecommerce__p">
          As commerce continues to evolve, so do the ways that it’s conducted. Following are the most traditional types of e-commerce models:
         </p>
         <ul className='Ecommerce__ul'>
        <li>
        Business to Consumer (B2C)
        </li>
        <li>
        Business to Business (B2B)
        </li>
        <li>
        Direct to Consumer (D2C)
        </li>
        <li>
        Consumer to Consumer (C2C)
        </li>
        <li>
        Consumer to Business (C2B)
        </li>
       </ul>
        </Col>
        </Row>
          </div>

    )
}

export default Ecommerce
