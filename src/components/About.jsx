import React from 'react'
import DiscoverMoreButton from './DiscoverMoreButton'

function About() {
  return (
    <div className='aboutUs'>
        <div className='aboutUsContainer'>
            <div className='aboutUsMedia'>
                <div className='aboutUsImage'><img src="./images/aboutus_bg_placeholder.svg" alt="" /></div>
                <div className='aboutUsStatGrid'>
                    <div className='aboutUsStats'>
                        <h2>12+</h2>
                        <p>Years of Experience</p>
                    </div>
                    <div className='aboutUsStats'>
                        <h2>150K+</h2>
                        <p>Satisfied Clients</p>
                    </div>
                    <div className='aboutUsStats'>
                        <h2>35+</h2>
                        <p>Warehouse</p>
                    </div>
                </div>
            </div>
            <div className='aboutUsContent'>
                <div className='aboutUsText'>
                    <h4>About Us</h4>
                    <h3>Providing a Safe Space for Your Treasured Items</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi, non sodales augue. Phasellus eget elit gravida.</p>
                </div>
                <div className='aboutUsTileGrid'>
                    <div className='tiles tilesHover'>
                        <h5>Vision</h5>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
                    </div>
                    <div className='tiles tilesHover'>
                        <h5>Mission</h5>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque laudantium.</p>
                    </div>
                </div>
                <div className='aboutUsContact'>
                    <DiscoverMoreButton/>
                    <div>
                        <img className='contactIcon' src="./images/icons/phone_yellow_icon.svg" alt="" />
                    </div>
                    <div className='contactInfo'>
                            <h5>More Information</h5>
                            <h6>+46 8 123 122 44</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About