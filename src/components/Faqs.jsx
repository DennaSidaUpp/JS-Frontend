import React, {useState, useEffect} from 'react'
import FaqsItem from './FaqsItem'

const Faqs = () => {
    const [faqsItems, setFaqsItems] = useState([])

    const fetchData = async () => {
        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/faqs')
        const data = await res.json()
        setFaqsItems(data)
    }

    useEffect(() => {
        fetchData()
    }, [])

  return (
    <div className='faqs'>
        <div className='faqsContainer'>
            <div>
                <h4>FAQs</h4>
                <h3>Frequently Ask Questions</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <div className='faqsList'>
                {
                faqsItems.map((item) => (<FaqsItem key={FaqsItem.id} item={item} />))
                }
            </div>
        </div>
    </div>
  )
}

export default Faqs