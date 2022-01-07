import React from 'react'
import './Card.css'
import seo from '../../../Assets/Images/New_card_img/seo.png'
import seo1 from '../../../Assets/Images/New_card_img/seo1.png'
import seo2 from '../../../Assets/Images/New_card_img/seo2.png'

function Card() {
    return (
        <>
        <div className="cards__container">
            <div className="card">
                <img src={seo} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">SEO Advance Package</h1>
                         <span className="card__price">$249.99</span>
                <ul>
                <li> <b>25 </b> Short Tail Keywords</li>
                <li> <b>25 </b> Long Tail Keywords</li>
                <li>Negative Keywords</li>
                <li>Campaign Restructure</li>
                <li>Weekly & Monthly Reports</li>
                <li>SEO Support</li>
                </ul>
            <a href="https://square.link/u/kRg8VdNL" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={seo1} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">SEO Basic Package</h1>
                         <span className="card__price">$129.99</span>
                <ul>
                <li> <b>5 </b> Short Tail Keywords</li>
                <li> <b>5 </b> Long Tail Keywords</li>
                <li>Negative Keywords</li>
                <li>Campaign Restructure</li>
                <li> <b>1</b> Campaign</li>
                <li>Monthly Reports</li>
                </ul>
            <a href="https://square.link/u/pNuPyswG" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={seo2} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">SEO Consultation</h1>
                         <span className="card__price">$149.99 / hr</span>
                <ul>
                <span 
                style={{
                color: 'rgb(168, 148, 32)',
              }}>
                  We will guide you through and come up with a campaign structure 
                plan that fits your business goals. Below are the details for our monthly Plan. </span>
                </ul>
                <br></br>
            <a href="https://square.link/u/rOktRiS0" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                        </div>
                      
                        </>

                        
    )
}

export default Card