import React from 'react'
import './Card.css'
import Basic_Web from '../../../Assets/Images/New_card_img//Basic_Web.png'
import Startup_web from '../../../Assets/Images/New_card_img//Startup_web.png'
import Professional_Web from '../../../Assets/Images/New_card_img//Professional_Web.png'
import Business from '../../../Assets/Images/New_card_img//Business.png'

function Card() {
    return (
        <>
       
                        <div className="cards__container">
            <div className="card">
                <img src={Basic_Web} alt="" className="card__img" /> 

                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Starter Hosting & <br/> Maintenance</h1>
                         <span className="card__price">$29.99/Mo</span>
                <ul>
                <li>Hosting Assistance</li>
                <li>Domain Protection - SSL Certified</li>
                <li>Domain Support</li>
                <li>Fast Page Loading</li>
                <li>Ecommerce Support</li>
                <li><del><b>Revisions</b></del> </li>
                <li><del><b>Email Marketing Template</b></del> </li>
                </ul>
            <a href="https://www.stmathlete.com/home" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
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