import React from 'react'
import {footerLogo} from "./../assets/images"

const Footer = () => {
  return (
    <footer className='max-container'>
      <div className='flex justify-between items-center gap-20 flex-wrap max-lg:flex-col'>
        <div className='flex flex-col items-start'>
          <a href="/">
            <img src={footerLogo} width={150} height={46}/>
          </a>
          <p className='mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perspiciatis culpa laudantium itaque, maiores incidunt illum sapiente rerum odio ullam? </p>
          <div className='flex items-start gap-5 mt-8'>

          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer