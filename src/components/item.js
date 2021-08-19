import React from 'react'

const iconLocal = '&star;'
const iconVegetarian = '&#9752;'

export const Item = ({ data }) => {
  // console.log(data.vegetarian, data.title)
  return (
    <>
      {data.local ? <span className='item--local'>{iconLocal}</span> : null}
      <span className='item--title'>{data.title}</span>
      {data.vegetarian ? (
        <span className='item--vegetarian'>{iconVegetarian}</span>
      ) : null}
      <span className='item--supplement'>{data.supplement}</span>
      <span className='item--description'>{data.description}</span>
      <span className='item--price'>{data.price}</span>
    </>
  )
}
