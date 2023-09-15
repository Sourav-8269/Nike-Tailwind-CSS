import React from 'react'
import {services} from "./../constants/index"
import ServiceCard from './ServiceCard'
const Services = () => {
  return (
    <div className='flex justify-center gap-16 flex-wrap'>
      {services.map((el)=>(
        <ServiceCard key={el.label} {...el} />
      ))}
    </div>
  )
}

export default Services