import React from 'react'
import './Contact.css'
import { InlineWidget } from "react-calendly";
import emailjs from "emailjs-com";

export default function Contact() {

    function sendEmail(e) {
      e.preventDefault();

      emailjs.sendForm('', '', e.target, '')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    }
    return (
        <div className="contact">
              <h1 className="contact__Header">Contact Us</h1>
                <div className="row">
    <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
            <form className="contact__form" onSubmit={sendEmail}>
          
            <label> Name </label>
            <input 
            placeholder ="Name" 
            />
            <label> Email </label>
            <input 
            placeholder ="Email" 
            />
              <label> Subject </label>
            <input 
            placeholder ="Subject" 
            />
            <label>Message</label>
            <textarea
            placeholder="Message"
            >
            </textarea>
            <button
        type="submit" >
        - SEND -
      </button>
            </form>
            </div>
         
    <div className="col-12 col-lg-6 pl-lg-0 pr-lg-6">
    <InlineWidget url="https://calendly.com/stratton-terrace-marketing/stratton-terrace-marketing" />

        </div>

            </div>
            <h2 className="Contact__name">STRATTON TERRACE MARKETING</h2>
            <p>Email: stratton.terraceInfo@gmail.com</p>
            <p>Mob.: ‪(657) 877-9300</p>
             </div>
    )
}
