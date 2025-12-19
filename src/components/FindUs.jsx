import React from 'react'

const FindUs = () => {
  return (
    <div className='findUs'>
        <div className='findUsContainer'>
            <div className='findUsImg'><img src="./images/contact_placeholder.svg" alt="" /></div>
            <div className='findUsInfo'>
                <h3>Find Us On:</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className='findUsGroup'>
                    <div  className='findUsIcon'><img src="./images/icons/phone_yellow_icon.svg" alt="" /></div>
                    <div>
                        <h5>Call Center</h5>
                        <p>+46 8 123 122 44</p>
                    </div>
                </div>
                <div className='findUsGroup'>
                    <div  className='findUsIcon'><img src="./images/icons/mail_yellow_icon.svg" alt="" /></div>
                    <div>
                        <h5>Email Address</h5>
                        <p>contact@domain.com</p>
                    </div>
                </div>
                <div className='findUsGroup'>
                    <div  className='findUsIcon'><img src="./images/icons/location_yellow_icon.svg" alt="" /></div>
                    <div>
                        <h5>Location</h5>
                        <p>Klarabergsviadukten 90, Stockholm</p>
                    </div>
                </div>
                <div className='findUsMedia'>
                    <h5>Our Social Media</h5>
                    <div className='findUsLine'><hr /></div>
                    <div className='mediaGroup'>
                        <div className='mediaIcon'><a href=""><img src="./images/icons/facebook_icon.svg" alt="" /></a></div>
                        <div className='mediaIcon'><a href=""><img src="./images/icons/twitter_icon.svg" alt="" /></a></div>
                        <div className='mediaIcon'><a href=""><img src="./images/icons/instagram_icon.svg" alt="" /></a></div>
                        <div className='mediaIcon'><a href=""><img src="./images/icons/youtube_icon.svg" alt="" /></a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FindUs