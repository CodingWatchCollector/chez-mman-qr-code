import React from 'react'

const Icon = ({ startColor, endColor, className }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fillRule='evenodd'
      fill='url(#book-gradient) black'
      clipRule='evenodd'
    >
      <linearGradient id='book-gradient' x2='1' y2='1'>
        <stop offset='0%' stopColor={startColor || 'hsl(0, 40%, 10%)'} />
        <stop offset='100%' stopColor={endColor || 'hsl(0, 40%, 50%)'} />
      </linearGradient>
      <path d='M5.495 2h16.505v-2h-17c-1.657 0-3 1.343-3 3v18c0 1.657 1.343 3 3 3h17v-20h-16.505c-1.375 0-1.375-2 0-2zm.505 4h14v16h-14v-16z' />
    </svg>
  )
}

export default Icon
