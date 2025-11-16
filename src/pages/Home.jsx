import React from 'react'
import About from "../components/About"
import Hero from "../components/Hero"
import Partners from "../components/Partners"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
import Chooseus from '../components/Chooseus'
import Pricing from '../components/Pricing'
import Booknow from '../components/Booknow'

const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Partners/>
      <Services/>
      <Testimonials/>
      <Chooseus/>
      <Pricing/>
      <Booknow/>
    </>
  )
}

export default Home