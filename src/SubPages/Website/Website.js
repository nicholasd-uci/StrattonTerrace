import React from 'react'
import './Website.css'
import Services from '../../Components/Services/Services'
import Card from '../../Components/NewCard/Card'

const Website = (props) => {
    return (
        <div className="Website">
                <Services />
                  <div className="Website__background">
                  <Card />
          </div>
          </div>
    );
  };
  
export default Website
