import React from 'react'
import { shoe8 } from '../assets/images';
import Button from "./Button.jsx";
const SuperQuality = () => {
  return (
    <div id="about-us" className='flex justify-between gap-16 flex-1 max-lg:flex-col'>
      <div className='flex-1'>
          <h2 className='font-palanquin text-4xl font-bold lg:max-w-lg'>We Provide You <span className='text-coral-red'>Super Quality</span> Shoes</h2>
          <p className='gap-16 mt-4 info-text lg:max-w-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, expedita non voluptatum, reprehenderit dignissimos iure beatae nesciunt minima magni voluptates quaerat. Reprehenderit magni ea cupiditate necessitatibus ipsam nemo explicabo voluptates.</p>

          <p className='gap-16 mt-6 lg:max-w-lg info-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque, assumenda.</p>
          <div className='mt-11'>
            <Button label="View Details"/>
          </div>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <img src={shoe8} alt="shoe" srcset="" width={570} height={522} className='object-contain' />
      </div>
    </div>
  )
}

export default SuperQuality;