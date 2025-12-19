import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({ name:'', email:'', phoneNumber:'', subject:'', comment:'' })
    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value} = e.target
        setFormData({...formData, [name]: value})

        if (value.trim() === '') {
            setErrors(prevErrors => ({...prevErrors, [name]: `The ${name} field is required.`}))
        } else {
            setErrors(prevErrors => ({...prevErrors, [name]: ''}))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        const newErrors = {}
        Object.keys(formData).forEach(field => {
            if (formData[field].trim() === '') {
                newErrors[field] = `The ${field} field is required.`
            }
        })

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }

        const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/contact', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })

        if (res.ok){
            const data = await res.text()
            console.log(data)
        } else {
            const data = await res.json()
            console.log(data)
        }
    }

  return (
    <div className='contact'>
        <div className='contactContainer'>
            <div className='contactContent'>
                <h4>Get in Touch</h4>
                <h3>Get Personalized Assistance – Contact Us</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo</p>
                <img src="./images/form_placeholder.svg" alt="" />
            </div>
            <div className='contactForm'>
                <form onSubmit={handleSubmit} noValidate>
                    <div className='contactFormContainer'>
                        <div>
                            <label htmlFor="yourName" className='contactLabel required'>Your Name</label>
                            <input required type="text" id="yourName" name="name" placeholder="Your name" value={formData.name} onChange={handleChange} />
                            <span>{errors.name && errors.name}</span>
                        </div>
                        <div className='contactGrid'>
                            <div>
                                <label htmlFor="email" className='contactLabel required'>Email</label>
                                <input required type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                                <span>{errors.email && errors.email}</span>
                            </div>
                            <div>
                                <label htmlFor="telephone" className='contactLabel'>Telephone</label>
                                <input type="text" id="telephone" name="phoneNumber" placeholder="Telephone" value={formData.phoneNumber} onChange={handleChange} />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className='contactLabel required'>Subject</label>
                            <input required type="text" id="subject" name="subject" placeholder="How can we help you" value={formData.subject} onChange={handleChange} />
                            <span>{errors.subject && errors.subject}</span>
                        </div>
                        <div>
                            <label htmlFor="comment" className='contactLabel required'>Comments / Questions</label>
                            <textarea required rows="7" name="comment" id="comment" placeholder="Comments" value={formData.comment} onChange={handleChange} ></textarea>
                            <span>{errors.comment && errors.comment}</span>
                        </div>
                        <div>
                            <button type="submit" className='contactButton'>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact