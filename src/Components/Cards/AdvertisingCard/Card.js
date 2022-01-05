import React from 'react'
import './Card.css'
import google from '../../../Assets/Images/New_card_img/google.png'
import Startup_web from '../../../Assets/Images/New_card_img/Startup_web.png'
import Professional_Web from '../../../Assets/Images/New_card_img//Professional_Web.png'

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
                  We will guide you through and come up with a campaign structure 
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
                <img src={google} alt="" className="card__img" /> 

                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Social Media Advertising</h1>
                         <span className="card__price">$225.00 - $1,250.00</span>
                <ul>
                <span 
                style={{
                color: 'rgb(168, 148, 32)',
              }}>
               We will bring you a holistic approach and a affordable spend per day. We can help you leverage the every day social media app's and convert those people to your services or goods being sold.
 </span>
 <li> Facebook - Instagram </li>
                <li> LinkedIn- TikTok - YouTube </li>
                <li>Hulu & Peacock Ads</li>
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
                <img src={google} alt="" className="card__img" /> 

                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Yelp Advertising</h1>
                         <span className="card__price">$325.00/Mo</span>
                <ul>
                <span 
                style={{
                color: 'rgb(168, 148, 32)',
              }}>
                 We have the best partnership and support from Yelp.com. We will help your business take advantage of key promotions and leverage your business info to reach a wider audience. 
</span>
                <li>Yelp Partnership Access</li>
                <li>Our Personal Yelp Rep</li>
                <li>Keywords & Negative Keywords</li>
                <li>Weekly and/or Monthly Reports</li>
                <li 
              style={{
                fontSize: '10px',
                paddingBottom: '5px'
              }}>
                    (For budgets over $20,000 a fee of 9% is allocated to STM LLC)</li>
                </ul>
            <a href="https://checkout.square.site/merchant/MLZ8ZQY9BSZZC/checkout/MPF7NQF3NKTQ3ULZ273UX3XZ" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                        </div>
                        </>

                        
    )
}

export default Card