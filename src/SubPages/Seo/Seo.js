import React from 'react'
import './Seo.css'
import { Row, Col } from 'reactstrap';
import Card from '../../Components/Cards/SeoCard/Card'
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
          Search Engine Optimization is the process of getting your website ranked in the top when being searched. SEO can be done by utilizing tools like Google Ad-words, 
          Bing Ads, or social media! This can help generate organic traffic - this means when someone clicks using your key words it will relate it to your page.
          Implementing these types of program would likely increase sales for an e-commerce store since more customers will find what they're looking for through search engines 
          rather than browsing around aimlessly with no intention.
          </p>
          <h4 className="Seo__h4">
          SEO
          </h4>
          <p className="Seo__p">
          <strong>The most traditional types of e-commerce models are broken down into categories that have been around for decades. 
What’s old is new again, as the rise in online shopping continues to evolve with time and technology! The way technology grows is by learning over time and finding new ways to improve. With our SEO packages you can make sure that your company is always keeping it's branding up to date.<br/><br/> </strong>
          </p>
        </Col>
        </Row>
        <Card />
          </div>

    )
}

export default SEO
