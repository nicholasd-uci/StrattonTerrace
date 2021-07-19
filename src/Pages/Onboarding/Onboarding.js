import React, { useState } from 'react'

import './Onboarding.css'
import emailjs from "emailjs-com";
import Logo from '../../Assets/Logo/Onboarding_logo.png'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'






export default function Onboarding() {

    const [value, setValue] = useState()

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('stratton', 'template_uwj26xt', e.target, 'user_RUuKdJ2GeHqbg1RhTvRbp')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    
      return (
          <div className="Onboarding">
        <div className="Onboarding__background">     
        <div className="Onboarding__Header">
        <h1 id="Onboarding__form_H1">Client Onboarding Form</h1>
            <img src={Logo} alt="Logo"/>
                  </div>

            <p className="Onboarding__PTag">Hello and welcome! Thank you for choosing Stratton Terrace Marketing. We are happy to have you here with us. Before we can help you to the best of our abilities, please answer the following questions in order for us to make your journey and collaboration with us simple fast, and convenient. Please feel free to contact us if you have any other additional concerns or questions. Thank you! </p>
      <form className="Onboarding__form" onSubmit={sendEmail}>
   
              <label> Company Name </label>
              <input type="text" className="form-control" placeholder="Registered Business Name" name="name"/>
              <label> Name </label>
              <input type="text" className="form-control" placeholder="Owners Name" name="name"/>
              <label> Email </label>
              <input type="email" className="form-control" placeholder="Email Address" name="email"/>
              <label> Phone Number </label>
              <PhoneInput placeholder="Enter phone number" value={value} onChange={setValue}/>
       <label>Current Website URL</label>
        <input type="url" className="form-control" placeholder="url placeholder"/>
                <label> Subject </label>
                <input type="text" name="url" className="form-control" placeholder="Subject" name="subject"/>
              <label>Message</label>
              <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
              <button
          type="submit" >
          - SEND -
        </button>
              </form>
              </div>  
              </div>
     
      )
  }
  