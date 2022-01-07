import React from 'react'
import './Card.css'
import Personal from '../../../Assets/Images/New_card_img/Personal.png'
import Professional from '../../../Assets/Images/New_card_img//Professional.png'
import Basic_Web from '../../../Assets/Images/New_card_img//Basic_Web.png'
import Startup_web from '../../../Assets/Images/New_card_img//Startup_web.png'
import Professional_Web from '../../../Assets/Images/New_card_img//Professional_Web.png'
import Business from '../../../Assets/Images/New_card_img//Business.png'

function Card() {
    return (
        <>
        <div className="cards__container">
            <div className="card">
                <img src={Personal} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Professional Landing Page</h1>
                         <span className="card__price">$350.00</span>
                <ul>
                <li><b>1 </b> Professional Landing Page</li>
                <li><b>2 </b>Stock Images</li>
                <li><b>1 </b> Contact/Query Form</li>
                <li> Done form 48 to 72 hours </li>
                <li>Complete Deployment</li>
                       <li 
              style={{
                fontSize: '10px',
                paddingBottom: '5px'
              }}>
                Mobile Responsive will be an Additional $200*</li>
                </ul>
            <a href="https://square.link/u/40e1H1nG" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={Basic_Web} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Website Redesign</h1>
                         <span className="card__price">$500.00</span>
                <ul>
                <li><b>5 Pages</b> Complete Front-End Redesign</li>
                <li><b>$50</b>additional per page</li>
                <li>WordPress</li>
                <li>WIX</li>
                <li>Shopify</li>
                <li>GoDaddy</li>
                       <li 
              style={{
                fontSize: '10px',
                paddingBottom: '5px'
              }}>
                Mobile Responsive will be an Additional $200*</li>
                </ul>
            <a href="https://square.link/u/gxz2GaoI" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={Startup_web} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Complete Shopify Redesign</h1>
                         <span className="card__price">$750.00</span>
                <ul>
                <li><b>5 Pages</b> Complete Front-End Redesign</li>
                <li><b>$50</b>additional per page</li>
                <li>Back-End Setup</li>
                <li>48 to 72 hours TAT</li>
                <li>Complete Deployment</li>
                       <li 
              style={{
                fontSize: '10px',
                paddingBottom: '5px'
              }}>
                Mobile Responsive will be an Additional $200*</li>
                </ul>
            <a href="https://square.link/u/KCPAjM4Y" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                        </div>
                        <div className="cards__container">
                        <div className="card">
                <img src={Professional} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Wix Pack</h1>
                         <span className="card__price">$575.00</span>
                <ul>
                <li><b>1 </b> Page Website</li>
                <li><b>2 </b>Stock Images</li>
                <li><b>1 </b> Made with WIX</li>
                <li><b>1 </b> Contact/Query Form</li>
                <li>48 to 72 hours TAT</li>
                <li>Complete Deployment</li>
                <li 
              style={{
                fontSize: '10px',
                paddingBottom: '5px'
              }}>
                Mobile Responsive will be an Additional $200*</li>
                </ul>
            <a href="https://square.link/u/NoX8ckBe" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={Professional_Web} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Wix Startup</h1>
                         <span className="card__price">$850.00</span>
                <ul>
                <li><b>3 </b> Page Website</li>
                <li><b>5 </b>Stock Photos</li>
                <li><b>3 </b> Banner Design</li>
                <li>Made with WIX</li>
                <li>FREE Google Friendly Sitemap</li>
                <li>Complete Deployment</li>
                <li 
              style={{
                fontSize: '10px',
                paddingBottom: '5px'
              }}>
                Mobile Responsive will be an Additional $200*</li>
                </ul>
            <a href="https://square.link/u/nWh8JkT6" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={Business} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">WordPress Design</h1>
                         <span className="card__price">$1,250.00</span>
                <ul>
                <li><b>5 </b> Page Website</li>
                <li>Complete WordPress Design</li>
                <li><b>1 </b> Made with WordPress</li>
                <li>Back-End Setup</li>
                <li>48 to 72 hours TAT</li>
                <li>Complete Deployment</li>
                       <li 
              style={{
                fontSize: '10px',
                paddingBottom: '5px'
              }}>
                Mobile Responsive will be an Additional $200*</li>
                </ul>
            <a href="https://square.link/u/zuOasHWC" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                        </div>
                       
                        </>

                        
    )
}

export default Card