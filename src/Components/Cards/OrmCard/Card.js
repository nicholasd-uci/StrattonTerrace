import React from 'react'
import './Card.css'
import Gbusiness from '../../../Assets/Images/New_card_img/G-business.png'
import Logo_design from '../../../Assets/Images/New_card_img//Logo_design.png'
import Non_Contract from '../../../Assets/Images/New_card_img//Non_Contract.png'
import ORM_Program from '../../../Assets/Images/New_card_img// ORM_Program.png'
import Private_Consultation from '../../../Assets/Images/New_card_img//Private_Consultation.png'

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
                <img src={Non_Contract} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Non-Contract Work</h1>
                         <span className="card__price">$125.00/hr</span>
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
                <img src={ORM_Program} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">ORM Program</h1>
                         <span className="card__price">$250.00/hr</span>
                         <ul>
                <span 
                style={{
                color: 'rgb(168, 148, 32)',
              }}>
                  Don't know where to start or how to go about getting your business back on track? Call us, and we will walk you through it with a Plan of Action.  </span>
                  <br></br>
                  <br></br>
                </ul>
            <a href="https://square.link/u/HzFcZUQk" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={Private_Consultation} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Private Consultation</h1>
                         <span className="card__price">$250.00/hr</span>
                         <span className="card__price">$250.00/hr</span>
                         <ul>
                <span 
                style={{
                color: 'rgb(168, 148, 32)',
              }}>
                  Affordable Hourly Rate. 
We handle all of your needs with an hourly consultation fee.  </span>
                  <br></br>
                  <br></br>
                </ul>
            <a href="https://square.link/u/6qEoudGM" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                  
                        </div>
                      
                        </>

                        
    )
}

export default Card