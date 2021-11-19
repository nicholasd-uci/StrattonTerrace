import React from 'react'
import './Home.css'
import Cards from '../../Components/Cards/HomePageCards/Cards'
import HomeBanner from '../../Components/HomeBanner/HomeBanner'
import Services from '../../Components/Services/Services'

function Home () {
  return (
    <div className='home'>
      <HomeBanner />
      <Services />
      <Cards />
    </div>
  )
}

export default Home
