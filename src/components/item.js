import React from 'react'
import IconLocal from '../icons/icon_local.js'
import IconLeaf from '../icons/icon_leaf.js'

export const Item = ({ data }) => {
  return (
    <>
      <div className='item-content'>
        <p className='item-head'>
          <span className='item-title'>
            {data.title}
            {data.supplement ? (
              <span
                className='item-supplement'
                aria-label={'supplement ' + data.supplement}
              >{`(+${data.supplement})`}</span>
            ) : null}
          </span>
          {data.local ? (
            <span className='item-local'>
              <span className='visually-hidden'>locale</span>
              <IconLocal />
            </span>
          ) : null}
          {data.vegetarian ? (
            <span className='item-vegetarian'>
              <span className='visually-hidden'>vegetarien</span>
              <IconLeaf />
            </span>
          ) : null}
        </p>
        <p className='item-description'>{data.description}</p>
      </div>
      {data.price ? <p className='item-price'>{data.price}</p> : null}
    </>
  )
}
