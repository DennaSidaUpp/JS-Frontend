import React, {useState, useEffect} from 'react'
import BlogItem from './BlogItem'

const Blog = () => {
    const [blogItems, setBlogItems] = useState([])

    const fetchData = async () => {
        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/blogs')
        const data = await res.json()
        setBlogItems(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div className='blogs'>
        <div className='blogsContainer'>
            <div className='blogsTitle'><h4>Latest Blog and News</h4></div>
            <div className='blogsAbout'>
                <h3>Check Out Our Latest Blog and News Update</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.</p>
            </div>
            <div className='blogsGrid'>
                {
                    blogItems.map((item) => (<BlogItem key={item.id} item={item} />))
                }
            </div>
        </div>
    </div>
  )
}

export default Blog