import React from 'react'
import './Onboarding.css'
import emailjs from "emailjs-com";
import Logo from '../../Assets/Logo/Onboarding_logo.png'



export default function Onboarding() {
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
      <form className="Onboarding__form" onSubmit={sendEmail}>
   
              <label> Company Name </label>
              <input type="text" className="form-control" placeholder="Company Name" name="name"/>
              <label> Email </label>
              <input type="email" className="form-control" placeholder="Email Address" name="email"/>
                <label> Subject </label>
                <input type="text" className="form-control" placeholder="Subject" name="subject"/>
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
  