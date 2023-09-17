import React from 'react'

const Button = ({label,iconURL,backgroundColor,textColor,borderColor,fullWidth}) => {
  return (
    <button className={`flex justify-center items-center rounded-full ${fullWidth &&  "w-full"} px-7 py-4 border font-montserrat text-lg leading-none ${backgroundColor?`${textColor} ${borderColor} ${backgroundColor }`:"text-white  border-coral-red bg-coral-red"}`}>
        {label}
        {iconURL
          &&
        <img 
            src={iconURL}
            className='ml-2 rounded-full w-5 h-5'
         />
        }
    </button>
  )
}

export default Button