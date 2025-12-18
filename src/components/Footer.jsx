import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='footerContainer'>
        <div className='copyright'>© 2025 StorAid, All rights reserved.</div>
        <div className='termContainer'>
          <div className='link'><img src="./images/icons/arrow_right_icon.svg" alt="" /><a href="#" className='linkHover'>Terms & Conditions</a></div>
          <div className='link'><img src="./images/icons/arrow_right_icon.svg" alt="" /><a href="#" className='linkHover'>Privacy Policy</a></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer