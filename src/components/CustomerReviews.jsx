import React from 'react'
import {reviews} from "./../constants/index"
import ReviewCard from './ReviewCard'

const CustomerReviews = () => {
  return (
    <div className='max-container'>
      <h3 className='font-palanquin text-center font-bold text-4xl'>What Our <span className='text-coral-red'>Customers </span>Say?</h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique rerum, quasi consequuntur sint nesciunt fuga minus distinctio necessitatibus eveniet vero.</p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((el)=>(
          <ReviewCard key={el.customerName} imgURL={el.imgURL} customerName={el.customerName} rating={el.rating} feedback={el.feedback} />
        ))}
      </div>
    </div>
  )
}

export default CustomerReviews