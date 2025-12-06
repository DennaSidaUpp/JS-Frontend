import React from 'react'

const Subscribe = () => {
  return (
    <div className='subscribe'>
      <div className='subscribeContainer'>
        <div className='subText'>
          <h3>Subscribe Our Newsletter</h3>
          <p>Subscribe to our newsletter to receive early discount offers, updates and info</p>
        </div>
        <div className='subForm'>
          <form action="">
            <div className='subFormContainer'>
              <input type="email" name="email" placeholder="Enter your email" />
              <button type='submit' className='submitButton'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Subscribe