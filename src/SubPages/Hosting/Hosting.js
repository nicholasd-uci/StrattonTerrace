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
          Web hosting services are a type of Internet-based software that hosts websites for clients, i.e., 
          it offers the facilities required to create and maintain your site as well as makes it accessible on World Wide Web. 
          Companies providing these typesHostgator Hosting Services provide web shelf space so you can have an online presence with ease!.
          </p>
          <h4 className="Hosting__h4">
          Our Hosting Maintenance å
          </h4>
          <p className="Hosting__p">
          Our U.S.-based team is dedicated to providing the best hosting experience for your website needs, with quick turnaround times and worry-free support that you can trust! 
          Our maintenance service ensures success in an ever changing landscape of technology by keeping all aspects up-to date on a daily basis so we never leave our clients behind again.
<br/><br/>
We know how important it is that every business has their own unique look & feel - which led us down this path years ago at Website Designers Inc., 
where each project became more than just building websites but crafting experiences around each client’s personality or mission statement through branding/content strategy initiatives like.
Your website is the face of your business. It reflects what you want to be seen as, and it needs to look good in order for that message or image portrayalation work! 
There are many ways people can go about making their sites more robust (SEO...) But if there's one thing we know how too well at Web Designs On The Go... It’s creating websites with long lasting power-ups so they don't need constant maintenance anymore; because when these companies invest time
          </p>
</Col>
 </Row>
<Card />
        </div>
    )
}

export default Hosting
