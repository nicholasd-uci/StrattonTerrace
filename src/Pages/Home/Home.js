import React from 'react'
import './Home.css'
import Cards from '../../Components/Cards/Cards';
import HeroSection from '../../Components/HeroSection/HeroSection';



function Home() {
    return (
      <div className='home'>
    <HeroSection />
      <Cards />
</div>
    )
}

export default Home
