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
                         <span className="card__price">$$300.00/hr</span>
                         <ul>
                <span 
                style={{
                color: 'rgb(168, 148, 32)',
              }}>
                  We are proud to be a Chief Marketing Operator for the non-profit sector. With 11 Years of experience in the non-profit field. 
                 We are here to be a part of your team, and will mold to your vision and achieve success together. </span>
                <li>Advertising Management</li>
                <li>Social Media</li>
                <li>Directories</li>
                <li>Search Engine Optimization</li>
                </ul>
            <a href="https://www.stmathlete.com/home" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={Professional} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Professional Landing Page</h1>
                         <span className="card__price">$600</span>
                <ul>
                <li> <b>5 </b> Page Website</li>
                <li>CMS / Admin Panel Support</li>
                <li><b>8 </b> Stock Images</li>
                <li>Made with WordPress</li>
                <li>FREE Google Friendly Sitemap</li>
                <li>Complete Deployment</li>
                <li>Mobile Responsive will be Additional $200*</li>
                </ul>
            <a href="https://www.stmathlete.com/home" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={Athlete} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Athlete Recruiting Page</h1>
                         <span className="card__price">$2,000</span>
                <ul>
                <li><b>5 </b>Stock Photos</li>
                <li><b>10+ </b>Page Website</li>
                <li><b>3 </b>Banner Design</li>
                <li>Made with WordPress</li>
                <li>FREE Google Friendly Sitemap</li>
                <li>Complete Deployment</li>
                <li>Mobile Responsive will be Additional $200*</li>
                </ul>
            <a href="https://www.stmathlete.com/home" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
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
                         <h1 className="card__title">Basic Web Pack</h1>
                         <span className="card__price">$350</span>
                <ul>
                <li><b>2 </b> Stock Images</li>
                <li><b>1 </b>Page Website</li>
                <li><b>1 </b> Made with WIX</li>
                <li><b>1 </b> Contact/Query Form</li>
                <li>48 to 72 hours TAT</li>
                <li>Complete Deployment</li>
                <li><del><b>Mobile Responsive</b></del> </li>
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
                         <h1 className="card__title">Startup Web Pack</h1>
                         <span className="card__price">$1,350</span>
                <ul>
                <li> <b>5 </b> Stock Photos</li>
                <li><b>3 </b> Page Website</li>
                <li><b>3 </b> Banner Design</li>
                <li>Made with WIX</li>
                <li>FREE Google Friendly Sitemap</li>
                <li>Complete Deployment</li>
                <li>Mobile Responsive will be Additional $200*</li>
                </ul>
            <a href="https://www.stmathlete.com/home" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={Professional_Web} alt="" className="card__img" /> 

                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Professional Web Pack</h1>
                         <span className="card__price">$2,150</span>
                <ul>
                <li><b>5 </b>Page Website</li>
                <li>CMS / Admin Panel Support</li>
                <li><b>8 </b>Stock Images</li>
                <li>Made with WIX</li>
                <li>FREE Google Friendly Sitemap</li>
                <li>Complete Deployment</li>
                <li>Mobile Responsive will be Additional $200*</li>
                </ul>
            <a href="https://www.stmathlete.com/home" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                        </div>
                        <div className="cards__container">
            <div className="card">
                <img src={Elite} alt="" className="card__img" /> 

                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Elite Web Pack</h1>
                         <span className="card__price">$450</span>
                <ul>
                <li><b>1 </b> Page Website</li>
                <li><b>2 </b>Stock Images</li>
                <li><b>1 </b> Made with WordPress</li>
                <li><b>1 </b> Contact/Query Form</li>
                <li>48 to 72 hours TAT</li>
                <li>Complete Deployment</li>
                <li><del><b>Mobile Responsive</b></del> </li>
                </ul>
            <a href="https://www.stmathlete.com/home" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={Corporate} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Corporate Web pack</h1>
                         <span className="card__price">$1,550</span>
                <ul>
                <li> <b>10 </b> Page Website</li>
                <li>CMS / Admin Panel Support</li>
                <li><b>8 </b> Stock Images</li>
                <li>Made with WordPress</li>
                <li>FREE Google Friendly Sitemap</li>
                <li>Complete Deployment</li>
                <li>Mobile Responsive will be Additional $200*</li>
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
                         <h1 className="card__title">Business Web Pack</h1>
                         <span className="card__price">$2,450</span>
                <ul>
                <li><b>5 </b>Stock Photos</li>
                <li><b>10+ </b>Page Website</li>
                <li><b>3 </b>Banner Design</li>
                <li>Made with WordPress</li>
                <li>FREE Google Friendly Sitemap</li>
                <li>Complete Deployment</li>
                <li>Mobile Responsive will be Additional $200*</li>
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