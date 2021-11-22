import React from 'react'
import './Seo.css'
import { Row, Col } from 'reactstrap';
import Seo0 from '../../Assets/Images/Seo-Header.png'
import Seo1 from '../../Assets/Images/Seo1.png'
import Services from '../../Components/Services/Services'



function SEO() {
    return (

      <div className="Seo1">
      <div className = "Seo__intro" >
      <h1 className = "Seo__h1">Search Engine Optimization! </h1>
      <a href = "#What-is-Seo">
      <img id = "Seo__img" src={Seo0} alt="Seo art"/> </a>
      </div>
      <div id = "What-is-Seo">
      </div>
      <Services />
  
      <Row className="Seo__row1" >
  <Col id="Seo__R1__col1" xl="4">
         <img id = "Seo__img__body" src={Seo1} alt="Digital Advertising"/>
          </Col>
          <Col>
          <h4 className="Seo__h4">
          What Is Search Engine Optimization?
          </h4>
          <p className="Seo__p">
          Search Engine Optimization is the process of getting your website ranked high in searches. SEO can be done by utilizing tools like Google Adwords, 
          Bing Ads or Yahoo! Affiliates to generate organic traffic - this means when someone clicks on one ad banner and then visits another site without knowing there was 
          any connection between them at all; it could be due their own curiosity though because people love exploring new things online (so don't put too much pressure!). 
          Implementing these types of program would likely increase sales for an e-commerce store since more customers will find what they're looking for through search engines 
          rather than browsing around aimlessly with no intention.
          </p>
          <h4 className="Seo__h4">
          SEO
          </h4>
          <p className="Seo__p">
          <strong>The most traditional types of e-commerce models are broken down into categories that have been around for decades. 
What’s old is new again, as the rise in online shopping continues to evolve with time and technology! Here's how you can identify which type your company falls under:<br/><br/> </strong>
Quality of traffic is important. If you can attract all the visitors in world, but they're coming to your site because Google told them about how great it will be for Apple computers when 
really what we have here are farmers selling apples - not so much quality being offered! Instead look at attracting people who want our products and services instead. <br/><br/> 
The more traffic you get, the better off your site will be. If those people clicking through from SERPs are qualified as visitors and not just bots or crawlers then that's even better!<br/>  <br/> 
Organic results are more satisfying. Ads make up a significant portion of many SERPs, but no more so than with paid sites and organic traffic goes entirely unpurchased by advertisers making this form of web 
browsing truly free for everyone!
          </p>
        </Col>
        </Row>
          </div>

    )
}

export default SEO
