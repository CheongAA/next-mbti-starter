import React from 'react'

const Button = ({ title, backgroundColor, textColor }: {title: string, backgroundColor: string, textColor: string}) => {
  return (
    <div
      className={`${backgroundColor} 
      ${textColor} text-lg font-semibold
      py-2 min-w-[200px] flex items-center justify-center rounded-2xl
      hover:scale-105 transition duration-200 cursor-pointer`}
    >
      <p>{title}</p>
    </div>
  )
}

export default Button