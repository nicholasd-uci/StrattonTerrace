import React from 'react'
// import TM from '../../Assets/Logo/Theme.jpg'
import RubberBand from 'react-reveal/RubberBand';
import Services from '../Services/Services'
import './Theme.css'

function Theme() {
    return (
        <div className="Theme">
        <div className="Theme__mainPicture">
                  <RubberBand>       
                    {/* <img src={TM} alt="marketing"/> */}
                  </RubberBand>
       </div>
  
       <Services />
    </div>
    )
}

export default Theme


