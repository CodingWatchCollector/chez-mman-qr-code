import React from 'react'

const Icon = ({ startColor, endColor, className }) => {
  return (
    <svg
      className={className}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill-rule='evenodd'
      fill='url(#leaf-gradient) green'
      clip-rule='evenodd'
    >
      <path d='M15.787 7.531c-5.107 2.785-12.72 9.177-15.787 15.469h2.939c.819-2.021 2.522-4.536 3.851-5.902 8.386 3.747 17.21-2.775 17.21-11.343 0-1.535-.302-3.136-.92-4.755-2.347 3.119-5.647 1.052-10.851 1.625-7.657.844-11.162 6.797-8.764 11.54 3.506-3.415 9.523-6.38 12.322-6.634z' />
      <linearGradient id='leaf-gradient' x2='1' y2='1'>
        <stop offset='0%' stop-color={startColor || 'hsl(120, 40%, 10%)'} />
        <stop offset='100%' stop-color={endColor || 'hsl(120, 40%, 50%)'} />
      </linearGradient>
    </svg>
  )
}

export default Icon
