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
      fill='url(#book-gradient) black'
      clip-rule='evenodd'
    >
      <linearGradient id='book-gradient' x2='1' y2='1'>
        <stop offset='0%' stop-color={startColor || 'hsl(0, 40%, 50%)'} />
        <stop offset='100%' stop-color={endColor || 'hsl(0, 40%, 10%)'} />
      </linearGradient>
      <path d='M12 4.707c-2.938-1.83-7.416-2.567-12-2.707v17.714c3.937.12 7.795.681 10.667 1.995.846.388 1.817.388 2.667 0 2.872-1.314 6.729-1.875 10.666-1.995v-17.714c-4.584.14-9.062.877-12 2.707zm-10 13.104v-13.704c5.157.389 7.527 1.463 9 2.334v13.168c-1.525-.546-4.716-1.505-9-1.798zm20 0c-4.283.293-7.475 1.252-9 1.799v-13.171c1.453-.861 3.83-1.942 9-2.332v13.704z' />
    </svg>
  )
}

export default Icon
