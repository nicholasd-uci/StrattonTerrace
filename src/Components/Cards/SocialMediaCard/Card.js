import React from 'react'
import './Card.css'
import SocialMedia from '../../../Assets/Images/New_card_img/SocialMedia.png'
import SocialMedia_4 from '../../../Assets/Images/New_card_img//Social-media-3.png'
import SocialMedia_3 from '../../../Assets/Images/New_card_img//Social-media-4.png'

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
                <img src={SocialMedia_3} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">2 Channel Social Media</h1>
                         <span className="card__price">$350.00</span>
                <ul>
                <span 
                style={{
                color: 'rgb(168, 148, 32)',
              }}>Leverage STM and our team of content developers and writers. We are here to meet with you, understand your vision, and then build a roadmap for your audience. 
              </span>
                <li>Two: Social Media Channel </li>
                <li>Three Post Per Week</li>
                <li>Facebook Instagram</li>
                <li>LinkedIn TikTok</li>
                <li>YouTube Hulu & Peacock</li>
                </ul>
            <a href="https://checkout.square.site/merchant/MLZ8ZQY9BSZZC/checkout/R6YY6ECJP3KJI3KG7RVFU2SE" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                    <div className="card">
                <img src={SocialMedia_4} alt="" className="card__img" /> 
                <div className="card__content">
                    <div className="card__data">
                         <h1 className="card__title">3 Channel Social Media</h1>
                         <span className="card__price">$425.00</span>
                <ul>
                <span 
                style={{
                color: 'rgb(168, 148, 32)',
              }}>Leverage STM and our team of content developers and writers. We are here to meet with you, understand your vision, and then build a roadmap for your audience. 
              </span>
                <li>Three: Social Media Channel's</li>
                <li>Four Post Per Week</li>
                <li>Facebook Instagram</li>
                <li>LinkedIn TikTok</li>
                <li>YouTube Hulu & Peacock</li>
                </ul>
            <a href="https://square.link/u/a4m5GYWW" target="_blank" rel="noreferrer"  className="card__button_order">ORDER</a>
            <a href="facetime:16578779300" target="_blank" rel="noreferrer"  className="card__button_call">CALL US</a>
             </div>
                </div>
                    </div>
                        </div>
                     
                        </>

                        
    )
}

export default Card