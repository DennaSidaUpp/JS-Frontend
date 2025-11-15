import React from 'react'
import About from "../components/About"
import Hero from "../components/Hero"
import Partners from "../components/Partners"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"

const Home = () => {
  return (
    <>
      <Hero/>
      <About/>
      <Partners/>
      <Services/>
      <Testimonials/>
    </>
  )
}

export default Home