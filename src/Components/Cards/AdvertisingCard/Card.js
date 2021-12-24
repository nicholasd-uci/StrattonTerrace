import React from 'react'
import './Card.css'
import google from '../../../Assets/Images/New_card_img/google.png'
import Startup_web from '../../../Assets/Images/New_card_img/Startup_web.png'
import Professional_Web from '../../../Assets/Images/New_card_img//Professional_Web.png'
import Business from '../../../Assets/Images/New_card_img/Business.png'

function Card() {
    return (
        <>
                        <div className="cards__container">
            <div className="card">
                <img src={google} alt="" className="card__img" /> 

                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Google Advertising</h1>
                         <span className="card__price">$325.00/Mo</span>
                <ul>
                <span 
                style={{
                color: 'rgb(168, 148, 32)',
              }}>
                  We will guide you through and come up with a campaign structure <br></br>
                plan that fits your business goals. Below are the details for our monthly Plan. </span>
                <li>Google Partnership Access</li>
                <li>Our Personal Google Rep</li>
                <li>Keywords & Negative Keywords</li>
                <li>Weekly and/or Monthly Reports</li>
                <li 
              style={{
                fontSize: '10px',
                paddingBottom: '5px'
              }}>
                    (For budgets over $20,000 a fee of 15% is allocated to STM LLC)</li>
                </ul>
            <a href="https://checkout.square.site/merchant/MLZ8ZQY9BSZZC/checkout/MPF7NQF3NKTQ3ULZ273UX3XZ" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={Startup_web} alt="" className="card__img" /> 

                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Basic Hosting & <br/> Maintenance</h1>
                         <span className="card__price">$65.99/Mo</span>
                <ul>
                <li>Hosting Assistance</li>
                <li>Mo Maintenance Revisions</li>
                <li><b>Revisions: 1-2</b></li>
                <li>Monthly Consultation</li>
                <li>One: 1-Hour sessions</li>
                <li>Ecommerce Support</li>
                <li>Email Marketing Template</li>
                </ul>
            <a href="https://www.stmathlete.com/home" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                        </div>
                        <div className="cards__container">
                        <div className="card">
                <img src={Professional_Web} alt="" className="card__img" /> 

                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Advanced Hosting & <br/> Maintenance</h1>
                         <span className="card__price">$77.99/Mo</span>
                <ul>
                <li>Hosting Assistance</li>
                <li>Mo Maintenance Revisions</li>
                <li><b>Revisions: 3-4</b></li>
                <li>Monthly Consultation</li>
                <li>Two: 1-Hour sessions</li>
                <li>Ecommerce Support</li>
                <li>Email Marketing Template</li>
                </ul>
            <a href="https://www.stmathlete.com/home" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={Business} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Unlimited Hosting & <br/> Maintenance</h1>
                         <span className="card__price">$99.99/Mo</span>
                <ul>
                <li>Hosting Assistance</li>
                <li>Mo Maintenance Revisions</li>
                <li>Revisions: Unlimited</li>
                <li>Monthly Consultation</li>
                <li>Three: 1-Hour sessions</li>
                <li>Ecommerce Support</li>
                <li>Email Marketing Template</li>
                </ul>
            <a href="https://www.stmathlete.com/home" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                        </div>
                        </>

                        
    )
}

export default Card