import React from 'react'
import About from "../components/About"
import Hero from "../components/Hero"
import Partners from "../components/Partners"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
import Chooseus from '../components/Chooseus'
import Pricing from '../components/Pricing'
import Booknow from '../components/Booknow'
import Blog from '../components/Blog'
import Subscribe from '../components/Subscribe'
import Footer from '../components/Footer'

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
      <Blog/>
      <Subscribe/>
      <Footer/>
    </>
  )
}

export default Home