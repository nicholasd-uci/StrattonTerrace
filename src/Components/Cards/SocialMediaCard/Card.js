import React from 'react'
import './Card.css'
import SocialMedia from '../../../Assets/Images/New_card_img/SocialMedia.png'
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
                <img src={SocialMedia} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">1 Channel Social Media</h1>
                         <span className="card__price">$249</span>
                <ul>
                <span 
                style={{
                color: 'rgb(168, 148, 32)',
              }}>Leverage STM and our team of content developers and writers. We are here to meet with you, understand your vision, and then build a roadmap for your audience. 
              </span>
                <li>One Social Media Channel</li>
                <li>Two Post Per Week</li>
                <li>Facebook Instagram</li>
                <li>LinkedIn TikTok</li>
                <li>YouTube Hulu & Peacock</li>
                </ul>
            <a href="https://checkout.square.site/merchant/MLZ8ZQY9BSZZC/checkout/A2QQNXOYG75LNSNAYIPAI66J" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={SocialMedia} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">1 Channel Social Media</h1>
                         <span className="card__price">$249</span>
                <ul>
                <span 
                style={{
                color: 'rgb(168, 148, 32)',
              }}>Leverage STM and our team of content developers and writers. We are here to meet with you, understand your vision, and then build a roadmap for your audience. 
              </span>
                <li>One Social Media Channel</li>
                <li>Two Post Per Week</li>
                <li>Facebook Instagram</li>
                <li>LinkedIn TikTok</li>
                <li>YouTube Hulu & Peacock</li>
                </ul>
            <a href="https://checkout.square.site/merchant/MLZ8ZQY9BSZZC/checkout/A2QQNXOYG75LNSNAYIPAI66J" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={SocialMedia} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">1 Channel Social Media</h1>
                         <span className="card__price">$249</span>
                <ul>
                <span 
                style={{
                color: 'rgb(168, 148, 32)',
              }}>Leverage STM and our team of content developers and writers. We are here to meet with you, understand your vision, and then build a roadmap for your audience. 
              </span>
                <li>One Social Media Channel</li>
                <li>Two Post Per Week</li>
                <li>Facebook Instagram</li>
                <li>LinkedIn TikTok</li>
                <li>YouTube Hulu & Peacock</li>
                </ul>
            <a href="https://checkout.square.site/merchant/MLZ8ZQY9BSZZC/checkout/A2QQNXOYG75LNSNAYIPAI66J" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                        </div>
                     
                        </>

                        
    )
}

export default Card