import React from 'react'
import './Orm.css'
import { Row, Col } from 'reactstrap';
import ORM1 from '../../Assets/Images/ORM1.jpg'
import ORM2 from '../../Assets/Images/ORM2.jpg'
import Services from '../../Components/Services/Services'

const styles = {
    image: {
        boxShadow: "5px 5px 20px -5px black",
        borderRadius: "25px",
    
    },
    }

function Orm() {
    return (
        <div className="Orm">
                <Services />
        <div className="Orm__background"> 
        <Row>
        <Col id="Orm__R1__col2" xl="6">
       <img className="img-fluid mb-xl-5" src={ORM2} alt="Digital" style={styles.image} />
        </Col>
        <Col id="Orm__R1__col1" xl="6">
        <h3 className="Orm__h3">
        Online Reputation Management
        </h3>
        <h4 className="Orm__h4">
        What Is Online Reputation Management?
        </h4>
        <p className="Orm__p">
        Whether your business is large or small — with one location or many — your customers are talking about you online. And the viral nature of today’s information can create or destroy your reputation in minutes.

A solid online reputation also has tremendous impact on your bottom line. Recent research by Reputation.com found that online-sourced sales for businesses who have ORM programs in place grew 24% faster than for those not actively engaged in ORM activities.

By engaging in essential ORM activities — managing online reviews, maintaining accurate business listings, engaging with local communities and target audiences on social media, conducting customer surveys and acting on feedback — you can help ensure your organization’s success in today’s digital business environment.


          </p>
        </Col>
      </Row>
        <Row>
        <Col id="Orm__R1__col1" xl="6">
        <h3 className="Orm__h3">
        ORM
        </h3>
       <p className="Orm__p">
        Stratton Terrace Marketing company will explain how ORM works and provides tips and strategies for getting started with an ORM program in your organization. You’ll learn:
        </p>
       <ul className='Orm__ul'>
        <li>
        What is Online Reputation Management?
        </li>
        <li>
        What are the three key components of ORM?
        </li>
        <li>
        How to launch an ORM program in your organization
        </li>
       </ul>
         </Col>
        <Col id="Orm__R1__col2" xl="4">
       <img className="img-fluid mb-xl-5" src={ORM1} alt="Digital Advertising"  style={styles.image} />
        </Col>
      </Row>
     
      </div>
        </div>
    )
}

export default Orm
