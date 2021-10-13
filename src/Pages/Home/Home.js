import React from 'react'
import './Home.css'
import Cards from '../../Components/Cards/Cards'
import HeroSection from '../../Components/HeroSection/HeroSection'
import HomeBanner from '../../Components/HomeBanner/HomeBanner'
import Services from '../../Components/Services/Services'

function Home () {
  return (
    <div className='home'>
      <HomeBanner />
      <Services />
      <Cards />
      <HeroSection />
    </div>
  )
}

export default Home
