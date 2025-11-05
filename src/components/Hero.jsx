import React from 'react'
import DiscoverMoreButton from './DiscoverMoreButton'

function Hero() {
  return (
    <div className='heroBackground'>
        <div className='heroContainer'>
            <div className='heroText'>
              <h4>Welcome to StorAid</h4>
              <h1>Space Simplified, Storage Perfected</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at euismod sem ipsum ac dolor.</p>
              <DiscoverMoreButton/>
            </div>
            <div className='heroImage'><img src="./images/hero_placeholder.svg" alt="" /></div>
        </div>
    </div>
  )
}

export default Hero