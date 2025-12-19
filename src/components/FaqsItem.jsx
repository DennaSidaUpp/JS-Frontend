import React from 'react'
import { Link } from 'react-router-dom'



const FaqsItem = ({item}) => {

    const questions = document.querySelectorAll('.question')

    questions.forEach(question => {
    question.addEventListener('click', e=> {

        document.querySelectorAll('.faqCard').forEach(answer => {
            answer.classList.remove('open')
        })

        const parent = question.parentElement;
        parent.classList.toggle('open')
    })
})
  return (
    <div className='faqCard'>
        <div className='question'>
            <p>{item.title}</p>
            <button className='faqsButton'><img src="./images/icons/arrow_down_icon.svg" alt="" /></button>
        </div>
        <div className='answer'>
            <div className='expandable'><p>{item.description}</p></div>
        </div>
    </div>
  )
}

export default FaqsItem