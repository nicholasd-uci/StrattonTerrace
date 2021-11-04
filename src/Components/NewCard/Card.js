import React from 'react'
import './Card.css'
import Personal from './img/Personal.png'
import Professional from './img/Professional.png'
import Athlete from './img/Athlete.png'
import Basic_Web from './img/Basic_Web.png'
import Startup_web from './img/Startup_web.png'
import Professional_Web from './img/Professional_Web.png'
import Elite from './img/Elite.png'
import Corporate from './img/Corporate.png'
import Business from './img/Business.png'

function Card() {
    return (
        <>
        <div className="container">
            <div className="card">
                <img src={Personal} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Personal Landing Page</h1>
                         <span className="card__price">$249</span>
                <ul>
                <li><b>1 </b> Page Website</li>
                <li><b>2 </b>Stock Images</li>
                <li><b>1 </b> Made with WordPress</li>
                <li><b>1 </b> Contact/Query Form</li>
                <li>48 to 72 hours TAT</li>
                <li>Complete Deployment</li>
                <li><del><b>Mobile Responsive</b></del> </li>
                </ul>
            <a href="http://google.com/" target="_blank" rel="noreferrer"  className="card__button">ORDER</a>
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
            <a href="http://google.com/" target="_blank" rel="noreferrer"  className="card__button">ORDER</a>
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
            <a href="http://google.com/" target="_blank" rel="noreferrer"  className="card__button">ORDER</a>
             </div>
                </div>
                    </div>
                        </div>
                        <div className="container">
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
            <a href="http://google.com/" target="_blank" rel="noreferrer"  className="card__button">ORDER</a>
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
            <a href="http://google.com/" target="_blank" rel="noreferrer"  className="card__button">ORDER</a>
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
            <a href="http://google.com/" target="_blank" rel="noreferrer"  className="card__button">ORDER</a>
             </div>
                </div>
                    </div>
                        </div>
                        <div className="container">
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
            <a href="http://google.com/" target="_blank" rel="noreferrer"  className="card__button">ORDER</a>
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
            <a href="http://google.com/" target="_blank" rel="noreferrer"  className="card__button">ORDER</a>
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
            <a href="http://google.com/" target="_blank" rel="noreferrer"  className="card__button">ORDER</a>
             </div>
                </div>
                    </div>
                        </div>
                        </>

                        
    )
}

export default Card