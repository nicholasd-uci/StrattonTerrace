import React from 'react'
import './Services.css'
import Typewriter from 'typewriter-effect';
import ads from '../../Assets/services-logo/Ads_good.png'
import ads_text from '../../Assets/services-logo-text/Ads_Text.png'
import NONPROFIT from '../../Assets/services-logo/Non-profits.png'
import NONPROFIT_text from '../../Assets/services-logo-text/NON-PROFIT-ADVERTISING-Text.png'
import ecommerce from '../../Assets/services-logo/e-commerce.png'
import ecommerce_text from '../../Assets/services-logo-text/E-COMMERCE-Text.png'
import ORM from '../../Assets/services-logo/ORM.png'
import ORM_text from '../../Assets/services-logo-text/ORM-Text.png'
import SEO from '../../Assets/services-logo/SEO.png'
import SEO_text from '../../Assets/services-logo-text/SEO-Text.png'
import social from '../../Assets/services-logo/social.png'
import social_text from '../../Assets/services-logo-text/SOCIAL-MEDIA-MANAGEMENT-Text.png'
import Website from '../../Assets/services-logo/Website-Design .png'
import Website_text from '../../Assets/services-logo-text/Website-design-Text.png'
import hosting from '../../Assets/services-logo/hosting.png'
import hosting_text from '../../Assets/services-logo-text/WEBSITE-HOSTING-Text.png'

function Services() {
    return (
        <div className="services">
         <div className="services__content0">
         <Typewriter 
         onInit = {(typewriter) => {
           typewriter
           .typeString('<span style="color: #FAFAFA;">Advertising</span>')
           .pauseFor(1000)
           .deleteAll()
           .typeString('<span style="color: #FAFAFA;">Non-profit Advertising</span>')
           .pauseFor(1000)
           .deleteAll()
           .typeString('<span style="color: #FAFAFA;">Online Reputation Management</span>')
           .pauseFor(1000)
           .deleteAll()
           .typeString('<span style="color: #FAFAFA;">E-commerce</span>')
           .pauseFor(1000)
           .deleteAll()
           .typeString('<span style="color: #FAFAFA;">Search Engine Optimization</span>')
           .pauseFor(1000)
           .deleteAll()
           .typeString('<span style="color: #FAFAFA;">Social Media Management</span>')
           .pauseFor(1000)
           .deleteAll()
           .typeString('<span style="color: #FAFAFA;">Website Design</span>')
           .pauseFor(1000)
           .deleteAll()
           .typeString('<span style="color: #FAFAFA;">Website Hosting</span>')
           .pauseFor(1000)
           .deleteAll()
           .typeString('<span style="color: #f7cf36;">STRATTON TERRACE MARKETING</span>')
           .start()
         }}
         />
         </div>
         <div className="services__content1">
         <a href="/ads" className="services__content__image" rel="ads">
             <img src={ads_text} alt="ads_text"/>
             <img src={ads} alt="ads"/>      
             </a>
             <a href="/nonprofit" className="services__content__image" rel="ecommerce">
             <img src={NONPROFIT_text} alt="NONPROFIT_text"/>
             <img src={NONPROFIT} alt="NONPROFIT"/>
             </a>
             <a href="/orm" className="services__content__image" rel="orm">
             <img src={ORM_text} alt="ORM_text"/>
             <img src={ORM} alt="ORM"/>
             </a>
             <a href="/ecommerce" className="services__content__image" rel="ecommerce">
             <img src={ecommerce_text} alt="ecommerce_text"/>
             <img src={ecommerce} alt="ecommerce"/>
             </a>
            </div>
            <div className="services__content2">
             <a href="/SEO" className="services__content__image" rel="Seo">
             <img src={SEO_text} alt="SEO_text"/>
             <img src={SEO} alt="SEO"/>       
             </a>
             <a href="/social" className="services__content__image" rel="social">
             <img src={social_text} alt="social_text"/>
             <img src={social} alt="social"/>
             </a>
             <a href="/Website" className="services__content__image" rel="Website">
             <img src={Website_text} alt="Website_text"/>
             <img src={Website} alt="Website"/>
             </a>
             <a href="/hosting" className="services__content__image" rel="hosting">
             <img src={hosting_text} alt="hosting_text"/>
             <img src={hosting} alt="hosting"/>
             </a>
             </div>
            
         </div>

    )
}

export default Services
