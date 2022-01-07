import React from 'react'
import './Card.css'
import Gbusiness from '../../../Assets/Images/New_card_img/G-business.png'
import Logo_design from '../../../Assets/Images/New_card_img//Logo_design.png'
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
                <img src={Gbusiness} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">My Google Business</h1>
                         <span className="card__price">$200</span>
                <ul>
                <li>Account Setup</li>
                <li>Analytic Page Setup</li>
                <li>Site Setup</li>
                <li>We will also show you how to get a professional email address.</li>
                <br></br>
                </ul>
            <a href="https://square.link/u/nVedUB7w" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={Logo_design} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Logo Designs</h1>
                         <span className="card__price"> From $150</span>
                <ul>
                 <span 
                style={{
                color: 'rgb(168, 148, 32)',
              }}>
                  We will guide you through and come up with a campaign structure 
                plan that fits your business goals. Below are the details for our monthly Plan. </span>
                <li><b>$150.00</b> Basic Logo</li>
                <li><b>$200.00</b>Redesign </li>
                <li><b>$300.000</b>Small Business Logo </li>
                <li><b>$450.00</b> Company Logo</li>
                <li><b>$900.00</b>Trademark Logo </li>
                <br></br>
                </ul>
            <a href="https://square.link/u/zPKdllZa" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={Gbusiness} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Non-Contract Work</h1>
                         <span className="card__price">$125.00 / hr</span>
                <ul>
                <span 
                style={{
                color: 'rgb(168, 148, 32)',
              }}>
                  Affordable Hourly Rate for all of your frustration. Give us all the problem you are experiencing and we will bring the solution to the table.  </span>
                  <br></br>
                  <br></br>
                </ul>
            <a href="https://square.link/u/Ho2IYoda" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                        </div>
                        <div className="cards__container">
                        <div className="card">
                <img src={Gbusiness} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">My Google Business</h1>
                         <span className="card__price">$200</span>
                <ul>
                <li>Account Setup</li>
                <li>Analytic Page Setup</li>
                <li>Site Setup</li>
                <li>We will also show you how to get a professional email address.</li>
                </ul>
            <a href="https://square.link/u/nVedUB7w" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={Gbusiness} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">My Google Business</h1>
                         <span className="card__price">$200</span>
                <ul>
                <li>Account Setup</li>
                <li>Analytic Page Setup</li>
                <li>Site Setup</li>
                <li>We will also show you how to get a professional email address.</li>
                </ul>
            <a href="https://square.link/u/nVedUB7w" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                  
                        </div>
                      
                        </>

                        
    )
}

export default Card