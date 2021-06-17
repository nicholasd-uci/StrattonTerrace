import React from 'react'
import './Website.css'
import PricingTables from '../../Components/PricingTables/PricingTables'
import PricingTables2 from '../../Components/PricingTables/PricingTables2'

const Website = (props) => {
    return (
        <div className="Website">
        <PricingTables />
        <PricingTables2 />
          </div>
    );
  };
  
export default Website
