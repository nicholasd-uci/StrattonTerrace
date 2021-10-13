import React from 'react'
import './Website.css'
import PricingTables from '../../Components/PricingTables/PricingTables'
import PricingTables2 from '../../Components/PricingTables/PricingTables2'
import PricingTables3 from '../../Components/PricingTables/PricingTables3'
import Services from '../../Components/Services/Services'

const Website = (props) => {
    return (
        <div className="Website">
                <Services />
                  <div className="Website__background">
        <PricingTables3 />
        <PricingTables />
        <PricingTables2 />
        
          </div>
          </div>
    );
  };
  
export default Website
