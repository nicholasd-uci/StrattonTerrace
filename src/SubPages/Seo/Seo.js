import React from 'react'
import './Seo.css'
import { Row, Col } from 'reactstrap';
import Seo1 from '../../Assets/Images/Seo1.jpg'
import Seo2 from '../../Assets/Images/Seo2.jpg'

const styles = {
    image: {
        boxShadow: "5px 5px 20px -5px black",
        borderRadius: "25px",
    
    },
    }

function SEO() {
    return (
        <div className="SEO">
        <div className="SEO__background"> 
        <Row>
        <Col id="SEO__R1__col2" xl="6">
       <img className="img-fluid mb-xl-5" src={Seo1} alt="Digital" style={styles.image} />
        </Col>
        <Col id="SEO__R1__col1" xl="6">
        <h3 className="SEO__h3">
        Search Engine Optimization
        </h3>
        <h4 className="SEO__h4">
        What Is Search Engine Optimization?
        </h4>
        <p className="SEO__p">
        Search Engine Optimization is highly needed skill to have when marketing on the Google Search Engine. We have an array of ideas that bring highly qualified web search (Google, bing, yahoo) 
        and social media traffic. Implementing SEO tools for your business will develop organic lead generation. It may be more sales for your e-commerce, a new client for your Law office or another 
        patient at your dentistry. By the way.. What is SEO? Search Engine Optimization (according to wikipedia) is the process of affecting the visibility of a website or a web page in a web search 
        engines’ unpaid results—often referred to as “natural”, “organic”, or “earned” results. In general, the earlier (or higher ranked on the search results page), and more frequently a site appears 
        in the search results list, the more visitors it will receive from the search engine’s users; these visitors can then be converted into customers.
        </p>
        </Col>
      </Row>
        <Row>
        <Col id="SEO__R1__col1" xl="6">
        <h3 className="SEO__h3">
        SEO
        </h3>
       <p className="SEO__p">
        Stratton Terrace Marketing company will ensure that customers will receive:
        </p>
       <ul className='SEO__ul'>
        <li>
        Quality of traffic. You can attract all the visitors in the world, but if they're coming to your site because Google tells them you're a resource for Apple computers when really you're a farmer selling apples, that is not quality traffic. Instead, you want to attract visitors who are genuinely interested in the products that you offer.

        </li>
        <li>
        Quantity of traffic. Once you have the right people clicking through from those search engine results pages (SERPs), more traffic is better.

        </li>
        <li>
        Organic results. Ads make up a significant portion of many SERPs. Organic traffic is any traffic that you don't have to pay for.

        </li>
       </ul>
         </Col>
        <Col id="SEO__R1__col2" xl="4">
       <img className="img-fluid mb-xl-5" src={Seo2} alt="Digital Advertising"  style={styles.image} />
        </Col>
      </Row>
     
      </div>
        </div>
    )
}

export default SEO
