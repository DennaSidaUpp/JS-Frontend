import React from 'react'
import { Link } from 'react-router-dom'


const BlogItem = ({item}) => {

  const handleClick = (event) => {
    const clickedDiv = event.currentTarget;
    const description = clickedDiv.querySelector('.blogDescription')
    description.classList.toggle('blogText')

  }

  return (
    <div className='blogsItem blogsItemHover' onClick={handleClick}>
      <div className='blogImg'><img className='articleImg' src={item.imageUrl} alt="" /></div>
      <div className='blogDate'>
        <div id='newsIcon'></div>
        <div><p>{item.created}</p></div>
      </div>
      <div className='blogTitle'><h6>{item.title}</h6></div>
      <div className='blogDescription blogText'><p>{item.description}</p></div>
      <div className='blogReadmore blogReadmoreHover'>Read more →</div>
    </div>
  )
}

export default BlogItem