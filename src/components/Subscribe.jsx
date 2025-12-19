import React, { useState } from 'react'

const Subscribe = () => {
  const [formData, setFormData] = useState({ email: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value } = e.target
    setFormData({...formData, [name]: value})

    if (value.tim() === '') {
      setErrors(prevErrors => ({...prevErrors, [name]: `The ${name} field is required`}))
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

    const res = await fetch('https://win25-jsf-assignment.azurewebsites.net/api/subscribe', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (res.ok) {
      const data = await res.text()
      console.log(data)
    } else {
      const data = await res.json()
      console.log(data)
    }
  }

  return (
    <div className='subscribe'>
      <div className='subscribeContainer'>
        <div className='subText'>
          <h3>Subscribe Our Newsletter</h3>
          <p>Subscribe to our newsletter to receive early discount offers, updates and info</p>
        </div>
        <div className='subForm'>
          <form onSubmit={handleSubmit} noValidate>
            <div className='subFormContainer'>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email *" />
              <button type='submit' className='submitButton'>Submit</button>
            </div>
            <span>{errors.email && errors.email}</span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Subscribe