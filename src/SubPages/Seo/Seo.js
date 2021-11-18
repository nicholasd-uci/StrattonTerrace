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
          Search Engine Optimization is highly needed skill to have when marketing on the Google Search Engine. We have an array of ideas that bring highly qualified web search (Google, bing, yahoo) 
        and social media traffic. Implementing SEO tools for your business will develop organic lead generation. It may be more sales for your e-commerce, a new client for your Law office or another 
        patient at your dentistry. By the way.. What is SEO? Search Engine Optimization (according to wikipedia) is the process of affecting the visibility of a website or a web page in a web search 
        engines’ unpaid results—often referred to as “natural”, “organic”, or “earned” results. In general, the earlier (or higher ranked on the search results page), and more frequently a site appears 
        in the search results list, the more visitors it will receive from the search engine’s users; these visitors can then be converted into customers.
          </p>
          <h4 className="Seo__h4">
          SEO
          </h4>
          <p className="Seo__p">
          <strong>As commerce continues to evolve, so do the ways that it’s conducted. Following are the most traditional types of e-commerce models:<br/><br/> </strong>
          Quality of traffic. You can attract all the visitors in the world, but if they're coming to your site because Google tells them you're a resource 
          for Apple computers when really you're a farmer selling apples, that is not quality traffic. Instead, you want to attract visitors who are genuinely
          interested in the products that you offer. <br/><br/> 
          Your Quantity of traffic. Once you have the right people clicking through from those search engine results pages (SERPs), more traffic is better.<br/>  <br/> 
          Organic results. Ads make up a significant portion of many SERPs. Organic traffic is any traffic that you don't have to pay for.
          </p>
        </Col>
        </Row>
          </div>

    )
}

export default SEO
