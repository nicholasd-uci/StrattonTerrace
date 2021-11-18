import React from 'react'
import './Website.css'
import { Row, Col } from 'reactstrap';
import Website0 from '../../Assets/Images/website.png'
import Website1 from '../../Assets/Images/Website1.png'
import Services from '../../Components/Services/Services' 
import Card from '../../Components/NewCard/Card'


const Website = (props) => {
    return ( 
<div className = "Website1" >
    <div className = "Website__intro" >
    <h1 className = "Website__h1">Crafting Beautiful Websites <br/> That Keeps Your Visitors <br/>  Engaged</h1>
    <a href = "#What-is-Website">
    <img id = "Website__img" src={Website1} alt="website art"/> </a>
    </div>
    <div id = "What-is-Website">
    </div>
<Services />
<Row className="Website__row1" >
<Col id="Website__R1__col1" xl="4">
       <img id = "Website__img__body" src={Website0} alt="Digital Advertising"/>
        </Col>
        <Col>
        <h3 className="Website__h3">
        We Can Help you open your Website! 
        </h3>
        <h4 className="Website__h4">
        What is  Website?
        </h4>
        <p className="Website__p">
        Your website is an important part of your marketing strategy. If you're not careful, it can become outdated and ineffective in no time at all! That's why we here at Stratton Terrace Marketing offer services for building best websites that meet customers needs as well as budgets with our affordable packages starting under $29 per month (including domain name). So what are waiting? Get started now on taking control over how people find out about all those great products orservices available only through their preferred provider - contact us today so together let’s make sure they know exactly where to go next !!!        
        </p>
        </Col>
      </Row>
<Card />
</div>

    );
};

export default Website
