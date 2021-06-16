import React from 'react'
import { Row, Col } from 'reactstrap';
import './Solutions.css'
import website from '../../Assets/Icons/Website.png'
import Analytics from '../../Assets/Icons/Analytics.png'
import Email from '../../Assets/Icons/Email.png'
import Integration from '../../Assets/Icons/Integration.png'
import Optimization from '../../Assets/Icons/Optimization.png'
import Seo from '../../Assets/Icons/Seo.png'


function Solutions() {

    return (
      <div className="Solutions">
        <div className="Solutions__background"> 


       <Row>
        <Col id="Solutions__R1__col1" xl="4">
      <img className="Solutions__icons" src={website} alt="website"/>
        </Col>
        <Col id="Solutions__R1__col2" xl="4">
        <img className="Solutions__icons" src={Analytics} alt="Analytics"/>
        </Col>
        <Col id="Solutions__R1__col3" xl="4">
        <img className="Solutions__icons" src={Email} alt="Email"/>
        </Col>
      </Row>
      <Row>
        <Col id="Solutions__R2__col1" xl="4">
        <img className="Solutions__icons" src={Integration} alt="Integration"/>
        </Col>
        <Col id="Solutions__R2__col2" xl="4">
        <img className="Solutions__icons" src={Optimization} alt="Optimization"/>
        </Col>
        <Col id="Solutions__R2__col3" xl="4">
        <img className="Solutions__icons" src={Seo} alt="Seo"/>
        </Col>
      </Row>
   
      </div>
      </div>
    )
}

export default Solutions
