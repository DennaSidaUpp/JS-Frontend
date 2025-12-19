import React from 'react'
import Aboutheader from '../components/Aboutheader'
import About from '../components/About'
import Partners from '../components/Partners'
import Testimonials from '../components/Testimonials'
import Subscribe from '../components/Subscribe'

const AboutUs = () => {
  return (
    <>
    <Aboutheader/>
    <About/>
    <Partners/>
    <Testimonials/>
        <div className='chooseUs chooseUsAlt'>
        <div className='chooseUsContainer'>
            <h4>Why Choose Us</h4>
            <div className='chooseUsTitle'>
                <h3>Choose Us for Exceptional Storage Solutions</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
            </div>
            <div className='chooseUsGrid'>
                <div className='chooseUsPerks'>
                    <div className='chooseUsItem'>
                        <div className='chooseUsIcon'><img src="./images/icons/lock_icon.svg" alt="" /></div>
                        <div className='chooseUsText'>
                            <h5>Security and Safety</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                    <div className='chooseUsItem'>
                        <div className='chooseUsIcon'><img src="./images/icons/moneybag_icon.svg" alt="" /></div>
                        <div className='chooseUsText'>
                            <h5>Flexible and Affordable</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                    <div className='chooseUsItem'>
                        <div className='chooseUsIcon'><img src="./images/icons/broom_icon.svg" alt="" /></div>
                        <div className='chooseUsText'>
                            <h5>Clean and Well-Maintained Facilities</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                    <div className='chooseUsItem'>
                        <div className='chooseUsIcon'><img src="./images/icons/clock_icon.svg" alt="" /></div>
                        <div className='chooseUsText'>
                            <h5>24/7 and Convenient Access</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                </div>
                <div className='chooseUsImage'>
                    <img src="./images/chooseus_bg_placeholder.svg" alt="" />
                </div>
            </div>
        </div>
    </div>
    <Subscribe/>
    </>
  )
}

export default AboutUs