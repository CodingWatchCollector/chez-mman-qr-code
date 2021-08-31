import React from 'react'
import IconLocal from '../icons/icon_local.js'
import IconLeaf from '../icons/icon_leaf.js'

export const Item = ({ data }) => {
  return (
    <>
      <div>
        <div className='item--main-info'>
          <span className='item--title'>
            {data.title}
            {data.supplement ? (
              <span className='item--supplement'>{`(+${data.supplement})`}</span>
            ) : null}
          </span>
          {data.local ? (
            <span className='item--local'>
              <IconLocal />
            </span>
          ) : null}
          {data.vegetarian ? (
            <span className='item--vegetarian'>
              <IconLeaf />
            </span>
          ) : null}
        </div>
        <div className='item--description'>{data.description}</div>
      </div>
      <div className='item--price'>{data.price}</div>
    </>
  )
}
