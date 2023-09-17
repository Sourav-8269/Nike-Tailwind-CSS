import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({customerName,imgURL,rating,feedback}) => {
  return (
    <div className='flex justify-center items-center flex-col'> 
        <img className='rounded-full object-cover h-[120px] w-[120px]' src={imgURL} alt={customerName}/>
        <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>  
        <div className='mt-3 flex justify-center items-center gap-2.5'>
            <img className='object-contain m-0' src={star} width={24} height={24} alt="rating"/>
            <p className='text-xl text-slate-gray font-montserrat'>({rating})</p>
        </div>  
        <h3 className='font-palanquin text-3xl font-bold text-center mt-1'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard