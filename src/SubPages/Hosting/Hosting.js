import React from 'react'
import './Hosting.css'
import { Row, Col } from 'reactstrap';
import HostingPricing from '../../Components/Hosting_pricing/HostingPricing'
import Hosting1 from '../../Assets/Icons/Hosting.png'
import Maintenance from '../../Assets/Icons/Maintenance.png'
import Email from '../../Assets/Icons/Email.png'
import Ecommerce from '../../Assets/Icons/Ecommerce.png'
import Revisions from '../../Assets/Icons/Revisions.png'
import Consultation from '../../Assets/Icons/Consultation.png'
import Services from '../../Components/Services/Services'


function Hosting() {
    return (
        <div className="Hosting">
                <Services />
        <div className="Hosting__background">
        <HostingPricing />
        <h1><strong>HOSTING </strong></h1>
<div>
<Row className="Hosting__row">
        <Col id="Hosting__R1__col1" xl="4">
      <img className="Hosting__icons" src={Hosting1} alt="Hosting"/>
        <h3 className="Hosting__h3">
        Hosting
        </h3>
        <p>
        24/7 online support. Prevention of malware, spam attacks and hacking. SSL certificate installed and activated
        </p>
        </Col>
        <Col id="Hosting__R1__col2" xl="4">
        <img className="Hosting__icons" src={Maintenance} alt="Maintenance"/>
        <h3 className="Hosting__h3">
        Maintenance
        </h3>
        <p>
        Automatically update plugins, content and images. Guarantee live time 99.9%
        </p>
        </Col>
        <Col id="Hosting__R1__col3" xl="4">
        <img className="Hosting__icons" src={Email} alt="Email"/>
        <h3 className="Hosting__h3">
        Emails
        </h3>
        <p>
        Create up to 5 professional emails
     </p>
        </Col>
      </Row>
      <Row className="Hosting__row">
        <Col id="Hosting__R2__col1" xl="4">
        <img className="Hosting__icons" src={Ecommerce} alt="Ecommerce"/>
        <h3 className="Hosting__h3">
        Ecommerce
        </h3>
        <p>     
        Add 1 product a month on your online store. Connect product to merchant account (included)
        </p>
        </Col>
        <Col id="Hosting__R2__col2" xl="4">
        <img className="Hosting__icons" src={Revisions} alt="Revisions"/>
        <h3 className="Hosting__h3">
        Revisions
         </h3>
         <p>
         3 Content Revisions; Text, image, audio and video (monthly). *Content revisions expire at the end of every month
         </p>
        </Col>
        <Col id="Hosting__R2__col3" xl="4">
        <img className="Hosting__icons" src={Consultation} alt="Consultation"/>
        <h3 className="Hosting__h3">
        Consultation
        </h3>
        <p>
        30 minutes consultation once a month
          </p>
        </Col>
      </Row>
   
    </div>
       </div>
        </div>
    )
}

export default Hosting
