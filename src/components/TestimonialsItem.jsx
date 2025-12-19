import React from 'react'
import { Link } from 'react-router-dom'

function stars (rating){
  var total = [];
  for (let i=1; i <= rating; i++){
    total.push(<img src='./images/icons/star_icon.svg'/>)
  }

  return total;
}

const TestimonialsItem = ({item}) => {
  return (
      <div className='testimonialsItem'>
        <div className='rating'> 
          {stars(item.rating)}
        </div>
        <div className='comment'>
          <p>{item.comment}</p>
        </div>
        <div>
          <div className='info'>
            <div className='avatarname'>
              <img className='avatar' src={item.avatarUrl} alt="" />
              <div className='name'>
                <h6>{item.name}</h6>
                <p>{item.companyName}</p>
              </div>
            </div>
            <img className='quote' src="./images/icons/quote_icon.svg" alt="quote" />
          </div>
        </div>
      </div>
  )
}

export default TestimonialsItem