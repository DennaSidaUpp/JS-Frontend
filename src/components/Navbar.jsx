import React from 'react'

function Navbar() {
  return (
    <nav>
        <div className='navTop'>
            <div className='navContact'>
                <div className='navContactInfo'>
                  <div className='navContactItem'><img src="./images/icons/phone_icon.svg" alt="Phone Number" />+46 8 123 122 44</div>
                  <div className='navContactItem'><img src="./images/icons/mail_icon.svg" alt="Email Adress" />contact@domain.com</div>
                </div>
                <div className='navSocialMedia'>
                  <div className='navSocialMediaIcon'><a href="#"><img src="./images/icons/facebook_icon.svg" alt="Facebook" /></a></div>
                  <div className='navSocialMediaIcon'><a href="#"><img src="./images/icons/twitter_icon.svg" alt="Twitter" /></a></div>
                  <div className='navSocialMediaIcon'><a href="#"><img src="./images/icons/instagram_icon.svg" alt="Instagram" /></a></div>
                  <div className='navSocialMediaIcon'><a href="#"><img src="./images/icons/youtube_icon.svg" alt="Youtube" /></a></div>
                </div>
            </div>
        </div>
        <div className='navBot'>

        </div>
    </nav>
  )
}

export default Navbar