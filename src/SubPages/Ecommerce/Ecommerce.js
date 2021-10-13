import React from 'react'
import './Ecommerce.css'
import { Row, Col } from 'reactstrap';
import Ecommerce1 from '../../Assets/Images/Ecommerce.jpg'
import Ecommerce2 from '../../Assets/Images/Ecommerce2.jpg'
import Services from '../../Components/Services/Services'

const styles = {
    image: {
        boxShadow: "5px 5px 20px -5px black",
        borderRadius: "25px",
    
    },
    }
    

function Ecommerce() {
    return (
        <div className="Ecommerce">
      <Services />
        <div className="Ecommerce__background"> 
        <Row>
        <Col id="Ecommerce__R1__col1" xl="6">
        <h3 className="Ecommerce__h3">
        We Can Help you open your own E-commerce! 
        </h3>
        <h4 className="Ecommerce__h4">
        What is  E-commerce?
        </h4>
        <p className="Ecommerce__p">
        E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. These business transactions occur either as business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer or consumer-to-business.        </p>
        </Col>
        <Col id="Ecommerce__R1__col2" xl="4">
       <img className="img-fluid mb-xl-5" src={Ecommerce1} alt="Digital Advertising"  style={styles.image} />
        </Col>
      </Row>
      <Row>
        <Col id="Ecommerce__R1__col2" xl="6">
       <img className="img-fluid mb-xl-5" src={Ecommerce2} alt="Digital" style={styles.image} />
        </Col>
        <Col id="Ecommerce__R1__col1" xl="6">
        <h3 className="Ecommerce__h3">
        Types of e-commerce
        </h3>
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
        </div>

    )
}

export default Ecommerce
