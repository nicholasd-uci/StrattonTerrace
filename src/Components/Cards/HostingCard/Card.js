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
               <li>Hosting Assistance,</li>
               <li>Mo Maintenance Revisions: <b>2</b></li>
                <li>Ecommerce Support</li>
                <li>Domain Support</li>
                <li>Fast Page Loading</li>
                <li>Domain Protection - SSL Certified</li>
                <li><del><b>Consultation Session's</b></del> </li>
                <li><del><b>Email Marketing Template</b></del> </li>
                </ul>
            <a href="https://square.link/u/gokgZ0bp" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={Basic_Web} alt="" className="card__img" /> 

                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Advanced Hosting & <br/> Maintenance</h1>
                         <span className="card__price">$44.99/Mo</span>
                <ul>
               <li>Hosting Assistance,</li>
               <li>Mo Maintenance Revisions: <b>5</b></li>
               <li>Mo Consultation: Two 30-Min Session </li>
                <li>Ecommerce Support</li>
                <li>Domain Support</li>
                <li>Domain Protection - SSL Certified</li>
                <li><b>Email Marketing Template (1)</b></li>
                </ul>
            <a href="https://square.link/u/fuIFusUW" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                        </div>
                        <div className="cards__container">
                        <div className="card">
                <img src={Basic_Web} alt="" className="card__img" /> 

                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Full Support Hosting & <br/> Maintenance</h1>
                         <span className="card__price">$99.99/Mo</span>
                <ul>
               <li>Hosting Assistance,</li>
                <li>Mo Maintenance Revisions: <b>10</b></li>
                <li>Mo Consultation: Two 1-Hr Session </li>
                <li>Ecommerce Support</li>
                <li>Domain Support</li>
                <li>Domain Protection - SSL Certified</li>
                <li><b>Email Marketing Template (2)</b></li>
                </ul>
            <a href="https://square.link/u/4Dw0QGRY" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={Basic_Web} alt="" className="card__img" /> 

                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">eCommerce Hosting & <br/> Maintenance</h1>
                         <span className="card__price">$299.99/Mo</span>
                <ul>
               <li>Hosting Assistance,</li>
                <li>Mo Maintenance Revisions: <b>30</b></li>
                <li>Mo Consultation: Three 1-Hr Session </li>
                <li>Ecommerce Support</li>
                <li>IT Support & Mobile Support</li>
                <li>Domain Protection - SSL Certified</li>
                </ul>
            <a href="https://square.link/u/UWyFUk2f" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                        </div>
                        </>

                        
    )
}

export default Card