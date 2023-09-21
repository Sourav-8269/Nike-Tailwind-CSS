import React from 'react'
import {footerLogo} from "./../assets/images"
import {footerLinks, socialMedia} from "./../constants/index"
import { copyrightSign } from '../assets/icons'

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
            {socialMedia.map((el)=>(
              <div key={el.src} className='flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer hover:bg-slate-300'>
                <img src={el.src} alt={el.alt} />
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap'>
            {footerLinks.map((el)=>(
              <div className='' key={el}>
                <h4 className='text-white font-montserrat text-2xl leading-normal font-medium mb-6'>{el.title}</h4>
                <ul>
                  {el.links.map((link)=>(
                    <li className='text-white mt-3 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer'>
                      <a>{link.name}</a>
                    </li>
                  ))}
                </ul>

              </div>
            ))}
        </div>
      </div>

        <div className='flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center'>
            <div className='flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer'>
              <img src={copyrightSign} alt="copyright" height={20} width={20} className='rounded-full m-0' />
              <p>Copyright. All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer