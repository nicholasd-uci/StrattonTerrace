import React from 'react'
import './Website.css'
import { Row, Col } from 'reactstrap';
import Ecommerce1 from '../../Assets/Images/Ecommerce.jpg'
import Services from '../../Components/Services/Services'
import Card from '../../Components/NewCard/Card'


const Website = (props) => {
    return ( 
<div className = "Website" >
<Services />
<Row>
<Col id="Website__R1__col1" xl="4">
       <img className="img-fluid mb-xl-5" src={Ecommerce1} alt="Digital Advertising"/>
        </Col>
        <Col id="Website__R1__col2" xl="6">
        <h3 className="Website__h3">
        We Can Help you open your own E-commerce! 
        </h3>
        <h4 className="Website__h4">
        What is  Website?
        </h4>
        <p className="Website__p">
        E-commerce (electronic commerce) is the buying and selling of goods and services, or the transmitting of funds or data, over an electronic network, primarily the internet. These business transactions occur either as business-to-business (B2B), business-to-consumer (B2C), consumer-to-consumer or consumer-to-business.        </p>
        </Col>
       
      </Row>
<Card />
</div>
    );
};

export default Website
