import React from 'react'
import './Website.css'
import { Row, Col } from 'reactstrap';
import Website0 from '../../Assets/Images/website.png'
import Website1 from '../../Assets/Images/Website1.png'
import Services from '../../Components/Services/Services' 
import Card from '../../Components/Cards/WebsiteCard/Card'


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
        We Will Help you to create a great Website! 
        </h3>
        <h4 className="Website__h4">
        What is  Website?
        </h4>
        <p className="Website__p">
        If you want to be competitive in today's market, your website is an absolute must have! 
        That’s why at Stratton Terrace Marketing we focus on building you a site that will showcase, sell, or display your business and what you do.
        <br></br>   
        <br></br>  
        <p>    
        It doesn't matter if you're a small or large company. We can help your brand stand out from the crowd, and drive more traffic to your website than you have ever had before! So what are waiting? 
        Get started now on taking control over how people find out you and what you have to offer - contact us today so we can help those know exactly where to go next!
        </p>
        </p>
        </Col>
      </Row>
<Card />
</div>

    );
};

export default Website
