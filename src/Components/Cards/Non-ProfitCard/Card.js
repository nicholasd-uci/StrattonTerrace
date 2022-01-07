import React from 'react'
import './Card.css'
import nonprofit1 from '../../../Assets/Images/New_card_img/nonprofit1.png'
import nonprofit2 from '../../../Assets/Images/New_card_img/nonprofit2.png'
import nonprofit3 from '../../../Assets/Images/New_card_img/nonprofit3.png'


function Card() {
    return (
        <>
        <div className="cards__container">
            <div className="card">
                <img src={nonprofit1} alt="" className="card__img" /> 
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
                <img src={nonprofit2} alt="" className="card__img" /> 
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
            <br></br>
                </ul>
            <a href="https://square.link/u/ELSiG43j" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={nonprofit3} alt="" className="card__img" /> 
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
            <br></br>
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