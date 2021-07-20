import React, { useState } from 'react'
import { Col, Input } from 'reactstrap';
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
        <input type="url" className="form-control" placeholder="url placeholder" name="url"/>
        <label> Is or will your website be for e-commerce? </label>
          <label check>
            <input type="radio" name="radio1" />{' '}
            YES
          </label>
              <label check>
            <input type="radio" name="radio1" />{' '}
            NO
          </label>
      
        <label for="exampleSelect">How many pages would you like your website to have?</label>
        <Col sm={20}>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option> more then 5</option>
          </Input>
        </Col>
              <label>What would you like the names of your pages to be? Examples: Home, About Us, Contact Us, etc.</label>
              <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>

              <label> Do you have content for any of the pages listed above? Examples: the About Us page, any descriptions of products/services, etc. </label>
          <label check>
            <input type="radio" name="radio1" />{' '}
            YES
          </label>
          <label> If yes please add link to google document </label>
          <input type="url" className="form-control" placeholder="url placeholder" name="url"/>
              <label check>
            <input type="radio" name="radio1" />{' '}
            NO
          </label>
      
          <label> Are there any color schemes that you would like for your website? </label>
          <label check>
            <input type="radio" name="radio1" />{' '}
            YES
          </label>
          <label> If yes, what color would you like them to be? </label>
          <input type="textarea" name="text"  />
              <label check>
            <input type="radio" name="radio1" />{' '}
            NO
          </label>
          <label> Please list 1-3 websites (if any) that you would like us to use for reference when building your website. </label>
          <input type="url" className="form-control" placeholder="url placeholder" name="url"/>
          <input type="url" className="form-control" placeholder="url placeholder" name="url"/>
          <input type="url" className="form-control" placeholder="url placeholder" name="url"/>

          <label>What are your current social media outlets? Please list all that you currently have: Can we have 2 sections for this, 1- being the name of the social media channel and 2- being the link or URL to their SM channel? 
</label>
<input type="url" className="form-control" placeholder="url placeholder" name="url"/>


          <label>What kind of automation would you like for us to do? Examples: automated emails, pop-ups, video/image carousels, etc.</label>
              <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>


              <label>Please give us a short description of your expectations for the final product.</label>
              <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>


              <label>Are there any other concerns or questions you have for us that you would like for us to know?</label>
              <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>


              <button
          type="submit" >
          - SEND -
        </button>
              </form>
              <p className="Onboarding__PTag2">Hello and welcome! Thank you for choosing Stratton Terrace Marketing. We are happy to have you here with us. Before we can help you to the best of our abilities, please answer the following questions in order for us to make your journey and collaboration with us simple fast, and convenient. Please feel free to contact us if you have any other additional concerns or questions. Thank you! </p>
    
              </div>  
              
              </div>
     
      )
  }
  