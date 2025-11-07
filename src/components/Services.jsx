import React from 'react'

function Services() {
  return (
    <div className='services'>
        <div className='servicesContainer'>
            <div className='servicesTitle'><h4>Our Services</h4></div>
            <div className='servicesTextArea'>
                <div className='servicesText'><h3>Specialized Storage for Every Special Item</h3></div>
                <div className='servicesText'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p></div>
            </div>
            <div className='servicesGrid'>
                <div className='servicesGridTileArea'>
                    <div className='tiles tilesHover'>
                        <h5>Diverse Unit Sizes</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className='tiles tilesHover'>
                        <h5>Moving Assistance</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
                <div className='servicesGridImage'><img src="./images/services_bg_placeholder.svg" alt="" /></div>
                <div className='servicesGridTileArea'>
                    <div className='tiles tilesHover'>
                        <h5>Vehicle Storage</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className='tiles tilesHover'>
                        <h5>Top-Notch Security</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services