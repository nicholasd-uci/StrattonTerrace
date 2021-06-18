import React from 'react'
import './ADS.css'
import { Row, Col } from 'reactstrap';
import DigitalAdvertising from '../../Assets/Images/DigitalAdvertising.jpg'
import Digital from '../../Assets/Images/DigitalAdvertising2.jpg'
 
const styles = {
image: {
    boxShadow: "5px 5px 20px -5px black",
    borderRadius: "25px",

},
}

function Ads() {
    return (
        <div className="ads">
        <div className="ads__background"> 
        <Row>
        <Col id="ads__R1__col1" xl="6">
        <h3 className="ads__h3">
        We Can Help you Drive More Clients To Your Business! 
        </h3>
        <h4 className="ads__h4">
        What is digital advertising?
        </h4>
        <p className="ads__p">
            Digital advertising spans across channels, including email, display ads, App Store, mobile advertising, SEM, and paid social ads. Learn about the progression of digital advertising and how you can reach larger audiences in real time to drive sales.
        </p>
        </Col>
        <Col id="ads__R1__col2" xl="4">
       <img className="img-fluid mb-xl-5" src={DigitalAdvertising} alt="Digital Advertising"  style={styles.image} />
        </Col>
      </Row>
      <Row>
        <Col id="ads__R1__col2" xl="6">
       <img className="img-fluid mb-xl-5" src={Digital} alt="Digital" style={styles.image} />
        </Col>
        <Col id="ads__R1__col1" xl="6">
        <h3 className="ads__h3">
        Types of digital advertising
        </h3>
        <p className="ads__p">
        Today, 80 percent of shoppers start their product research online. Many go to their favorite search engine, like Google, Bing, or Yahoo!, to get started. With search advertising, your company can promote your products and services on these platforms.   
       </p>
       <p className="ads__p">
       Companies can also take advantage of digital advertising on social media networks, which include:
       </p>
       <ul className='ads__ul'>
        <li>
        Facebook
        </li>
        <li>
        Instagram
        </li>
        <li>
        LinkedIn
        </li>
        <li>
        Twitter
        </li>
        <li>
        Pinterest
        </li>
        <li>
        TikTok
        </li>
       </ul>
        </Col>
      </Row>
      </div>
        </div>
    )
}

export default Ads
