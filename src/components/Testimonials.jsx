import React, {useState, useEffect} from 'react'
import TestimonialsItem from './TestimonialsItem'

const Testimonials = () => {
  const [testimonialsItems, setTestimonialItems] = useState([])

  const fetchData = async () => {
    const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/testimonials')
    const data = await res.json()
    setTestimonialItems(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className='testimonials'>
        <div className='testimonialsContainer'>
            <div className='testimonialsText'>
                <h4>Testimonials</h4>
                <h3>See What Our Client Have to Say</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
            </div>
            <div className='testimonialsGrid'>
                {
                  testimonialsItems.map((item) => (<TestimonialsItem key={item.id} item={item} />))
                }
            </div>
        </div>
    </div>
  )
}

export default Testimonials