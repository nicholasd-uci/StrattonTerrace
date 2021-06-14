import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import './Solutions.css'
import IMG12 from '../../Assets/Images/IMG12.jpg'


function Solutions() {

    return (
      <div className="Solutions">
        <div className="Solutions__background"> 
        <Container>
       <Row>
        <Col xs="6">.col-6</Col>
        <Col xs="6">
        <img id="IMG12" src={IMG12} alt="Digital marketing"/>
        </Col>
      </Row>
      </Container>
      </div>
      </div>
    )
}

export default Solutions
