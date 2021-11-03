import React from 'react'
import './Card.css'
import nike from './img/img.png'

function Card() {
    return (
        <div className="container">
            <div className="card">
                <img src={nike} alt="" className="card__img" /> 

                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Personal Landing Page</h1>
                         <span className="card__price">$249</span>
                <ul>
                <li>1 Page Website</li>
                <li>2 Stock Images</li>
                <li>1 Made with WordPress</li>
                <li>1 Contact/Query Form</li>
                <li>48 to 72 hours TAT</li>
                <li>Complete Deployment</li>
                </ul>
            <a href="#" className="card__button">ORDER</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={nike} alt="" className="card__img" /> 

                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Personal Landing Page</h1>
                         <span className="card__price">$249</span>
                <ul>
                <li>1 Page Website</li>
                <li>2 Stock Images</li>
                <li>1 Made with WordPress</li>
                <li>1 Contact/Query Form</li>
                <li>48 to 72 hours TAT</li>
                <li>Complete Deployment</li>
                </ul>
            <a href="#" className="card__button">ORDER</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={nike} alt="" className="card__img" /> 

                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">Personal Landing Page</h1>
                         <span className="card__price">$249</span>
                <ul>
                <li>1 Page Website</li>
                <li>2 Stock Images</li>
                <li>1 Made with WordPress</li>
                <li>1 Contact/Query Form</li>
                <li>48 to 72 hours TAT</li>
                <li>Complete Deployment</li>
                </ul>
            <a href="#" className="card__button">ORDER</a>
             </div>
                </div>
                    </div>
                        </div>
    )
}

export default Card