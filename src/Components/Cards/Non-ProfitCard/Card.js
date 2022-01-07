import React from 'react'
import './Card.css'
import Personal from '../../../Assets/Images/New_card_img/Personal.png'
import Professional from '../../../Assets/Images/New_card_img//Professional.png'
import Athlete from '../../../Assets/Images/New_card_img//Athlete.png'
import Basic_Web from '../../../Assets/Images/New_card_img//Basic_Web.png'
import Startup_web from '../../../Assets/Images/New_card_img//Startup_web.png'
import Professional_Web from '../../../Assets/Images/New_card_img//Professional_Web.png'
import Elite from '../../../Assets/Images/New_card_img//Elite.png'
import Corporate from '../../../Assets/Images/New_card_img//Corporate.png'
import Business from '../../../Assets/Images/New_card_img//Business.png'

function Card() {
    return (
        <>
        <div className="cards__container">
            <div className="card">
                <img src={Personal} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Non-Profit 'CMO'</h1>
                         <span className="card__price">$350.00/hr</span>
                         <ul>
                <span 
                style={{
                color: 'rgb(168, 148, 32)',
              }}>
                  We are proud to be a Chief Marketing Operator for the non-profit sector. With 11 Years of experience in the non-profit field. 
                 We are here to be a part of your team, and will mold to your vision and achieve success together. </span>
                <li>Advertising Management & Hosting</li>
                <li>Social Media Management</li>
                <li>Directories Included</li>
                <li>Search Engine Optimization: Site</li>
                </ul>
            <a href="https://square.link/u/GTaDFodb" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={Personal} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Non-Profit 'Basic'</h1>
                         <span className="card__price">$875.00/Mo</span>
                         <ul>
                <span 
                style={{
                color: 'rgb(168, 148, 32)',
              }}>
                  This package is tailored to each non-profit and include's a  comprehensive plan on how to spearhead your marketing.  </span>
                <li>2 Social Media Channels</li>
                <li>Directories: Yes</li>
                <li>Ad Support: Two 1-Hour Consultation Session</li>
                <li><b><del>Hosting & Training: No</del></b></li>
                </ul>
            <a href="https://square.link/u/ELSiG43j" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={Personal} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Non-Profit 'Advance'</h1>
                         <span className="card__price">$1,700.00/Mo</span>
                         <ul>
                <span 
                style={{
                color: 'rgb(168, 148, 32)',
              }}>
                  This package is tailored to each non-profit and include's a  comprehensive plan on how to spearhead your marketing.  </span>
                <li>4 Social Media Channels</li>
                <li>Directories: Yes</li>
                <li>Full Ad Support</li>
                <li><b>Hosting & Training: Yes</b></li>
                </ul>
            <a href="https://square.link/u/si0oq37z" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                        </div>
                        </>

                        
    )
}

export default Card