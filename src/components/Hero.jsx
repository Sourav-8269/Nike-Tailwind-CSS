import React, { useState } from 'react'
import Button from './Button'
import {arrowRight} from "./../assets/icons"
import {shoes, statistics} from "./../constants/index"
import { bigShoe1 } from '../assets/images'
import ShoeCard from './ShoeCard'

const Hero = () => {
  const [bigShoeImg,setBigShoeImg]=useState(bigShoe1);
  return (
    <section id="home" className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container p-2'>
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding x pt-28'>
        <p className='text-xl font-montserrat text-coral-red'>Our Summer Collections</p>
        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span>
          <br/>
          <span className='text-coral-red inline-block mt-3'>Nike </span>
           Shoes
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nesciunt?</p>
        <Button label="Show now" iconURL={arrowRight} />
        <div className='flex justify-start items-center flex-wrap w-full border border-red-400 gap-16 mt-20'>
          {statistics.map((el)=>(
            <div key={el.label}>
              <p className='font-palanquin font-bold text-4xl'>{el.value}</p>
              <p className='font-montserrat leading-7 text-slate-gray'>{el.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
        <img src={bigShoeImg} alt="Shoe Collections" width={610} height={500}
        className='object-contain relative z-10' 
        />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left- [10%] max-sm:px-6'>
          {shoes.map((shoe,index)=>(
            <div key={index}>
              <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe)=>setBigShoeImg(shoe)} bigShoeImg={bigShoeImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero